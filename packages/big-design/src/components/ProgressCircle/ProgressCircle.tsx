import React from 'react';

import { CIRCLE_DIMENSIONS } from './constants';
import {
  StyledCircle,
  StyledCircleFiller,
  StyledErrorIcon,
  StyledProgressCircle,
  StyledSuccessIcon,
  StyledText,
} from './styled';

export interface ProgressCircleProps {
  error?: boolean;
  percent?: number;
  size?: 'xSmall' | 'small' | 'medium' | 'large';
}

export class ProgressCircle extends React.PureComponent<ProgressCircleProps> {
  static readonly defaultProps: Partial<ProgressCircleProps> = {
    size: 'medium',
  };

  render() {
    const { error, percent, size } = this.props;

    if (error) {
      return (
        <StyledErrorIcon
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percent ? percent : 0}
          aria-valuetext="Error"
          role="progressbar"
          size={this.getDimensions()}
        />
      );
    }

    if (typeof percent === 'number') {
      if (percent === 100) {
        return (
          <StyledSuccessIcon
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={100}
            role="progressbar"
            size={this.getDimensions()}
          />
        );
      } else {
        return (
          <StyledProgressCircle
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={percent}
            role="progressbar"
            size={size}
          >
            <StyledCircle size={size} />
            <StyledCircleFiller percent={percent} size={size} />
            {(size === 'large' || size === 'medium') && (
              <StyledText size={size}>{percent ? Math.floor(percent) : 0}%</StyledText>
            )}
          </StyledProgressCircle>
        );
      }
    }

    return (
      <StyledProgressCircle role="progressbar" size={size}>
        <StyledCircle size={size} />
        <StyledCircleFiller size={size} />
      </StyledProgressCircle>
    );
  }

  getDimensions() {
    const { size } = this.props;

    return size ? CIRCLE_DIMENSIONS[size] : CIRCLE_DIMENSIONS.medium;
  }
}
