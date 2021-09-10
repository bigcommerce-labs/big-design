// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'BM flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="#cf142b" d="M0 0h640v480H0z" />
      <path fill="#00247d" d="M0 0h320v160H0z" />
      <path fill="#fff" d="M0 0v17.9L284.2 160H320v-17.9L35.8 0H0zm320 0v17.9L35.8 160H0v-17.9L284.2 0H320z" />
      <path fill="#fff" d="M133.3 0v160h53.4V0h-53.4zM0 53.3v53.4h320V53.3H0z" />
      <path
        fill="#cf142b"
        d="M0 64v32h320V64H0zM144 0v160h32V0h-32zM0 160l106.7-53.3h23.8L23.8 160H0zM0 0l106.7 53.3H82.8L0 12V0zm189.5 53.3L296 0h24L213.3 53.3h-23.8zM320 160l-106.7-53.3h23.9L320 148v12z"
      />
      <path fill="#fff" d="M553.8 148.3v135.5c0 36.2-72.3 48-72.3 48S409 320 409 283.7V148.3h144.7z" />
      <path
        fill="#2f8f22"
        d="M553.8 283.8c0 36.2-72.3 48-72.3 48S409 320 409 283.7c0 0 0-3 1.5-4.6 0 0-.8 6 3.8 10.6 0 0-3.6-6.5 0-12.8 0 0-1.4 8.2 3.7 12.8 0 0-2.8-6.6.3-14 0 0-1.5 12 4 14.5 0 0 1.5-7-.7-11.4 0 0 3.8 1.5 3.6 11.6 0 0 1.2-1.5 1.5-8.8 0 0 .2 8.4 3 10.3 0 0 1-.9-.3-4.6s.5-5.1.8-5c0 0-.6 4.1 2.9 7.3 0 0-1.5-6.6.6-7.5 0 0-.5 5.6 4 6.8 0 0 .3-1.6-.7-3.4 0 0-.8-2.1-.2-3.8 0 0 1.4 5 3.3 5.9 0 0-1.1-3 0-5.9 0 0 .2 4.2 4 6 0 0-2.5-3.3-1.6-6.9l24.1 1.2 12.5.6 37.5-2.6 6.4-5.6s2.6 3.5-1.5 9.1c0 0 4-.7 5.3-7 0 0 1.6 3.5-.6 7.4 0 0 4.4-4.5 5-9.5 0 0 1.8 4.9-2.4 10.1 0 0 3.7-1.3 5.3-6.8 0 0 1.3 3.3-2.3 8 0 0 6.8-3.5 6.6-11 0 0 2.8 4.1-.4 9.8 0 0 3.4-3.1 3.8-7.8 0 0 1.9 2.1-.2 7.9 0 0 4.2-4 4.9-8.3 0 0 .9 4-2.7 9 0 0 2.4-.6 4.8-5.5 0 0 .6 2-1.5 5.5 0 0 2.3-.4 3.8-4.9 0 0 .3 2.7-.4 5 0 0 1.8-1.1 2.2-6.1 0 0 1 1.6 1 3.7v.7z"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M516.6 205.4s-2.5.5-5.8-.5c-3.2-1-4.5-.6-5.5 0 0 0 1.3-2.6-1.9-4.7 0 0 1 2.7-.4 3.9 0 0-.6.6-1.4-.3 0 0-1.1-1.2-2.3-2 0 0 2.7-1 2.2-3.8-.5-2.7-2-3-2.7-3.4a5 5 0 000 2s-3-1.6 1-3.9 3.3-3.7 2.6-4.9a11 11 0 00-3-3s.8 1.3.6 2.4c-.1 1-2 1.7-1.6-.1.4-2 0-1.6 0-3.6 0 0 3.5 1.2 5-2.3 0 0 1.3-3.6-3.2-5.4 0 0 1.1 1.5.6 2.6 0 0-1 1.8-2.1.4s-1.9-1.8-1.8-3.5c0 0 4.1.6 3-3.9 0 0-.7 3-6-1 0 0 3.5-3.6 2.1-6.4 0 0-.4-1.3-4.1-.6 0 0 3.2-2 1.9-3.8 0 0-.7-1.1-3.8.4 0 0 1.2-2-1.8-4.2 0 0-2 1-3 2 0 0-2-2.6-3.3-3.6 0 0-2.4.9-3 3.6 0 0-1.1-1.3-3.6-2 0 0-1.2 2.3.4 4.2 0 0-1.2 0-3.3-1 0 0-2.4-1-2 1 .3 2 .5 2.5 1 3.5 0 0-5.4-1.3-5.2 1.7a7.4 7.4 0 002.6 5.2s-3 4-5.6 1c0 0-1 1 1 3.5 0 0 2 2.1.3 3.5 0 0-2.1 1.7-3.1-1.6 0 0-3.5 3.4.6 6 0 0 2.6 1.5 5.3-.8 0 0-.9 6.6-3.4 5.3 0 0-1.5-1 1.2-2.4 0 0-4-.5-4.6 3.3 0 0-.5 3 3 4.2 0 0 2.6 1-.1 3 0 0-2 1.5-.7 3.7 0 0 1.5 2.4-2.4 2.7 0 0-2 0-2.8-.3 0 0-.9 1.6-.3 3.4 0 0-2-1.5-6.3.1-4.4 1.6-4.1.5-4.4 1l-1.3 2s2.3 3 2.4 2.8l-.5 3.3 1.2.5 9-4 9.3-4.8 7.4.4 4.7 1.1 6.1.5 4.5-2.4h6.4l7 3.5 8 4.8 4.2.8 3.2-.2v-6.5l-1.5-2.4z"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M443.5 213s3.5 1.8 5-.3c0 0 1.9-3.7-2.3-5 0 0 2.3-2.7-.2-5.2 0 0-1.3-1.4-3.5-.4 0 0-1-2-3.1-1.9 0 0-2 0-2.6 2.1 0 0-2.6-1-4 .5 0 0-2.5 2.7.9 4.9l2.4.2 2.4-1.1 2.7.7s-.7 2.7 2.3 5.5z"
      />
      <path
        fill="#64b4d1"
        stroke="#000"
        strokeWidth={0.4}
        d="M521.8 206.6a5.6 5.6 0 015.8 3.2c2.2 5.2-2.5 8-2.5 8 .3 1.1.4 2.7.4 2.7 6.6.8 5.4 8.2 5.4 8.2l-2.2-1.8c-3.8-1.5-7.8 1.8-10.6 7.2-2.8 5.5-1.5 8-1 14.5s11 10.4 11 10.4l-8.2 21c-3.2 8.3-10 4.9-12 3.1-1.9-1.7-2.4-.7-3.3 0-1 .8 4.4 5-5.5 9-9.8 4-11.5 7-13.2 8-1.6 1-8.4.4-9-.5-.8-.8-.4-.8-3-2.4-2.5-1.5-6.8-3-11.5-5.2-4.7-2.3-4.6-5.2-4.5-5.8 0-.6 1.6-5.5-3.9-1.6s-10.2-1.9-10.2-1.9c-1-1.4-5.7-13.7-5.7-13.7a77.5 77.5 0 00-3.6-10s-.3.6 3.8-1.7c4-2.3 5.9-6.2 7.3-10 1.4-3.9 0-10.5-.5-11.8s-3.5-7.4-7.3-8.7c-3.7-1.3-6.3 2-6.3 2s-1.1-7.5 5.5-8.3c0 0 0-1.6.4-2.7 0 0-4.7-2.8-2.5-8 0 0 1.5-3.6 5.7-3.2l-1 2s-1 10.6 14.5 3.5c15.5-7.2 15-8.5 24-4l6.4-.1s9.3-4.4 12.3-2.5c3 1.9 13.7 7.9 13.7 7.9s10.4 3.9 12.5-3.3l-1.2-3.5z"
      />
      <path
        fill="#fff"
        stroke="#00247d"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M475 252.7s-.5-3.3-1-5.4c0 0-1.2-3.3.8-5.7l2.4-2.8s1.5-2 3.4-2.3c0 0 1.9 0 2-.4.2-.4 2.3-3.8 7.2 0 0 0 1.5-2.5 4-3 0 0 2.5-.7 3.8 1.2 0 0 2.9-2.2 5.4 1.4 0 0 3.4-2 6 1.9 0 0 3.3-1.7 5.4 1.8 2.1 3.6 1.7 5 1.7 5l1.6 5.7 5.5 6.8-12.8 4.8h-5.8l-11.5 3-20.4 1.6-5.6-6.7 8-7z"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M457.8 286.6s-3 .1-4.6 1c-1.5.7-2.7 1.5-4.5 2.7 0 0-.9 1.1-4.4.4 0 0-6-1.4-6 3.3 0 0-7.4.6-4.4 7 0 0 2 5 6.2 1.5 0 0-2.7 3.8 2.5 5.3 0 0 3.7 1 4.8-2.9 0 0 .6-1.5-.8-3.3 0 0 1.8-.4 3-2.3 0 0-3.8 4.8.4 6.6 0 0 5.3 1.3 5.6-4.2 0 0-.5-2.6 1.6-3.5 0 0 4.2-1 6-5.6 0 0-6-3.2-5.4-6zm-12.3-48.2s-4.7-2.1-7 0c0 0-3-1.9-6.3 0 0 0-3.1 2-5.3 4.3 0 0-1.5 1.3-1 5.4 0 0 .9 2.9.4 4.3 0 0-1-.2-3.1 2.3 0 0-2.6 3-5 .3 0 0 .8 3.8 5.1 3.2 0 0-2.1 1.6-.3 5.9 0 0 1.4 3-.8 6.8 0 0 3.8-1.5 3.7-6 0 0-.4-3 .8-5.1 0 0-1.2 1.9 1.4 6 0 0 2 3 .4 6 0 0 3.7-1.3 3.4-5.8-.4-4.6-2.6-2.7-1.2-6.9 0 0 .4 2.2 1.5 3.3a6 6 0 012 5.9s2.2-2.8 1.7-5.7a11 11 0 00-1.1-3.7l7-4 3.6-6.3.1-10.2z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M434.8 256.4s-3-.2-3.4-2.5m-5.1-1.5s1 0 2 1c0 0 .6 1 1.6.8"
      />
      <path d="M439.1 247.8s-1.5 0-2.4-.7c0 0-.8-.6-1.3.3 0 0-.8 1.4.6 2 0 0 1.9 1-1 2.8 0 0 3.4-1.3 2-3 0 0-1.5-1-1-1.4 0 0 .2-.4.8 0 .6.5 1.8.3 2.3 0z" />
      <path fill="#784421" stroke="#000" strokeWidth={0.4} d="M484.9 256l1.8-.5-11.7-40.3-.4.1z" />
      <path d="M446 300.7s-2.7-1.6-5 .2c0 0 .3-1 2-1.4 0 0 1-2.7 3.6-2.4 0 0-1.1 1.3-2.5 2.3 0 0 1.5.2 2 1.3z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M436.4 307s-4.4-2.7-2-7.3c0 0 .7-1.3 2-1 0 0 2.7.8.6 4.6 0 0-1.1 2.4-.6 3.8zm8.8 4.4s-6.2-2.8-4.3-7.7c0 0 .6-1.6 2-1.5 0 0 2.4.2 1.9 3.4 0 0-.7 3 .4 5.8z"
      />
      <path d="M443.9 293.4s-1.9 1.4-2.6 2.3c0 0-.8-1-1.8-1.5 0 0 1.2-.2 1.8.3 0 0 1-.9 2.6-1.1z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M449.4 310.2s5-1.2 4-6.3c0 0-.5-2.2-2.5-1.9 0 0-2.5.7-.9 3.9 0 0 1 2.2-.6 4.3z"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M471.5 203.7l4.8 1.6s4.5 2 10.3 0l4.4-1.7-3 4.6v2.4l1.8 2.7s-1.1.5-4.5-1.6c0 0-3.7-2.9-8.1 0 0 0-2.5 1.6-4.5 1.6l2.9-3.2-1.1-2.9-3-3.6z"
      />
      <path
        fill="#fff"
        d="M451.3 304.2s.2-.3 0-.4l-.4.2s-.5.8 0 2c0 0 .4.7.2 1.5l.1.3s.2-.1.2-.3c0 0 .3-.7-.2-1.5 0 0-.5-1.2.1-1.8z"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M518.8 213s-3.5 1.8-5-.3c0 0-1.8-3.7 2.4-5 0 0-2.3-2.7.1-5.2 0 0 1.3-1.4 3.5-.4 0 0 1-2 3.1-1.9 0 0 2 0 2.6 2.1 0 0 2.7-1 4.1.5 0 0 2.4 2.7-1 4.9l-2.4.2-2.4-1.1-2.6.7s.7 2.7-2.4 5.5z"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M491 210.2s0 .7-.7.8c0 0-.8.3-1.3-.7v-.3c0-.4-.2-1.7 1.2-2.7 0 0 2.2-1.8 6.4.4A161 161 0 00509 214s2.6 1.3 6.6 1.5c0 0 5.5.4 7.8-3.5 0 0 1.8-2.9 0-4.8 0 0-.7-.8-1.9-.7-.4.1-1 .3-1.5 1 0 0-.9 1.2.1 2.1 0 0 1.3.8 1.8-.9 0 .2.4 1.5-.3 2.5 0 0-3.4 5-12.5-.1l-12-6.8s-6-3.1-9.7 1.8c0 0-2.9 4 .9 6.6 0 0 2.8 1.7 4.5-1 0 0 1.5-2.6-.8-3.7 0 0-2-1-2.8 1-.8 2 1.5 2.6 1.7 1.1 0 0 0-.3.2 0z"
      />
      <path
        fill="#e4cb5e"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M443.3 231v-7.6c0-.6 0-1 1-1.8.8-.7 1.8-1.9 3.1 1.4 0 0 2.7-2.9 3.6-3.3 0 0 1.6-1.3 2.7.6 0 0 1.4-2.2 2.5-2.7 0 0 2.7-1.7 2.8 3.5l2.1-2s1.7-1.3 3.5.6c0 0 3 3 3.4 3.8 0 0 .7.9.8 2.3 0 0 0 1.6.8 2.5 0 0 1 .9 1.9 1 0 0 2.1.1 3 2.2 0 0 .3-.4 1.4 9.4v18l-12.1 14.4-19.4-5.6-7.7-3.2-1.8-5.6 7.5-4.9 4-11-1.2-7.7-1.9-4.4z"
      />
      <path
        fill="#784421"
        stroke="#000"
        strokeWidth={0.4}
        d="M496.7 240.4l1-1.3 2.1-1.7s3.4 8.8 3.5 10.7v2.7s5 1.3 6 9l-4.2 7.7-6.5-3.7-1.9-1.3v-22z"
      />
      <path fill="#fff" d="M435.2 300.8s.2-.3 0-.5l-.4.3s-1.3 1.4-.2 3.7c0 0 0 .3.3.2 0 0 .2 0 0-.3 0 0-1-2 .3-3.4z" />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M454.8 299.3s.1-.7-.3-1.4c0 0-.3-.5-.2-1.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M459 221.1s0 1.9.6 3.3c.5 1.4 2.4 3.8 2.5 5"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M504.6 286.6s3 .1 4.6 1c1.6.7 2.8 1.5 4.6 2.7 0 0 .8 1.1 4.3.4 0 0 6.1-1.4 6.1 3.3 0 0 7.3.6 4.3 7 0 0-2 5-6.2 1.5 0 0 2.7 3.8-2.5 5.3 0 0-3.7 1-4.8-2.9 0 0-.6-1.5.9-3.3 0 0-1.8-.4-3-2.3 0 0 3.8 4.8-.4 6.6 0 0-5.3 1.3-5.6-4.2 0 0 .4-2.6-1.6-3.5 0 0-4.2-1-6.1-5.6 0 0 6-3.2 5.4-6z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M456.6 229.5l5 40.1m-3.8-40.2l5.6 37.4m-4.6-37.6l6.5 37.1"
      />
      <path fill="#784421" stroke="#000" strokeWidth={0.4} d="M469 263.1l1.8-.6-11.7-40.2h-.4z" />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M462.4 227.7l11.8 29.8m-12.6-29.3l11.4 31"
      />
      <path
        fill="#fff"
        d="M443 308.5s-1.4-1.3-1.2-3.6c0 0 0-.5-.2-.6 0 0-.3-.1-.3.5 0 0-.4 2.4 1.3 3.8 0 0 .1.2.3.1 0 0 .2 0 0-.2z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M463 227.3l12 27.2M459.7 229l7.5 36.6"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M520.5 256c-5.3-3-6.5-9.6-6.5-9.6a20.6 20.6 0 011.4-12c3.4-7.2 9.3-8.6 9.3-8.6s-5.8 4-7.4 9.4c0 0-1.2 4.6-.5 9 .7 4.6.4 3.4 1.5 6.9l2.2 5z"
      />
      <path
        fill="#784421"
        stroke="#000"
        strokeWidth={0.2}
        d="M497.6 239l-22.3 7.1-1.2 10c-5.3 7.7-16.1 9-16.1 9l8.4 9 16 3.3 8.5-6.5 7.7-7c-.8-3.8-.4-9.4-.4-9.4 0-1 .4-3.2.4-3.2s-1.3-9-1-12.2z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M474.4 253.6s14.7-4.6 23.5-8.3M467.3 262s18.4-3.3 31.3-10.7l4.7-3.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M503.3 250.8l-5 3.7s-20.6 9.4-36.3 9.7m36.2-3s-15.8 8.1-24.8 8.2"
      />
      <path
        fill="#d40000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M517 238.4s4.7-2.1 7 0c0 0 3-1.9 6.4 0 0 0 3 2 5.2 4.3 0 0 1.5 1.3 1 5.4 0 0-.8 2.9-.3 4.3 0 0 1-.2 3 2.3 0 0 2.7 3 5 .3 0 0-.7 3.8-5 3.2 0 0 2 1.6.2 5.9 0 0-1.3 3 .8 6.8 0 0-3.8-1.5-3.6-6 0 0 .3-3-.8-5.1 0 0 1.1 1.9-1.5 6 0 0-2 3-.3 6 0 0-3.8-1.3-3.4-5.8.3-4.6 2.6-2.7 1.1-6.9 0 0-.3 2.2-1.4 3.3a6 6 0 00-2 5.9s-2.2-2.8-1.7-5.7 1-3.7 1-3.7l-7-4-3.5-6.3-.2-10.2z"
      />
      <path
        fill="#fff"
        stroke="#00247d"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M437.1 263.9s.7-3.1 3.6-2c0 0 1-5 6.5-5.2 5.4-.2 5.7 5.3 5.7 5.7 0 0 1.7-2.4 4.3-2.1 0 0 4.6-.3 3 7.1l.8 1s3.5-8.3 10.7-6.2c0 0 7 2.2 2.5 9 0 0 3.5 4.6 6.4 4.1 3-.4 5.6-1.3 8.5-6.5 3-5.2 9.8-6 11.5-5.7 1.7.3 3.1 1.5 3.4 2.7 0 0 3.6-12 16.6-10.2l5.2 2.7 2 .9-3 8.3-7.1 16.2-5.5 1.6-5.7-3.2-2 1-.1 4.9-7.5 5.4-5.2 2.1-5.7 4-1.4 3.5s-3.1-1.4-6.7 0l-1.2-3-3.4-3.1-13-6.2-2.3-7.6-2.4-1-2.7 3-3.8.5-5.8-4L437 264z"
      />
      <path fill="none" stroke="#000" strokeMiterlimit={2.6} strokeWidth={0.5} d="M493.8 204.9s-5-.2-4.8 5" />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M526.4 259.6c-8.6-2.7-11-12-11-12a21.4 21.4 0 011.1-13c4-9.3 10.6-9.3 10.6-9.3a3.4 3.4 0 013.8 2.8c.3 2-1.1 2.7-1.1 2.7-2.3 1.3-3.8-.4-3.8-.4-1-1.3-.2-2.4-.2-2.4.6-.8 1.7-.4 1.7-.4 1 .2.8 1.4.8 1.4s.3-1.4-1-1.5c0 0-2.7-.6-5.7 3.2 0 0-4 5.1-4 11.8 0 0-.5 12.4 12.4 15.6 0 0-1.4 2-3.9 9.3 0 0-2.8 9.4-5.4 14.5 0 0-3.6 7.2-11.6 4.3 0 0-4.7-2.1-4.7-5.5 0 0-.3-3.2 2.5-3.4 0 0 2.8-.2 2.8 2.2 0 0 0 2.5-3 2 0 0-1-.3-.9-1.3 0 0 .2-1 1.5-.5s0 0 0-.1c0 0-.5-.2-1 0 0 0-.5.1-.5.9 0 0 0 .5.6.9l1.4.2s.8 1.6 2.6 2.2c2.5.7 4.6 0 5.9-1a9 9 0 002.5-3.6 95 95 0 004.4-11.3s1.5-4.8 2.8-7.3l.4-1z"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M502 283.2s1.7-.2 1.7 1.2c0 0-.1 2-2.7 1.6 0 0-2.5-.5-1.6-3.3 0 0 .6-2 3-1.7 0 0 2.3 0 3.3 3.2 0 0 .8 2.7-.6 5-1.5 2.5-5.2 4.2-7 5 0 0-7.3 2.8-9.5 4.5 0 0-3.3 2.4-1.8 4.7 0 0 .6.9 1.4.9 0 0 1 0 1.1-1 0 0 0 .6-.6.9 0 0-.7.3-1.4-.3 0 0-.8-.8-.2-2 0 0 .9-1.4 3-.5 0 0 1.7.9 1 2.7 0 0-.7 1.8-2.8 1.7 0 0-1.6 0-2.7-1-1.6-1.8-1.7-5-.2-6.7 0 0 1.3-1.8 4-3l7.5-3c2.2-.9 4.1-1.9 5.4-3.4 0 0 1.1-1.2 1.5-3.4 0 0 .3-1.6-.7-2l-1-.2z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M502.2 283.2s1.8-.4 2.9 1.8c0 0 .6 1.3.7 2.1m.6-7.6s-1.8.3-.9 2.9c1 2.4 2.5 3.1 3 3.5"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M471.5 210.2s0 .7.8.8c0 0 .7.2 1.1-.7l.1-.3c0-.4.2-1.7-1.1-2.7 0 0-2.3-1.8-6.5.4 0 0-3.3 1.6-5.6 3 0 0-6 3.2-6.8 3.4 0 0-2.6 1.3-6.6 1.5 0 0-5.5.4-7.8-3.5 0 0-1.8-2.9 0-4.8 0 0 .7-.8 1.9-.7.5.1 1 .3 1.5 1 0 0 .9 1.2-.1 2.1 0 0-1.3.8-1.8-.9 0 .2-.3 1.4.4 2.5 0 0 3.3 5 12.4-.2l12-6.7s6-3.1 9.7 1.7c0 0 2.9 4-.8 6.7 0 0-2.8 1.7-4.6-1 0 0-1.4-2.6.8-3.7 0 0 2-1 2.9 1 .8 2-1.6 2.6-1.8 1.1 0 0 0-.3-.1 0zM442 256.1c5.3-3 6.5-9.7 6.5-9.7 1.2-6.7-1.4-12-1.4-12-3.4-7.2-9.3-8.6-9.3-8.6s5.8 4 7.4 9.4c0 0 1.3 4.6.5 9-.7 4.6-.4 3.4-1.5 6.9l-2.2 5z"
      />
      <path fill="none" stroke="#000" strokeMiterlimit={2.6} strokeWidth={0.5} d="M468.8 204.9s5-.2 4.7 5" />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M436 259.6c8.7-2.7 11-12 11-12a21.4 21.4 0 00-1-13c-4-9.3-10.6-9.3-10.6-9.3a3.4 3.4 0 00-3.8 2.8c-.3 2 1.1 2.7 1.1 2.7 2.3 1.3 3.8-.4 3.8-.4 1-1.3.2-2.4.2-2.4-.6-.8-1.7-.4-1.7-.4-1 .2-.8 1.4-.8 1.4s-.3-1.4 1-1.5c0 0 2.7-.6 5.7 3.2 0 0 4 5.1 4 11.8 0 0 .5 12.4-12.4 15.6 0 0 1.4 2 3.9 9.3 0 0 2.8 9.4 5.5 14.5 0 0 3.5 7.2 11.5 4.3 0 0 4.7-2.1 4.7-5.5 0 0 .3-3.2-2.5-3.4 0 0-2.8-.2-2.8 2.2 0 0 0 2.5 3 2 0 0 1-.3.9-1.3 0 0-.2-1-1.5-.5s0 0 0-.1c0 0 .5-.2 1 0 0 0 .5.1.5.9 0 0 0 .5-.6.9l-1.3.2s-.8 1.6-2.7 2.2a6.3 6.3 0 01-5.9-1 9 9 0 01-2.5-3.6 95.2 95.2 0 01-4.4-11.3s-1.5-4.8-2.7-7.3l-.5-1z"
      />
      <path
        fill="#f5ce00"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M460.5 283.2s-1.6-.2-1.6 1.2c0 0 0 2 2.6 1.6 0 0 2.5-.5 1.6-3.3 0 0-.6-2-3-1.7 0 0-2.3 0-3.3 3.2 0 0-.8 2.7.6 5 1.5 2.5 5.2 4.2 7 5 0 0 7.3 2.8 9.5 4.5 0 0 3.3 2.4 1.8 4.7 0 0-.5.9-1.4.9 0 0-1 0-1.1-1 0 0 0 .6.6.9 0 0 .7.3 1.4-.3 0 0 .8-.8.2-2 0 0-.9-1.4-2.9-.5 0 0-1.8.9-1 2.7 0 0 .6 1.8 2.7 1.7 0 0 1.6 0 2.7-1 1.6-1.8 1.7-5 .3-6.7 0 0-1.4-1.8-4-3-1.6-.5-4.6-1.8-7.6-3-2.2-.9-4.1-1.9-5.4-3.4 0 0-1.1-1.2-1.5-3.4 0 0-.3-1.6.7-2l1-.2h.1z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.5}
        d="M460.3 283.2s-1.8-.4-2.9 1.8c0 0-.6 1.3-.7 2.1m-.6-7.6s1.8.3.9 2.9c-1 2.4-2.5 3.1-3 3.5m23-76.4s4.3-2.7 8.7.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M452.4 236s.6-2.5-2.2-6.7c0 0-1.8-3.9-2.7-6.3m6.2-2.7l2 5.5 2.4 5.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M454.4 238.6s1.7 1.8 1.5 4.7m-6.8-6.6s1.8.9 1.6 5.7c0 0-.1 3.4 2.5 5.2m-4.4 1.2s5.6-.6 6 2.9c0 0 0 3.3 2 3.6 0 0 2.8.3 3.4 3m-9.6-5.7s1 1.5 2 2.2m5.2-5.8s1.4 2.2 1.7 3.4M464 223s1.3 1.8 2.6 2.6m2.6 8s2.8 1.3 2.4 8.4c0 0-.4 4.1.8 6.4"
      />
      <path fill="#784421" stroke="#000" strokeWidth={0.4} d="M456 228.8l.3.7s5 .2 7.7-3.2l-.3-.7s-4.4-.2-7.6 3.2z" />
      <path fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={0.4} d="M474.1 255.6s17.3-5.1 24-8.1" />
      <path fill="#784421" stroke="#000" strokeWidth={0.2} d="M472.3 223.7l-.2-.5 8.5-3.3.2.6z" />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.4}
        d="M473 223.4l5.7 27.9m-4.7-28.2l6.5 27.7m-5.4-28.2l7.1 27.6m-4.3-28.6l9.7 20.6m-8.4-21l10.3 20.4m-9.4-20.9l11.2 20.4m-13 10.4l4.4-1.4m-7.7-1.3s12.8-3.8 22.6-7.7m-22.8 9s16.3-4.2 22.8-7.4m-17.8 20.7l.8 2.7 2.4-.8-.8-2.6m4.2-1.1l.8 2.6 2.3-.8-.8-2.6m-13.4-14.7l-.2-3.5 21.4-6.5 1.1 3m-13.4.7l1.1 3.2m6.3-5.4l1.4 3m.4-3.6l1.3 2.8m.4-3.3l1.3 3m0-3.4l2.4-1.3 1 2.6m-2.2-2l1.2 2.8"
      />
      <path
        fill="none"
        stroke="#00247d"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M444.6 276.2s-4.2-4.3 0-8.4c0 0-4.6-2.2-3.9-5.8m11.4 17.5s-4.4.6-3.1-7.8c0 0-1.8 3.3-2.4 5a3.9 3.9 0 001.7 4.5c.7.5 4.6 1.5 5.8-1m-6.9-13.6s-1.8 1.6-.5 4.6m2.3-4.2s.2 2.9 1.7 4.5m-.4-5.6s0 3.4 2.4 5.5m-1.2-6.7s0 3.8 2.8 6.2m11.3-.6s1.4-3.2 4.4-3c0 0-1.4.7-1.4 2.1 0 0-.2 2.5 2.4 2.7 0 0 2.1.3 3.2-.9"
      />
      <path
        fill="none"
        stroke="#00247d"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M472.8 284.6s-7.5-3.5-6.7-8.5c0 0 .3-3 3.3-4.5m-1.6 3.2s-.7 2.1.8 3.6m.9-5.1s-1 2.4.6 4.1m1.2-5.3s-1.1 2 .2 3.8m-7 9.2s4 3.6 7.2 3.6m-8.5-2.4s3.8 3 6.2 3.5m-7.6-2.7s4.7 4.1 7.6 4.4m11.5 3.8s-4.6 2.5-1 5.2m-2-7.9l7.6-3.8m-5.7 5.2s7.6-4.6 9.8-5.6m-5.9 6s6.5-4.4 10-6.3m-5.7 6s4.5-3.4 8.8-6m1.5-4.3s-2.2-3.2-9.4 0c0 0 2.7-2.4 7.9-4.3m7.2-13.7s.6 2.6 0 4.2"
      />
      <path
        fill="none"
        stroke="#00247d"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M492.4 278.4s1.5-2.2 5.3-3.3c0 0 1 2.5 4 2 0 0 4.4-.9 3-5.8 0 0-.9-3.6-6-4m15.2-6.1s5.1 1 5 5.1c0 0 .5 6.4-6.2 7.6m5.5-10.1s1.4-3.1 4.6-4.4m-3.8-1.8s1.4 2.3 2.3 2.6m-3-.8s1.3 1.7 1.7 2m-2.2-.4s.7 1 1.3 1.4m-28-25.9s1-1.6 3.6-1m10.2 13.3s1.6-6.6 7.1-4.2m-2.2-.5s.5-3-.8-4.6m-3 4.3s.7 1.3.1 2.3"
      />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M517.3 311.4s6.2-2.8 4.3-7.7c0 0-.6-1.6-2-1.5 0 0-2.4.1-2 3.3 0 0 .8 3.2-.4 5.9z"
      />
      <path
        fill="#fff"
        d="M519.5 308.5s1.4-1.3 1.2-3.6c0 0-.1-.5.1-.6 0 0 .3-.1.3.5 0 0 .4 2.4-1.2 3.8 0 0-.1.2-.3.1 0 0-.2 0-.1-.2z"
      />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M526.1 307s4.4-2.7 2-7.3c0 0-.7-1.3-2-1 0 0-2.7.8-.6 4.6 0 0 1 2.4.6 3.8z"
      />
      <path fill="#fff" d="M527.2 300.8s-.2-.3 0-.5l.3.3s1.3 1.4.3 3.7c0 0-.1.3-.4.2v-.3s1-2-.2-3.4z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M513 310.2s-4.9-1.2-4-6.3c0 0 .5-2.2 2.6-1.9 0 0 2.5.7.9 3.9 0 0-1 2.2.5 4.3z"
      />
      <path
        fill="#fff"
        d="M511.1 304.2s-.1-.3 0-.4c0 0 .3 0 .4.2 0 0 .5.8.1 2 0 0-.4.7-.2 1.5 0 0 0 .2-.2.3l-.2-.3s-.2-.7.2-1.5c0 0 .5-1.2 0-1.8z"
      />
      <path d="M516.5 300.7s2.8-1.6 5 .2c0 0-.2-1-2-1.4 0 0-.9-2.7-3.5-2.4 0 0 1 1.3 2.5 2.3 0 0-1.5.2-2 1.3zm2-7.3s2 1.4 2.7 2.3c0 0 .7-1 1.7-1.5 0 0-1.1-.2-1.7.3 0 0-1-.9-2.6-1.1z" />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M507.7 299.3s-.2-.7.3-1.4c0 0 .3-.5.2-1.2m19.6-40.3s2.9-.2 3.4-2.5m5-1.5s-1 0-1.9 1c0 0-.7 1-1.7.8"
      />
      <path d="M523.5 247.8s1.5 0 2.3-.7c0 0 .9-.6 1.4.3 0 0 .8 1.4-.7 2 0 0-1.8 1 1.1 2.8 0 0-3.5-1.3-2-3 0 0 1.5-1 .9-1.4 0 0-.2-.4-.8 0-.6.5-1.8.3-2.2 0z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M525.5 211.2s.7-1 .4-3.7 2.2-3.1 3.1-2.3c0 0 1 .8 0 2.6a7 7 0 01-3.5 3.4z"
      />
      <path fill="#fff" d="M526.4 209.1s1-1 .5-3.1l.1-.2.3.1s.5 2.3-.5 3.5c0 0-.2.2-.4 0v-.3z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M524.8 210.2s-.1-1.2-2-3c-2-2-.4-3.7.8-3.7 0 0 1.2 0 1.7 1.9a7 7 0 01-.5 4.8z"
      />
      <path fill="#fff" d="M524.5 207.7s0-1.4-1.8-2.8v-.3h.3s1.9 1.5 1.9 3.2c0 0 0 .2-.2.2 0 0-.2 0-.2-.3z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M522.1 209.3s-.5-.9-2.9-1.8c-2.4-.8-1.8-2.9-.8-3.4 0 0 1.1-.4 2.2 1a6.4 6.4 0 011.5 4.2z"
      />
      <path
        fill="#fff"
        d="M521 207.6s-.5-1.2-2.7-1.8c0 0-.2 0-.2-.2 0 0 0-.2.3-.1 0 0 2.4.5 3.1 2l-.1.3s-.2 0-.3-.2z"
      />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M523.6 210.2s-1.1.4-3.7-.9c-2.6-1.2-3.7 1-3.2 2 0 0 .4 1.3 2.4 1a7 7 0 004.5-2z"
      />
      <path fill="#fff" d="M517.6 211s1.2.8 3.3 0h.3s0 .2-.2.3c0 0-2.2 1-3.7.1 0 0-.2-.1 0-.3h.3z" />
      <path fill="none" stroke="#000" strokeMiterlimit={2.6} strokeWidth={0.5} d="M519.9 202.1s1.2.6 1 2.1" />
      <path fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={0.5} d="M525.5 202.3s.5 1.6 0 2.5" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M436.8 211.2s-.7-1-.4-3.7c.3-2.8-2.1-3.1-3-2.3 0 0-1 .8-.1 2.6a7 7 0 003.5 3.4z"
      />
      <path fill="#fff" d="M435.9 209.1s-.9-1-.5-3.1v-.2l-.4.1s-.4 2.3.6 3.5c0 0 .2.2.3 0v-.3z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M437.6 210.2s0-1.2 2-3c2-2 .4-3.7-.8-3.7 0 0-1.3 0-1.7 1.9a7 7 0 00.5 4.8z"
      />
      <path
        fill="#fff"
        d="M437.9 207.7s0-1.4 1.7-2.8c0 0 .2-.2 0-.3 0 0 0-.1-.2 0 0 0-2 1.5-2 3.2 0 0 0 .2.3.2 0 0 .2 0 .2-.3z"
      />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M440.2 209.3s.5-.9 3-1.8c2.3-.8 1.7-2.9.7-3.4 0 0-1-.4-2.2 1a6.4 6.4 0 00-1.5 4.2z"
      />
      <path fill="#fff" d="M441.3 207.6s.5-1.2 2.7-1.8c0 0 .2 0 .2-.2 0 0 0-.2-.2-.1 0 0-2.4.5-3.1 2v.3s.3 0 .4-.2z" />
      <path
        fill="#64b4d1"
        stroke="#00247d"
        strokeMiterlimit={2.6}
        strokeWidth={0.4}
        d="M438.7 210.2s1.2.4 3.7-.9c2.6-1.2 3.7 1 3.3 2 0 0-.5 1.3-2.5 1a7 7 0 01-4.5-2z"
      />
      <path fill="#fff" d="M444.7 211s-1.1.8-3.3 0h-.2v.3s2.4 1 3.8.1c0 0 .2-.1 0-.3h-.3z" />
      <path fill="none" stroke="#000" strokeMiterlimit={2.6} strokeWidth={0.5} d="M442.5 202.1s-1.3.6-1 2.1" />
      <path fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={0.5} d="M436.8 202.3s-.5 1.6 0 2.5" />
      <path d="M492.6 187.7s.8 2.3.5 4.4c-.3 2 .1 2.4.8 2.8.6.3 2-.3 2.1-1.8 0 0 1.6 3.2-1.5 5.3 0 0-2.3 1.4-4.2-.4-.7-.7-1-2.5-.6-4.2 0 0 .5-2.2-.4-4.6 0 0 1.3 1.4 1 4.1 0 0-.7 5 3 4.7 0 0 2.5 0 2.6-3 0 0-1 1-2.1.7a2 2 0 01-1.5-2.4c.1-1.3.5-3.6.3-5.6zm-4 8s-.3 4-3.8 4.9c0 0 .5-.7-.3-2.7 0 0-.8-1-.8-2.8 0 0-1 .9.2 3.2.8 1.4.1 3-.1 3.1-.3.1 5.8-.8 4.7-5.6zm-4.7-3.8s-.9-1-1-3.2c0-2.2-.4-2.8-.7-3 0 0 .4 1.9.3 3 0 1.3.1 2 .3 2.5 0 0-2 .3-3.2-2.5-1.1-2.7-2.3-2.5-2.9-2.5 0 0 .7.1 2 2.6 1.4 2.4 1.8 3 5.2 3zm-9-5.8s1 2.6 1.1 4c0 0-2.6-.8-3.3-3 0 0-2.7.9-1.7 4 0 0-2.4-.8-3.5-2.7 0 0 1.3 1 2.6 1.4 0 0-.2-2.6 3-3.5 0 0 .5 2.3 2.2 2.8l-.4-3zm4.2-4.6s1 1.3 2.8 1.3a3 3 0 002.7-1.3s-.1 2.2-2.7 2.3c0 0-2.8 0-2.8-2.3zM467.8 197l1.7 1.6s1 1 1.7-.2c0 0 1.1-2 2.4-1.9 0 0-1 .6-2 2.5 0 0-.2.6-1 .7-.4 0-.8.2-1.5-.6 0 0-.6-.7-1.3-2zm14-24.6c-2.7 0-.4 2-.4 2 0 3.4-2.6 4.5-4.4 3.5-1.9-1-.4-3.4-.4-3.4s-2 1.3-.8 3.3c1.3 2 4.8 1 6-.7 1.3 1.8 4.8 2.7 6 .7 1.4-2-.7-3.3-.7-3.3s1.5 2.4-.4 3.4c-1.8 1-4.5 0-4.4-3.4 0 0 2.3-2.1-.4-2.1zm1.7-3.7s1 1.7.8 4.1c0 0 .8-2.4-.8-4zm-8.4 3.9s-.2-1.8-2-2c0 0 1.6 1.1 2 2zm13.5 0s.2-1.8 2-2c0 0-1.5 1.1-2 2zm-16.2 2.7s1.4.4 2.2-.6l-2.2.6zm-4.5-11s1.6-.1 3.2 2.3c0 0-1.6.8-2 1.3 0 0 0-.8.8-1.4 0 0-.3-1.2-2-2.1zm26.8 0s-1.6-.1-3.2 2.3c0 0 1.6.8 2 1.3 0 0 0-.8-.8-1.4 0 0 .3-1.2 2-2.1zm-12.3 1.9s1.4.4 3.2-.6c0 0 2.2-1.2 3.6 0 0 0-1.2-.6-3.6.6 0 0-2.3 1.3-3.2 0z" />
      <path fill="#fff" d="M483.9 167.6s1.2-2.1 5-1.7c0 0-1 3-5 1.7z" />
      <ellipse cx={486.4} cy={166.9} fill="#784421" rx={0.7} ry={0.9} />
      <ellipse cx={486.4} cy={166.9} rx={0.4} ry={0.6} />
      <path d="M475.9 163s2.3.2 3.8 1c0 0 1.5 1 3.2-.3 0 0 1.9-1.1 3.1-2.6 0 0-2.9 2-4 2.3 0 0-1-.8-1.3-1.9 0 0 .1-.8 1.7-2.3 0 0-2.1.7-2.5 2.4a6 6 0 001.2 2s-.4.2-1.4-.5c0 0-2.3-.7-3.8 0zm6 14.2c-2 1.8 0 1.6 0 1.6s2 .2 0-1.6zm-1.2-11s-1.5.4-3.3-.6c0 0-2.2-1.2-3.6 0 0 0 1.2-.6 3.6.6 0 0 2.4 1.3 3.3 0z" />
      <path fill="#fff" d="M479.2 167.6s-1.2-2.1-5-1.7c0 0 1 3 5 1.7z" />
      <ellipse cx={476.6} cy={166.9} fill="#784421" rx={0.7} ry={0.9} />
      <ellipse cx={476.6} cy={166.9} rx={0.4} ry={0.6} />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={1.3}
        d="M554 148.3v135.5c0 36.2-72.3 48-72.3 48s-72.4-11.8-72.4-48V148.3h144.8z"
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const BMFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

BMFlagIcon.displayName = 'BMFlagIcon';
