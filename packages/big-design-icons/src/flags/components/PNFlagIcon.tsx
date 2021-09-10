// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'PN flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="PNFlagIcon__a">
          <path d="M-15-7.5h30v15h-30z" />
        </clipPath>
      </defs>
      <path fill="#00247d" d="M0 0h640v480H0z" />
      <g clipPath="url(#PNFlagIcon__a)" transform="translate(320 160) scale(21.33333)">
        <circle r={20} fill="#00247d" />
        <path stroke="#fff" strokeWidth={3} d="M-20-10l40 20m-40 0l40-20" />
        <path stroke="#cf142b" strokeWidth={2} d="M-20-10l40 20m-40 0l40-20" />
        <path fill="#fff" d="M0 0l20 10h-3L-3 0m3 0l20-10h3L3 0M0 0l-20 10h-3L-3 0m3 0l-20-10h3L3 0" />
        <path stroke="#fff" strokeWidth={5} d="M-20 0h40M0-10v20" />
        <path stroke="#cf142b" strokeWidth={3} d="M-20 0h40M0-10v20" />
      </g>
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M410 310.4a59.7 59.7 0 00-20.1 29.3c-6 28.9-14 35.3-26.5 29 0 15.6 13.6 16.8 19.6 7.7 0 14.5 5.3 27.1 17.1 37.9 5 4.5 6 1.4 3.6-3.6s-2.4-21.2-7.1-30.5c7.6 5.5 18.8 2.4 17.8-12.6-9.7 5.7-19.5 5.5-20.5-8.1-1.2-16 5-39.1 16-49.1zm-11.6-114.8c.6-5.7-.6-11.6-4.8-15.2-8-7.2-16-4.8-21.9 1-8.8-4.8-13.5 12-23.5 9.2 1.7 5.5 4.3 7.8 9.3 6-5.2 4.7 0 10.4-6.2 16.2 11.2 3.5 17.2-2.7 16.7-13.4 4.3 3.8 11 3.6 14.5-.7-6-2-6-7.1-3.6-12 3.6-7 20.4-6.8 19.5 9z"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M424.2 278.5c-12.6 6.7-35.7 3.8-37.9-12.6-2.1-16.4 13.8-23.8 18.1-26 6.7-3.3 12 2.6 9.8 9.5a10.8 10.8 0 005.5-16.2c9.7.7 18.8-6.6 22.6-17.1-3.4 3.3-12.8 1-20.5.5 2.4-2.6 2.4-7.7 1.7-10.3-8.1 8.3-19.8 4.5-35.3 28.6 2.4-8.3 7-25 9.6-36a27.1 27.1 0 00.6-3.3c.9-15.7-15.9-16-19.5-8.8 4 4.4 2 9.6.5 17.4-1.6 9.3-5.2 30.7-8.3 37.9-1-11.2-8.4-12-9.8-17.4-2.1 1.4-3.3 5.2-2.9 7.8-2.6-2.8-11.6.7-15-3.5-3.5 7.1 2.2 14.3 8.2 17.3-3.5.3-4.4 4.5-8.2 4.5a23.3 23.3 0 0016.5 8.8c6 .5 10.6 2.7 14.3 10.1 6 11.9 28.6 19.6 50 8.8z"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M455.7 264c-7.2 19.7-26.7 33.8-35.6 36-15 3.6-45.6 18.4-53.8 26"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M410 310.4c-11.4 9.6-17.3 33.1-16 49.1.3 4.4 1.5 7.5 3.4 9.3.8-9 7.1-32.4 23.2-42.9 13.6-8.8 34.8-28.6 42.7-51.2a18 18 0 00-8.4-9.8c-7.8 21.4-28.7 31.6-45 45.5z"
      />
      <path
        fill="#316d3a"
        stroke="#000"
        strokeWidth={0.6}
        d="M448.4 254.8c-4 6-13.2 14.4-22 17.8 1.9-2.2 2.5-5 2.6-7.2a80.8 80.8 0 01-42.7.5 58.2 58.2 0 0057.7-17.2c2 2.2 3.6 4 4.4 6.1z"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M362.7 304.7c-18.2 17-6.2 32 1 35.3-2 11.9 9.3 10.4 9 20.4 4.6-2.6 5.8-9.5 5-15 5.8 6.2 20.3-.7 23.4 10.8 2-12.7-7.9-25.3-20-24.1 5-4.5 2.1-11.9-2.6-13.8-1 9.3-11.5 9.3-15.5 6.4-4-2.8-7.4-12.1-.3-20z"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M402.2 413.1c-2 1.1-1.9 3.7-.6 5.3 2.5 3.4-1.8 11 6.3 12.6 2.4.5 4.2-1 5.1-3.7 2.5-7.5-5.5-8.4-6.2-12-.7-3.5-3-3.2-4.6-2.2z"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M409 427.2c-2.7 1.2-5 3-4 11.5.5 3.6.2 12.2-2.8 12.3 1.9 1 6 2 7.6-.3 1.6 2.7 5.2 2 6.7-1.4 1.9 1.6 4.5-1 4.5-3.3 1.7 1 5-.5 4.1-5.6 2 .7 4.7-.7 5.7-2-3-.6-10.5-4.7-12.3-8-1.8-3.1-6.4-4.7-9.5-3.2z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M367.7 186.2a31.4 31.4 0 014-4.9m41.3 36.4c2.1-1.1 5.3-1.3 8.9-1m-12.1 234c-.8-1.1-1.1-6.2-.6-9.2m7.3 7.8"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M535 305c29.3 24.5 31.2 44 26.7 55.4-2.4-10.7-14.5-27.3-27.2-31.6l.5-23.9z"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M482.6 291.1h54.3v64.4c0 54.7-30.5 87.1-61.5 104.3A114.3 114.3 0 01414 355.5V291h38c0 3.4.4 8.4 4.3 13.4 9-1 19.2-7.7 26.2-13.4z"
      />
      <path
        fill="#006ec7"
        stroke="#000"
        strokeWidth={0.6}
        d="M536.9 291.1v64.4c0 16.5-2.8 31-7.5 43.6l-54-99-53.9 99"
      />
      <g fill="#f7e017" stroke="#000" strokeWidth={0.6}>
        <path d="M500 429.6l5.2 2.6a38.3 38.3 0 002.4-21c-3 7.9-13.6 7.6-16.4 12.4a34.6 34.6 0 014.8 3 55 55 0 01-16.7 11v-51c0-3.6-1.2-6.6-1.2-9.6v-10.5c0-2.4-.5-5.9-2.7-5.9-2.1 0-2.6 3.5-2.6 5.9V377c0 3-1.2 6.4-1.2 9.6v51c-2.6-7.6-12.9-5-17.6-12.6a13.5 13.5 0 015.7-.2c-3.5-12.2-13.3-13.1-15.2-16.7 0 5-2.1 16.7 1.2 21.7a13.3 13.3 0 013.2-2.6c4 8.8 22.3 8.8 26.5 23.3 3.5-5.3 15.9-11.5 24.6-20.9z" />
        <path d="M475.4 387.1c4 0 17-1.3 21.6-1.3 1.2 0 2.2-1.8 2.2-4s-1-4-2.2-4c-4.6 0-17.5-1.4-21.5-1.4s-17 1.3-21.6 1.3c-1.2 0-2.2 1.8-2.2 4s1 4.1 2.2 4.1c4.6 0 17.5 1.3 21.5 1.3zm-2.6-20.9" />
        <path d="M453.9 385.8c1.2 0 2.2-1.8 2.2-4s-1-4-2.2-4" />
        <path d="M455.7 385.8c1.2 0 2.2-1.8 2.2-4s-1-4-2.2-4m11.7 8.8c1.5 0 2.7-2.1 2.7-4.8 0-2.7-1.2-4.9-2.7-4.9m2.8 10c1.5 0 2.8-2.3 2.8-5.1s-1.3-5.1-2.8-5.1m9.1 10.2c1.6 0 2.8-2.3 2.8-5.1 0-2.9-1.2-5.2-2.8-5.2m3 10.2c1.4 0 2.7-2.3 2.7-5 0-2.8-1.3-5-2.8-5m12.8 9.1c1.2 0 2.2-1.8 2.2-4.1s-1-4.1-2.2-4.1m-46.2 49.5a18.1 18.1 0 015.2-2.2m43.4 2.6l-1.4-1m4 3c3.3-3.5 6-7.6 7.6-12.2" />
      </g>
      <g stroke="#000" strokeWidth={0.6}>
        <path
          fill="#fff"
          d="M464.5 336.6c0-1.2 1-1.7 2.1-2.5 1.3-1 1.9-1.5 3.1-1.5h15.6c1.2 0 1.5.3 1.5 1.4v21.2c0 1.1-.3 1.4-1.5 1.4h-20.8v-20.2"
        />
        <path
          fill="#e5e5e5"
          d="M481.5 358.5c2 0 1.7 0 3-1.5 1.6-1.5 1.5-1.4 1.5-2.8v-19.4c0-1-.3-1.3-1.4-1.3h-14.4c-1.1 0-1.6.4-2.9 1.4-1 .8-1.9 1.3-1.9 2.3v21.3h16z"
        />
        <path
          fill="#fff"
          d="M483 358c0 1-.3 1.4-1.4 1.4h-15.7c-1.1 0-1.4-.3-1.4-1.4v-21.3c0-1 .3-1.3 1.4-1.3h15.7c1.1 0 1.4.3 1.4 1.4V358z"
        />
      </g>
      <path
        fill="#96877d"
        stroke="#000"
        strokeWidth={0.6}
        d="M513.3 278.7a12 12 0 012.4 12.4h-4.5c1.9-5.7.7-11.2-7.4-11.9-12.1-1-26.2 22.4-47.4 25.3-6.2-7.4-5.9-21.5 2-28.1a86.7 86.7 0 00-18.6-30.2"
      />
      <path d="M460.5 285c-1-16-7.5-29-16.5-38a25 25 0 0019-3c8-5.3 28.4-14.5 35.9-10.5a11.7 11.7 0 01.5 6.1c-1.8-4.7-21.6 2.7-27.2 5-5.3 2.4-7.7 5.8-5.8 13.3-3.1-2.6-2-5.1-5.3-7a50 50 0 012.8 13.2c-1.2-3.2-3.4-10.1-8-14.2a78 78 0 015.9 36.8 30 30 0 0013.1-5.5c-2.5 3.6-9.7 6.1-14.3 7-2 2.6-3.5 9-3.4 12.6-.3-4.4 1-15.2 3.3-15.9zm52.8-6.3c-4-4.4-11.3-6.8-20.7-4.2a29.8 29.8 0 017.3-2.4c-.4-2.5-2.7-13.3-3-15.9l2.6-1a178 178 0 004 16.8c1 .2 2.8.6 4.5 1.4-.8-2.5-4.8-20.5-4.7-22.4l3.6-2c1.4 9.8 3.7 24 6.4 29.7z" />
      <path
        fill="#96877d"
        stroke="#000"
        strokeWidth={0.6}
        d="M511.2 291.1c1.9-5.7.7-11.2-7.4-11.9-6.3-.5-13 5.6-21.2 12h28.6zm-52.7-51.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M458.4 276.4c1.3 3.8 2.2 7.4 2.3 10.7m-13.1-58.3c-2.2 3.2-4 6.6-4.7 9.4 4 1.4 12 2 15.6 1.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M439.8 246.2l4.2.8a24.9 24.9 0 0019-3c6-4.3 22.2-17.7 40.6-19.1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M435 242c5.8 1.3 17.6 1.8 23.5-2.2a80.4 80.4 0 0140.5-15.6"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M535 305c20 13.8 34.8 27.1 39 48.6 4.4 21.4 12.5 27.1 22.5 21.4-2.4 12.4-14.8 13.8-25.3 4.3 1 14.3-4.8 31.4-19.5 37.6-1-8.6 4.7-15.3 3-22.4-.6-3-.9-10.2 3.2-13.6-7.9 2.7-20.3-2.3-21.5-14 9 4.3 20.8 5 25.3-6.4 4.5-11.5 2.6-31-26.7-55.6zm25.3-111.5c6.1-16.3 22.4-14.6 27.8-7.7 16-9 18.1 11.5 31.7 7.4-.2 3.8-4.8 7.4-9.7 7.2 5.2 4.7-2.2 11.9 9 16.2-9.5 4.7-22.9-.3-26.5-13.4-3 6.2-14.3 6.2-18.8 1.2 9.8-2.6 9-11.7 3.6-15.2-5.5-3.6-15.3-2.2-17.1 4.2zM511.9 229a86.8 86.8 0 0023.6 36.8c11.4 10.5 28.7 7.8 38.3-2.2.3 20-20.4 21.5-31.9 15.3-5-2.8-9.2-1.3-4.3 3 7.4 6.7 23.6 11.7 42.7 15.8 33.3 7.1 21.4 33.6 11.6 33.4 2.9-.1 5.2-3 1.1-6.7-29-26-87.8-15.7-86.8-73.9-6.2 15.3-31.7 9.3-19.8-8.8 3.8 3.1 10.5 3.3 12.4-1.4 1.5-3.7.5-10.2-6.2-15.7 1.1-.1 3.5 0 3.2-2.7.3 1.6 1.8 4 5.5 3.2 1.1 1.6 2.2 2.8 3.8 2.2.3-.2 1.2-.6.8-2.3.3 3.1 4 4.3 6 4z"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M542 279c13.7 9 29.3 9 43.7-7.6 4.6-5.3 11.7-9.8 16.7-10.3s4.8-5.2 8.6-6.2c-2.4-.7-3.3-3.5-6.9-3.2 9-3.1 6.3-10.2 10.7-13.7-3.6 1.3-9.1-4-14.3 2.8 1.3-3.2-.5-6.9-1.8-8.3.5 3.6-7 4.3-8.4 13.4-.8 5-3.6 4.7-4-3.1-.4-5.8-3.2-21.7-6.5-29.8-3.3-8.1-4.1-19.2.4-21m-33.5 234.4c3 1.5 5.5 3.5 3.9 13-.7 4-.8 13.6 2.7 13.9-2.2 1-6.8 1.9-8.5-.6-2 2.9-6 1.9-7.4-2-2.2 1.7-5-1.3-5-3.9-1.8 1.2-5.5-.7-4.3-6.4-2.3.7-5.2-1-6.2-2.5 3.3-.5 11.9-4.7 14-8.2 2.2-3.5 7.4-5 10.8-3.3z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M544.7 452.7c1-1.3 1.6-6.9 1-10.3m-8.4 8.4a15.7 15.7 0 005.1-8.2m-10 4.3c2-.8 6.7-6.5 7.8-10.2m-12.2 3.7a26 26 0 0012.1-9"
      />
      <path
        fill="#f7e017"
        stroke="#000"
        strokeWidth={0.6}
        d="M506.2 250.6c-.4 24.5 9.7 36.8 23.8 44.8-5.2-3-3-13.8-10-17.3 1.7 0 4.3 2.3 8.5 1.3-2-4.5-5.4-11.4-13.1-12.3 2-.3 6.4.4 9.2-.6-4-6.2-14.7-3.3-18.4-15.9zm-2.6-23.2c-.8-.3-1.6-1.1-2.3-2.3-3.7.8-5.2-1.5-5.5-3.2.2 2.8-2.1 2.7-3.2 2.8 6.7 5.5 7.7 12 6.2 15.7-2 4.7-8.6 4.5-12.4 1.4-.5 10.1 12.6 13.5 17.4.7 0 2.2 2.7 2 3.4 4.8 3.4-5.5.9-13.4-3.6-19.9z"
      />
      <path
        fill="#cf142b"
        stroke="#000"
        strokeWidth={0.6}
        d="M487 150.7c0-2.2 3.6-5 8.6-5 6 .2 10.7 5.6 15.5 5.1 4.8-.5 2.5 2.1 1.4 2.9-1 .7-1.6 1.8-1.2 3 .4 1.4-.3 2.2-2.2 1-4.3-2.7-8.6 1-14.3-1-4.9-1.8-7.7-2.8-7.8-6z"
      />
      <path
        fill="#96877d"
        stroke="#000"
        strokeWidth={0.6}
        d="M462.5 207a36.5 36.5 0 00-15.9-17.7l-.2-4a53 53 0 0010.7-8c17.9 8.5 42.2-3.6 53.4-16.3l4.3 2.7-2.2 2.8-2.2-1.2c-2.8 3.4-13 13-16.1 15a61 61 0 0011.4 1.7c10-7.1 17.9-13.6 21.7-14l3.2 4.2-2.9 2-2.2-1.2a114.6 114.6 0 00-27.7 41c-6.6-1.5-30.5-.5-35.3-7.1z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M463.4 204.3c-1.6-8.9 1-18.7 5.5-21.7a35.6 35.6 0 0036.8-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.6}
        d="M463.4 199.6c7.6-.2 24.2 1.1 28.3 1.7 4 .6 10.8 2.3 9.8 4.3m-34.6-7.2l2.2-2.2-2.2-2.2-2.2 2.2 2.2 2.2z"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M472.1 154c-2.7-3.8-10.3-5-11.9.1-.7 2.3-1.8 4.7-3.6 5.8-1.7 1-1.3 4.3-.6 5.7 2 3.4.3 6.7 4 9 0-2.7 4-5.6 7.5-6.3 3.4-.7 8.7-3.8 9.4-7.2.7-3.5 1.9-6.4-4.8-7z"
      />
      <path
        fill="#96877d"
        stroke="#000"
        strokeWidth={0.6}
        d="M455 188.3h.9v6.5l.6.3 5.6-3.2.5.9-5.7 3.2a1.7 1.7 0 010 .6l5.7 3.3-.5.8-5.7-3.2"
      />
      <path
        fill="#337321"
        stroke="#000"
        strokeWidth={0.6}
        d="M450.7 215c-.7-.8-2-3.1-2-4.8a6.2 6.2 0 014.1 1.6c-.1-1.2-.6-3.8-.3-5 1.3.5 4 2 5 3.8"
      />
      <path
        fill="#f7e017"
        d="M490.5 151.9c0-.9 2-2.9 5.5-2.8 4.2 0 8 3 11.4 2.9 3.4-.3 1.7.8 1 1.1-.7.3-1 .8-.8 1.3.2.5-.2.9-1.6.4-3-1.1-6 .4-10-.5-3.4-.7-5.4-1-5.5-2.4z"
      />
      <g stroke="#000" strokeWidth={0.6}>
        <path
          fill="#f7e017"
          d="M454.4 222.2c-3.6 4.2-7.2 3.5-7.9.8-.7-2.8 2-4 1-6.5-1-2.3 1.5-3.4 2.7-2.3 1.2 1 5-2.4 6.7 1.2 1.6 3.5 3 6 2 7.5-1 1.4-3.8.7-4.5-.7zm15.3-6.5c-.7-1.5 3-4.6 5-2.4 1.9 2.1 4.9-2.4 6.5 1 1.7 3.4 2.2 5.2 3 7.1.9 2-4.5 3-6.1 1.3.2 1.1-4.7 2-6-1.2l-2.4-5.8zm24.8 2c-.9-1.7 3.5-4 5.7-1 .6-1.3 5-1.5 5.2 2.1l.5 7.2c.1 1.5-2.6 2.8-4.5-.9-3.5.8-5.2-1.2-5.6-3.3a17 17 0 00-1.3-4.1z"
        />
        <path
          fill="#337321"
          d="M456.7 215.3c-.6-1.2 3-3.6 5.4-1.8 2.5 1.8 5.9-1.5 7.3 1.7 3 6.5 3.1 7 2.2 8.2-.9 1.3-4.7.8-5.6-1-.2 1.2-3.5 1-5.2.1-2-1-3.4-5-4.1-7.2zm25 .3c-.8-1.8 4.8-3.4 7.2-.2 1.3-1.2 4-1.2 5.6 2.3 1.5 3.5 1.8 5.5.6 6.4-.8.6-3.6 1-4.6-.5-1.3.8-5.4.1-6.3-2.1-.8-2.3-1.6-4.3-2.4-6zm23.8 3.5c-.2-1.6 2.9-2.4 4 0 1.1 2.5 4.8.3 5 4.3a9 9 0 01-1.5 5.2c-1.1 1.4-6.6 0-7-3"
        />
        <path fill="none" d="M454.4 222.2c-1.3-1.8-3.1-4.7-5.4-1.6m17 1.8" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const PNFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

PNFlagIcon.displayName = 'PNFlagIcon';
