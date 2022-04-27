// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'MO flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 0h640v480H0z" fill="#00785e" />
      <path d="M295 108.7l40.5 29.5L320 90.5l-15.5 47.7 40.6-29.5z" fill="#fbd116" />
      <g id="MOFlagIcon__a">
        <path
          d="M320 331.6H217.5a146.3 146.3 0 01-3.8-4H320a2.1 2.1 0 011.4 2c0 .8-.5 1.7-1.4 2zm0-31.3a13 13 0 001.2-7.6 12.4 12.4 0 00-1.2-3.8 82 82 0 01-32.5 19 81 81 0 01-23.5 3.5h-63.1a144.4 144.4 0 005.8 8h61c20 0 38.2-7.2 52.3-19.1zm-109.6-24.7a32.3 32.3 0 01-9.7 2 81 81 0 0060.8 27.5 80.9 80.9 0 0058.5-25 441 441 0 004.5-58.8 441 441 0 00-4.5-67.7c-6.6 6-19 18.7-24.8 38.3A81 81 0 00292 215a80.7 80.7 0 0013.7 45 80.7 80.7 0 01-17-49.5c0-12.4 2.8-24.2 7.8-34.7a32.5 32.5 0 01-7.5-13 80.7 80.7 0 00-10.5 40c0 18 5.9 34.7 15.9 48.1a95 95 0 00-73.4-29.4 32.6 32.6 0 016.8 8.9 95 95 0 0168.6 29.4 95 95 0 00-61-22.2 95 95 0 00-36.7 7.3 81.2 81.2 0 0082.6 52.2c-4.7.8-9.5 1.3-14.4 1.3a80.8 80.8 0 01-56.4-22.8zM320 364.4h-53.1a143.5 143.5 0 0053.1 10.1 11 11 0 001.3-5 11 11 0 00-1.3-5.1zm0-24.5h-93.6a143.8 143.8 0 007.8 6.2H320a4.6 4.6 0 001.3-3.1 4 4 0 00-1.3-3.1zm0 12.5h-76.7a143.6 143.6 0 0014.4 8H320a7.6 7.6 0 001.2-4.2 7.5 7.5 0 00-1.2-3.8z"
          fill="#fff"
        />
        <path
          d="M200.5 174.8l25.4 23.6-6.7-34-14.6 31.4 30.3-16.8zm36.9-32l34.7.6-27.7-21 10.1 33.3 11.3-32.9z"
          fill="#fbd116"
        />
      </g>
      <use height="100%" transform="matrix(-1 0 0 1 640 0)" width="100%" xlinkHref="#MOFlagIcon__a" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const MOFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

MOFlagIcon.displayName = 'MOFlagIcon';
