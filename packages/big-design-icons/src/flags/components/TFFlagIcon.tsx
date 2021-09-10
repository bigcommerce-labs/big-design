// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'TF flag', theme, ...props }) => {
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
      <defs>
        <path id="TFFlagIcon__a" fill="#fff" d="M0-21l12.3 38L-20-6.5h40L-12.3 17z" />
      </defs>
      <path fill="#002395" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h292.8v196.8H0z" />
      <path fill="#002395" d="M0 0h96v192H0z" />
      <path fill="#ed2939" d="M192 0h96v192h-96z" />
      <path
        fill="#fff"
        d="M426 219.6l15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
      />
      <use width="100%" height="100%" x={416} y={362} transform="scale(1.2)" xlinkHref="#TFFlagIcon__a" />
      <use width="100%" height="100%" x={371} y={328} transform="scale(1.2)" xlinkHref="#TFFlagIcon__a" />
      <use width="100%" height="100%" x={461} y={328} transform="scale(1.2)" xlinkHref="#TFFlagIcon__a" />
      <use width="100%" height="100%" x={333} y={227} transform="scale(1.2)" xlinkHref="#TFFlagIcon__a" />
      <use width="100%" height="100%" x={499} y={227} transform="scale(1.2)" xlinkHref="#TFFlagIcon__a" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const TFFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

TFFlagIcon.displayName = 'TFFlagIcon';
