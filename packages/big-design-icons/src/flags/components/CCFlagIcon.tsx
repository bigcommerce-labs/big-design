// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'CC flag',
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
      <defs>
        <path
          d="M0-360l69.4 215.8 212-80.3L156-35.6 351 80.1 125 99.8l31.1 224.6L0 160l-156.2 164.3 31.1-224.5L-351 80l195-115.7-125.5-188.9 212 80.3z"
          id="CCFlagIcon__a"
        />
        <path
          d="M0-210L54.9-75.5l144.8 10.6-111 93.8 34.7 141L0 93.3-123.4 170l34.6-141-111-93.8 145-10.6z"
          id="CCFlagIcon__b"
        />
      </defs>
      <path d="M0 0h640v480H0z" fill="green" />
      <circle cx={320} cy={240} fill="#ffe000" r={66.7} />
      <circle cx={340.8} cy={240} fill="green" r={54.9} />
      <circle cx={109.8} cy={173.3} fill="#ffe000" r={69.8} />
      <path
        d="M105 226h17.5s.7-1.6-.2-2.4c-1-.8-4.7-1-3.7-3.8 2-5.8 2.4-4 3.7-17.8a739 739 0 002-35.5h-2.6s.5 6.7-1 15.5c-1.4 8.8-1.9 9.5-3.5 16.3a63.5 63.5 0 01-3.3 11.2c-1.4 4-1.6 4.1-3.8 7.8-2.3 3.6-1.5 2.2-2.7 4.4-.7 1.1-1.4.8-1.9 1.6-.4.8-.5 2.7-.5 2.7z"
        fill="#802000"
        stroke="#7b3100"
        strokeWidth={1.5}
      />
      <path
        d="M118.3 122.5a23 23 0 01-1.2 9.2 26.5 26.5 0 00-2.3 9.8c-1.8.6-3.7-3.9-5.5-1.2 1.3 3.7 4.4 6.6 6.4 9.9.4 1 3.4 3.7 1.6 4.3-4.3-1.5-5.4-7-8-10.3a19 19 0 00-15.5-10c-2.5.1-10.4-.5-8.4 3.7 3 2 6.8 3.4 9.8 5.7 2.3.2 6.3 4 6.1 5.4-4-1.6-5.8-3.5-10-5.2-5.8-2.2-13.7-.9-17 4.8-.5 1.5-1.4 5.8.5 6.3 2.2-3.4 5.3-7.3 9.9-6.2 3.6.3-4 6.7-1.1 5.4 1-.4 3-1.8 4.6-2 1.5 0 2.3 1 3.4 1.2 2.3.3 3 1.2 2.7 1.8-.2.6-1 0-3.3.8-1.1.4-1.7 1.4-3 1.9-1.4.4-4.2.5-5.2 0-3.7-1.5-9.7-1.3-10.8 3.3 0 2-1.8-.2-2.6.7-.7 2.2-.8 4.4-4 4.2-2 2-4 4.2-6.6 5.7 1.5 3.4 7.3-3.4 7-.5-2.5 3.5 1.4 4.2 3 1.5 2.9-3 6.5-6.7 10.7-3.6 2 1.9 3.2-1 4.7-1 1 2.5 2.1.2 3.2-.5 1.7-.2 1.2 2.2 3.2.7 4.1-2.7 9.1-.4 13.1-3 4.3-2 .6 1.5-.5 2.9-1.9 3.6-.3 8.4-4.3 10.6-1.7 4.3 1.9 10-1.7 13.2-.5 2 4.6 1.8 6 2.6 2.6 0 0-5.8 2.5-6.6 3.4 2 3.2-3.8 2.5-5.6.4-4 .6-8.6 2.6-12.3 2.2-4.5 4.2 1.9 1.8 3.7-1.4 4.1-3.4 9.4-.3 13.3 1 .2 1.7 2.4 2.8 3 1.2.7 2.8-.1 3-2.1 1.6-6 .8-12.4 3-18.3 1.5-1.8 3.6-.3 4.5 1.4 3 3.5 5.1 7.8 8.7 10.7a15 15 0 017.8 7.3c0 2.6 7.4 3 5.2 0-2.1-2.7-.7-5.6 1.4-7.5 1.2.3.9-1.8 0-1-1.5-.3-1.6-3 .4-1.7 3.5 1.1-.2-2.5-1.5-2.6-2.9-1.8-6.2-3.8-7.6-7 3.8 0 7.7 2.1 11.5.9 3.1-1.6 6.2 0 7.3 2.8 2.4-.4 1.4-2.8 0-3.6 1.7-.7 3-2.2.8-3.5-1-1.4 1.5-4-1.7-3.8.1-2.5-.8-4.7-3.5-5.6-2.7-2.2-10.6 3.4-10.3-1.7-.8-2.8 3.2-.4 4.3-1.8 1.1-3-5.5-2.6-3.3-5 1.4-.8 8.1-2.1 2.9-3.1a8.3 8.3 0 01-7-1.1c-1.9 3.1-7.2-1.8-6.3 3.8-.7 2.1-5.5 7.6-6.8 3.4 1-3.3 6.8-4.3 5-8.8-.3-2.7-2.6.5-3.6.3-.6-1.7 1.6-3.8 3.2-4.2 3 2.4 3-3 6-2.5 2.1-.5-.7-1.4-1.3-1.8.6-1.5 3.9-2.3.7-3.7-2.9-2-5 2.1-7.3 2.3-2.2-2.5 2-3.7 3.2-5 .1-1-2.4-.3-1.7-1.2.7-1.1 5.2-1.2 3-3a14.7 14.7 0 00-10.2.6c-2 .6-2.5 5-4.2 4.8-.7-2 .3-5.8-2.4-6.3zm15 42.3c2.4-.4 0 3.7-1 3.6 0-1.4-3.6-1.3-1.3-2.6a7.3 7.3 0 012.3-1z"
        fill="green"
      />
      <g fill="#ffe000" transform="translate(0 80) scale(.0635)">
        <use height="100%" width="100%" x={7560} xlinkHref="#CCFlagIcon__a" y={4200} />
        <use height="100%" width="100%" x={6300} xlinkHref="#CCFlagIcon__a" y={2205} />
        <use height="100%" width="100%" x={7560} xlinkHref="#CCFlagIcon__a" y={840} />
        <use height="100%" width="100%" x={8680} xlinkHref="#CCFlagIcon__a" y={1869} />
        <use height="100%" width="100%" x={8064} xlinkHref="#CCFlagIcon__b" y={2730} />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const CCFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

CCFlagIcon.displayName = 'CCFlagIcon';
