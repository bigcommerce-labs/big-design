// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'TC flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg aria-hidden={ariaHidden} aria-labelledby={titleId} ref={svgRef} viewBox="0 0 640 480" {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M640 480V0H0v480h640z" fill="#006" />
      <path d="M0 0h373.7v232.2H0z" fill="#006" fillRule="evenodd" />
      <g strokeWidth="1pt">
        <path d="M0 0v26l331.9 206.2h41.8v-26L41.7 0H0zm373.7 0v26l-332 206.2H0v-26L331.9 0h41.8z" fill="#fff" />
        <path d="M155.7 0v232.2H218V0h-62.3zM0 77.4v77.4h373.7V77.4H0z" fill="#fff" />
        <path
          d="M0 92.9v46.4h373.7V92.9H0zM168.2 0v232.2h37.3V0h-37.4zM0 232.2l124.6-77.4h27.8L27.8 232.2H0zM0 0l124.6 77.4H96.7L0 17.3V0zm221.3 77.4L345.8 0h27.9L249 77.4h-27.8zm152.4 154.8L249 154.8h28l96.7 60v17.4z"
          fill="#c00"
        />
      </g>
      <path d="M612.5 212.4v80c0 65.6-25.7 125.6-102.2 162.1C434 418 408.1 358 408.1 292.3v-79.8h204.5z" fill="#fff" />
      <path d="M605.7 220.6V295c0 61.2-24 117.2-95.3 151.3-71.3-34-95.4-90-95.4-151.3v-74.5h190.7z" fill="#fdc300" />
      <g stroke="#000" strokeWidth={0.1}>
        <path
          d="M206 52.9a2 2 0 00-1.3-.5c.1-1.3-.8-1.8-1.5-2-.7-.3-1-.6-1-1.1-.1-.5-.5-.9-1.1-1-.6-.2-1.2-.8-1.4-1.1-.2-.3-.3-.3-.5.2s-.9 1.5-.2 1.5c-.5.4-.8.8-.5 1.4-.3.3-.5.7-.1.8l.6.4c-.4 0-.5.8.4 1-.2 0-.3.6.1.6-.5 0-1 .8-1.6.8-.7 0-1 .2-1 .5l-.6.8c.5 0 .8 0 1-.2s.7-.3 1 0c.3.2 1 .3 1.2.2-.6.5-1 1-1.1 1.6 0 .6-.5 1.2-1 1.4-.3.2-1 .6-1.1 1.2.5 1.4 1.3 1.7 2.1 2.1 1.4.6 2.3 1.1 2.9 1.8.6.6.8.1 1.7 1.3.9 1 1.7 3.2 2.6 3.5.9.4 2 .2 2.6-1 .7-1 1-12.4-2.2-14.3z"
          fill="#ff9e3d"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M207.5 48.1c-.9 1-2 1.8-1.7 3.4s.3 4.2-1.2 5c-1.4 1-2.1 3.2-.4 4.5 1.8 1.3 1.9 2.9 2.1 4.3.3 1.5 1.1 2.7 2.3 1.7 1.2.2 1.8-.3 1.8-1.3s0-1.4 1-1.7c.8-.3 1-.6 1.5-1.4.4-.8.6-1.2.4-1.6a3.7 3.7 0 01-.2-2.2c.2-.7-.2-1-.4-1.5a1.9 1.9 0 01-.2-1.4c0-.6-.2-1-.6-1.3-.4-.3-.6-.6-.5-1 0-.5-.3-.8-.8-1.2s-.7-.8-.7-1.5-1.4-2.3-2.4-2.8z"
          fill="#ff927f"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M207.8 67.3c2-.5 1.8-3.7 1.5-5-.3-1.4-1-3.3-.5-4.9.8-2.1-1-4.2-.5-5 .5-.9.4-1.3.3-1.6 0-.2-.5-.4-.5.1 0 .6-.2.8-.5 1.1s-.3 1.2 0 2c.2.9.8 2.2 0 3.9-1 1.7-.6 2.4-.3 3.2.6 1.3 1.8 5.6.5 6.2z"
          fill="#ff9ee1"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M199 48.9c.2 0 .6 0 .6.2m-1 1.2c.2-.2.7 0 1.1-.2m-.7 1.4c.3 0 .8 0 1.3-.4m-.9 1.4c.4 0 1-.2 1.1-.7m-1 1.3c.7 0 1.5.2 1.6 0m-1.5 2.1c.4-.4 1.4-.7 1.7-1m-.6-5.5c.7.2.4.7.8 1 .6.4 0 1 .6 1.1.5.2.5.3.3.9-.1.7.5.7.3 1.2m2-.5c-.3 0-1.2 0-1.5.8m-4.8 7.7c.4 0 .5-.1.6-.3.1-.2.2-.4.5-.4s.8-.1.9-.3c0-.3.4 0 .7-.7.4-.6.6-1.3 1.4-1.6"
          fill="none"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
      </g>
      <g stroke="#000" strokeWidth={0.1}>
        <path
          d="M221.8 73.8c.3.4 0 1 .5 1.2.7.2.1 1 .9 1.4.7.3 0 1 .7 1.5.7.3 0 1 .8 1.5 1 .5-.2 1.5.5 1.9.7.4-.2 1.4.6 1.8.7.4-.4 1.1.4 1.7.7.5-.2 1.4.5 1.9s-.4 1.2.3 1.9c.6.5-.2 1 .2 2 .3.5-.3 2.7-1.8 2.5-.6 1-2.7 1.8-3.5 1.5-.8.6-3.3 1.3-4.6.1-1.3 1.2-3.8.5-4.6 0-.8.2-3-.7-3.5-1.6-1.6.2-2.1-2-1.8-2.6.4-.8-.4-1.4.2-2 .7-.6-.5-1.3.3-1.8s-.2-1.4.5-2c.8-.5-.4-1.3.4-1.6.8-.4-.1-1.4.6-1.8.6-.4-.4-1.4.5-1.9.9-.4 0-1.2.8-1.5.7-.4 0-1.2.7-1.5.8-.3.2-1.2.9-1.4.6-.3.2-.8.5-1.3 1.7.7 6.8 1.2 9 0z"
          fill="#00a728"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M213.5 76.7c0 .2 0 .5-.2.8-.5.6.2 1-.4 1.7-.5.7.1 1.2-.5 1.8-.6.6.1 1.2-.5 1.8-.6.7.1 1.2-.5 1.8-.6.6.1 1.3-.5 1.9-.6.6.1 1.4-.5 2-.7.8 0 1.4-.5 2-.5.5 0 1-.4 1.4.6-.5.6-1.3 1.1-1.6.5-.4-.1-1 .2-1.3s0-1.4.5-2 0-1.7.5-2 .1-1.6.7-2 0-1.3.4-1.8c.5-.5 0-1.3.5-2 .4-.5 0-1.1.3-1.6.2-.2.2-1.8-.2-1zm1.6.7c-.4.7.3.9-.2 1.6s.3 1.3-.3 2 .3 1.1-.2 1.8c-.5.8.2 1.2-.2 1.7-.5.6.3 1.1-.2 1.8-.6.7.2 1.2-.3 1.8-.4.6.2 1.3-.2 1.8s.3 1.2-.3 1.9.1 1-.2 1.5c.7-.2.4-1.1.7-1.3.2-.2-.1-1.5.3-1.8.4-.4-.3-1.4 0-1.8.7-.8.2-1.3.5-1.9.4-.6-.1-1.3.2-1.7.5-.7-.2-1.3.1-1.8.5-.7 0-1.2.3-1.7.5-.7 0-1.4.1-1.8.3-.3.6-1.9 0-2.1zm2.2.6c-.4 1 .3 1.3 0 2.1-.2.8.3 1.4 0 2.2-.3.9.4 1.5 0 2.6s.3 1.4 0 2.5c-.3 1.2.5 1.9 0 2.8-.6.9.6 1.2 0 2.1-.2.5 0 1.6.5.2.5-1.3-.3-1.5 0-2 .5-.6 0-2 .1-2.9.2-.7-.4-1.8 0-2.6.3-.9-.6-1.8-.2-2.5.3-.7-.2-1.6.2-2.2.3-.6-.3-1.4-.2-1.7.2-.3-.1-1.6-.4-.6z"
          fill="#fdc300"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M221.5 74.4c0-6.3-1-8.5-4.2-8.5-3.3 0-4.2 2.2-4.2 8.5h8.4z"
          fill="#ef072d"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M214.3 73.9c-.6.6.1 1-.5 1.8-.6.7 0 1.1-.5 1.8s.2 1-.4 1.7c-.5.7.2 1.2-.5 1.8-.6.6.1 1.2-.5 1.8-.6.7.1 1.2-.5 1.8-.6.6.1 1.2-.5 1.9-.6.6.1 1.4-.5 2-.7.8 0 1.4-.5 2s0 1-.4 1.4c-.4.4-.5 1-.3 1.2m6.3-19c-.6.8.3 1-.2 1.7-.5.6.2.8-.2 1.6s.3.9-.2 1.6.3 1.3-.3 2 .3 1.1-.2 1.8c-.5.8.2 1.2-.2 1.7-.5.6.3 1.1-.3 1.8-.5.7.3 1.2-.2 1.8-.4.6.2 1.3-.2 1.8s.3 1.2-.3 1.9.1 1-.2 1.5c-.3.5-.6 1.1-.3 1.3m4.6-19.8c-.3 1.2.4 2.2 0 3.2s.3 1.3 0 2.1c-.2.8.3 1.4 0 2.2-.3.9.4 1.5 0 2.6s.3 1.4 0 2.5c-.3 1.2.6 1.9 0 2.8-.6.9.5 1.1 0 2.1-.4 1 .3 1.4 0 2.4m3-20.8c.6.6-.2 1 .5 1.8.6.7 0 1.1.5 1.8s-.2 1 .3 1.7c.6.7 0 1.2.5 1.8.7.6 0 1.2.5 1.8.7.7 0 1.2.6 1.8.6.6-.2 1.2.5 1.9.6.6-.1 1.4.5 2 .7.8-.1 1.4.5 2 .5.5 0 1 .4 1.4.4.4.5 1 .3 1.2m-6.3-19c.5.8-.3 1 .2 1.7.5.6-.2.8.2 1.6.4.7-.3.9.2 1.6s-.3 1.3.3 2-.3 1.1.2 1.8c.5.8-.2 1.2.2 1.7.5.6-.3 1.1.2 1.8.6.7-.2 1.2.3 1.8.4.6-.2 1.3.2 1.8s-.3 1.2.3 1.9-.1 1 .2 1.5c.3.5.6 1.1.3 1.3"
          fill="none"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M213.1 74.4c0-6.3 1-8.5 4.2-8.5-1.5 0-2.4 1.2-2.7 2s-.1.7.2.4.2.4 0 .7c-.3.4-.6 1.4-.2 1 .4-.2.7.1.2.7s-.7 2-.3 1.5c.4-.5.5.3.2.7-.2.4-.2.7 0 .6.3-.2.2.6 0 1h-1.6zm7.7-.3c0-5-.6-6.5-1.8-7-.7-.3-.7-.2-.4.3s.3 1 0 .6-.4-.5-.6-.3l.8 2c.3.6 0 1-.4.3s-.4-.1 0 .5c.5.7.4 2.9.4 3.8l2-.2z"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
        <path
          d="M217.3 75.3c1.3 0 2.7-.2 3.7-.6 1.1-.4 1.2-.8.8-1.3-.3-.4-.9-.2-1.5.1a11.2 11.2 0 01-6 0c-.6-.2-1.2-.5-1.5-.1-.4.5-.4.9.8 1.3 1 .4 2.4.6 3.7.6z"
          fill="#ef072d"
          transform="matrix(3.909 0 0 3.9094 -339.1 46.6)"
        />
      </g>
      <g fill="#b95a1e" fillRule="evenodd">
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.053 -.03423 .03246 .0559 489 284.2)"
        />
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.0608 -.01361 .0129 .06412 500 261)"
        />
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 249.3)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 177.2-35.4 177.2-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7V255z"
          stroke="#000"
          strokeWidth={8.1}
          transform="matrix(.03857 0 0 .06555 527.7 292.3)"
        />
        <path
          d="M779.5 255.1c106.3 0 124-35.4 124-35.4s35.5-70.9 17.8-88.6c-17.7-17.7-141.8-17.7-141.8-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 287.7)"
        />
        <path
          d="M779.5 255.1c88.6 0 141.8-35.4 141.8-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-159.5-17.7-159.5-17.7v141.7z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 283)"
        />
        <path
          d="M832.7 113.4s70.8-88.6 194.9-177.2c124-88.6 213.7-156.7 230.3-141.7 0 17.7-106.3 106.3-195 177.2-88.5 70.8-194.8 177.1-194.8 177.1l-35.4-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 497.2 249.5)"
        />
        <path
          d="M832.7 113.4s70-52 204.4-124c132.2-64 318.9-53.2 318.9-35.5-17.8 17.8-177.2 17.8-283.5 70.9C971 75.5 868 148.8 868 148.8l-35.4-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 497.9 254.1)"
        />
        <path
          d="M832.7 113.4s61.6-35 204.4-88.6c141.7-53.1 329.8-17.7 329.8 0-17.7 17.7-170.4 7-276.7 35.4-110 27.8-222 88.6-222 88.6l-35.5-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 498 262.1)"
        />
        <path
          d="M832.7 113.4s71-71 222.4-88.6c152.3-17.7 276.3 88.6 276.3 106.3-17.7 17.7-159.5-78-265.7-64.3-112.6 13.7-197.6 82-197.6 82l-35.5-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 498.4 270.3)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 159.5-45.5 159.5-45.5s35.4-70.8 17.7-88.6c-17.7-17.7-177.2-7.6-177.2-7.6V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 277.2)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 177.2-35.4 177.2-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 272.6)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 195-35.4 195-35.4s35.3-70.9 17.6-88.6c-17.7-17.7-212.6-17.7-212.6-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 266.8)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 212.6-35.4 212.6-35.4s17.7-70.9 0-88.6c-17.7-17.7-212.6-17.7-212.6-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 261)"
        />
        <path
          d="M832.7 113.4S946.9 24.8 946.9-46.1c0-70.8-50.4-141.7-64.6-177.1 28.5 0 93.1 106.3 93.1 177.1 0 77.5-107.3 195-107.3 195l-35.4-35.5z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 495.7 244.7)"
        />
        <path
          d="M832.7 113.4s-14.3-53.2-14.3-159.5a355 355 0 0185.7-230.3C910-249 847-152.4 847-46c0 77.5 21.1 195 21.1 195l-35.4-35.5z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(.07714 0 0 .06555 495.7 244.7)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 212.6-35.4 212.6-35.4s0-70.9-17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7v141.7z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 255.2)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 195-35.4 195-35.4s0-70.9-17.8-88.6c-17.7-17.7-177.2-17.7-177.2-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 249.3)"
        />
        <path
          d="M318.9 1318.1c55-122.3 70.9-336.6 70.9-372 0-99.8-33-585.2-35.5-779.6s124-301.2 248-301.2c106.4 0 177.2 71 177.2 177.2h-53.1a121 121 0 00-124-124c-106.3 0-188 83.7-195 248-7.5 190 21.4 683 17.8 815S374 1231.2 318.9 1318z"
          stroke="#fdc301"
          strokeWidth={16.1}
          transform="matrix(-.06216 0 0 .06555 606.2 249.3)"
        />
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.053 -.03423 -.03246 .0559 626.5 284.2)"
        />
        <path
          d="M779.5 32.9C903.7 33 957.3 135.3 957 133.2l-35.7 33.3c-19 17.8-141.8 17.8-140.2 17.7l-1.6-151.3z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(.06216 0 0 .06555 509.3 249.3)"
        />
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.0608 -.01361 -.0129 .06412 615.5 261)"
        />
        <path
          d="M779.4 912.6v179.2c.1 75.7 19.8 105 54.3 103.6 34.4-1.3 41-58.8 34.5-92-6.6-33.3-53.2-199-53.2-199l-35.6 8.2z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 249.3)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 177.2-35.4 177.2-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7V255z"
          stroke="#000"
          strokeWidth={8.1}
          transform="matrix(-.03857 0 0 .06555 587.8 292.3)"
        />
        <path
          d="M779.5 255.1c106.3 0 124-35.4 124-35.4s35.5-70.9 17.8-88.6c-17.7-17.7-141.8-17.7-141.8-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 287.7)"
        />
        <path
          d="M779.5 255.1c88.6 0 141.8-35.4 141.8-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-159.5-17.7-159.5-17.7v141.7z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 283)"
        />
        <path
          d="M832.7 113.4s70.8-88.6 194.9-177.2c124-88.6 213.7-156.7 230.3-141.7 0 17.7-106.3 106.3-195 177.2-88.5 70.8-194.8 177.1-194.8 177.1l-35.4-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 618.3 249.5)"
        />
        <path
          d="M832.7 113.4s70-52 204.4-124c132.2-64 318.9-53.2 318.9-35.5-17.8 17.8-177.2 17.8-283.5 70.9C971 75.5 868 148.8 868 148.8l-35.4-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 617.6 254.1)"
        />
        <path
          d="M832.7 113.4s61.6-35 204.4-88.6c141.7-53.1 329.8-17.7 329.8 0-17.7 17.7-170.4 7-276.7 35.4-110 27.8-222 88.6-222 88.6l-35.5-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 617.6 262.1)"
        />
        <path
          d="M832.7 113.4s71-71 222.4-88.6c152.3-17.7 276.3 88.6 276.3 106.3-17.7 17.7-159.5-78-265.7-64.3-112.6 13.7-197.6 82-197.6 82l-35.5-35.4z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 617 270.3)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 159.5-45.5 159.5-45.5s35.4-70.8 17.7-88.6c-17.7-17.7-177.2-7.6-177.2-7.6V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 277.2)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 177.2-35.4 177.2-35.4s35.4-70.9 17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 272.6)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 195-35.4 195-35.4s35.3-70.9 17.6-88.6c-17.7-17.7-212.6-17.7-212.6-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 266.8)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 212.6-35.4 212.6-35.4s17.7-70.9 0-88.6c-17.7-17.7-212.6-17.7-212.6-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 261)"
        />
        <path
          d="M832.7 113.4S946.9 24.8 946.9-46.1c0-70.8-50.4-141.7-64.6-177.1 28.5 0 93.1 106.3 93.1 177.1 0 77.5-107.3 195-107.3 195l-35.4-35.5z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 619.8 244.7)"
        />
        <path
          d="M832.7 113.4s-14.3-53.2-14.3-159.5a355 355 0 0185.7-230.3C910-249 847-152.4 847-46c0 77.5 21.1 195 21.1 195l-35.4-35.5z"
          stroke="#000"
          strokeWidth={5.7}
          transform="matrix(-.07714 0 0 .06555 619.8 244.7)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 212.6-35.4 212.6-35.4s0-70.9-17.7-88.6c-17.7-17.7-194.9-17.7-194.9-17.7v141.7z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 255.2)"
        />
        <path
          d="M779.5 255.1c159.6-1.4 195-35.4 195-35.4s0-70.9-17.8-88.6c-17.7-17.7-177.2-17.7-177.2-17.7V255z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 249.3)"
        />
        <path
          d="M318.9 1318.1c55-122.3 70.9-336.6 70.9-372 0-99.8-33-585.2-35.5-779.6s124-301.2 248-301.2c106.4 0 177.2 71 177.2 177.2h-53.1a121 121 0 00-124-124c-106.3 0-188 83.7-195 248-7.5 190 21.4 683 17.8 815S374 1231.2 318.9 1318z"
          stroke="#fdc301"
          strokeWidth={16.1}
          transform="matrix(.06216 0 0 .06555 509.3 249.3)"
        />
        <path
          d="M779.5 32.9C903.7 33 957.3 135.3 957 133.2l-35.7 33.3c-19 17.8-141.8 17.8-140.2 17.7l-1.6-151.3z"
          stroke="#000"
          strokeWidth={6.4}
          transform="matrix(-.06216 0 0 .06555 606.2 249.3)"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const TCFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

TCFlagIcon.displayName = 'TCFlagIcon';
