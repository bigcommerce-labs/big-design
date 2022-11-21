// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'NC flag',
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
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 0h640v480H0z" fill="#009543" />
      <path d="M0 0h640v320H0z" fill="#ed4135" />
      <path d="M0 0h640v160H0z" fill="#0035ad" />
      <circle cx={240} cy={240} fill="#fae600" r={157.3} stroke="#000" strokeWidth={5.3} />
      <path d="M213.3 263.5h53.3M213.3 224h53.3M240 83.2V352" stroke="#000" strokeWidth={6.4} />
      <path d="M176.6 384.4c64.2 26.3 124.4 1.7 124.4 1.7s-22.7-24.6-34.3-34.2c-11.4-9.4-44.8-9-56.2 0a488.7 488.7 0 00-33.9 32.5z" />
      <ellipse cx={240} cy={312.5} rx={17.6} ry={25.6} />
      <ellipse cx={240} cy={243.7} rx={21.3} ry={13.5} />
      <circle cx={240} cy={181.3} r={21.3} />
      <path d="M265.6 101.9s1.8 3-2 10c-18.6 33.5-37.3 34.2-40.8 37.1-4 3.2-5.6 3-5.6 3 .3-2.9.5-14.6.7-15.7 2.9-15.7 26.5-15.5 45-31.5 2.9-2.5 2.7-3 2.7-3zm-62.4 72s4.3 12 4.8 24c1 19.2 19.4 19.7 32 19.7v-10.7c-9.5 0-17.7-1.4-24.5-15.4a122.7 122.7 0 00-12.3-17.6zm-.5 154.6s6.7-8.3 14.6-27.7c4-10.1 13.8-16 22.7-16v-15c-20.3 0-30 7.5-31 18.6a329 329 0 01-6.3 40.1z" />
      <path d="M276.8 173.9s-4.3 12-4.8 24c-1 19.2-19.4 19.7-32 19.7V207c9.5 0 17.7-1.4 24.5-15.5 3.6-6.2 7.7-12.1 12.3-17.6zm.5 154.7s-6.7-8.4-14.6-27.8c-4-10.1-13.8-16-22.7-16V270c20.3 0 30 7.5 31 18.6a329 329 0 006.3 40z" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const NCFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

NCFlagIcon.displayName = 'NCFlagIcon';
