// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'TV flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg aria-hidden={ariaHidden} aria-labelledby={titleId} ref={svgRef} viewBox="0 0 640 480" {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 0h640v480H0z" fill="#009fca" />
      <path
        d="M593.3 122.7H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zm-69.2 196.8h27.6l-22.3 15.2 8.5 24.7-22.3-15.3-22.3 15.3 8.6-24.7-22.3-15.2H507l8.5-24.7zm69.2-44.6H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zM295.8 417.7h27.6L301 432.8l8.6 24.6-22.3-15.2-22.3 15.2 8.6-24.6-22.4-15.3h27.6l8.5-24.6zm62.6-76.5h-27.6l22.3-15.3-8.5-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.3 15.3h-27.5l-8.5 24.6zm81.3-112.5H412l22.3-15.2-8.5-24.7 22.3 15.3 22.3-15.3-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm68.3-23.3h-27.6l22.4-15.3-8.6-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.4 15.3H525l-8.5 24.6zM439.7 400H412l22.3-15.2L426 360l22.3 15.2 22.3-15.2-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm-81.3 19.9h-27.6l22.3-15.2-8.5-24.7 22.3 15.2 22.3-15.2-8.6 24.6L403 420h-27.5l-8.5 24.7z"
        fill="#fff40d"
        fillRule="evenodd"
      />
      <path d="M0 0h320v240H0z" fill="#012169" />
      <path
        d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
        fill="#FFF"
      />
      <path
        d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
        fill="#C8102E"
      />
      <path d="M120.5 0v240h80V0zM0 80v80h320V80z" fill="#FFF" />
      <path d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" fill="#C8102E" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const TVFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

TVFlagIcon.displayName = 'TVFlagIcon';
