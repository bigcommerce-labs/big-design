// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'MN flag',
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
      fill="#ffd900"
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 0h640v480H0z" fill="#da2032" />
      <path d="M213.3 0h213.4v480H213.3z" fill="#0066b3" />
      <circle cx={106.7} cy={181.8} r={40} />
      <circle cx={106.7} cy={163.6} fill="#da2032" r={43.6} />
      <circle cx={106.7} cy={170.9} r={29.1} />
      <path d="M109.7 76.4a8.7 8.7 0 00-5.2 7.5c-.2 2.5.9 5.3 1 7.7 0 4.2-4.3 5.6-4.3 11.5 0 2 1.9 4.3 1.9 9.6-.4 2.8-2 3.5-3.7 3.7a3.6 3.6 0 01-3.6-3.7 3.6 3.6 0 011-2.5 3.6 3.6 0 01.4-.3c.8-.9 2-1.2 2-3.4 0-1.1-.8-2.2-1.5-4.2s-.2-5.2 1.4-7.1c-2.6 1-4.1 3.4-5 5.6-.8 2.7 0 4.2-1.2 6.5-.7 1.4-1.5 2-2.3 3.2-1 1.4-2 4.4-2 5.9a18.2 18.2 0 0036.3 0c0-1.5-1.1-4.5-2-5.9-.9-1.2-1.7-1.8-2.4-3.2-1.2-2.3-.4-3.8-1.3-6.5-.8-2.2-2.3-4.6-4.9-5.6 1.6 2 2 5.2 1.4 7.1-.7 2-1.4 3-1.4 4.2 0 2.2 1.1 2.5 2 3.4a3.6 3.6 0 01.3.3 3.6 3.6 0 011 2.5 3.6 3.6 0 01-3.6 3.7c-2-.3-3.5-1.2-3.7-3.7 0-7 3-7.4 3-12.6 0-7.4-6.6-10.9-6.6-16.3 0-1.8.4-5 3-7.4M26.7 229H63v174.5H26.7zm123.6 0h36.4v174.5h-36.4zm-80 0H143l-36.3 21.8zm0 29H143v14.6H70.3zm0 101.9H143v14.6H70.3zm0 21.8H143l-36.3 21.8z" />
      <circle cx={106.7} cy={316.4} r={36.4} />
      <g fill="#da2032" transform="translate(-38.8 32.7) scale(.72727)">
        <circle cx={200} cy={363.5} r={10} />
        <circle cx={200} cy={416.5} r={10} />
        <path d="M200 334a29.5 29.5 0 010 59 23.5 23.5 0 000 47v6a29.5 29.5 0 010-59 23.5 23.5 0 000-47z" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const MNFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

MNFlagIcon.displayName = 'MNFlagIcon';
