// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'KR flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="KRFlagIcon__a">
          <path fillOpacity={0.7} d="M-95.8-.4h682.7v512H-95.8z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#KRFlagIcon__a)" transform="translate(89.8 .4) scale(.9375)">
        <path fill="#fff" d="M610.6 511.6h-730.2V-.4h730.2z" />
        <path fill="#fff" d="M251.9 256a112.5 112.5 0 11-225 0 112.5 112.5 0 01225 0z" />
        <path
          fill="#c70000"
          d="M393 262.6c0 81-65 146.8-145.3 146.8s-145.2-65.8-145.2-146.8 65-146.9 145.3-146.9S393 181.6 393 262.6z"
        />
        <path d="M-49.4 126.4l83.6-96.7 19.9 17.1-83.7 96.8zm27.4 23.7l83.6-96.7 19.9 17-83.7 96.9z" />
        <path d="M-49.4 126.4l83.6-96.7 19.9 17.1-83.7 96.8z" />
        <path d="M-49.4 126.4l83.6-96.7 19.9 17.1-83.7 96.8zm55.4 48l83.6-96.9 19.9 17.2-83.7 96.8z" />
        <path d="M-49.4 126.4l83.6-96.7 19.9 17.1-83.7 96.8z" />
        <path d="M-49.4 126.4l83.6-96.7 19.9 17.1-83.7 96.8zm508.8-96.8l83 97.4-20 17-83-97.4zm-55.7 47.5l83 97.4-20 17-83-97.4z" />
        <path fill="#fff" d="M417.6 133.2L496 65.4l14.7 17-84 75.4-9.3-24.6z" />
        <path d="M514.2 372l-80.4 95.8-19.7-16.4 80.4-95.8zM431.8 53.1l83 97.4-19.9 17L412 70zm109.7 341.6L461 490.5l-19.8-16.4 80.5-95.8zm-55.1-45.8L406 444.7l-19.7-16.4 80.4-95.8z" />
        <path
          fill="#3d5897"
          d="M104.6 236.7c4.6 37 11.3 78.2 68.2 82.4 21.3 1.3 62.8-5 77-63.2 18.8-55.8 75-71.8 113.3-41.6C385 228.5 391 251 392.4 268c-1.7 54-32.9 101-72.8 122-46 27.3-109.6 27.9-165.3-13.5-25.1-23.5-60.2-67-49.7-139.8z"
        />
        <path fill="#fff" d="M436 370.6l78.6 67.6-14.6 17-87.1-71.8 23-12.8z" />
        <path d="M-1.9 357.2l83 97.3-20 17-83-97.3z" />
        <path fill="#fff" d="M-16.2 437.3l78.6-67.9 14.7 17-84 75.5-9.3-24.7z" />
        <path d="M25.7 333.7l83 97.3-20 17-83-97.3zM-30 381.2l83 97.3-20 17-83-97.3z" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const KRFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

KRFlagIcon.displayName = 'KRFlagIcon';
