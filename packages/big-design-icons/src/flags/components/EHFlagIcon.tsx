// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'EH flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg aria-hidden={ariaHidden} aria-labelledby={titleId} ref={svgRef} viewBox="0 0 640 480" {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="EHFlagIcon__a">
          <path d="M-158.7 0H524v512h-682.7z" fillOpacity={0.7} />
        </clipPath>
      </defs>
      <g clipPath="url(#EHFlagIcon__a)" fillRule="evenodd" transform="translate(148.8) scale(.94)">
        <path d="M-180 0H844v256H-180z" />
        <path d="M-180 256H844v256H-180z" fill="#107b00" />
        <path d="M-180 169.3H844v176.1H-180z" fill="#fff" />
        <path
          d="M310 195.6c-45.2-19.5-84.1 20.6-84 58 0 39.2 38 81 86 62.5-34-10-48-35.3-48-60.7-.3-25.2 15.8-54.6 46-59.9z"
          fill="#f0f"
        />
        <path d="M363.1 294.2l-25.8-18.9-26 19 10-30.5-26-18.8h32l9.9-30.5 9.8 30.4h32.1l-25.9 18.8" fill="#ff1800" />
        <path
          d="M314.3 315.6a65.2 65.2 0 01-89.2-59.4 65 65 0 0189.5-60.9 60.6 60.6 0 00-51.2 59.2 61.3 61.3 0 0051 61.1zM-180 0l348.6 256.6L-180 512V0z"
          fill="red"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const EHFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

EHFlagIcon.displayName = 'EHFlagIcon';
