// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'SH flag',
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
      <path
        d="M0 73.3h76L0 26.8V0h43.5l106.4 64.8V0h59.9v64.8L316 0h44v26.8l-76.4 46.5H360v73.4h-76.4l76.4 46.6V220h-44l-106.4-64.7V220H150v-64.7L43.4 220H0v-26.7l76-46.6H0V73.3z"
        fill="#fff"
      />
      <path
        d="M331.7 0L211.5 73.4h28.8L360 0h-28.3zM360 220l-119.8-73.3H269l90.9 55.9V220zM120.4 73.4L0 0v17.5l91.4 55.9h29zm-.3 73.3L0 220h28.7L149 146.7h-29z"
        fill="#ce1126"
      />
      <path d="M0 88.6h162.6V0h35.2v88.6H360v43H197.8V220h-35.2v-88.5H0v-43z" fill="#ce1126" />
      <path
        d="M399.7 640.8c0 16.3-2.6 33.9-23.8 42.3-21.1-8.4-23.7-26-23.8-42.3h47.6z"
        fill="#8fc5ff"
        stroke="#fff"
        strokeWidth={1.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M375.9 683a34.3 34.3 0 0018.8-16h-2c-.6-.1-20.3-2-22.7-3-2-.7-9.8.7-13.4 2a34 34 0 0019.3 17z"
        fill="#366cc9"
        stroke="#000"
        strokeWidth={1.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M361.1 673h1.2c.3 0 .3 0 .4-.3s.4-.2.6-.1.6 0 .8-.2c.2-.2.2-.2.4 0s.3.1.5 0c.1 0 .5-.2.6-.5s.4-.4.5-.2.3.2.5.2.2.1.2.4c0 .2 0 .3.5-.1.4.4.5.2.5-.2s0-2-.2-2.1-.3-.8-.4-1.3c0-1 0-1-1-1.5 0-.3-.2-.4-1-.4.1-.1 0-.4-.2-.5s-.2-.2 0-.6c.2 0 .6 0 .7-.3.2-.2.8-.2 1.2 0s.8.2 1.5 0l1.2-.6c.5-.3.6-.4.6-.8 0-1-.3-2-.5-2.5-.3-.5-.3-1-.7-1.9-.4-.8-.4-1-.8-1.5-.2-.2-.3-.3-.3-.6a1.5 1.5 0 00-.5-1c-.8-.7-1-3-1.4-4.7-.2-1 0-3.3-.4-3.7-.7-.5-1-.4-1.5-.6-.4-.5-.5-1.4-.9-2.3-.5.1-.8.6-1.1.8s-.4.2-.4.7c0 .4-.3 1-.7 1.8s-1.3.5-2 1.6c-1.4-1.7-1.4-2.2-1.5-2.7 0-.5-.3-.6-1.1-1.3v-1.5c-.7-.5-1.1-.4-1.4 0-.3.3-.5.8-1 1-.2.4-1 1.2-1.6 2.3.6 9 2.6 18 8.7 25.2z"
        fill="#5d3100"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M399.7 640.8c0-6.2-.3-12.2-.2-17.4a63.6 63.6 0 00-23.6-4.3c-5.3 0-15.7.8-23.6 4.3.2 5.2-.2 11.2-.2 17.4h47.6z"
        fill="#ff0"
        stroke="#fff"
        strokeWidth={1.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M394.6 297.9c1.2 1.9 3.3 5 3.5 6.8.8-1.7 1.5-2.4 1.6-3.5s1.5-3 1-4.2-.8-2 .4-1.2c1.3.9 1 2.3.8 4.4-.8 5.7-3.1 6.8-3.5 10.7 3.4 8 .9 11 4.6 19 .6.3 2.1-.3 2.6-.2 2-1.4 3.5-1 6.3-.3 2.8.5 4.3 2.5 4.3 4.3s0 2.2.6 3.2 1.7 2.7 1.5 3.9c-.3 1.2.2 1.9.6 2.4s-.2 2-.5 2.7-.2 1.9 1.2 3.6c1.4 1.8 4.6 9.1 4.6 13.4 0 4.4.3 6.4 2 7.2 1.8.8 2.3 1.5 2.1 3.3s.8 11.6 1 13.1.9 1.2 1.6 2c.7.8 1.1 1.7 3.5 1.7s4.6-.3 6 0c2.2 2.9 3.5 6.8 4 9.3s.4 5.8 1.2 5.8 1.6 0 1.4-3-.5-3.4-1.5-5c-1.1-1.5-1.7-2.2-1.1-3.1s.7-2.4.5-3.6-.6-3 1.4-.6l3.1 3.7c.6.7.8 2.4.7 3.8-.1 1.4.1 2 1 1.2.8-.7 1.8.5 1.3 2s.2 2.5 1.6 3 2 .8 2.3 1.8 1.5 1.5 1.5-.6c0-2-.8-6.5-1.4-7.9-.6-1.4-1-4.4-1.2-6.2s-.4-2.2-1.2-2.5-1.6-1-1.7-1.8-.8-1.1-1.3-1.1-1-.4-1.3-1-.6-.6-1.2-.7-1.5.3-1.8-.6-.7-2.3-1.3-3-1-1-1.1-3.7c0-2.6-.1-3-1-3.9s-2.2-3.4-2.8-4.4c-.5-1-1.1-2.1-1.1.1s0 3.4 1.4 4.2c1.4.8 1.7.8 1.1 2s0 2 .3 2.8.7 1.6 0 2.4c-.7.8-1.4.6-1.3-.7a7.3 7.3 0 00-1-3.8c-.5-1-1-1.8-1.7-1.2s-1.3-.1-.8-.6.3-.8 0-1.1-.5-.7.1-1.4.6-1 .2-2.7c-.3-1.6-2.9-9.8-4-11.7s-1-3.2.4-1.4 2.8 3.5 3 5c0 1.6.4 2.5.9 3s.8.4 1-.9 1.2-.8-.4-3.2c-1.7-2.5-4.7-6.6-5.9-14s-1.6-12.1-2.8-14.1c-1.1-2-1.5-2.5-1.6-4.3s0-3.8-.8-5.2c-.8-1.4-1.4-1.6-1.5.5-.1 2 0 6.8.7 7.6s.2 2.9 0 4-1.9 2.4 2 4.7c1.5 1 1.2 2.2 1 3-.2.9-.5.8-1.3-.5s-1.6-2.4-2.4-3-1-1.2-.8-2.9.4-2.8 0-3.3c-.5-.6-.7-.2-1 .8-.2.9-.4 3.5-1 4.2s-.6.2-1-1.3.2-3.9 1-6.5 1.3-5.5.6-9c-.7-3.5-.4-4.6-3-7.5-2.7-2.9-5.8-5.7-7-9.3-1.3-3.6-1.6-6.8-3-8.4a19.4 19.4 0 00-4.6-4.3v-5.4c0-1.3-.6-2-2.1-1.8s-2.5 1.5-3.4 3.2c-1 1.8-1.6 1-3 4s-3 4.5-3 7.8z"
        fill="#cf6200"
      />
      <path
        d="M403 332c1 .7 1.9 1 3.3.3s3-2.7 5-.7c1.8 2 2.8 5.3 2.8 7.8 0 2.6 0 7.4 3 10 2.9 2.7 4.4 5.5 4.5 9a61 61 0 001.7 10.3c.4 1.4 1.2 3 2.1 4s1.7 3.6 1.8 6.4c.1 2.8-.4 4.7 0 6.1s0 2.6-1 2-1.3-1.1-2-2.3-1.2-1-.6.8 2.3 3.4 3.8 3.4 2 .2 3 1.2c.9.9 1 1.4 2.6 1.4s1.9 0 3.4.4 1.5.3 2.3 0 1.7.5 2.2 2 2 5.7 2 6.9 0 2.3.8 3.5.6 2.3-.3 1.6-1-.5-1.6-.3-1.2-.3-2.1-.9c-1-.5-.4-.4-1.3-1.8s-1.5-1.9-1.5-.8-.2 2.3-.9 1.7-1-.6-1.6 0-.8 1-1.5-.1-1.5-1.2-2.2-1.4-.7-.2-1-1.3c-.4-1-1.5-1.3-2.4-1.3s-1.4-.4-1.5-1.1c-.1-.7-.7-1.2-1.2-1.5s-.2-1.2-.3-2-.8-.5-1.3-.7-.8-.1-.8-1.3-.5-1.5-.8-2.3c-.4-.9 0-1.7.2-2.6.2-1 .1-1.5-.6-2.3-.7-.8-.1-1.7-2-3.3s-2.8-.2-3.4-4c-.5-4-1.7-11.9-2.8-13.1s-1.7-2.3-2.8-2.6-1.7-.1-1.8-2.3c-.1-2.2-.8-5-2.2-6.4l-2.7-2.5c-.7-.5-1-1.6 0-3.6s.6-4.7.5-6c-.2-1.2-.5-2.9-.3-4.3s.1-3.1-.2-4-.8-1.2-.2-2zm28.1-33a25.4 25.4 0 01-5.4 5.2c-2.2 1.6-5 2.8-3.4 5.4 1.5 2.7 2.8 3 3 5 .4 2 .9 3.8 2.4 4.2 1.6.5 2.2.2 2.2 3.4s0 4.6 1.4 5.8 1.2 2.5 1.8 5.4c.7 3 .7 9.4 2.5 13.7s6.1 12.6 5.6 14.3-1 3 .8 5c1.9 2 3.1 5 3.3 6.7.1 1.7.4 2.3 2.3 1.7a6.8 6.8 0 003.4-2c.6-.8 1.9-.6 3.6.3 1.7 1 4.4 1.8 6 1 1.5-1 2.2-2.4 3.6-2.4 2.2-1.6 3-4.8 3.5-5.8.4-.9.1-.9-.8-1.8s-.5-2.5-.6-4c-.2-1.6-.8-4-2.7-7.4-1.8-3.4-3-7.6-4.2-8.7-1.2-1-1.8-3.7-2-5-.1-1.2-1.5-2.3-2.5-3.2-1-1-1.8-2.4-3-7.8-1-5.4-1.8-9.3-1.8-10.3s-.2-1-1.1-1.4-1.4-1.8-1-2.6c.2-.8-.4-1.6-.7-2.5s0-2.6.6-3.6.5-3.5-.1-5.7-1.3-4-3.8-4.4c-2.4-.3-3-1-3.8-3-1-2-2-5.5-2.2-6.3-.3-.8-.8-1-2.7.6-1.8 1.6-2.5 2-2.5 5 0 1.9.4 2.5 1 3.6.6 1 .8 1.4 1.2 4.3s3.1 7.6-.3 10.3c-3.4 2.6-3 3.3-2.8 5.1.2 1.9-1 3.1-1.5.5-.7-2.7 0-4.2 1.8-5.5 1.9-1.2 3.6-2.8 2.4-4.5-1.3-1.7-1.8-5.7-2-7.6s-.4-2.5-1.5-1z"
        fill="#cf6200"
      />
      <path
        d="M403.4 338.5c0 1.3.2 2.7.3 3.8.1 1.3.5 4-.5 6-.9 2-.7 3 0 3.6h.1c2-.6 2.2-2.7 1.7-3.7a3.7 3.7 0 01.2-3.5c.6-1.1.6-1.7.1-2.5-.6-.8-.6-.8 0-3 .6-1.9-.8-1.9-1.9-.7zm20 30.2c-.4-1.4-1.7-6.8-1.8-10.3-.1-3.5-1.7-6.3-4.6-9-2.2-2-2.7-5.4-2.9-8-1.7-1-2.4-.6-2.2 1.4.1 2 2.2 3 2 6.1-.4 3-.4 2.3 1 3.7s2 3 1.3 3.5c-.8.6-.8 1.7.2 2.1 1.1.4 1.2 1.6 1 2.7-.1 1 1 1.3 1.5 2 .7.8.7 2.7.1 3.8-.6 1-.7 2.8.4 1.9 1-1 1.6-.1 2.4 1.4.7 1.2 1.4.8 2.2.5a9.8 9.8 0 01-.7-1.8zm15 27.1c-.6 1.4-1.4 1-2.1.3s-1.5-.7-1.2-2 .2-1.5-.7-2.2l-.3-.3h-1c-1.7 0-1.8-.4-2.8-1.4a7.8 7.8 0 00-.6-.5v.9c0 1.3 0 1-1.2 1.4s-1-1.3-1.3-2.3a3.9 3.9 0 00-.2-.7c-1.4-.2-3-1.7-3.4-3.3-.6-1.8 0-2 .7-.8s.8 1.5 1.8 2.2 1.4-.5 1-1.9a6 6 0 010-1.5c-.3-.5-.6-.8-1-1-2-.9-1.4-1-1.3-2.6.2-1.5-.2-1.5-1.4-.7-1.1.8-1.2-.1-1.2-2.5s-1.6-2.3-1.9-.7c-.4 1.7-1 .6-1.6-1.7s-1.7-3-1.8-.7c0 1.9-.6 2.3-1.8 1.3l.5 3.6c.6 3.8 1.5 2.4 3.4 4s1.3 2.5 2 3.3c.7.9.8 1.4.6 2.4-.3.9-.6 1.7-.3 2.5.4.9.9 1.2.9 2.4s.3 1 .8 1.3l1 .1.8-1.2c1.4-1.4 3.5.1 4.2 1.9s1.5 2.2 2.6.8.7-1.2 1.9.1 1.6 1 1.6 1 1.2-.4 2 .3 1.3.6 2.8-1.6c1.5-2.3-.7-1.6-1.4-.2zm4.2-64c.5-3.4.2-6.8 1.6-8 1.4-1.3 3-3.8 3 1.5-.2 5.3-.4 5-1.5 6.2-1 1.3-2 1.6-1 3.6 1.2 2 1.3 2.2 1.2 5.3-.2 3.1-.2 4.4 1 6 1.3 1.5 1.6 1.6 2 3.3.2 1.7 1.3 4 2.7 5.3s3 4.8 3.1 7.3c.2 2.5 2.4 3.1 4.4 4.9 2 1.7-.5 2.9-2 2.1-1.6-.7-1 0-1.9 1.1-1 1.1-1.2 1.3-2-.6s-3.4-3.1-4.7-3.6-2.3-2.5-3.4-4.5a6 6 0 00-4.5-3.1c.5 1.3.7 2.3.6 2.8-.5 1.7-1 3 .8 5 1.9 2 3.1 5 3.3 6.7.1 1.7.4 2.3 2.3 1.7a8.3 8.3 0 003.4-2c.6-.8 1.9-.7 3.6.3 1.7.9 4.3 1.8 5.9.9 1.5-1 2.3-2.3 3.7-2.3 2.2-1.6 3-4.9 3.4-5.8.5-1 .2-1-.7-1.9s-.5-2.5-.7-4c-.1-1.6-.7-3.9-2.6-7.3s-3-7.6-4.2-8.7c-1.2-1.1-1.9-3.7-2-5-.2-1.2-1.6-2.3-2.5-3.3-1-.9-1.9-2.3-3-7.7-.8-4.3-1.5-7.6-1.7-9.3-1.1 1.8-1.9 2.3-2.3 1-.5-1.4-1-2.1-1.7-1.2-.6 1-.8-.8-.8-1.6s-.1-.9-1-.9 0-1.2-.4-3.6c-.3-2.3-.8-2.6-1 .2-.4 2.8-2 4.5-1.3 5.1.6.6.3 1.9-.3 3.7-.6 1.9-.3 3 .1 4.2s-.3 3.6-.6 5.6c-.3 2 1.3 4 1.7.7zM414.2 304c-1.1.1-2 1.1-1.3 4.7.5 2.2-1.2 1.7-1.8.6-.6-1.1-1.1-3.4-2.4-5.4-1.2-2-.6 1.3-.7 3.2-.2 1.9 1 1.9 2.1 3.4 1.1 1.6.2 2.2-1 2.2s-.7 2.5-.4 4.2-.3 2-1.2.6c-1-1.4-.3-3.5-.2-6.2.2-2.6.4-2-1.4-2.6-1.7-.7-1.4-1-.7-2.5.6-1.6 1.2-2.4.4-3.1-.7-.8-.6-1.3.7-1.4 1.2-.2.7-1.1 1.8-1.4 1.1-.3 1.6.1 1.7-1.9.2-1.7.7-2.7 2-2.2.8 2.6 1.7 6.6 2.4 7.8zm15.7 18.4c0 3.2 0 4.5 1.4 5.7s1.2 2.5 1.8 5.4c.7 3 .7 9.4 2.5 13.7l2.1 4.7a8.8 8.8 0 002.3-3c.4-1-1-3.2-2-5-1.1-2 .1-2.6 1.2-5 1.1-2.2-.1-2.4-1.9-3-1.7-.6-1.7-2.2-2.6-4.7s-.8-3.6-.2-5 .2-2.5-1-2.8c-1.3-.3-1-1.2-.5-2.8.5-1.5.8-1.8-1.1-1.4-1.4.4-1.8.7-2.2 1.2l.2 2z"
        fill="#00b800"
      />
      <path
        d="M447.8 328.8c-.2 1.8-.2 2.8-.7 3.4-.4.6-.1 1.5.4 2.5s.7 2.1.3 3.9.3 3 1.2 3.5 1.4 0 1.1 2.2a6.7 6.7 0 002 5.5c1.1.9 1.9 2.4 1.7 3.4-.1.9.8 1.8 1.9 2.3 1.1.5 1 .6 1 1.2s.4.7 1.6 1 2.2 1 3.6 2.8 3.4 2.6 3.1.8 0-3.2-1.8-4c-1.9-1-3.3-5.5-4-8.6-.9-3.2-3.3-7.3-4.7-8.1-.2-2.2.1-3.3-1.3-4.4a4.5 4.5 0 01-1.9-3.6c0-1-.7-2.4-1.4-2.8-.6-.3-.9-1-.9-2s-1-.8-1.2 1z"
        fill="#5d3100"
      />
      <path
        d="M439.5 412.2a45 45 0 0011.2-3.2c1.9 1.3 5.1 3 6.5 3-2.6.6-4.4.3-5-.2.3.8 1.2 2.1 1.8 2.2-2.6 0-5.5-.7-6.4-1.6-2.3 1-6 1.2-8-.2zm5 3.5c1 .3 6 1 6.6 1-1.6 1.5-.2 2.8 2.5 2.6-1.3.2-2.8.7-1.8.9a28 28 0 0010.2-2c-2.2 2.8-13 5.5-17.5-2.5zm4.5 7c1.3-.6 4.6-.4 6.2.3-1.7.7-5.2.7-6.2-.2z"
        fill="#00d860"
      />
      <path d="M454 422.7c2.4-.4 9.1 1.2 11.5-.3-.8 2.2-5 2.5-6.5 2-1.5-.4-2.9-1-3.9-1 .6-.3-.3-.3-1.1-.7z" />
      <path
        d="M456.4 426a35 35 0 0010.3-1.3c2 .7 6.2 1.8 7.2 1.7-2 1.2-5.8.5-7 0a12.5 12.5 0 01-10.5-.4z"
        fill="#00d860"
      />
      <path
        d="M459.5 427c2.6.6 4.8.2 7.4-.6.8.3 2.6.7 4.4.7 1.2.6 2.7 1.5 4.3 1.7a19 19 0 01-8.6-.7 22 22 0 00-9.1 1.7c0-.8.5-2 1.6-2.7z"
        fill="#00d860"
      />
      <path d="M456.4 414c2 .6 9.4.3 13-1.5 1.6-.7 2.5.5.8 1-6 2.2-10.9 3-14.3 1.1-1.4-.7-1.6-1.4.5-.7z" />
      <path
        d="M492.2 404c-9 4.2-14.9 5.5-27.4 1.6-1.1-.3-2 0-.7.8 1.3.9 8.2 2.7 9.8 2.9s1 .8 0 1.1-1.2 1 .1.5 8.9-.7 12 .9c1.3.7 1.6.5 1.5 0s.6-.9 1.6-1 1.6-.4.8-.7-.9-.5-.3-.8.7-.6-.2-.8-1.5-.4-.7-.8c.9-.4 2-.7 3-.8.2-.6-.2-2.3.5-2.9z"
        fill="#00d860"
      />
      <path d="M477.3 405c5.1.4 14.6-2 19.6-6.8 1.7 1 4.2 2.2 5.5 2.4s2.4 1.4.4 1.4-4.7-.8-6-1.4a33.8 33.8 0 01-19.4 5c-1.4 0-1.7-.6-.1-.5z" />
      <path
        d="M462.1 377c1.8 1.3 4.9 3.3 8.9 3a19.5 19.5 0 006.5 3.3c-2.7 1-5.6 2-6.4 2.9-1.2-1.2-2.8-1-3.2-1.6-1.2 1-1 1.5-.2 2s6.6 1.4 8 1 2 .8.7 1.3c-3.1 1-9.2 0-11.3-3.4-2.2-3.3-4-4.6-9.7-1.5-.6-1.7-.6-2-1.7-2s-3.2-1.5-1.6-1.5 6.2-.6 10-3.4z"
        fill="#00d860"
      />
      <path
        d="M463.5 384.6c-1 .2-3.7 1.7-4.7 1.8-1 .2-2.7 1.6-1 1.6 1.9 0 4.2-2 5.5-2s1.4-1.7.2-1.4zm5.7 5.9c-.7.1-3.7.8-4.5.8s-1.7.1-1.6.7.3 1-1 .8-2.2.4-2.5.7-.5.7.7.8 1.9.3 3.3-.4 2.7-1.6 4.2-1.7c1.5 0 3-2 1.4-1.7z"
        fill="#00d860"
      />
      <path d="M465 394c1.3 1 7.6 3 9.8 2.9s1.9.9.2 1.3a14 14 0 01-11-3.2c-1.4-1.1 0-1.6.9-1z" />
      <path
        d="M494.8 397.2c-4.8 1.5-9.7 1-11.7.4s-3.8-.6-2.4.7c1.3 1.3 5.6 2.1 8 1.5-8.6 2-10.9 1.8-13 1.5-2.2-.4-6.2-.3-8-.2-1.2.2-3 0-3.8-.5s-1-1.3 1.3-1c2.3.1 2.6-.3.6-.6s-4.7.5-2 2.2 8.5-.1 12.3 1a21.4 21.4 0 0019.1-4.3c.4-.3 1-1.2-.4-.7zm-23.7-7.1c.2.6.2 1.2 0 1.6s-.1 1 .6.4 1.2-1.3 2-.9 2.7.4 3.6.2c.8 0 1.1-.3-.2-.8-1.2-.5-2.5-.7-3.2-.6s-1.6-.1-2.2-.4-.7 0-.6.5z"
        fill="#00d860"
      />
      <path
        d="M483.6 392.3c-1 0-2.8-.6-3.7-1s-2.3-.4-1.3 1 5.3 2 6.8 1.4 1-1.4 2.4-.4c1.5.9 3.1 1.5 4.2 1.5s1.5 0 .3-.7-1.8-.8-2-1.4-.2-1 1-.6 2.3 1 3.2.5 2.5-1.5 4-1.5l.3-.9c-2.1-.1-3.5.5-4 .7s-1.7.4-2.8.2-2.5-.3-2.9-.6-.3-.5.6-.7 1.2-.8 0-.6-4.8.2-6.6-.4c-1.8-.6-2.6-.7-3.3-.4-.8.3-.7 1.1.4 1.2s3.7.3 4.5 1.1.8.9-.2.5-2.8-.2-1 1.1z"
        fill="#00d860"
      />
      <path
        d="M498.8 390.2l-.4.9c2.2 0 7.4.5 9.1 1.5 1.7-1.3 1.4-1.7 2.5-1.4s2.7.6 3.3.3 1.1-.3 1.8-.2 2.2-.2 3.1-.7 2.7-1.2 3.7-1.2 2.3-.3.4-.6-4.8.3-5.8.7c-1 .3-4 .6-5.7.6s-4.1.8-6.1.3-4.8-.2-6-.2z"
        fill="#00d860"
      />
      <path d="M525.8 389.2c-3.5 2.6-7.7 3.1-12.7 3.5-1.5.1-1 .5.2.6 5.3.6 11.3-1.4 13.3-3.5.6-.6.5-1.6-.8-.6z" />
      <path
        d="M502 395.2a54 54 0 018.4 2c1.3-.2 1.7-.5 1.4-1s-.4-1 2-.8h8.6c.9-.3 2.7-1.7 3.5-1.7-2.1 0-10.9.5-12 .4s-1.7 0-2.4.4-1 .6-2 .2-2.4-.8-3.3-.2c-.8.5-2.7 0-4.2.7z"
        fill="#00d860"
      />
      <path
        d="M522.4 395.4c.8-.3 2.6-1.7 3.5-1.8 1.5-.1 3.2.5 4 .7s1.7-.1 1.2-.7-.1-1.8 2.3-1.5c2.4.3 3.6.7 6 .5s3.3 1.5 7.7-.3c-.3 1.8.5 1.9 1.3 1.6s1.8-.3 3.2.8 9.9 1.1 11.9.8c2-.4 3 .7 1.5 1.2-1.5.4-1.9 1.1-1.5 1.6.3.5.7 1-1.2.8-1.9-.2-2.2.4-3.1 1s-1.2 1-3.8.5c-2.5-.4-3-.1-4.4.1s-1.8.3-3.2-.2-4.4-1-6.3-.3-3.2 1.1-4.9.7-1.7-.3-.7-1.3 1.3-1 3.3-1.2c2-.2 3.5-.8 2.1-1.6s-1.8-.7-3.7.2-2.8 1.5-5 .4c-2-1.2-3-1-4.5-.6s-3.7-.5-5.7-1.4zm7 3.5c-2.7.4-3.4-1.3-6.2-1-.9.2-2.5 1.3-.3 1.1 2.1-.1 4.5 1 6.6.9s1.2-1.1 0-1zm-3 2c1.3-.5 4.2.5 5.5.3s2.4.5 1 1-4.3-.8-5.7-.4-2.8-.2-.9-.9zm-28 7.6c2 0 9-.3 11.7-6 .2-.5.4-.7 1.2-.1s4.1 2.5 10.1 3c1.7.1 3.5 1 .1.8s-8.7-1.2-10.5-2.3c-3 4.8-8.5 5.3-12.5 5.2-2.5 0-1.9-.7 0-.6z"
        fill="#00d860"
      />
      <path
        d="M513.5 400.5c-1 1.3-4.2 3.5-5.6 3.7-1.5 0-5.9-.3-7-.7s-2.4-.3-.9.8 5.5 1.8 7 1.5c1.7-.4 3.5-.9 4.7-.1s3.5 2.2 4.8 1.9c1.4-.3 4.1-.3 5 .1.9.4 2.4 1.7.1 1s-4.1-.2-5.2-.6c1.2 1.6 3.8 4.2 6 4.2.6 0 1 1-.1 1.5 1 .5 3.6 1 5-.3-.4.5-.2.8.4 1s1.3.7.2.9-3.4.4-4.1 0c2.2 1.5 8.1 3.9 14.1 2.7 1.2-.2 1.8-.7 0-.6-4 0-4.2 0-4.9-.4-.7-.4-.5-.8.6-1.1 1-.3 3.9-.8 5-.8s2.4-.4 0-.4-5.3 0-6.5-.4-2-1-.8-1.8 2.5-.6 3-1.3c-3.8 0-8.5-2.1-5.9-4 .6-.4.4-.5-.5-.6s-4-1-5.2-1.6-.4-1.3.6-1.5c-2.3.4-6.8-.8-9.8-3zm34.1 0c-2 1.5-6 2.2-7.7 2.2s-2 .6-.6.7 2.8.4 3.4.2 1-.2 1.8.2c.9.4 2.7.6 4.4.1s4.3-.8 5.4-.7 2.3.1.1-.5-5.8-.2-6.7 0-3.3 0-2-.3 2.4-1 3-1.6l-1-.3zm-1 4.5a13.5 13.5 0 01-7.1 2.7c2.4.9 4.4 3.4 6 3.3-.8.5-1.7 1.2-2.7 1.3 1.6.4 4.1 0 6.2-1.2 3.5 1 8 .3 9.6-1-2.3 0-5-.8-6.3-1.9 1.1 0 2.2-.6 2.7-1.3-2.6.5-7-.8-8.4-2z"
        fill="#00d860"
      />
      <path
        d="M542.8 412.3c1-.1 2-.8 2.7-1.3a22 22 0 01-12.8-2.9c-2.5-2.2-2.5-.5-.8 1s4.9 4 11 3.2zm6.2 5.3c-1 .6-6 1-7.7.6s-2.3-.2-2 .5.7 1.2-.7 1-3.7.2-4.7.5-2.2 1.2-.1.9 4-.8 5.6-.4 7.1.5 8.2 0 .4-.4-.1-.4-.8-.3 0-.7 1.3-1.3 1.5-2zm-48.5-6.7c-2.1.9-9.1 2.8-11 2.9-2.3 1-4.2 1.6-5.3 1.6.8.7 4 1.4 5.2 1-.7.8-2.3 1.6-2.9 2 1.9-.3 4 .2 5 .3a14 14 0 01-7.6 1.6c.6.8 1.4 1.6 2.5 1.6a13 13 0 01-6.3.2c.6 1.1 1.1 1.8 2 2-1.9.2-4.2.5-6.2-.6 1.5 2 4.9 2.6 9.9 2 5-.5 9.2-2.7 10.4-3.7-2.1.3-5 .4-6.3.1a37 37 0 009.9-4.3 5.6 5.6 0 01-3.2-1 31 31 0 009.1-1 6.7 6.7 0 01-4-2.6 39.2 39.2 0 0019.5.6c1-.3 1-1.5-.8-1.3-3.2.2-9.5-.7-11.2-1.5a11.6 11.6 0 004.7 2c-3 .9-7.2 1.5-13.4-2z"
        fill="#00d860"
      />
      <path
        d="M486.5 418.4c.6-.4 2.2-1.2 2.9-2-1.3.4-4.4-.3-5.2-1 1.1 0 3-.5 5.3-1.6-4.2-.1-7-.1-8.6-1s-4.3-.5-5.4-.3-.7 2 3.8 1.5a15.4 15.4 0 01-8.8 1.3c.5 1.5.8 3 .4 3.9 2.4 1.4 8.8 3.1 12 2.9-2.8-1-4.3-2.2-2-2.5s3.6-.7 5.6-1.2z"
        fill="#00d860"
      />
      <path d="M479.3 426c5.5-.5 13-.6 19-5.7 1.5-1.2 2.5-.8 1 .5a33 33 0 01-18.4 6.8c-3 0-4.4-1.4-1.6-1.7z" />
      <path
        d="M521 416.7c-1.3.5-5.2 1.2-6.4 1-1.2-.2-2.9-.2-3.8.3s-1 1 .3 1l3.7.3a6.2 6.2 0 00-2 1.7c2-.4 5.4.4 6.4 1a3 3 0 01-2.3-.5c3.1 3.4 12.5 3.4 14 2.8-.7.5-1.4 1-2 1.2 2.6.5 5.6.4 8.6-1.3-1 .1-4-.1-4.8-.2a5.6 5.6 0 012.3-1.3c-1.2-.3-4.8-.2-5.7.3a4 4 0 011.7-1.9c-4.6 0-10.2 0-12.2-1.1 3.2.3 6.8-1.6 8.3-1.6-2.5 0-5.3-.6-6-1.7zm-11.6 2.5c-2.3.5-5.7 1.5-6.7 2s-1.9.8.1.8a125.5 125.5 0 01.7-.2c-.8 0-1.7 0-.2-.5s3.5-1.5 6-2zm-4.6 5.5c.8 0 4.3 0 5.7-1.2 1.5 1 4.3 2.6 6 2.6 1.9 0 1.7.5.1.7a12 12 0 01-6.2-2c-2.1.8-3.8.2-5.7-.1zm-27 15.7c3.6 1.4 8.3 2.4 11.8 1.3 2 1.7 6.1 1.8 8.3 1.4 2.2-.5 4.2-.7 6.7 0 2.4.9 7.4 1 8.8 2.1-1.3 0-4 0-4.7.2-.6.2-.3.6 1 1.2-4-.2-10.9 1.5-13 3.3a7.3 7.3 0 016.8-4.3c-2-.7-8.8-.8-11 .6a6.7 6.7 0 01-1.4-2.4c-3.6 2-10.6-.9-13.4-3.4zm-9.3-6.6a16 16 0 008.5-3.2c.8.7 4 1.4 7.4.3-.7.5-.8 1.5-.5 2a26.2 26.2 0 00-8 2c-1.5.7-5.8 1.3-7.2.5-1.4-.7-1.4-1.4-.2-1.6z"
        fill="#00d860"
      />
      <path
        d="M483.9 433a26.2 26.2 0 00-8 2l.5 2a51 51 0 0117.5-1.8c-1.8.1-5.1 2-7 2.1 4.6-.3 9 .6 10.2 1 1.1.2 1.4 1 .5 2s-1.3.8.6 1c1.8 0 5.7-.3 7.4-2-.7-.7-2.5-.4-3-1a8 8 0 003.1-1.9 29 29 0 01-5.3-.3c-1-.3-1.8-.6-.5-1.3a7.6 7.6 0 002.2-1.7c-2.2.6-5.8 1.2-8.8-1.2 1.1.3 3.8.1 4.7-.3a6 6 0 00-2.6-.9c2.4-1.2 7-2.2 13 .1 2.8-.2 6 0 8.2.5 1-1 2.9-3.2 4-3.7-7 .5-19.3-.7-19-4.4-2.3 3-7.4 4.6-9.6 4.1-.2 1 .7 2.4 1.5 3-2.3.5-6.3.9-8.2.5 1.1 1 3 2 4.2 1.9-2.4 0-3.7.5-5.6.3z"
        fill="#00d860"
      />
      <path
        d="M498.1 441.2c2 0 5.8-.2 7.5-1.9-.7-.7-2.5-.4-3-1a8 8 0 003.1-1.9c5-.4 9.3-.2 11.4-.8 2.1-.6 7.5-.3 8.5-.6-4.7.8-5.6 1.2-5.8 2s1.5 1.3 2.6 1.3c-2 0-4.7 2.1-5 3-2.8-1.6-4 .3-4.4 1-1.1-.5-5-.4-7 1.3-2.5-.8-4.2-1.2-6.8-.8 1.6-.3 1.3-1.4-1-1.6zm22.4-13.7c1.6 0 5 .2 6.3 0a7.5 7.5 0 00-2.1 1.5c4-.5 9.4-.8 11-.5-2-.3-4 1-5 1.6s-.4 1 1 1.2 3.1 1.2.7.9-7.3-.4-8.5-.2-1.8-.4 0-.7 2.8-.8 3.6-1.2c-1.4.3-4.1.3-5 0s-1.3-.6-.3-.9.3-.5-.7-.4-3.5 1.1-5 2.5c1.6-1.6 3-3 4-3.7z"
        fill="#00d860"
      />
      <path d="M502.8 430.2a10 10 0 007.8 3.5c.7 0 2.2 1 .3 1.1-4.9.2-7.3-1-9.5-4.1-.4-.7.4-1.6 1.4-.5zm29.2-40.8c2.6 1.2 7.7 2.3 11.8 2.1.7 0 2 .7.3.9a21 21 0 01-12.4-2.3c-1-.6-.7-1.2.3-.7z" />
      <path
        d="M534.6 389.4c4-.1 7 0 8.1 1 2.3-.6 6.4-1 7.3-.8s2-.3-.2-.8-7.1-.7-8.7-.4c-1.6.3-6.5.5-8 .3.6 0 1 .2 1.5.7zm15.4 1.5c1.8-1 7.2 0 8.8-.7-1.1 1.4 3.8 1.5 8 .4-1.6 1-5.1 1.2-6.6 1.9s-2.4.1-3.5-.4-4.2-1.6-6.7-1.2z"
        fill="#00d860"
      />
      <path
        d="M566.8 390.6c-4.2 1-9.1 1-8-.4-1.6.7-7-.3-8.8.7 2-1.1 3.4-.2 4.8-2.6.9.2 2.9.3 3.6-.6 1.2.3 3.4.8 4 1.4.6.7 1.6-.2.8-1.1 2-.7.7.8 5.2-.3 1-.3 3.2-.7 4-.7a27.6 27.6 0 01-5.6 3.6z"
        fill="#00d860"
      />
      <path
        d="M373.4 664.2l-.2-22.2c0-1-.5-.8-.5 0v22l.7.2zm7.2-23.4l.8 23.4-.1.2h-.5l-.5-23.6h.3zm6.8 19.8l-.4-19c0-.6-.5-.5-.5.1l.4 18.9h.5z"
        fill="#ff0"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M376.6 644.7l-7-.1c-.3 1.4 1.4 1.3 2 1 .8.5 1.4.5 1.8 0 .6.5 1.4.4 1.7 0 .8.7 1.7 0 1.5-1zm.5 3.4h-7c-1.3 1.2.3 1.8 1.7 1 .2.4 1 .6 1.6.3.6.4 1.4.1 1.8-.3.7.3 1.6.4 2-1zm-.2 4.5h-6.8c-.1 1.1 1.3 1 1.8.7.5.8 1.7.6 2.1.1.7.5 1.3.4 1.6 0 .7.6 1.4-.2 1.3-.8zm.4 4.4l-7.7-.1c-.4 1.3.8 1.5 1.3 1.2.2.7 1.2.5 1.5 0 .4.3.9.1 1.1-.2.1.7 1 .8 1.7.2 1.4 1 2.7-.2 2-1.1zm6.7-1.8h-6.3c.3 1.2.9 1.5 1.9.8.8.8 2 .5 2.3.1 1.4 1.1 2.1-.2 2.1-1zm-.6-4.4l-6.2-.2c.1 1.6 1.6 1.5 2.4.9.5.7 1.5.5 2 0 .7.8 2 .3 1.8-.7zm.8-4.9h-6.6c0 1.1 1.5 1.7 2.6.7.3 1.3 1.5.9 2 .4.8 1 2.5-.2 2-1zm-.4-3.3l-6 .1c0 1 1.4 1.4 1.9.6.3.5 1.3.4 1.6 0 .4.7 1 .2 1.2 0 .7.5 1.4.2 1.3-.7zm6.9 2.2l-7.2-.1c0 .7.7 1 1.2.7 0 .8 1 1 1.7.4.4.7 1.7.8 2.2 0 1 .9 2.2.2 2-1zm-.1 5.9h-7c0 1 1.1 1.3 1.8.8.1.8 1 .9 1.5.4.7.7 1.7.8 2.3 0 .8.3 1.5-.4 1.4-1.2zm-.4 5.3h-5.6c0 1 1.2 1 1.7.5.6.7 1.4.7 1.9.2.7.6 1.9.4 2-.7z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M381.3 664.4c-3 0-6.1 0-8.2-.2s-2.7-.6-4.2-1.5l-5.6-3.4c-.5-.2-1 .1-.3.5l5.6 3.7c1.5 1 2.5 1.9 3.4 3 1.2 1.3 2 1.3 2.6 1.1s1.4-.5 2.3-.3c.8.2 2 .3 2.6.2.5.5 1.8.4 2.5.2s1.2-.2 1.7-.1h1.7c.5 0 1.8-.3 2.7-.2 1 .2 1.9 0 2.5 0a5 5 0 012-.1c.6-.4.8-.9 1-1.4.6-.1.8-.2.9-.5l.6-1.6h.2v-.6l-.4-.6.2-1 .5-.2-.2-1-8.8.2a2 2 0 00-.6 1.1l-2.6.4c-.3.1-.6.1-.9.5l-1.2 1.8z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M391.8 660.5l1.3-4.9c.2-.5-.3-.6-.5 0l-1.3 4.9h.5z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M396.9 655c-1.1.5-1.7.8-2.2.6-.5-.2-1.1-.3-1.5-.1a.5.5 0 010 .1 493.3 493.3 0 01-1.1 3.8c.8.3 2.2.3 2.5 0 .4-.4 1.3-.3 1.8-.3.3-.4.4-.9.3-1.1s0-.7 0-1 .4-1.4.2-2z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M371.7 645.6a53.2 53.2 0 01-8 14m2 1.2a54.5 54.5 0 0011.4-12.6m-7 4.3c-.3 2.7-1.1 7.5-1.5 10m2.6-4c-1 1-2.3 2.6-3.4 3.5m12.7-8.9c-.8.8-1.7 1.8-2.6 2m3.1-1.8a7 7 0 002.7 1.9m-3.2-6.2a8.5 8.5 0 01-3 1.7m3.4-1.6c.6.6 1.3 1.3 2.2 1.7m-5.4-4.9a7 7 0 002.7-1.5m.3 0c.7.7 2 1.4 2.7 1.6m-5.5-3.3a4 4 0 002.4-1.4m.3-.2c.7.6 2 1.4 2.7 1.5m3.2.8c-.4.5-1.5 1.3-2.2 1.3m2.7-1.3c.3.5 1.1 1.3 1.6 1.3m-4.8 6a7.2 7.2 0 002.8-1.9m.5.1a5.6 5.6 0 001.9 1.8m-4.1 5.2c.4 0 1.5-.6 1.8-1.3m.6-.3a7 7 0 002 1.7m-18.7.9c1.3-.4 3.8-2 5.1-3.5m-2.4 1.9c1 .7 2.3 1.5 3.2 1.7m-6.2-4.5a8 8 0 002.4-1.5m.5-.1c.3.4 2.4 1.7 3.3 1.7m-3.8-5.9a9.8 9.8 0 01-2.5 1.4m3-1.4c.7.5 2.2 1.4 3.1 1.4m-3.6-5.4c-.6.6-1.6 1.6-2.4 1.9m2.9-1.8c.4.7 1.6 1.7 2.4 1.8m8 2.6c1.9 3.3 5.3 7.4 8.7 9.6m-14.1-13.3c2.8 4 8.2 12.7 13.4 15.9m1-3.4a18.4 18.4 0 01-4.9 4.6m4.5-3.5c-1.7-2.8-2.6-6.3-4-11m-14 12.4l2 6m-2.4-6.1l1.9 6m-2.4-6.3l1.8 6.2m-2-6.1l1.4 6.1m0-.2h1.7m-.2-.6h-1.6m1.4-.5h-1.6m1.4-.5H374m1.3-.6H374m-.1-.5h1.3m-1.4-.4h1.3m-1.4-.5h1.2m-1.3-.4h1.1m-1.2-.5h1m-1.1-.4h1m-1.1-.3h1m-1-.4h.9m-2.6 0l-1.2 5m1.5-5l-1 5.2m1.3-5.4l-.8 5.5m1.2-5.6l-.6 5.8m.7-.4h-2m2-.5h-2.3m2.3-.6h-2.1m2-.5h-1.9m2-.5h-1.9m1.9-.6H371m1.7-.5H371m1.6-.5h-1.5m1.5-.5h-1.3m1.3-.5h-1.2m1.2-.3h-1.1m1 5.5v-5.9m6.5-2l-4 8.1m4.3-8.2l-3.4 8.3m3.6-8.4l-2.7 8.4m3-8.2l-2.2 8.2m.1-.3h-2.5m2.7-.8h-2.4m2.5-.6h-2m2.4-.6h-2m2.1-.6h-1.9m2.1-.6h-1.8m2-.7h-1.6m1.7-.5h-1.5m1.7-.6h-1.4m1.5-.4H378m1.4-.4H378m1.3-.4h-1m1-.3h-.9m1-.4h-.8m1-.4h-.8m.8-.3h-.7m3.4-.1l1.7 5.6m-1.4-5.5l2.1 5.4m-1.8-5.4l2.5 5.3m.6-.5l-2.8-4.9m2.8 5h-2m1.8-.8h-2m1.7-.6h-1.9m1.5-.7h-1.7m1.3-.6h-1.5m1.1-.7H383m1-.7h-1.2m.8-.6h-1m3.2.1L384 662m2.3-5.4l-1.6 5.3m.7-.1l1.2-5m.3.2l-1 4.7m-1.7-.3h1.7m-1.5-.6h1.7m-1.5-.7h1.6m-1.3-.6h1.5m-1.3-.7h1.4m-1.2-.6h1.3m-1-.7h1.2m-1-.6h1m.9.1l.8 3.6m-.5-3.8l1.1 3.7m-.7-3.7l1.2 3.7m-.7-3.5l1.3 3.5m-.1-.3h-1.7m1.5-.5h-1.6m1.4-.5h-1.5m1.3-.6H388m1.2-.5h-1.4m1.2-.5h-1.3m1.1-.5h-1.2"
        fill="none"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M479.6 380.3c3.6-2.3 9.8-1.9 13 .5 3.7-2.1 10.5-1.5 13.6 1.3 4.8-3.3 8.9-3.8 13.5-.6a12 12 0 0113.6.2c4.2-2 8.8-3.6 12.9.7a10.7 10.7 0 00-13 .8c-4-4-11.1-2.5-13.5.3a8.8 8.8 0 00-13.3.2c-4.2-3.5-10.4-3.6-13.8-1a15 15 0 00-13-2.4z"
        fill="#00b800"
      />
      <path
        d="M543.3 375.3c-18.5 3.2-59 1-67.8-1.3-3-.7-2.2-1.8.4-1.2 10.2 2.3 32 2.3 44 1.7 2.3-3 6-8.3 7.1-9.8s1.6-1.6 4-2l10-1.7v1.4c-.2.3-.5.7-.8.8 0 2.4.5 8.2 1 10.3l1.3-.3c.8-.2 1.6 1.9.8 2.1z"
        fill="#cf6200"
      />
      <path
        d="M573.7 376.2h2.5c.7 0 1.8-.6 2.2-1.7l2.5-7.3-1.9-2.8 1-6.1 2.4-1c.1-.4-.1-1.9-.6-2.3l-36.2 1.2c-1.1 0-1.6 0-2 1.4a27 27 0 009.2 26.6c.6.5 1.4 0 .4-.8a29.8 29.8 0 01-5-6.5l6-.1c.4 2 1.9 6 2.2 6.8s1 .8.6-.3c-.8-2.4-1.2-5.2-1.5-6.6h6l.5 6c0 .8.7.8.7-.1v-6l5.5-.2-.5 6c-.1 1 .4 1.4.6 0l.8-6 3.8-.2c-.1 1.3-1.3 5-1.6 6s.2 1 .6.1a35 35 0 001.8-6z"
        fill="#cf6200"
      />
      <path d="M547.2 375.3c-.6-1.3-2.6-5.9-2.8-9.2l8-.1c.3 2.5 1 7.9 1.5 9.1l-6.7.2zm6.6-9.4c.2 2 1.2 8.5 1.4 9.2l6.4-.1-.4-9.3-7.4.2zm-9-8.1a38 38 0 00-.3 6.8l7.7-.2-.6-6.8-6.8.2zm8.3-.2c0 1.6.4 5.6.5 6.8l7.6-.2-.4-6.9-7.7.3zm9.2-.3l.3 6.9c1.8 0 5.4 0 6.5-.2.1-1.5.3-5.9.2-7l-7 .3zm8.3-.3l-.2 7 7.1-.3c.3-1.5 1-5.4 1-7l-7.9.3zm7.2 8.3l-7.5.2-.7 9.2 7.2-.2a61.6 61.6 0 002.6-7c-.5-1-1-1.4-1.6-2.2zm-15.2.4l.2 9.2 5.5-.2.7-9.2-6.4.2zm-31-1.8l-3 .5a224.8 224.8 0 01-7.2 10.1l10.6-.3-.3-10.3zm1.4-.3l.4 10.5 6.4-.5-1-11-5.8 1z" />
      <path
        d="M377.3 657h-7.7v-.2l7.7.1zm6-6.2c.1 0 .1 0 0 0l-6-.1c-.1 0-.1 0 0 0h6zm-6.4 1.7c.1 0 .1.1 0 .1h-6.8c-.1 0 0-.1 0-.1h6.8zm.2-4.4c.1 0 .1.1 0 .1H370c-.1 0-.1-.1 0-.1h7.1zm-.5-3.5c.1 0 .1.1 0 .1h-6.9c-.1 0 0-.2 0-.2l7 .1z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M383.8 642.6l-6 .1 6-.1z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M384.1 646c.1 0 .1 0 0 0h-6.5c-.1 0-.1 0 0 0h6.5zm6.5 4.6v.1h-7c-.2 0-.2 0 0 0h7zm0-5.9c.2 0 .2.1 0 .1h-7.1c-.1 0-.1-.1 0-.1h7.2zm-6.6 10.4c.1 0 .1.1 0 .1h-6.4v-.1h6.4zm6.2.9c.1 0 .1 0 0 0h-5.6 5.6z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M395.3 657a3 3 0 000-1.4 1.1 1.1 0 01-.6 0 3 3 0 00-.3-.2c0 .4-.2 1.5-.4 1.9-.3 0-1 0-1.3-.2l-.3 1a3.5 3.5 0 001.5 0c0 .6-.1 1.1-.4 1.5.5 0 1 0 1.1-.3.3-.4.3-1 .4-1.3l.5-.1.5-.2.7-.1v-.6l.2-.4-1.6.5z"
        fill="#ef072d"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M370.5 623.2c-.8 0-2.6 0-3 .2-.3.2-.4.3.2.4s1.7.5 2.3.8c.6.4 1 1 1 2a6 6 0 003 6.3c.1.1.2.2.1.6l-.3 1.1c0 .2-.1.4.2.3a20 20 0 01-1 1.6c-1.6-.2-3 0-3 1.8 0 .2 0 .4.2 0 .3-.4.6-.8 1.3-1-.4.7-.6 1.3-.5 1.7 0 .3.2.5.4 0 .1-.4.5-.8.8-1.1.2-.1.2-.1.1.2s.1.9.3 1.1c.2.2.3.1.2-.2 0-.4 0-1.1.5-1.3.6-.4 1.2-.2 1.4.2.3.5.5 0 .2-.4s-.6-.9-1-.9l1-1.7c0-.2.2-.3.4-.2 0 .1.2.1.3-.2l.7-1.4.6-.2 1 1.5v.6c0 .4-.4 1.3-.5 1.6-1.2 0-1.8 0-2.2.7-.2.3.1.4.4.3a2 2 0 011-.3c.2 0 .3.2 0 .3-.7.3-1.2.8-1.2 1.5 0 .2.2.3.3 0 .3-.5.8-.9 1.3-1 0 .5.1 1.3.5 1.5.3.2.3 0 .2-.3-.2-.5 0-1 .3-1.3.5-.6 1.7.2 2 .4.2.2.4.3.2-.3-.1-.7-1.1-1-2-1.2l1.2-4.2c.5.3 1-.5 1.8-.2 1.4.6 3.5 1.9 3.8 2.2.4.3.5.2.7 0 .2-.1.5 0 .8 0 .2.1.4.2.1-.4a7.2 7.2 0 00-2.4-2.6c.8 0 1.8 0 1.8-.2s-1.2-.6-1.7-.6a3.3 3.3 0 001.6-.8c.2-.2 0-.3-.8-.3-2.1 0-3.2 0-4.3-.6-1.8-1-2.9-2.2-3.8-2.6-.4-.3-.7-.9-1-1.4-.5-1.5-.5-2.3-1.8-2.8s-3 .1-3.7.8z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M370.6 623.6h-1.7s-.2 0 0 0l1.5.4c.3 0 .2.3 0 .2s-.4 0-.2.2c1 .7 1.2 1 1 3.7l.5.4c.2 0 .1.2 0 .1s-.5 0-.2.2.5.2.2.2-.6.2 0 .1c.5 0 .8.2 0 .3-.6 0-.4.2 0 .2.7 0 .5.2.3.2s-.3.2.2.2h.7c.1 0 .2 0 0 .1-.2 0-.2.2.1.2s.5 0 .2.1c-.1 0-.3.1 0 .2.7 0 .8.2.6.3s-.3.1 0 .1.6.1.3.2c-.2 0-.3.2 0 .2s.5.2.3.3-.3.2 0 .2.4.1.2.2c-.2.2-.3.2-.5 0 0-.2-.2-.2-.2 0l-.2-.3c-.1-.3-.3-.3-.3 0s-.2.1-.4 0a3.3 3.3 0 004 .8c.1 0 .2 0 .3.3l.6 1.1c.1.2.3 0 .3-.2l.6-1.7c0-.3.4-.5.3.3.3-.2 1.5-.3 2.5 0a12.2 12.2 0 012.7 1.5.6.6 0 00.5.1c.3 0 .4 0-.1-.5s-.3-.7 0-.5c.3.2.5.1.2-.2l-1-.9c-.1 0-.1-.2-.6-.2h-1.5c-.2 0-.4 0 .2.2.6.2 1.7 1 2 1.2s.4.6-.1.2-2.4-1.5-3.6-2c-2.7.3-4.9.6-6.5-1.1-.8-.9-.8-2.8.5-3.6-.2-.2-.2-.4-.1-.4v-.6c-.2-.1-.4-.3-.4-.5-.3 0-.5-.5-1-.3s-.6 0-.8-.1c-.1-.2-.2-.2-.5-.2s-.5 0-.5-.2.2-.2.6 0c.7.3 1.3.5 1.8-.2.4-.6-.2-1.1-1-1.3-.9-.2-1.5.5-1.9.8z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M375 623.3a2.8 2.8 0 00-1-.6c-.3 0-.3.2-.2.3v.6c.2.1.3.3 0 .3-.2.2 0 .9.3.7h.2s0 .3.2.3 0 .2 0 .3h.2c.2 0 .1.4-.1.5.3 0 .4 0 .4.2.1.2.4.3.4.6s0 .3-.4.2-.4 0-.5.2-.2.3 0 .3.4.1.1.2-.6 0-.7.3c0 .3 0 .4.2.3l.7-.4.5.1c.2.1 0 .5-.2.3s-.4 0-.5.1l-.5.2c-.2 0-.4 0-.3.5 0 1.4 1.1 2.4 3.1 2.4h3.3c-.6-.4-1-.6-1.3-.6h-.3c.1-.1 0-.3-.1-.3s-.3-.2-.5 0l-1 .5c-.2 0-.5 0-.2-.2l.9-.4c.2 0 .1-.2.1-.2s0-.3.3-.2c.6.4 1.5.9 1.8.9s.4-.2.2-.3-.3-.3-.3-.4.1-.2.5 0c.4.3 1 .5 1.3.6s.5.1 0-.2l-2.3-1.7c-.3-.3-.3 0-.2.2s-.3.3-.5.1-.3-.3 0-.4.2-.2-.1-.5c-.4-.3-.5-.3-.4 0 .1.3.1.5-.2.4s-.6-.3-.3-.4c.2-.2.5-.3 0-.6s-.2 0-.3.2-.4.2-.5 0-.3-.3-.2-.4.1-.2.3 0 .4 0 .1-.3-.4-.2-.3 0-.2.4-.6 0c-.2-.1-.2-.3 0-.4.2 0 .2-.1 0-.3-.7-1.2-.4-2.1-1.2-3z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path
        d="M491.6 188.4c-.3.5-.4.4-1 .8-.6.5-.8 1.8.4 1.7.8-.2 1.3-.6 1.6-1a10 10 0 00-1-1.5zm-3.6-2.9c-.9.9-1 1.3-.6 1.3.6 0 .3 0 0 .7-.5.6.7.9 1.2.4s.5-.6.8 0c.1.5 1 0 1.4-.4-.8-.8-1.9-1.5-2.8-2zm-1.6 5c-1.2.6-.8 3.7 1 2.8.6-.3 1-.1 1 .3-.1.3-.1.5 0 .8a5.4 5.4 0 002-1.4c1-1.3 0-1.2-1.6-1.2s-2-.3-.5-1.2c1.4-.9.4-1.4-1.5-1.2.3.4.2.8-.4 1.1zm6.7 6.9c-.9-1-.3-1.4.6-1.9a1.2 1.2 0 00.5-.4l-.8-3c-.4.2-1 1.3-1.2 1.8-.2.8-.4 1.2-1.2 1-.7-.2-1.4.6-1.5 1.4h.5c.3.1.4.6.3 1 2.1 0 2.5 1.4 2.9 2.4.4 1.1.8 1 1.1.3.3-.6-.4-1.7-1.2-2.6z"
        fill="#cf6200"
      />
      <path
        d="M493.7 209.6c-.4.9-.4.8-1.7.8-1.2.1-2.8.3-3.5 1-.3.4-2.5.6-2.5 1.5 0 1 0 1.7 1 1.8.9 0 1 .2.7.9-.4.7-.6 1.8 1 2 1.6 0 2.8-.4 3.2.5.4 1 0 2.4.3 3s1.4.9 3.1 1.4c1.2.3 5.5.6 6.8.4 1.3-.2.8-1-.5-1-1.3-.2-2.3-.4-2.6-1.3-.3-1-.6-1.5.2-2.3.7-.9 1.4-1.5 1-2.9-.4-1.3-1.1-2.9-2.7-3.3-1.5-.5-1-2.6-2.6-2.8-.6 0-1 0-1.2.3z"
        fill="#ff0"
      />
      <path
        d="M486.1 222.2c1.4.2 2.5.6 1.4.9-1 .3-1.7.9-.3 1 1.4.1 2.6.7 1.5 1s-1.2 1 .1 1 1.9.6 1 1.2c-1 .5-1.6.8-2.2-.1-.6-1-1-1.2-1.1-.5-.2.7-.6.2-1-.8s-1.4-1.4-1.1-.6-.8 1-1.8.6c1 1 2 2 3.3 2.7 1.4-.5 3 0 3.5 0 .6 0 2.4.5 3.4 1s1.7-.4 1.3-1.5c-.5-1-.5-.7-1 0-.6.5-.7-.3-.6-1.5 0-1-.7-.8-.9-.2s-.8-.4-.5-1 0-.9-.5-.7-.6 0-.7-1.2-.6-1-.7-.5-.7-.2-1.4-1.1c-.6-.8-1.3-.3-2.5.1l.8.2z"
        fill="#cf6200"
      />
      <path
        d="M500.3 229.5c-6.4 2.5-11 1.4-14.4-.9 1.4-.5 3 0 3.6 0 .5 0 2.4.5 3.3 1s1.7-.4 1.3-1.5c.8 1.1 1.5 1.9 2.5 1.8 1 0 2.8-.2 3.7-.4zM486.7 200c-.4-1.3-.8-1.6-1.5-1.5-.7 0-1-.1-1.8-.4-.7-.3-1.7 0-1.9 1.5s-1 2-2.2 3c-1.1.8-1.8 1.5-1.8 2.9s-.3 1.7-1.1 2.8l-1.3 1.5 1.4.8c.9.4.6 1-.2.8s-1.7.2-.3.5 2 1 .7 1c-1.4-.2-3 1-.3.7 2.6-.3 3.6 1 .6 1-3.1 0-2 1-.3 1 2.9 0 2 .9 1.2.9-.7 0-1 1 .9.8l.7-1.1c.3-1 .6-3.7 1.7-4.4 1-.8 1.6-2 1.6-2.7s1.7-4.2 2.7-5 1.6-2.7 1.2-4z"
        fill="#ff0"
      />
      <path
        d="M484.4 200.2c-1-.8-2.1-.3-2.1 1s-.8 1.8-1.7 2.3a4 4 0 00-2 2.7c0 1.1.2 1.8-.5 2.7-.8.8-.9 1.5-.4 2 .6.5.6.5.8 1.2.3.7 1.6 0 1.6-.8s.3-.8 1.1-1.3c.9-.4 2.3-2.7 2-3.3-.3-.6-1.1-1.2 0-2 1-.9 2-1 2-1.8 0-.9.3-1.2.6-1.5.3-.3-.7-.8-1.4-1.2z"
        fill="#cf6200"
      />
      <path d="M484.4 199c-.7-.2-1.1 1.3-.1 1.5s1.1-1 .1-1.4zm-.1 2c-.8.1-1.7 1.1-.4 1s1.8-1.1.3-1zm-1.6 1.9c-.8.4-.6 1.5.6.7s1.4-1.7-.6-.7zm-1.2 1.6c-.8.4-.7 1.5.5.7 1.2-.7 1.5-1.7-.5-.7z" />
      <path d="M479.9 205.3c-.8.4-.3 1.4.8.7s1.1-1.7-.8-.7zm1 1c-.9.4-.4 1.4.8.7s1.1-1.7-.9-.7z" />
      <path d="M479.4 206.7c-.7.4-.2 1.4 1 .7s1-1.7-1-.7zm1 1.1c-.9.4-.4 1.4.8.7 1.2-.8 1.1-1.7-.9-.7z" />
      <path d="M479 208.5c-.8.4-.3 1.4.9.7s1-1.7-.9-.7z" />
      <path d="M479 209.5c-.7.4-.2 1.5 1 .7s1-1.7-1-.7z" />
      <path
        d="M478.5 219.3c-.8.1-1.4 1.3-.4 1.5s1.3.3 1.3 1 .3 2 1.4 2c1 .1 2-1.1 1-1.5-.9-.4-1.7-.7-1.8-1.6 0-.8-1-1.4-1.5-1.4z"
        fill="#cf6200"
      />
      <path
        d="M507 212.6l.6.6c.8.6 2.2 0 2-.5s-1-2.3 1-.9l10.6 7.4c2.2 1.6.8 1.8-.2 1.3s-4-1.7-5.7-2.7c-1.7-1-2-.6-2.2-.3-.2.3 0 1 .6 1.6-1 .1-2.7 0-3.2-1.2-.6-1.3-2-3-3-4.2-.4-.5-.5-.8-.4-1z"
        fill="#ff0"
      />
      <path
        d="M564.9 403.6c-1.4 1-3.4 2.8-2.1 5.2l.5-.2a142.4 142.4 0 0014.7-21.7l.1-.7a20.5 20.5 0 01-5.2 3.1c.7 1.9-2.6 4.3-4.3 5 .7 1.2.5 3-1 3.3.3 1-.9 1-2.3 1.6s-2 1-2.5 1.8c.7-.5 1.8-.8 2.3-.6s.7 1-.3 1.3-1.7.8-2.1 1.2c1.5-.5 3.7-.3 2.2.7z"
        fill="#00d860"
      />
      <path
        d="M376 628.4c-.4-.3-.5-.1-.4 0s0 .4-.3.5h-1c-.2 0-.5.4 0 .3l1.6-.3c.2 0 .4-.2 0-.5zm.7.6c-.3-.3-.4-.2-.3 0s-.1.3-.3.3l-1.4.4c-.4 0-.4.3.1.3s1.5-.5 1.6-.5.2-.3.3-.2.3 0 0-.3zm.3.8l-1 .5c-.3 0-.5.3 0 .3s1-.5 1.2-.6l.4-.2s.4-.1 0-.4-.8 0-.6.1 0 .3 0 .3z"
        stroke="#000"
        strokeWidth={0.1}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
      <path d="M482 187.5c-2.8-1.9-6 2-2.9 4.2 2.8 1.9 5.7-2.4 3-4.2z" />
      <path
        d="M478.5 189.2h.8c-.1 1 .8 2.3 2 2-1 .8-3-.2-2.8-2zm11 42.5c.9.3 3.9.6 5 .6l-1.4 2.5c-.3.8-.4.9-.5-.3 0-1.2-.7-2-1.3-.7l-1.2 2.2c-.3.5-.8.7-.6-.6s.1-2.6 0-3.7z"
        fill="#fff"
      />
      <path
        d="M399.7 640.8c0 16.3-2.6 33.9-23.8 42.3-21.1-8.4-23.7-26-23.8-42.3h47.6zm0 0c0-6.2-.3-12.2-.2-17.4a63.6 63.6 0 00-23.6-4.3c-5.3 0-15.7.8-23.6 4.3.2 5.2-.2 11.2-.2 17.4h47.6z"
        fill="none"
        stroke="#000"
        strokeWidth={0.3}
        transform="matrix(4.4862 0 0 4.4867 -1190.9 -2609)"
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const SHFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

SHFlagIcon.displayName = 'SHFlagIcon';
