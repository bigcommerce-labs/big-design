// **********************************
// Auto-generated file, do NOT modify
// **********************************

'use client';

import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'CK flag',
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
      <path d="M0 0h640v480H0z" fill="#006" />
      <path
        d="M471.6 213l5.2-16.7-14-10.6 17.6-.2 6-16.5 5.6 16.5 17.7.5-14.1 10.5 5 16.7-14.5-10m27.1 13l10.4-13.9-9.7-14.8 16.7 5.8 11-13.5v17.6l16.4 6.4-16.8 5-.8 17.5-10.2-14.4m-98.4 15l-.7-17.5-16.8-5.2L431 198v-17.4l10.9 13.5 16.8-5.6-9.8 14.7 10.3 14-17-4.5m-39.6 40.9l-7.4-15.8-17.4 1.8 12.8-12.3L384 211l15.2 8.2 13.3-11.8-3.4 17.4 14.9 8.9-17.3 2.5M389 291.8l-13.3-11.1-15 9.2 6.4-16.7-12.9-11.6 17.3.7 7-16.4 4.3 17.2 17.2 1.5-14.6 9.8m3.2 60.4l-16.5-4.8-10.1 14.5-.7-17.9-16.4-5.5 16.1-6.2v-18l10.7 14.1 16.4-5.6-9.6 15m29.5 50.8l-17 2.4-3.5 17.4-7.8-16-17.1 1.6 12.2-12.3-7.1-16.4 15.3 8.5 12.8-11.8L393 362m45 38l-15.1 8.2 2.6 17.6-12.7-12.4-15.6 7.6 7.3-15.9-12.3-12.9 17.3 2.6 8-15.5 3.4 17.4m53.8 9l-8.3 15.3 11.7 13.2-17.4-3.3-8.9 15-2.4-17.3-17.2-4 15.8-7.4-1.7-17.5 12.2 12.8m57.4-13.1l-.5 17.4 16.3 6.4-17 5-1.2 17.5-10-14.3-17 4.4 10.8-13.9-9.4-14.7 16.6 5.7M559 209.8l12 12.6 15.9-7.4-8.3 15.8 11.5 13.1-17-2.8-9 15.5L562 239l-17-3.5 15.7-8m34.2 21l5.5 16.6 17.5.3-14.2 10.7 4.7 16.8-14.1-10-14.6 10.1 5.4-16.8-13.8-10.6 17.6-.4m19.5 33.2l-2 17.4 15.7 7.7-17.3 3.6-2.7 17.3-8.7-15.1-17.4 2.9 12-13-8.1-15.5 16 7.2m3 39.8l-7.8 15.6L603 379l-17.4-2.7-8.4 15.3-3-17.3-17.4-3.3 15.6-8-2.3-17.4 12.6 12.3m-9.8 39.1l-14.7 9.2 3.8 17.3-13.5-11.5-15 8.6 6.3-16.3-13.1-12.1 17.4 1.5 7-16 4.4 17.2"
        fill="#fff"
        fillRule="evenodd"
      />
      <path d="M0 0h320v240H0z" fill="#006" />
      <path
        d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
        fill="#fff"
      />
      <path
        d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
        fill="#c8102e"
      />
      <path d="M120.5 0v240h80V0zM0 80v80h320V80z" fill="#fff" />
      <path d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" fill="#c8102e" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const CKFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

CKFlagIcon.displayName = 'CKFlagIcon';
