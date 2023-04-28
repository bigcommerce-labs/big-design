// **********************************
// Auto-generated file, do NOT modify
// **********************************

'use client';

import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'IO flag',
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
      <path
        d="M640 416.2c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.7c11.4 0 17.1-23 36.3-23 28.5 0 38 32.4 76 32.4 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.2c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.8c11.4 0 17.1-23.1 36.3-23.1 28.5 0 38 32.5 76 32.5 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.1c-7.2 6.7-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.8c11.4 0 17.1-23.2 36.3-23.2 28.5 0 38 32.5 76 32.5 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.2 32.4-15.8zm0-81.1c-7.2 6.6-13.3 22-32.4 22-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 0-24.8 23.2-36.2 23.2v41.7c11.4 0 17.1-23 36.3-23 28.5 0 38 32.4 76 32.4 19.1 0 28.6-32.5 47.7-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.5-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.5-32.5 47.5-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.3 32.4-15.9zm0-81.3c-7.2 6.7-13.3 22.1-32.4 22.1-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.6 32.5-47.6 32.5-38.2 0-47.7-32.5-76.2-32.5-19 .1-24.8 23.3-36.2 23.3v41.8c11.4 0 17.1-23.1 36.2-23.1 28.5 0 38.1 32.5 76.2 32.5 19 0 28.5-32.5 47.6-32.5 28.6 0 38.1 32.5 76.3 32.5 19 0 28.4-32.5 47.4-32.5 28.7 0 38.2 32.5 76.3 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.1 32.5 76.2 32.5 19 0 28.6-32.5 47.6-32.5 28.6 0 38.2 32.5 76.2 32.5 19 0 25.2-9.3 32.4-15.9v-48zm0-81c-7.2 6.6-13.3 22-32.4 22C569.5 32.5 560 0 531.4 0c-19 0-28.5 32.5-47.6 32.5-38.1 0-47.6-32.5-76.2-32.5-19 0-28.5 32.5-47.5 32.5-38.2 0-47.7-32.5-76.3-32.5-19 0-28.6 32.5-47.6 32.5C198 32.5 188.6 0 160 0c-19 0-28.6 32.5-47.6 32.5C74.2 32.5 64.7 0 36.2 0 17.2 0 11.4 23.2 0 23.2v41.9C11.4 65 17.1 42 36.2 42c28.5 0 38.1 32.4 76.2 32.4 19 0 28.5-32.4 47.6-32.4 28.6 0 38.1 32.4 76.3 32.4 19 0 28.4-32.4 47.4-32.4 28.7 0 38.2 32.4 76.3 32.4 19 0 28.6-32.4 47.6-32.4 28.6 0 38.1 32.4 76.2 32.4 19 0 28.6-32.4 47.6-32.4 28.6 0 38.2 32.4 76.2 32.4 19 0 25.2-9.2 32.4-15.8z"
        fill="#000063"
        fillRule="evenodd"
      />
      <path
        d="M474.8 131.7l-3.5 329c0 17.3 15.7 17.3 17.4 0l-3.5-329z"
        fill="#a24300"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2.1}
      />
      <path
        d="M510.7 254l-11-11.9-2.6 12.1-4.7-17.5-4.5 8.8-.8-18.6-4.4 8.8-.8-18.6-4.4 8.8L475 204l-4.4 8.8L468 191l-4.5 8.8-2.5-21.9-1.3-11 2.2-4.3 5.8 2.1 9.1 8.7 18.3 17.4-11.3-4.3 18.3 17.4-11.4-4.3 18.3 17.3-11.4-4.2 16.6 14-11.3-4.2 16.5 14-11.3-4.2 12.6 15.2-13.1-7.6 3 14.3z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M510.7 254L462 162.6m33.1 28.2L469 175.6l-5.4 24.1"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M502.2 203.8l-26.3-15.1-5.3 24.1" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M509.1 216.8l-26.2-15-5.4 24" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M514.3 226.7l-24.5-11.9-7 21" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M519.5 236.5L495 224.6l-7 21" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M520.8 247.4l-22.3-16.2-1.4 23" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M383 97.9l17.8 6.8-5.2-13.5 15.6 15.3-1.5-11 12.6 18.4-1.5-11 12.6 18.4-1.5-11 16.3 20.8-1.5-11 16.3 20.8-1.4-11 16.2 20.8 8.2 10.4.7 5.5-6.7.6-14-4.3-28.2-8.7 13.3-1.1-28.1-8.7 13.3-1.1-28.1-8.7 13.3-1.2-24.4-6.2 13.3-1.1-24.4-6.2 13.3-1.2-21.5-9.3 17.1 1.3L383.1 98z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M383 97.9l103.7 68.7m-48.9-12.4l34.1 2.6-10.3-26.9"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M423 144.4l34 2.6-10.3-27" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M408.2 134.6l34 2.6-10.3-27" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M397 127.2l30.5.1-6.7-24.4" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M386 119.8l30.4.2-6.7-24.5" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M377.8 109.4l31.1 5.7-13.2-23.9" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M589.8 120.8L575 131.7l16.4 1.8-22.9 5.4 12.2 3.6-24.7 1.8 12.2 3.6-24.7 1.8 12.1 3.7-28.9 3.6 12.2 3.6-28.9 3.6 12.2 3.6-28.9 3.6-14.5 1.8-6-1.8 2.2-5.4 10.7-9 21.3-18.1-4.6 10.8 21.3-18-4.6 10.8 21.3-18-4.6 10.8L553 119l-4.5 10.9 17-16.3-4.5 10.8 19-12.6-8.7 12.7 18.6-3.6z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M589.8 120.8l-117 50.6m34.1-32.5l-17.4 25.3 32.7 3.6"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M523.7 131.7L506.2 157l32.7 3.6" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M540.4 124.4l-17.5 25.3 32.7 3.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M553 119l-13.3 23.5 28.5 5.4" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M565.5 113.6l-13.3 23.5 28.5 5.4" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M580 111.8l-19.4 21.7h30.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M587.4 230.3L569 225l6.6 13-17.1-14 2.6 10.7-14.5-17.2 2.7 10.8-14.5-17.3 2.6 10.8-18.5-19.4 2.7 10.8-18.5-19.4 2.7 10.8-18.5-19.4-9.2-9.7-1.3-5.4 6.6-1.2 14.5 3.2 29 6.4-13.2 2.2 29 6.4-13.2 2.2 29 6.4-13.2 2.3 25 4.2-13.2 2.2 25 4.2L569 211l22.3 7.5h-17l13 12z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M587.4 230.3l-110.6-60.2m50 8.4l-34.2.2 13.2 26"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M542.6 187.1l-34.2.2 13.2 26" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M558.4 195.7l-34.2.2 13.2 26" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M570.3 202.2l-30.3 2.3 9.3 23.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M582.2 208.7l-30.3 2.2 9.2 23.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M591.3 218.4l-31.5-3.2 15.8 22.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M395.2 236.6l9.3-13-14.1 2.1 17.4-9.9-11.1-.5 20-7-11.1-.6 20-7-11.1-.6 23-9.6-11.2-.5 23-9.7-11.1-.5 23-9.6 11.5-4.9 5.6.3-.4 5.3-6.3 10.4-12.6 20.8.8-10.6-12.6 20.8.7-10.7-12.6 20.8.7-10.6-9.6 18.2.7-10.6-9.6 18.2.7-10.6-12.2 15.4 3.7-13.2-14.5 7.4z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M395.2 236.6l83-71m-19.1 36.5l7.3-26.4-28.2 4.1"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M447.2 212.3l7.3-26.4-28.2 4" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M435.3 222.4l7.4-26.4-28.2 4.1" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M426.4 230l4.4-23.8-25.2 1.5" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M417.5 237.6l4.4-23.8-25.2 1.5" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M406 242.4l10-23.5-25.6 6.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M563 66.2l-17.9 12-2.9-12.9-10.5 17.8-2-8.5-8.6 18.2-1.2-8.4-6.7 18.7-3.8-9-6.7 22.7-3.8-9-6.7 22.7-3.9-9-6.7 22.7-3.3 11.4 1.9 4.5 7.2-2.4 12.4-9.2 25-18.4-14.4 4.7 24.9-18.5-14.4 4.8 24.9-18.5-14.4 4.8 25-14.4-17 4L566 83.3l-16.3 4.2 19.7-15.6-17 8.1z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2}
      />
      <path d="M556 72.7l-25.8 22.2-50 65.2" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M519.3 132.8l-28.6 13.5-2.4-20.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M530.2 119.2l-29 13.4-2.3-20.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M540.5 105.5l-28.7 13.4-2.2-20.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M549.1 95.3l-26.8 9.9-3-17" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M559 85.5L530.2 95l-1-16.4" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M562.8 76.2l-26.6 13.6 5.2-20.6" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M466.1 43.8l8 18.2 10.3-9.6-1.7 19.8 6.8-6.4-3.7 19.4 6-6.6-5.5 19 8.7-6-8 22.3 8.6-6-8 22.5 8.7-6-8 22.4-4 11.2-4.4 3-4.8-5.3-5-13.4-10-26.9 9.4 10.5-10.1-27 9.4 10.6-10-27L468 93l-12.5-23.4 12 11.1-14.4-23.9 11.3 11-7.3-22.2 9.6 14.6z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={2}
      />
      <path d="M468.2 52.4l8.5 30.5 3.2 78" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M463 120.2l16.2 24.3 14.7-16.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M462 103.7l16.5 24.4 14.7-16.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M461.5 87.3l16.4 24.4L492.3 95" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M460.4 74.9l16.8 20.4 13-13" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M458 62l18.7 21 11-13.6" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M460.3 52.4l14.4 23.5 8.1-19.9" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M359 178l23.3-16.2-11.7-6 20.5 3.4-7-9.3 19.8 7.5-7-9.3 19.9 7.4-7-9.2 24 8.1-7-9.3 23.3 12.1-7-9.3 24 8.2 11.7 6 3.5 4.6-4.7 3.3-12.9 1.8-20.7 8.6 3.8-7.4-25.7 3.6 9.3-6.4-26.3 7.6 9.4-6.5-22.2 8.3 9.9-10.4-22.8 12.2 10-10.4-18.8 13 10.5-14.4z"
        fill="#006d00"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={1.9}
      />
      <path
        d="M366.3 173.6l24.2-10.5 12.9-1.8 10.7-.2 18.5 1.2 16.7.7 33 3.7"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path d="M447.2 176.9l18.5-11.4-18.8-14.7" fill="none" stroke="#000" strokeWidth={0.3} />
      <path d="M426.5 175.2l22.7-12.2-18.7-14.8" fill="none" stroke="#000" strokeWidth={0.3} />
      <path
        d="M411.7 174.8l20.9-12.5-19-13.7m-29.5 29.6l19.3-16.9-15.6-8.5"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <path
        d="M375.5 179.3l15-16.1-12-4.5m18.4 17.7l19-15.2-15.2-10.4"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
      />
      <g fillRule="evenodd">
        <path
          d="M541.5 1173.3l-1.7-229.1-61.1-107c-15.3-52.6-7.8-78 17-79.8 24.7-1.6 49.2 13.6 84.8 15.3 35.6 1.7 28.9-59.4 81.5-57.7 52.6 1.7 144.3 32.3 222.3 37.4 78.1 5 118.8-27.2 208.8-30.6 90-3.4 113.7 42.4 118.8 42.4 5.1 0 30.6-18.6 56-22 25.5-3.4 34 10.2 34 10.2s-1.7 57.7-13.6 91.6c-11.9 34-54.3 90-56 90-1.7 0-15.3 249.5-15.3 251.2 0 1.7-675.5-6.8-675.5-11.9z"
          fill="#c00"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 215.5)"
        />
        <g stroke="#000" strokeWidth="1pt">
          <path
            d="M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z"
            fill="#fff100"
            transform="matrix(-.12934 0 0 .11906 596.6 257.6)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 594.5 257.4)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 596.8 252.6)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 598 247.6)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 598.9 242.4)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 598.7 236.8)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 591.2 261.7)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 596.7 231.4)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 592.5 227.1)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 586.8 224.3)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 581 223.9)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 575 224)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 568.8 225)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 562.7 225.7)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 556 226.6)"
          />
          <path
            d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
            fill="#fff"
            transform="matrix(-.12934 0 0 .11906 550.4 228.1)"
          />
        </g>
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 369.5 257.4)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.2 252.6)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 366 247.6)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 365.2 242.4)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 365.4 236.8)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.3 231.4)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 371.4 227.1)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 377.2 224.3)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 382.9 223.9)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 389 224)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 395.2 225)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 401.4 225.7)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 407.9 226.6)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 413.6 228.1)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 372.8 261.7)"
        />
        <path
          d="M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 257.6)"
        />
        <path
          d="M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={3}
          transform="matrix(.04311 0 0 .04536 398.7 310.9)"
        />
        <path
          d="M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={3}
          transform="matrix(.04311 0 0 .04536 444.5 310.9)"
        />
        <path
          d="M531.5 832.7V673.2s35.4 53.2 88.6 53.2c43.5 0 88.6-70.9 88.6-70.9s41.5 53.2 88.6 53.2c42 0 88.5-68.6 88.5-68.6s43.2 68.6 88.6 68.6c45.5 0 88.6-53.2 88.6-53.2s46.3 70.9 106.3 70.9c53.1 0 70.9-53.2 70.9-53.2v159.5z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 257.6)"
        />
        <path
          d="M708.7 832.7v-124S815 744 815 832.7z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 344.5 257.6)"
        />
        <path
          d="M708.7 832.7v-124S815 744 815 832.7z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(-.12934 0 0 .11906 619.4 257.6)"
        />
        <path
          d="M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 257.6)"
        />
        <path
          d="M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 413.3 257.6)"
        />
        <path
          d="M584.6 847.5c0-88.6 124.1-159.4 124.1-159.4s124 70.8 124 159.4h-248z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 390.4 255.9)"
        />
        <path
          d="M1275.6 655.5c-35.4-17.7-166-35.4-376.3-35.4s-350 17.7-385.5 35.4c-35.4 17.7-35.4 53.2 0 70.9 35.4 17.7 175.3 35.4 385.5 35.4s340.9-17.7 376.3-35.4c35.4-17.7 35.4-53.2 0-70.9z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12788 0 0 .11906 367 278.7)"
        />
        <path
          d="M527.9 365.2c0 4.2-38.2 4.2-45.9 4.2-8.3 0-45.8 1.2-45.8-4.2 0-4.2 37.8-4.2 45.8-4.2s45.9.8 45.9 4.2z"
          fill="gray"
        />
        <path
          d="M440.8 350c0 1.4-1 2.6-2.3 2.6s-2.3-1.2-2.3-2.6c0-1.4 1-2.5 2.3-2.5 1.2 0 2.3 1.2 2.3 2.5zm87 0c0 1.4-1 2.6-2.3 2.6-1.2 0-2.3-1.2-2.3-2.6 0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.2 2.3 2.5z"
          fill="#c00"
        />
        <path d="M486.6 348.8c0 1.3-2.1 2.4-4.6 2.4-2.4 0-4.6-1.1-4.6-2.5s2-2.5 4.6-2.5 4.6 1.2 4.6 2.5z" />
        <path
          d="M508.6 348.8c0 1.3-1.6 2.4-3.5 2.4s-3.4-1.1-3.4-2.5 1.6-2.5 3.4-2.5 3.5 1.2 3.5 2.5zm-47.2 0c0 1.3-1.5 2.4-3.4 2.4s-3.5-1.1-3.5-2.5 1.5-2.5 3.5-2.5c1.9 0 3.4 1.2 3.4 2.5z"
          fill="#006300"
        />
        <path
          d="M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={2.2}
          transform="matrix(.0739 0 0 .06804 379.9 300.5)"
        />
        <path
          d="M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={3.3}
          transform="matrix(.03696 0 0 .05953 385 309.3)"
        />
        <path
          d="M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={3.3}
          transform="matrix(-.03696 0 0 .05953 579 309.3)"
        />
        <path
          d="M903.5 602.4a17.7 17.7 0 11-35.4 0 17.7 17.7 0 0135.4 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 257.6)"
        />
        <path
          d="M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z"
          fill="#fff100"
          stroke="#000"
          strokeWidth={2.2}
          transform="matrix(.0739 0 0 .06804 379.9 256.2)"
        />
        <path
          d="M903.5 602.4a17.7 17.7 0 11-35.4 0 17.7 17.7 0 0135.4 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.7 213.7)"
        />
        <path
          d="M850.4 655.5h70.9v53.2h-71z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 215.5)"
        />
        <path
          d="M850.4 683.3h70.9v202.5h-71z"
          fill="#fff100"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 367.5 215.5)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 422.4 251.2)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 422.4 245.8)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 422.4 240.8)"
        />
        <path
          d="M478.4 549.2a17.8 17.8 0 11-35.5 0 17.8 17.8 0 0135.5 0z"
          fill="#fff"
          stroke="#000"
          strokeWidth="1pt"
          transform="matrix(.12934 0 0 .11906 422.4 235.5)"
        />
        <path d="M486.9 356.8c0 1-2.1 1.7-4.8 1.7s-4.5-.7-4.5-1.7 2-1.7 4.6-1.7 4.7.8 4.7 1.7zM529 361c-.3.7-2.6.8-5.1 0-2.6-.5-4.4-1.4-4.2-2 .3-.8 2.6-.8 5.1-.2 2.6.6 4.4 1.5 4.2 2.2zm-17.7-2.8c0 .8-2.3 1.3-5 1.2-2.5-.2-4.6-1-4.5-2 .1-.8 2.4-1.2 5-1 2.6.1 4.7.9 4.5 1.8zm-77.5 2.8c.2.7 2.5.8 5 0 2.6-.5 4.5-1.4 4.2-2-.3-.8-2.5-.8-5-.2-2.6.6-4.4 1.5-4.2 2.2zm18.5-3.2c.1.8 2.4 1.3 5 1.1 2.6-.2 4.7-1 4.5-1.9 0-.7-2.3-1.3-5-1.1-2.5.2-4.6 1-4.5 1.9z" />
      </g>
      <path d="M0 0h320v240H0z" fill="#012169" />
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

export const IOFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

IOFlagIcon.displayName = 'IOFlagIcon';
