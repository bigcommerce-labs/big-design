// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { createStyledFlagIcon, FlagIconProps, PrivateIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'TJ flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useId();
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
      <path d="M0 0h640v480H0z" fill="#060" />
      <path d="M0 0h640v342.9H0z" fill="#fff" />
      <path d="M0 0h640v137.1H0z" fill="#c00" />
      <path
        d="M300.8 233.6a8.6 8.6 0 0 1 16 4V272h6.4v-34.3a8.6 8.6 0 0 1 16-4 20.2 20.2 0 1 0-38.4 0"
        fill="#f8c300"
      />
      <path
        d="M305.4 224.7a13.7 13.7 0 0 1 14.6 6.5 13.7 13.7 0 0 1 14.6-6.5 14.7 14.7 0 0 0-29.2 0"
        fill="#fff"
      />
      <path
        d="M316.8 258.3a26 26 0 0 1-43.8 16.6 27 27 0 0 1-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"
        fill="#f8c300"
        id="TJFlagIcon__a"
      />
      <use
        fill="#f8c300"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        width="100%"
        xlinkHref="#TJFlagIcon__a"
      />
      <path
        d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 0 1 6.1 8.1c5.5-.7 8.2 1 8.2 1z"
        fill="#f8c300"
        id="TJFlagIcon__b"
      />
      <use
        fill="#f8c300"
        height="100%"
        transform="rotate(9.4 320 551.3)"
        width="100%"
        xlinkHref="#TJFlagIcon__b"
      />
      <use
        fill="#f8c300"
        height="100%"
        transform="rotate(18.7 320 551.3)"
        width="100%"
        xlinkHref="#TJFlagIcon__b"
      />
      <path
        d="M253.5 327.8a233.1 233.1 0 0 1 133 0"
        fill="none"
        stroke="#f8c300"
        strokeWidth={11}
      />
      <g fill="#f8c300" transform="translate(320 164.6)scale(.68571)">
        <path
          d="m301930 415571-790463-574305h977066l-790463 574305L0-513674z"
          id="TJFlagIcon__c"
          transform="scale(.00005)"
        />
      </g>
      <g fill="#f8c300" id="TJFlagIcon__d" transform="translate(320 260.6)scale(.68571)">
        <use
          height="100%"
          transform="translate(-70 -121.2)"
          width="100%"
          xlinkHref="#TJFlagIcon__c"
        />
        <use
          height="100%"
          transform="translate(-121.2 -70)"
          width="100%"
          xlinkHref="#TJFlagIcon__c"
        />
        <use height="100%" transform="translate(-140)" width="100%" xlinkHref="#TJFlagIcon__c" />
      </g>
      <use
        fill="#f8c300"
        height="100%"
        transform="matrix(-1 0 0 1 640 0)"
        width="100%"
        xlinkHref="#TJFlagIcon__d"
      />
    </svg>
  );
};
const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const TJFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));
TJFlagIcon.displayName = 'TJFlagIcon';
