import React from 'react';

interface Props {
  legend?: React.ReactChild;
  description?: React.ReactChild;
}

import { StyledFieldset, StyledFieldsetDescription, StyledFieldsetLegend, StyledInfoContainer } from './styled';

export type FieldsetProps = Props & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

export class Fieldset extends React.PureComponent<FieldsetProps> {
  static Legend = StyledFieldsetLegend;
  static Description = StyledFieldsetDescription;

  render() {
    const { legend, description, children, ...props } = this.props;

    return (
      <StyledFieldset {...props}>
        <StyledInfoContainer>
          {this.renderLegend()}
          {this.renderDescription()}
        </StyledInfoContainer>
        {children}
      </StyledFieldset>
    );
  }

  private renderLegend() {
    const { legend } = this.props;

    if (typeof legend === 'string') {
      return <Fieldset.Legend>{legend}</Fieldset.Legend>;
    }

    if (React.isValidElement(legend) && legend.type === Fieldset.Legend) {
      return legend;
    }

    return null;
  }

  private renderDescription() {
    const { description } = this.props;

    if (typeof description === 'string') {
      return <Fieldset.Description>{description}</Fieldset.Description>;
    }

    if (React.isValidElement(description) && description.type === Fieldset.Description) {
      return description;
    }

    return null;
  }
}
