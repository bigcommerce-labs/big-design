// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { createStyledFlagIcon, FlagIconProps, PrivateIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'CN flag',
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
        <path d="M-.6.8 0-1 .6.8-1-.3h2z" fill="#ff0" id="CNFlagIcon__a" />
      </defs>
      <path d="M0 0h640v480H0z" fill="#ee1c25" />
      <use
        height={20}
        transform="matrix(71.9991 0 0 72 120 120)"
        width={30}
        xlinkHref="#CNFlagIcon__a"
      />
      <use
        height={20}
        transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
        width={30}
        xlinkHref="#CNFlagIcon__a"
      />
      <use
        height={20}
        transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
        width={30}
        xlinkHref="#CNFlagIcon__a"
      />
      <use
        height={20}
        transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
        width={30}
        xlinkHref="#CNFlagIcon__a"
      />
      <use
        height={20}
        transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
        width={30}
        xlinkHref="#CNFlagIcon__a"
      />
    </svg>
  );
};
const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const CNFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));
CNFlagIcon.displayName = 'CNFlagIcon';
