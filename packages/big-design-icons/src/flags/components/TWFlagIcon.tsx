// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'TW flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg viewBox="0 0 640 480" aria-hidden={ariaHidden} ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <clipPath id="TWFlagIcon__a">
        <path d="M0 0h640v480H0z" />
      </clipPath>
      <g clipPath="url(#TWFlagIcon__a)">
        <path fill="red" d="M0 0h720v480H0z" />
        <path fill="#000095" d="M0 0h360v240H0z" />
        <g fill="#fff">
          <path d="M154 126.9l-2.5 9.6 9.4 2.6-1.8-7.1zm46.9 5.1l-1.8 7.1 9.4-2.6-2.5-9.6zm-41.8-24l-5.1 5.1 1.9 6.9z" />
          <path d="M155.9 120l-1.9 6.9 5.1 5.1z" />
          <path d="M154 113.1l-6.9 6.9 6.9 6.9 1.9-6.9zm14 27.8l5.1 5.1 6.9-1.9zm18.9 5.1l9.6 2.5 2.6-9.4-7.1 1.8z" />
          <path d="M192 140.9l7.1-1.8 1.8-7.1zm-31.1-1.8l2.6 9.4 9.6-2.5-5.1-5.1zm19.1 5l6.9 1.9 5.1-5.1z" />
          <path d="M173.1 146l6.9 6.9 6.9-6.9-6.9-1.9zm-12.2-45.1l-9.4 2.6 2.5 9.6 5.1-5.1zm-1.8 31.1l1.8 7.1 7.1 1.8zm45-12l1.9-6.9-5.1-5.1z" />
          <path d="M168 99.1l-7.1 1.8-1.8 7.1zm32.9 8.9l-1.8-7.1-7.1-1.8zm5.1 18.9l6.9-6.9-6.9-6.9-1.9 6.9z" />
          <path d="M200.9 108l-8.9-8.9-12-3.2-12 3.2-8.9 8.9-3.2 12 3.2 12 8.9 8.9 12 3.2 12-3.2 8.9-8.9 3.2-12z" />
          <path d="M200.9 132l5.1-5.1-1.9-6.9zm5.1-18.9l2.5-9.6-9.4-2.6 1.8 7.1zm-6.9-12.2l-2.6-9.4-9.6 2.5 5.1 5.1zm-26-6.9l-9.6-2.5-2.6 9.4 7.1-1.8zM180 95.9l-6.9-1.9-5.1 5.1z" />
          <path d="M186.9 94l-6.9-6.9-6.9 6.9 6.9 1.9z" />
          <path d="M192 99.1l-5.1-5.1-6.9 1.9zM173.1 146l-9.6 2.5 4.5 16.6 12-12.2zm-5.1 19.1l12 44.9 12-44.9-12-12.2zm-7.1-26l-9.4-2.6-4.4 16.4 16.4-4.4z" />
          <path d="M147.1 152.9l-12 45.1 32.9-32.9-4.5-16.6zm-12-20.9L102 165.1l45.1-12.2 4.4-16.4z" />
          <path d="M154 126.9l-6.9-6.9-12 12 16.4 4.5zm0-13.8l-2.5-9.6-16.4 4.5 12 12z" />
          <path d="M135.1 108L90 120l45.1 12 12-12zm90 24l-16.6 4.5 4.4 16.4 45.1 12.2z" />
          <path d="M199.1 139.1l-2.6 9.4 16.4 4.4-4.4-16.4zm-12.2 6.9l-6.9 6.9 12 12.2 4.5-16.6zm19.1-19.1l2.5 9.6 16.6-4.5-12.2-12z" />
          <path d="M192 165.1l33.1 32.9-12.2-45.1-16.4-4.4zm7.1-64.2l9.4 2.6 4.4-16.4-16.4 4.4z" />
          <path d="M225.1 108L258 75.1l-45.1 12-4.4 16.4zm-12.2-20.9L225.1 42 192 75.1l4.5 16.4zm12.2 44.9l44.9-12-44.9-12-12.2 12z" />
          <path d="M206 113.1l6.9 6.9 12.2-12-16.6-4.5zm-38-38L135.1 42l12 45.1 16.4 4.4z" />
          <path d="M160.9 100.9l2.6-9.4-16.4-4.4 4.4 16.4z" />
          <path d="M147.1 87.1l-45.1-12 33.1 32.9 16.4-4.5zm39.8 6.9l9.6-2.5-4.5-16.4-12 12z" />
          <path d="M192 75.1L180 30l-12 45.1 12 12z" />
          <path d="M173.1 94l6.9-6.9-12-12-4.5 16.4z" />
        </g>
        <circle cx={180} cy={120} r={51.1} fill="#000095" />
        <circle cx={180} cy={120} r={45.1} fill="#fff" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const TWFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

TWFlagIcon.displayName = 'TWFlagIcon';
