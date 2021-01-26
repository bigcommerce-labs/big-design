// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'NZ flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="NZFlagIcon__c">
          <path d="M0 0h600v300H0z" />
        </clipPath>
        <clipPath id="NZFlagIcon__d">
          <path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
        </clipPath>
        <g id="NZFlagIcon__b">
          <g id="NZFlagIcon__a">
            <path d="M0 0v.5L1 0z" transform="translate(0 -.3)" />
            <path d="M0 0v-.5L1 0z" transform="rotate(-36 .5 -.2)" />
          </g>
          <use transform="scale(-1 1)" xlinkHref="#NZFlagIcon__a" />
          <use transform="rotate(72 0 0)" xlinkHref="#NZFlagIcon__a" />
          <use transform="rotate(-72 0 0)" xlinkHref="#NZFlagIcon__a" />
          <use transform="scale(-1 1) rotate(72)" xlinkHref="#NZFlagIcon__a" />
        </g>
      </defs>
      <path fill="#00247d" fillRule="evenodd" d="M0 0h640v480H0z" />
      <g transform="translate(-93 36.1) scale(.66825)">
        <use
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(45.4 0 0 45.4 900 120)"
          xlinkHref="#NZFlagIcon__b"
        />
        <use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(30 0 0 30 900 120)"
          xlinkHref="#NZFlagIcon__b"
        />
      </g>
      <g transform="rotate(82 534.2 125) scale(.66825)">
        <use
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 519 -457.7) scale(40.4)"
          xlinkHref="#NZFlagIcon__b"
        />
        <use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 519 -457.7) scale(25)"
          xlinkHref="#NZFlagIcon__b"
        />
      </g>
      <g transform="rotate(82 534.2 125) scale(.66825)">
        <use
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 668.6 -327.7) scale(45.4)"
          xlinkHref="#NZFlagIcon__b"
        />
        <use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 668.6 -327.7) scale(30)"
          xlinkHref="#NZFlagIcon__b"
        />
      </g>
      <g transform="translate(-93 36.1) scale(.66825)">
        <use
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(50.4 0 0 50.4 900 480)"
          xlinkHref="#NZFlagIcon__b"
        />
        <use
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(35 0 0 35 900 480)"
          xlinkHref="#NZFlagIcon__b"
        />
      </g>
      <path
        stroke="#fff"
        strokeWidth={60}
        d="M0 0l600 300M0 300L600 0"
        clipPath="url(#NZFlagIcon__c)"
        transform="scale(.60681 .73139)"
      />
      <path
        stroke="#cc142b"
        strokeWidth={40}
        d="M0 0l600 300M0 300L600 0"
        clipPath="url(#NZFlagIcon__d)"
        transform="scale(.60681 .73139)"
      />
      <path
        fill="#fff"
        d="M151.7 0v79.4H0V140h151.7v79.4h60.7v-79.3H364V79.4H212.4V0z"
        clipPath="url(#NZFlagIcon__c)"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          isolation: 'auto',
          mixBlendMode: 'normal',
        }}
      />
      <path
        fill="#cc142b"
        d="M163.8 0v91.5H0v36.4h163.8v91.5h36.4V128h163.9V91.5H200.2V0z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          isolation: 'auto',
          mixBlendMode: 'normal',
        }}
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const NZFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

NZFlagIcon.displayName = 'NZFlagIcon';
