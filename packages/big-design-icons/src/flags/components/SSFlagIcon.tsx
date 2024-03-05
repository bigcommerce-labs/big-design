// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { createStyledFlagIcon, FlagIconProps, PrivateIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'SS flag',
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
      <path d="M0 336h640v144H0z" fill="#078930" />
      <path d="M0 144h640v192H0z" fill="#fff" />
      <path d="M0 0h640v144H0z" fill="#000001" />
      <path d="M0 168h640v144H0z" fill="#da121a" />
      <path d="m0 0 415.7 240L0 480z" fill="#0f47af" />
      <path d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z" fill="#fcdd09" />
    </svg>
  );
};
const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const SSFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));
SSFlagIcon.displayName = 'SSFlagIcon';
