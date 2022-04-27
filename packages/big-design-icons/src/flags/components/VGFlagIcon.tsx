// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'VG flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="VGFlagIcon__a">
          <stop offset={0} stopColor="red" />
          <stop offset={1} stopColor="#ff0" />
        </linearGradient>
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -94.7 29.2)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__c"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -94.7 30.2)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__d"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -98 31)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__e"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -94.7 32)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__f"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -94.8 32.8)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__g"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -94.8 33.8)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__h"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -98 33.7)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__i"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -98 32.8)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__j"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -98 32)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__k"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.8281 0 0 1.8726 602.8 148.2)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__l"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -98 30.1)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__m"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <linearGradient
          gradientTransform="matrix(.64274 0 0 1.4534 -95.3 31)"
          gradientUnits="userSpaceOnUse"
          id="VGFlagIcon__n"
          x1={103.1}
          x2={92.5}
          xlinkHref="#VGFlagIcon__a"
          y1={111.3}
          y2={107.8}
        />
        <clipPath id="VGFlagIcon__b">
          <path d="M0 0h640v480H0z" fillOpacity={0.7} />
        </clipPath>
      </defs>
      <g clipPath="url(#VGFlagIcon__b)">
        <path d="M0 0h960v480H0z" fill="#006" />
        <path d="M0 0h350v175H0z" fill="#006" fillRule="evenodd" />
        <g strokeWidth="1pt">
          <path d="M0 0v19.6L310.9 175H350v-19.6L39.1 0H0zm350 0v19.6L39.1 175H0v-19.6L310.9 0H350z" fill="#fff" />
          <path d="M145.8 0v175h58.4V0h-58.4zM0 58.3v58.4h350V58.3H0z" fill="#fff" />
          <path
            d="M0 70v35h350V70H0zM157.5 0v175h35V0h-35zM0 175l116.7-58.3h26L26.2 175H0zM0 0l116.7 58.3H90.6L0 13V0zm207.3 58.3L323.9 0H350L233.3 58.3h-26zM350 175l-116.7-58.3h26.1L350 162v13z"
            fill="#c00"
          />
        </g>
        <path
          d="M378.5 154.5l219.3-.9-.4 195.4s7.7 29.7-92 74.9c35.9-3.7 75-42 75-42s15.8-20.3 23.5-9a87 87 0 0020.8 21.7c5.7 4.4 10.2 16.6 1.6 25.6-8.5 9-22 10.2-25.6-.8-5.7 2.8-40.7 45.2-112.3 47.2A159 159 0 01375.6 419s-9.7 15.4-23.6 3.2c-13.4-15.8-3.2-26-3.2-26s11.4-6.5 14.6-11c5.3-6.1 7-14.2 15.9-14.2 10.6.8 14.7 9.3 14.7 9.3s36.6 38.7 76 43.5c-89-42.7-92.3-69.1-92-75.6l.5-193.7z"
          fill="#fff"
          fillRule="evenodd"
        />
        <path
          d="M383.8 159.7l209.1-1.2v188c.4 24.4-40.7 49.3-105 81-66.3-34.2-104.5-55-105-81.4l.9-186.4z"
          fill="#006129"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.7}
        />
        <path d="M409 366.9l12.3-18.1 12.4 18.1" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M423.7 360.1a2.5 2.5 0 11-4.9 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M411.2 380.3h19.2s.3-2.4-2-4c10-1.3 7.4-10.2 15.8-10.7 1.6.3-4.4 3.8-4.4 3.8s-5 3.6-2.8 5.4c1.9 1.4 2.7-.9 3-2.7.2-1.7 8-2.8 7-7.9-2-4-13 2.8-13 2.8h-7.8c-.5-1-2.7-4.5-5-4.5-2.6.1-4.4 4.5-4.4 4.5H399s-.6 4.6 8.4 5.5c2 2.6 3.6 3.4 5.3 4-1.1 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M412.6 376.4h16m-23.3-9.4s1.3 7.5 7.2 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__c)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(316.6 141.4) scale(1.3225)"
        />
        <path
          d="M423.5 349.2a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M408.2 329.6l12.4-18.2 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M423 322.8a2.5 2.5 0 11-4.9 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M410.5 343h19.2s.3-2.4-2-4c10-1.3 7.4-10.2 15.8-10.7 1.6.3-4.4 3.8-4.4 3.8s-5 3.5-2.8 5.4c1.9 1.4 2.7-1 3-2.7.2-1.7 8-2.9 7-7.9-2-4.1-13 2.8-13 2.8h-7.8c-.5-1-2.7-4.5-5-4.5-2.6.1-4.4 4.5-4.4 4.5h-17.8s-.6 4.6 8.4 5.4c2 2.7 3.6 3.4 5.3 4.1-1.1 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M412 339h15.9m-23.3-9.3s1.3 7.4 7.2 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__d)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(316 104) scale(1.3225)"
        />
        <path
          d="M422.8 311.9a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M539.4 295.6l12.3-18 12.4 18" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M554.2 288.9a2.5 2.5 0 11-4.9 0 2.5 2.5 0 014.9 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M541.7 309l19.1.1s.3-2.5-2-4c10-1.4 7.5-10.2 15.9-10.7 1.6.2-4.4 3.8-4.4 3.8s-5 3.5-2.8 5.3c1.9 1.5 2.7-.8 2.9-2.6.3-1.8 8.2-2.9 7-7.9-1.9-4.1-12.9 2.8-12.9 2.8h-7.9c-.4-1-2.6-4.5-4.9-4.5-2.6 0-4.5 4.5-4.5 4.5h-17.8s-.6 4.5 8.4 5.4c2 2.7 3.6 3.4 5.4 4-1.2 1-1.5 2.3-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M543 305.2h16m-23.2-9.4s1.3 7.4 7.1 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__e)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(447 70.1) scale(1.3225)"
        />
        <path
          d="M554 278a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M411.3 259.4l12.3-18.2 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M426.1 252.6a2.5 2.5 0 11-4.9 0 2.5 2.5 0 014.9 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M413.6 272.8h19.1s.3-2.5-2-4c10-1.4 7.5-10.2 15.9-10.7 1.6.3-4.4 3.8-4.4 3.8s-5.1 3.5-2.8 5.4c1.8 1.4 2.6-1 2.9-2.7.2-1.7 8.1-2.9 7-7.9-1.9-4.1-12.9 2.8-12.9 2.8h-7.9c-.5-1-2.6-4.5-4.9-4.5-2.6.1-4.5 4.5-4.5 4.5h-17.8s-.6 4.6 8.4 5.4c2 2.7 3.6 3.4 5.4 4.1-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M415 268.9h16m-23.3-9.4s1.3 7.4 7.1 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__f)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(319 33.8) scale(1.3225)"
        />
        <path
          d="M425.9 241.7a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M411.6 223.7l12.3-18.1 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M426.4 217a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M413.9 237.1H433s.3-2.4-2-4c10-1.3 7.4-10.1 15.8-10.6 1.7.2-4.4 3.7-4.4 3.7s-5 3.6-2.7 5.4c1.8 1.4 2.6-.9 2.9-2.6.2-1.8 8.1-3 7-8-1.9-4-13 2.8-13 2.8h-7.8c-.5-.9-2.7-4.4-4.9-4.5-2.6.1-4.5 4.5-4.5 4.5h-17.8s-.6 4.6 8.4 5.5c2 2.6 3.6 3.4 5.4 4-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M415.3 233.2h15.9m-23.2-9.4s1.2 7.5 7.1 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__g)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(319.3 -1.8) scale(1.3225)"
        />
        <path
          d="M426.2 206a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M412.2 187.5l12.4-18.1 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M427 180.8a2.5 2.5 0 11-4.8 0 2.5 2.5 0 014.9 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M414.6 201h19s.4-2.5-2-4c10.1-1.4 7.5-10.2 16-10.7 1.5.2-4.5 3.7-4.5 3.7s-5 3.6-2.7 5.4c1.8 1.5 2.6-.9 2.9-2.6.2-1.8 8-2.9 7-8-2-4-13 2.8-13 2.8h-7.8c-.5-.9-2.7-4.4-5-4.4-2.6 0-4.4 4.5-4.4 4.5h-17.8s-.6 4.5 8.4 5.4a10.8 10.8 0 005.4 4c-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M416 197h15.9m-23.3-9.4s1.3 7.5 7.2 9.3" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__h)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(320 -38) scale(1.3225)"
        />
        <path
          d="M426.9 169.9a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M540.4 188.1l12.3-18.1 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M555.2 181.3a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M542.7 201.5h19.1s.3-2.4-2-4c10-1.3 7.4-10.1 15.8-10.6 1.7.2-4.4 3.7-4.4 3.7s-5 3.6-2.7 5.4c1.8 1.4 2.6-.9 2.9-2.6.2-1.8 8.1-3 7-8-1.9-4-13 2.8-13 2.8h-7.8c-.5-.9-2.6-4.4-4.9-4.4-2.6 0-4.5 4.4-4.5 4.4h-17.8s-.6 4.6 8.4 5.5a10.8 10.8 0 005.4 4c-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M544 197.6h16m-23.3-9.4s1.3 7.5 7.2 9.3" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__i)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(448 -37.4) scale(1.3225)"
        />
        <path
          d="M555 170.4a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M539.2 223.6l12.3-18.1 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M554 216.8a2.5 2.5 0 11-4.9 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M541.5 237h19.1s.3-2.4-2-4c10-1.3 7.5-10.1 15.9-10.6 1.6.2-4.4 3.7-4.4 3.7s-5 3.6-2.8 5.4c1.9 1.5 2.7-.9 2.9-2.6.3-1.8 8.2-2.9 7-8-1.9-4-12.9 2.9-12.9 2.9h-7.8c-.5-1-2.7-4.5-5-4.5-2.6 0-4.5 4.4-4.5 4.4h-17.8s-.6 4.6 8.4 5.5c2 2.7 3.6 3.4 5.4 4-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M542.9 233.2l16-.1m-23.3-9.4s1.3 7.5 7.1 9.3" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__j)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(446.9 -1.9) scale(1.3225)"
        />
        <path
          d="M553.8 206a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M537.6 260l12.4-18.2 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M552.4 253.2a2.5 2.5 0 11-4.9 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M540 273.3h19s.4-2.4-2-4c10.1-1.3 7.5-10.1 15.9-10.6 1.6.2-4.4 3.7-4.4 3.7s-5 3.6-2.8 5.4c1.9 1.5 2.7-.9 3-2.6s8-2.9 7-8c-2-4-13 2.8-13 2.8H555c-.5-.9-2.7-4.4-5-4.4-2.6 0-4.4 4.4-4.4 4.4h-17.8s-.6 4.6 8.4 5.5a10.8 10.8 0 005.3 4c-1.1 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M541.3 269.4h16M534 260s1.3 7.4 7.2 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__k)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(445.3 34.4) scale(1.3225)"
        />
        <path
          d="M552.2 242.3a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M539.2 367.3l12.3-18.2 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.3} />
        <path
          d="M554 360.5a2.5 2.5 0 11-4.9 0 2.5 2.5 0 014.9 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M541.5 380.7h19.1s.3-2.5-2-4c10-1.3 7.5-10.2 15.9-10.7 1.6.3-4.4 3.8-4.4 3.8s-5 3.5-2.8 5.4c1.9 1.4 2.7-1 2.9-2.7.3-1.7 8.2-2.9 7-7.9-1.9-4.1-12.9 2.8-12.9 2.8h-7.9c-.4-1-2.6-4.5-4.9-4.5-2.6.1-4.5 4.5-4.5 4.5h-17.8s-.6 4.6 8.4 5.4c2 2.7 3.6 3.4 5.4 4.1-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M542.9 376.8h16m-23.3-9.4s1.3 7.4 7.1 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M814.5 330.3c.6-2.8 1.6-3.3 2.8-6.8.2-3.5-2.8-3-2-5.3 1.6-2.4.8-4.7-2-6.5.5 3.2-3.8 6.1-3.8 8.7 0 2.6 2.2 2 2 6 .1 2.2-.6 1.7-.8 3.9h3.8z"
          fill="url(#VGFlagIcon__l)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
          transform="translate(-301.5 28.3) scale(1.0265)"
        />
        <path
          d="M553.8 349.6a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M539 331.4l12.3-18.2 12.4 18.2" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M553.8 324.6a2.5 2.5 0 11-4.9 0 2.5 2.5 0 015 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M541.3 344.8h19.1s.3-2.5-2-4c10-1.4 7.5-10.2 15.9-10.7 1.6.2-4.4 3.8-4.4 3.8s-5 3.5-2.8 5.3c1.9 1.5 2.7-.8 3-2.6.2-1.7 8-2.9 7-7.9-2-4.1-13 2.8-13 2.8h-7.9c-.4-1-2.6-4.5-4.9-4.5-2.6 0-4.5 4.5-4.5 4.5H529s-.6 4.5 8.4 5.4c2 2.7 3.7 3.4 5.4 4.1-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M542.7 340.9h16m-23.3-9.4s1.3 7.4 7.2 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__m)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(446.7 105.8) scale(1.3225)"
        />
        <path
          d="M553.6 313.7a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M434.7 298l12.3-18.1 12.4 18.1" fill="none" stroke="#f7c600" strokeWidth={1.7} />
        <path
          d="M449.5 291.2a2.5 2.5 0 11-4.9 0 2.5 2.5 0 014.9 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path
          d="M437 311.4h19.1s.3-2.4-2-4c10-1.3 7.5-10.2 15.9-10.7 1.6.3-4.4 3.8-4.4 3.8s-5 3.6-2.8 5.4c1.8 1.4 2.6-1 2.9-2.7s8.1-2.8 7-7.9c-1.9-4-12.9 2.8-12.9 2.8H452c-.5-1-2.6-4.5-4.9-4.5-2.6.1-4.5 4.5-4.5 4.5h-17.8s-.6 4.6 8.4 5.4a10.8 10.8 0 005.4 4.1c-1.2 1-1.5 2.2-1.5 3.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <path d="M438.4 307.5h16M431 298s1.2 7.5 7.1 9.2" fill="none" stroke="#000" strokeWidth={0.8} />
        <path
          d="M66.3 170.5c.5-2.1 1.3-2.5 2.2-5.2.1-2.7-2.2-2.4-1.5-4.1 1.2-1.9.6-3.6-1.6-5 .4 2.4-3 4.7-3 6.7s1.8 1.6 1.6 4.6c0 1.8-.5 1.3-.6 3h3z"
          fill="url(#VGFlagIcon__n)"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.6}
          transform="translate(342.4 72.5) scale(1.3225)"
        />
        <path
          d="M449.3 280.3a2.3 2.3 0 11-4.5 0 2.3 2.3 0 014.5 0z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.8}
        />
        <g stroke="#000">
          <path
            d="M500.7 384.2s5 11.5 10.7 4.4 3.6-10.1 3.6-10.1l-12.7-7-3.8 8 2.2 4.7z"
            fill="#f7c600"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M511.7 382.6s.8.2 1.5-1-1.5-1.9-2.5-3.3l-1 2.3 2 2zm-28.9-3l-11.2 6.1s-5.6 1.1-6 0c-.4-1.1.2-2 3-2.2 3-.2 10.9-7.4 10.9-7.4l3.3 3.5zm.2-199.7l.4 4c.1 1.4-2.2 4.4-2.4 4.2s-1.2.2-1 1 1.7 1.1 1.7 1.1-.7 3 0 3c.7.2-1.8 3.8 0 4.8s4.9 2.2 6.3 2c1.4-.4 0 5.3 0 5.3l-4 8.3 21.5-2.2-4.5-7s-2-1.4-1.5-5.5c.6-4-.3-22.2-.3-22.2l-15.2-2-1 5.2zm-4 31.7s-6.9 3.2-6.6 11.8c-1.8 8.3-2.7 16.6-2.7 16.6s-8.2 9.3-10.7 12.6-6.3 10.2-7.7 12-6.8 7.7-6.6 10c.1 2.2-1.3 12 4.1 13.1 1.4.6 5.9-11.3 5.9-11.3s.2-5.2-1.3-6.1 3.3-4.3 3.3-4.3l11.4-8.5c2.1-1.7 7.8-8 7.8-8l3.2-38z"
            fill="#ffc6b5"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M487 205s1.8 4.9 5.8 4c4-.8 8.8-4.5 8.8-4.5s3.7-.1 4.3.4c.5.6 10.1 9.9 9.8 12.8-.3 2.9-4.4 2-6 4s-4 6.8-3.3 10.4 2.8 8.3 2.5 10.1-1.8 2.4-1.8 3.4 1.3 2.6 1.3 4.4-1.7 4.4-1.4 6.3c.3 1.7.4 7 .4 7l-.4 24.4s1.4.9 1.5 2.3c.1 1.4 9.4 41.7 9.4 41.7s-.4 1.3-1.4 1.1 3.8 6.3 4 8 4.8 16 4.7 18c-.2 2-.9 6.2-1.3 6.4-.4.1 3 8.9 2.5 10.2-.6 1.4-6.2 1.3-6.2 1.3l-1.6-.3s.2 1.8-1 2-9.2-.5-9.2-.5-2.4 3.6-3.8 3.5c-1.4-.1-3.2-2.6-3.6-2.2-.4.4 1.3 2.8.8 3.5-.4.7-7.5 2.2-8.8-1.2-1.4-3.3.8-2.5.4-3.2-.4-.6-3.6-2.4-4.6-1.9s2.5 1.4 2.4 2.8c-.2 1.4-3 3.5-4.2 3.5s-3.8-5.2-7.6-4.6c-4 .5-6.4 1.5-6.4 1.5s-4.6 2-6.5 1.5c-2-.4-2.8-2-2.8-2.8 0-.8 1.4-4.4 1.2-5.5s-1.2-2.2-1.2-3.9c0-1.6 3.2-7.3 3.2-7.3l-.2-25.6s-2.9 0-3-1.8 4.4-40.4 5.1-42.9c.7-2.5 2.5-11.3 2.5-11.3s-2 1-2.2 0 6.2-23 6.2-23 1.1-11 1.1-14c0-2.9-.5-6.9-.5-6.9s-5.7-2.4-5.8-6c-.6-6 5.4-9.2 6-11.2l2.8-7.8s3.1-5.2 8.1-6z"
            fill="#fff"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M485 381.3s-13.5 7-15.5 7.6c-2 .6-3.2-2.4-1.2-3 2-.5 5-.8 5-.8s-4.6-3.6-4.5-3.7l6.4-2.4c.1 0 2 3.6 3.2 3.4s4.9-3 4.9-3l1.6 1.9z"
            fill="#f7c600"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M503.9 385.1c1.3 1.7 1.8 4.5 4.7 2.9s-1.5-4.8-1.5-4.8l-3.2 2zm5.3-.2s1.4 1 2.6-.2-2.5-3.9-2.5-3.9l-1.8 2.1 1.7 2z"
            fill="#ffc6b5"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M505 210.5s-12.3 7.9-12 10.6m14.8-9.3L505 215m6.7.3s-6.1 5-5.2 8.2m-23.7-13.6s-1.8 3.7-1.4 5c.4 1.2 3.5 6 3.9 8.8.4 3 0 5 0 5m-5.7-11.9s.6 4.4 1.4 5.3c.8.8 3 4.6 3.3 6m-5.8 7.2s3.6 1.8 7-5.2m5.3-4.8c-.1 0-2.6 6.8 1.8 9.3s7.8 2.2 9.8 1.5c1.9-.7 4-2 4-2m-17.5-.5s.3 9.2 13.8 18.2m-13.2-9.6s-.2 8 5.1 11.7m-8-21.1s-4 11.9-7.1 13.1m6-4.4s-.2 8.6-1.3 11.7m-1.1 2s2.8 3.5 5.8 3.2c3-.2 4.3-3.9 6.4-3.3 2 .6 4 2.2 8.9 1.8m-7 3.6s0 7 1.3 7.8.7 7.2.7 7.2m-19-18.5s-.1 6.6-1 9c-.8 2.4-2.5 6.4-2.2 9.8m-5.3 4c.7-.3 3-2.4 3-2.4m1.3 1.5s-6 25.5-4.3 40.8m5.7-39.5s-3 19.1-1.6 22.7m.1-23.3l11.7.8m1.6-1.5s3.2 1.7 7.6 1.4m-9 7.9s-.5 32.7-1.4 40m18.5-32.5s3.6 28.7 5.7 31.3M498 299.4s2.2 25.4 3.4 27.6m-35 8.9s4.4-1.4 8.3-5.6c4.4 6 11.2.3 11.2.3s10.5 7.2 15.3-.8c7.2 4.7 10.8-.7 10.8-.7s2.6 4 4.6 3.6m-11.6 2.8s5.5 25.4 13.5 32.6m-41.3-35.3s.7 21.3 1.9 36.2m-3-12.2s-.6 14-1.4 14.9M468 373s1.5 6 9.2.4 7.7 2 8 3c.3.7 1.5 6.7 4.4 1.7m6.1-8.2s-1.2 12.4 9.8 3.3c11-9 12.7 0 13 2.7"
            fill="none"
            strokeWidth={0.8}
          />
          <path
            d="M482.6 179.1s3 .4 4.7-.6c1.6-1 3.6-1.4 5 .6s2.3 1.8 2.3 1.8-2 5.1 0 5.7c2.1.6 3 .6 3.2 1.2.2.7-1.8 2.3-1.2 3 .5.6 1.5 1.5 1.6 2 .2.6-1.2 3-.8 3.5.4.6 1.7 2.8 2.5 2.8s.3 3.5 2.8 2.6 2.3-3 2.3-3 2.7-.4 3.4-2.8c.7-2.4 2.3-3 2.3-3s3.4-1.7-1-4.5c0-19.4-12.8-17.4-12.8-17.4s-1.6-3.4-4-3c-2.6.4-2.7 3.3-4.5 3-1.8-.2-2.2-1.5-2.4-1.3-.1.1-1.6 2.9-1.6 3.6 0 .7-4.9-1-4.5 2.6s2.8 3.5 2.7 3.2z"
            fill="#9c5100"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path
            d="M495.9 174.4s-1 6 5.5 5.5c-.8 3.4 1.7 4.5 1.7 4.5m4.8 3.7c.2 0 3 1.8 0 4m-9.4.9s1.4 1.6 3 1.2c1.5-.4 4 1.6 4 1.6s2 .7 2.3.2m-17.7 2.3s4.7 1.8 7.7-5.7m-16.5-2.3l2.8.2"
            fill="none"
            strokeWidth={0.8}
          />
          <path d="M481.7 193.1h2.5l-2.2 1" fill="none" strokeLinejoin="round" strokeWidth={0.8} />
          <path
            d="M485.2 185.3c.4 0 2-.5 2.2 0 .3.3-1.6.6-2.2 0z"
            fill="none"
            strokeLinejoin="round"
            strokeWidth={1.4}
          />
          <path
            d="M515.2 218.3c.1 0 4.5 13.7 5.1 17.2a112 112 0 011.7 19.3c-.7 2-7.8 11.2-8.6 13.6-.9 2.4-5.9 11.4-5.9 11.4s-1.2 8.9-1.8 9.3c-.5.4 1.5 2.6 1.3 3.3-.3.8-4 4.7-5.7 4.3-1.7-.4-4.3-2.4-4.4-4.2s0-7.7 1.3-9.3 7.8-16.9 8.2-17.9c.4-1 6-13 6.1-15 .2-2.2-1.7-7-3.7-8.7-4.3-12.9-2.6-20.6 6.4-23.3z"
            fill="#ffc6b5"
            fillRule="evenodd"
            strokeWidth={0.8}
          />
          <path d="M450.5 277.8l.2 6.1m-5.9-6.5s4 6.5 3.6 10" fill="none" strokeWidth={0.8} />
          <path d="M497 291s3-.3 2.9 4.6c1.9-6 5.7-6.2 5.7-6.2" fill="none" strokeLinejoin="round" strokeWidth={0.8} />
        </g>
        <path
          d="M487.1 430c58.6-1.7 96.5-44 96-44.4-.4-.4 7.8-11.8 14.3-10.2 6.5 1.6 15.9 20.8 27.3 24.8 5.7 9-1.7 17.1-4.1 18.8-2.5 1.6-13.4 6-15-.4-1.7-6.6-5-5.3-5-5.3s-52 50.8-112.3 48.8c-62.2.4-113.5-48.8-113.5-48.8l-4.5 4.8s-4.9 5.3-7.3 5c-2.4-.5-13-7.4-13.8-14.3-.8-7 6.5-11.4 6.5-11.4s17.9-13.8 20-21.2c4-4 11.7 2.9 11.7 2.9s47.2 54.1 99.7 50.8z"
          fill="#f7c600"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.7}
        />
        <path d="M354.5 398.5s4.8-1.3 6.6.7c1.8 2 14 14 14 14" fill="none" stroke="#000" strokeWidth={1.7} />
        <path
          d="M365.5 404.1l-4.8 3.6s12.2 2.5 9.4 10.5M620.3 398s-2.4-1.3-6.2 1.5a158.5 158.5 0 00-13.4 13.6"
          fill="none"
          stroke="#000"
          strokeWidth={1.7}
        />
        <path d="M609.4 403.8l5.3 4s-11 .8-8.6 11.2" fill="none" stroke="#000" strokeWidth={1.7} />
        <path d="M416.5 411.4l-.4.5a3.6 3.6 0 00-2.5-.2c-.7.2-2 .8-3.9 2l-16.1 9.3-.4-.3 4-18.8c.5-2.3.7-3.7.7-4.2s-.4-1-1-1.6l.3-.5 8.7 6.2-.3.5-.3-.2c-.8-.5-1.4-.8-1.8-.8a.8.8 0 00-.8.3 2.4 2.4 0 00-.3.7l-.5 2.3-2.6 11.7 9.3-5.4a26 26 0 002.2-1.4l.8-.8c.2-.2.3-.5.3-.8l-.3-1a5.2 5.2 0 00-1.4-1.3l.4-.5 5.9 4.3m5.8 28l-.3.5-10.2-5.6.3-.5.6.4c.6.3 1.1.4 1.6.4.3 0 .6-.1 1-.4l1-1.7 7-12.8c.6-1 1-1.7 1-2a1.6 1.6 0 00-.3-1 3 3 0 00-1.2-1l-.6-.4.3-.5 10.2 5.6-.3.5-.7-.3a3 3 0 00-1.5-.5c-.3 0-.6.1-1 .4a6.8 6.8 0 00-1.1 1.7l-7 12.9a7.3 7.3 0 00-1 2c0 .3.2.6.4 1 .2.3.6.7 1.1 1l.7.3m37.3-8.8L457 438l-.6-.2a10 10 0 00-1.5-5.7 7.8 7.8 0 00-4-3.2 6.2 6.2 0 00-4.3 0 7.5 7.5 0 00-3.5 2.9 19.4 19.4 0 00-2.4 4.6c-.7 2-1.1 3.8-1.2 5.5s.3 3.1 1.1 4.2a7 7 0 003.4 2.4 8.6 8.6 0 001.6.4l1.8.1 1.6-4.4.4-1.6c0-.3-.2-.6-.5-1a2.8 2.8 0 00-1.2-.7l-.5-.2.2-.6 10.2 3.7-.2.6c-.8-.3-1.4-.4-1.8-.3-.3 0-.7.2-1 .5l-.6 1.4-1.6 4.4c-1.5.1-3 0-4.6-.2a22.8 22.8 0 01-4.7-1 14.1 14.1 0 01-4.7-2.7 13.6 13.6 0 01-2.7-3.3 10.9 10.9 0 01-1.3-3.9 11 11 0 01.6-5.1 11.4 11.4 0 016.2-6.8 12 12 0 019.5-.3c1 .3 2 .8 2.8 1.2l2 1.5a10 10 0 001.5 1.2h1a3 3 0 001-1l.6.2m15.7 25.3v.6l-11.6-1.8.1-.6.8.1a3 3 0 001.6 0l.7-.7c.2-.3.3-1 .5-2l2.2-14.5c.2-1.2.2-1.9.1-2.2a1.6 1.6 0 00-.6-.8c-.3-.3-.8-.5-1.4-.6h-.7v-.7l11.6 1.8-.1.6-.7-.1a3 3 0 00-1.6 0l-.8.7a7 7 0 00-.5 2l-2.2 14.5a7.3 7.3 0 00-.1 2.2c0 .3.3.6.6.8.3.3.8.5 1.4.6h.7m30-7.2l-.5 7.9-19.8 1v-.6h.7a3 3 0 001.6-.5c.3-.2.5-.4.6-.8v-2l-.7-14.7a7.3 7.3 0 00-.3-2.1c-.1-.3-.4-.5-.7-.7-.4-.2-1-.3-1.5-.3h-.8v-.6l11.9-.6v.6l-1 .1a3 3 0 00-1.5.4c-.3.2-.5.5-.6.8-.2.3-.2 1-.1 2.1l.7 14.2c0 1.1.2 1.8.3 2.2.2.3.4.5.8.6h3.9a6.3 6.3 0 002.9-.8 5.5 5.5 0 002-2c.4-1 1-2.4 1.4-4.1h.6m21.6-3.8l-7.5 2.2-.3 2.4v1.8c.3.6.6 1 1.2 1.1.3.1 1 0 2.2-.2l.2.6-7.1 2-.2-.5a3.3 3.3 0 001.6-1.5c.4-.7.6-2 .9-3.8l2.5-19.3h.3l13 15.1c1.2 1.5 2 2.3 2.7 2.6.4.2 1 .3 1.7.1l.1.6-10.3 3.1-.2-.6.5-.1c.8-.3 1.4-.5 1.6-.9a.9.9 0 00.1-.8 2 2 0 00-.2-.6l-.8-1-2-2.3m-.9-1l-5.3-6.4-1.1 8.3 6.4-2m28.5-29l2.9 5.4-.6.3a9.3 9.3 0 00-2.4-2.1 4.5 4.5 0 00-2.2-.5 5 5 0 00-2.1.8l-1.5.8 8.2 15.1 1.1 1.8c.3.2.6.3 1 .3.5 0 1-.1 1.5-.4l.7-.4.3.6L551 442l-.3-.5.7-.4a3 3 0 001.2-1l.2-1c0-.3-.3-1-.8-2l-8.2-15-1.4.7c-1.3.7-2.1 1.5-2.4 2.4a6.3 6.3 0 00.2 4.2l-.6.3-2.8-5.4 17.6-9.4m13.4-8l5.4 7.3.4-.3c1.1-.8 1.7-1.8 1.6-2.9s-.5-2.4-1.4-3.9l.5-.3 7 9.3-.4.4a8.6 8.6 0 00-2.6-2 3.5 3.5 0 00-2.1-.4c-.7 0-1.4.4-2.2 1l3.7 5a9.6 9.6 0 001.5 1.8l.9.2c.3 0 .7-.3 1.3-.6l1-.8a8 8 0 003.1-4.2 8 8 0 00-.5-5.2l.5-.3 3.5 6.2-15.4 11.6-.3-.5.6-.4c.5-.4.8-.8 1-1.2v-1a6.8 6.8 0 00-1-1.8l-8.9-11.7-1.2-1.4a1.6 1.6 0 00-1-.4c-.5 0-1 .3-1.6.7l-.6.4-.4-.4 14.9-11.3 4 5.3-.6.4a7.8 7.8 0 00-3.1-2 5 5 0 00-2.9.2c-.6.2-1.6.9-3 1.9l-1.7 1.4" />
        <path d="M380.5 413c72.8 59.1 144.2 60.2 214 0" fill="none" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const VGFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

VGFlagIcon.displayName = 'VGFlagIcon';
