// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { createStyledFlagIcon, FlagIconProps, PrivateIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'UY flag',
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
      <path d="M0 0h640v480H0z" fill="#fff" />
      <path
        d="M266 53.3h374v53.4H266zm0 106.7h374v53.3H266zM0 266.7h640V320H0zm0 106.6h640v53.4H0z"
        fill="#0038a8"
      />
      <g
        fill="#fcd116"
        stroke="#000"
        strokeMiterlimit={20}
        strokeWidth={0.6}
        transform="translate(133.3 133.3)scale(2.93333)"
      >
        <g id="UYFlagIcon__c">
          <g id="UYFlagIcon__b">
            <g id="UYFlagIcon__a">
              <path
                d="m-2 8.9 3 4.5c-12.4 9-4.9 14.2-13.6 17 5.4-5.2-.9-5.7 3.7-16.8"
                strokeLinecap="square"
              />
              <path d="M-4.2 10.2c-6.8 11.2-2.4 17.4-8.4 20.3" fill="none" />
              <path d="M0 0h6L0 33-6 0h6v33" />
            </g>
            <use height="100%" transform="rotate(45)" width="100%" xlinkHref="#UYFlagIcon__a" />
          </g>
          <use height="100%" transform="rotate(90)" width="100%" xlinkHref="#UYFlagIcon__b" />
        </g>
        <use height="100%" transform="scale(-1)" width="100%" xlinkHref="#UYFlagIcon__c" />
        <circle r={11} />
      </g>
      <g transform="translate(133.3 133.3)scale(.29333)">
        <g id="UYFlagIcon__d">
          <path d="M81-44c-7 8-11-6-36-6S16-35 12-38s21-21 29-22 31 7 40 16m-29 9c7 6 1 19-6 19S26-28 32-36" />
          <path d="M19-26c1-12 11-14 27-14s23 12 29 15c-7 0-13-10-29-10s-16 0-27 10m3 2c4-6 9 6 20 6s17-3 24-8-10 12-21 12-26-6-23-10" />
          <path d="M56-17c13-7 5-17 0-19 2 2 10 12 0 19M0 43c6 0 8-2 16-2s27 11 38 7c-23 9-14 3-54 3h-5m63 6c-4-7-3-5-11-16 8 6 10 9 11 16M0 67c25 0 21-5 54-19-24 3-29 11-54 11h-5m5-29c7 0 9-5 17-5s19 3 24 7c1 1-3-8-11-9S25 9 16 7c0 4 3 3 4 9 0 5-9 5-11 0 2 8-4 8-9 8" />
        </g>
        <use height="100%" transform="scale(-1 1)" width="100%" xlinkHref="#UYFlagIcon__d" />
        <path d="M0 76c-5 0-18 3 0 3s5-3 0-3" />
      </g>
    </svg>
  );
};
const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const UYFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));
UYFlagIcon.displayName = 'UYFlagIcon';
