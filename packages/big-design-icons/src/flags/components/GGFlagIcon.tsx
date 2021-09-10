// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'GG flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#e8112d" d="M256 0h128v480H256z" />
      <path fill="#e8112d" d="M0 176h640v128H0z" />
      <path id="GGFlagIcon__a" fill="#f9dd16" d="M110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z" />
      <use width={36} height={24} transform="rotate(90 320 240)" xlinkHref="#GGFlagIcon__a" />
      <use width={36} height={24} transform="rotate(-90 320 240)" xlinkHref="#GGFlagIcon__a" />
      <use width={36} height={24} transform="rotate(180 320 240)" xlinkHref="#GGFlagIcon__a" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const GGFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

GGFlagIcon.displayName = 'GGFlagIcon';
