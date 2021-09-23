// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'ESGA flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg viewBox="0 0 640 480" aria-hidden={ariaHidden} ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fontSize={12}>
        <path fill="#fff" fillRule="evenodd" d="M0-.09h640.002v480.04H0z" />
        <path fill="#09c" d="M640.002 410.104L91.734-.09H0v68.405L550.402 479.95h89.6v-69.846" />
      </g>
      <g fontSize={12}>
        <path
          fill="#005bbf"
          d="M316.374 352.313c-64 0-61.973-60.318-61.973-60.318v-92.773h124.054v92.773s2.133 60.318-62.08 60.318"
        />
        <path
          fill="none"
          stroke="#000"
          d="M296.6 401.2c-60 0-58.1-56.5-58.1-56.5v-86.9h116.3v86.9s2 56.5-58.2 56.5z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#d81126"
          d="M315.841 140.932s-13.227-6.405-25.707 2.99c0 0-22.506-3.203-24.213 18.362 0 .854-.214 2.455.213 2.99.427.426.854 1.28.854 1.92 0 .641.32.962.533 1.175 0 .32.427.747.533 1.815 0 1.174-.213 1.708.96 2.882 1.067 1.068 1.067 4.377 1.067 5.338 0 .961.64 3.523 1.067 4.057.533.534 1.386 1.922 1.386 3.096 0 1.068.427 4.27.214 5.018-.214.854 1.28 1.815 2.56 2.242 1.28.427 17.066 5.551 40.106 5.124 23.04-.32 31.36-1.601 40.96-5.018 1.387-.533 1.707-1.814 1.6-2.455-.213-.64 0-2.776.32-3.31.427-.533 3.2-4.91 2.56-5.658-.533-.854-.533-2.562 0-3.202.534-.748 2.24-3.95 2.56-5.338.32-1.281.427-2.883 1.067-3.31.533-.427.747-2.028.853-2.349a4.267 4.27 0 011.28-1.708s1.067-5.444.427-8.113c-.747-2.67-4.8-14.2-21.12-11.744 0 0-12.16-9.288-30.08-4.804"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          d="M296.1 203.2s-12.4-6-24.1 2.8c0 0-21.1-3-22.7 17.2 0 .8-.2 2.3.2 2.8.4.4.8 1.2.8 1.8 0 .6.3.9.5 1.1 0 .3.4.7.5 1.7 0 1.1-.2 1.6.9 2.7 1 1 1 4.1 1 5 0 .9.6 3.3 1 3.8.5.5 1.3 1.8 1.3 2.9 0 1 .4 4 .2 4.7-.2.8 1.2 1.7 2.4 2.1 1.2.4 16 5.2 37.6 4.8 21.6-.3 29.4-1.5 38.4-4.7 1.3-.5 1.6-1.7 1.5-2.3-.2-.6 0-2.6.3-3.1.4-.5 3-4.6 2.4-5.3-.5-.8-.5-2.4 0-3 .5-.7 2.1-3.7 2.4-5 .3-1.2.4-2.7 1-3.1.5-.4.7-1.9.8-2.2a4 4 0 011.2-1.6s1-5.1.4-7.6c-.7-2.5-4.5-13.3-19.8-11 0 0-11.4-8.7-28.2-4.5h0z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#bcac0b"
          d="M360.108 181.073c-50.134-15.907-88.96-.747-88.96-.747s.426 1.708.853 2.242 1.067 1.815 1.067 2.776v2.989c0 .747-.427 3.95 2.346 3.843 0 0 34.987-13.665 80.427.747 0 0 1.28-1.067 1.28-2.669a8.533 8.54 0 011.067-4.27c.533-.854 1.92-3.63 1.92-4.91"
        />
        <path
          fill="#c8b100"
          fillOpacity={0.9}
          d="M313.601 264.878h-21.867s-2.133 19.537 14.72 25.515v1.709h3.52v2.348s-6.186 5.552-.746 11.957v1.922h.853v3.203h1.067v5.017s-.854 18.149-18.774 26.903v1.068h47.68v-1.068c-17.813-8.647-18.666-26.903-18.666-26.903v-5.017h1.066v-3.203h.854v-1.922c5.333-6.405-.854-11.957-.854-11.957v-2.348h3.627v-1.709c16.747-5.978 14.613-25.515 14.613-25.515h-27.093"
        />
        <path
          fill="none"
          stroke="#000"
          d="M294 319.3h-20.5s-2 18.3 13.8 23.9v1.6h3.3v2.2s-5.8 5.2-.7 11.2v1.8h.8v3h1v4.7s-.8 17-17.6 25.2v1h44.7v-1c-16.7-8.1-17.5-25.2-17.5-25.2V363h1v-3h.8v-1.8c5-6-.8-11.2-.8-11.2v-2.2h3.4v-1.6c15.7-5.6 13.7-23.9 13.7-23.9H294h0z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M286.6 342.9h19.7m-19 1.5h18.4m-15 2.5h11.5m-12.3 11.5H303m-12.4 1.4h11.6m-11.6 2.8h11.5m-18.5 23.2h25.5m-32.7 5.9h40m-41.5.9h43"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#ccc" d="M316.374 263.81a13.92 13.932 0 100-27.863 13.867 13.879 0 000 27.757" />
        <path
          fill="none"
          stroke="#000"
          d="M296.6 318.3a13 13 0 100-26.1 13 13 0 000 26z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#ccc"
          d="M284.054 222.922h-8.64v-8.754h-7.68v8.754h-8.747v7.687h8.747v8.54h7.68v-8.54h8.534v-7.687"
        />
        <path
          fill="none"
          stroke="#000"
          d="M266.3 280h-8.1v-8.2H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8V280"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#ccc"
          d="M374.188 222.922h-8.64v-8.754h-7.68v8.754h-8.747v7.687h8.747v8.54h7.68v-8.54h8.64v-7.687"
        />
        <path
          fill="none"
          stroke="#000"
          d="M350.8 280h-8.1v-8.2h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1V280"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#ccc"
          d="M328.534 211.926h-8.746v-8.54h-7.68v8.54h-8.534v7.687h8.534v8.754h7.68v-8.754h8.746v-7.687"
        />
        <path
          fill="none"
          stroke="#000"
          d="M308 269.7h-8.2v-8h-7.2v8h-8v7.2h8v8.2h7.2v-8.2h8.2v-7.2"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#ccc"
          d="M284.054 260.501h-8.64v-8.754h-7.68v8.754h-8.747v7.687h8.747v8.54h7.68v-8.54h8.534V260.5"
        />
        <path
          fill="none"
          stroke="#000"
          d="M266.3 315.2h-8.1V307H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8v-7.2"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#ccc" d="M374.188 260.501h-8.64v-8.754h-7.68v8.754h-8.747v7.687h8.747v8.54h7.68v-8.54h8.64V260.5" />
        <path
          fill="none"
          stroke="#000"
          d="M350.8 315.2h-8.1V307h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1v-7.2"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#ccc" d="M284.054 298.4h-8.64v-8.647h-7.68v8.647h-8.747v7.687h8.747v8.647h7.68v-8.54h8.534V298.4" />
        <path
          fill="none"
          stroke="#000"
          d="M266.3 350.7h-8.1v-8.1H251v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8v-7.3"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#ccc" d="M374.188 298.4h-8.64v-8.647h-7.68v8.647h-8.747v7.687h8.747v8.647h7.68v-8.54h8.64V298.4" />
        <path
          fill="none"
          stroke="#000"
          d="M350.8 350.7h-8.1v-8.1h-7.2v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8.1v-7.3"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#005bbf" d="M316.268 122.356a8.373 8.38 0 100-16.76 8.373 8.38 0 000 16.76" />
        <path
          fill="none"
          stroke="#000"
          d="M296.5 185.8a7.8 7.8 0 100-15.7 7.8 7.8 0 000 15.7z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M324.054 112.535h-6.826v-11.103h2.666v-2.135h-2.666v-2.67h-2.134v2.563h-2.666v2.242h2.56v11.103h-6.4v1.494h15.466v-1.494"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.5}
          d="M303.8 176.6h-6.4v-10.4h2.5v-2h-2.5v-2.5h-2v2.4h-2.5v2.1h2.4v10.4h-6v1.4h14.5v-1.4"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M282.88 132.285s6.188-.64 9.708.747c0 0-4.054 4.698-3.2 10.783.426 3.202 1.066 4.804 2.026 6.405.854 1.388 1.814 4.59 1.28 7.046h1.174s1.173-5.124-.747-7.9a10.667 10.676 0 01-1.067-10.996c2.027-4.057 4.907-5.658 4.907-5.658 3.2 1.281 10.24 0 12.16-1.388 2.027-1.388 2.987-3.416-.64-3.523-3.733-.213-9.92-.107-14.187 3.096 0 0-2.24-2.562-13.44-1.388-11.2 1.281-19.2 6.085-21.76 16.12-1.28 5.125 3.52 15.908 7.894 18.47 0 0-.107-1.708.32-2.99 0 0-7.467-8.433-5.334-16.227 2.347-7.686 11.307-12.81 20.907-12.597"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M265.2 195.1s5.8-.6 9.1.7c0 0-3.8 4.4-3 10.1.4 3 1 4.5 1.9 6 .8 1.3 1.7 4.3 1.2 6.6h1.1s1.1-4.8-.7-7.4a10 10 0 01-1-10.3c1.9-3.8 4.6-5.3 4.6-5.3 3 1.2 9.6 0 11.4-1.3 1.9-1.3 2.8-3.2-.6-3.3-3.5-.2-9.3-.1-13.3 2.9 0 0-2.1-2.4-12.6-1.3-10.5 1.2-18 5.7-20.4 15.1-1.2 4.8 3.3 14.9 7.4 17.3 0 0-.1-1.6.3-2.8 0 0-7-7.9-5-15.2 2.2-7.2 10.6-12 19.6-11.8z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M303.894 130.79c1.92-.213 3.52-.534 3.414-.747 0-.32-1.6-.32-3.52-.214-1.92.107-3.414.534-3.414.748 0 .32 1.6.32 3.52.213"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.7}
          d="M278.3 195.4s-2 2 0 0 6.4-3.2 8.9-2.7c2.4.6-.5.9-1.3 1-.8 0-2.4.3-4.8 0"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M349.548 133.032s-6.08-.747-9.707.64a15.573 15.587 0 011.28 17.082c-.96 1.601-1.92 4.697-1.387 7.153h-1.066s-1.28-5.018.746-7.9a10.667 10.676 0 00.96-10.89 13.44 13.452 0 00-4.8-5.765c-3.306 1.388-10.346 0-12.266-1.387-1.92-1.388-2.987-3.31.746-3.523 3.627-.214 9.92-.107 14.187 3.202 0 0 2.133-2.669 13.44-1.388 11.093 1.175 19.2 5.979 21.654 16.014 1.28 5.125-3.414 15.907-7.787 18.47 0 0 0-1.709-.32-2.99 0 0 7.466-8.327 5.226-16.12-2.24-7.794-11.2-12.811-20.906-12.598"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M327.7 195.8s-5.7-.7-9.1.6a14.6 14.6 0 011.2 16c-.9 1.5-1.8 4.4-1.3 6.7h-1s-1.2-4.7.7-7.4a10 10 0 00.9-10.2 12.6 12.6 0 00-4.5-5.4c-3.1 1.3-9.7 0-11.5-1.3-1.8-1.3-2.8-3.1.7-3.3 3.4-.2 9.3-.1 13.3 3 0 0 2-2.5 12.6-1.3 10.4 1.1 18 5.6 20.3 15 1.2 4.8-3.2 14.9-7.3 17.3 0 0 0-1.6-.3-2.8 0 0 7-7.8 4.9-15.1-2.1-7.3-10.5-12-19.6-11.8z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M328.534 131.43c-1.92-.106-3.413-.426-3.413-.747 0-.213 1.6-.32 3.52-.213 1.92.213 3.52.534 3.52.747 0 .32-1.6.427-3.627.214"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.7}
          d="M314.6 196s2.1 2 0 0c-2-1.9-6.4-3.2-8.8-2.6-2.5.5.4.8 1.2.9.9 0 2.5.4 4.9 0"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M310.508 126.093V149.9c-.214 2.349 2.88 5.658 5.12 6.619 0 0 5.333-1.708 5.653-6.62v-25.087h-1.813v21.778c0 2.136-1.494 6.192-3.52 6.833 0 0-3.84-.64-4.054-6.833v-21.138l-1.386.64"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M291.1 189.3v22.3c-.2 2.2 2.7 5.3 4.8 6.2 0 0 5-1.6 5.3-6.2v-23.5h-1.7v20.4c0 2-1.4 5.8-3.3 6.4 0 0-3.6-.6-3.8-6.4v-19.8l-1.3.6"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M257.92 158.654a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M241.8 219.8a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M256.107 152.142a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M240.1 213.7a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M257.067 144.242a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M241 206.3a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M261.44 137.623a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M245.1 200.1a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M266.668 132.819a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M250 195.6a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M273.494 130.15a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M256.4 193.1a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M280.534 128.975a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M263 192a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M287.254 128.548a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M269.3 191.6a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M293.334 128.975a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M275 192a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M310.401 126.84a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M291 190a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.948 128.335a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M296.2 191.4a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.948 149.473a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M296.2 211.2a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M374.721 160.469a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M351.3 221.5a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M376.215 153.53a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M352.7 215a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M375.041 146.057a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M351.6 208a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M371.948 139.117a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M348.7 201.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M366.721 134.313a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M343.8 197a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M360.428 131.11a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M337.9 194a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M353.174 129.51a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M331.1 192.5a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M346.668 128.975a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M325 192a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M340.694 128.228a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M319.4 191.3a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M344.534 151.395a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M323 213a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M346.028 146.057a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M324.4 208a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M322.134 127.801a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M302 190.9a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M308.268 126.947a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M289 190.1a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M304.854 126.84a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M285.8 190a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M286.72 151.501a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M268.8 213.1a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M285.868 144.776a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M268 206.8a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M288 138.157a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M270 200.6a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M300.48 127.48a2.88 2.882 0 100-5.657 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M281.7 190.6a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M295.68 129.402a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M277.2 192.4a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M291.2 133.246a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M273 196a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.948 131.538a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M296.2 194.4a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.948 136.982a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M296.2 199.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.948 142.747a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M296.2 204.9a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M325.761 127.054a2.88 2.882 0 100-5.765 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M305.4 190.2a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M329.601 126.2a2.88 2.882 0 100-5.659 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M309 189.4a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M334.081 126.84a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M313.2 190a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M345.068 139.01a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.659" />
        <path
          fill="none"
          stroke="#000"
          d="M323.5 201.4a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M338.454 129.51a2.88 2.882 0 100-5.766 2.88 2.882 0 000 5.765" />
        <path
          fill="none"
          stroke="#000"
          d="M317.3 192.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M342.508 133.352a2.88 2.882 0 100-5.658 2.88 2.882 0 000 5.658" />
        <path
          fill="none"
          stroke="#000"
          d="M321.1 196.1a2.7 2.7 0 100-5.3 2.7 2.7 0 000 5.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.734 175.949l-7.466 3.843 6.72 4.27 8-4.056-7.254-4.057" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M296 236l-7 3.6 6.3 4 7.5-3.8-6.8-3.8"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M299.308 176.803l-11.2 1.708s-.214 6.085.32 7.473l11.626-1.494s.534-5.659-.746-7.687" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M280.6 236.8l-10.5 1.6s-.2 5.7.3 7l10.9-1.4s.5-5.3-.7-7.2z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#058e6e"
          fillOpacity={0.9}
          d="M298.134 178.938s-6.826.64-8.533 1.281v4.057s4.587-.747 8.64-1.068l-.107-4.27"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M279.5 238.8s-6.4.6-8 1.2v3.8s4.3-.7 8.1-1l-.1-4"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M331.414 177.016l11.307 1.815s.107 6.086-.427 7.473l-11.52-1.494s-.533-5.658.64-7.687" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M310.7 237l10.6 1.7s.1 5.7-.4 7l-10.8-1.4s-.5-5.3.6-7.2z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#058e6e"
          fillOpacity={0.9}
          d="M332.801 179.258s6.72.64 8.427 1.281l-.107 4.057s-4.48-.747-8.533-1.067l.106-4.27"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M312 239.1s6.3.6 7.9 1.2l-.1 3.8s-4.2-.7-8-1l.1-4"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M254.2 241.8s37-13.7 84.2 1.2m-82.7 6.7s35.9-13.4 80 .6m-79.8-9l7.2 2.1-5 5.4"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="red" d="M273.068 188.546l4.48-3.736-5.014-.961s.64.747.534 1.495v3.202" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M256 247.8l4.2-3.5-4.7-.9s.6.7.5 1.4v3zM337.6 242.7l-7.7 1.4 5.2 6"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="red" d="M357.654 188.76l-3.093-3.203 4.48-.427s-1.28.747-1.28 1.495c0 .64.213 1.601 0 2.135" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M335.3 248l-2.9-3 4.2-.4s-1.2.7-1.2 1.4c0 .6.2 1.5 0 2zM265.3 241.8c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.6-2.3c.7 0 1.2-.4 1.2-1 0-.5-.5-.9-1.2-.9s-1.2.4-1.2 1c0 .5.5.9 1.2.9zm0 3.3c.7 0 1.2-.4 1.2-.9s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm20.3-3.1c.6 0 1.2-.5 1.2-1s-.6-1-1.2-1c-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.1 3.7c.7 0 1.2-.5 1.2-1s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm-.3 2.6c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm-19.8-3c.6 0 1.2-.4 1.2-1 0-.5-.6-.9-1.2-.9-.7 0-1.2.4-1.2 1 0 .5.5 1 1.2 1zm-40 3c.7 0 1.3-.4 1.3-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M270.508 170.611s.106 7.687 5.12 6.619 4.48-7.366 4.8-7.687c.426-.32.96-.32.96-.32s.64 6.085 5.333 5.338c4.693-.747 4.48-8.22 3.947-9.501l1.066-.32s1.814 8.753 7.147 7.472c5.333-1.28 4.8-6.832 4.8-6.832h.427s1.173 5.978 5.546 5.551c4.267-.32 5.12-1.708 4.587-7.686l2.88-.534s-1.067 8.54 4.16 8.54c5.12-.32 5.333-4.377 5.653-5.124h.854s.213 6.085 4.586 6.085c4.267 0 5.12-5.124 5.12-7.152l4.267.213s-4.48 8.007 2.027 9.075c6.4 1.067 6.613-5.125 6.613-5.125h1.28s-.213 8.007 3.307 8.22c3.626.107 5.76-1.067 6.08-7.046l2.026.748s-1.706 9.608-8.426 7.9c-3.52-.961-4.694-5.018-4.48-6.085 0 0-2.454 4.483-7.36 2.989-4.8-1.388-4.267-4.804-4.267-5.872 0 0-2.88 5.338-6.933 4.164-3.627-1.068-5.014-2.349-5.014-4.911 0 0-1.813 4.163-5.333 3.95-3.627-.107-5.333-2.349-5.547-4.27 0 0-.746 3.843-5.546 4.163-3.2.107-5.014-1.494-5.76-3.63 0 0-.96 3.844-5.547 4.484-2.88.32-5.76-1.28-6.4-3.95 0 0-.747 5.231-5.333 5.872-4.694.747-5.76-2.456-5.76-2.456s-.96 4.057-4.694 5.018c-3.733.854-6.186-.747-7.146-4.484-.854-3.736-.534-5.338-.534-5.338l1.494 1.922"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M253.6 231s.1 7.2 4.8 6.2 4.2-6.9 4.5-7.2c.4-.3.9-.3.9-.3s.6 5.7 5 5c4.4-.7 4.2-7.7 3.7-8.9l1-.3s1.7 8.2 6.7 7c5-1.2 4.5-6.4 4.5-6.4h.4s1.1 5.6 5.2 5.2c4-.3 4.8-1.6 4.3-7.2l2.7-.5s-1 8 3.9 8c4.8-.3 5-4.1 5.3-4.8h.8s.2 5.7 4.3 5.7c4 0 4.8-4.8 4.8-6.7l4 .2s-4.2 7.5 1.9 8.5c6 1 6.2-4.8 6.2-4.8h1.2s-.2 7.5 3.1 7.7c3.4.1 5.4-1 5.7-6.6l1.9.7s-1.6 9-7.9 7.4c-3.3-.9-4.4-4.7-4.2-5.7 0 0-2.3 4.2-6.9 2.8-4.5-1.3-4-4.5-4-5.5 0 0-2.7 5-6.5 3.9-3.4-1-4.7-2.2-4.7-4.6 0 0-1.7 3.9-5 3.7-3.4-.1-5-2.2-5.2-4 0 0-.7 3.6-5.2 3.9-3 .1-4.7-1.4-5.4-3.4 0 0-.9 3.6-5.2 4.2-2.7.3-5.4-1.2-6-3.7 0 0-.7 4.9-5 5.5-4.4.7-5.4-2.3-5.4-2.3s-.9 3.8-4.4 4.7c-3.5.8-5.8-.7-6.7-4.2-.8-3.5-.5-5-.5-5l1.4 1.8h0z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fc0" d="M280.854 170.931a1.813 1.815 0 100-3.523 1.813 1.815 0 000 3.523" />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M263.3 231.3a1.7 1.7 0 100-3.3 1.7 1.7 0 000 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fc0" d="M304.108 167.195a1.813 1.815 0 100-3.523 1.813 1.815 0 000 3.523" />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M285.1 227.8a1.7 1.7 0 100-3.3 1.7 1.7 0 000 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fc0" d="M327.788 167.942a1.813 1.815 0 100-3.523 1.813 1.815 0 000 3.523" />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M307.3 228.5a1.7 1.7 0 100-3.3 1.7 1.7 0 000 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fc0" d="M351.148 171.679a1.813 1.815 0 100-3.523 1.813 1.815 0 000 3.523" />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M329.2 232a1.7 1.7 0 100-3.3 1.7 1.7 0 000 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M314.881 165.273h-1.6c-.427 1.601-3.84 2.562-3.84 2.562-.427-1.28.533-3.096.533-3.096-3.946-1.067-3.946-2.348-3.946-2.348.533-1.388 4.266-1.602 4.266-1.602-1.066-1.174-.853-3.202-.853-3.202 2.453.213 4.48 2.668 4.48 2.668s-2.453-1.28-2.133-5.551c0 0 1.28 0 2.133.854 0 0 0-4.697 1.92-5.231h.213c1.92.534 1.92 5.231 1.92 5.231.854-.96 2.134-.854 2.134-.854.32 4.27-2.134 5.551-2.134 5.551s2.027-2.455 4.48-2.562c0 0 .107 1.922-.746 3.203 0 0 3.626.107 4.266 1.495 0 0 0 1.387-4.053 2.348 0 0 .853 1.815.533 3.203 0 0-3.52-1.068-3.84-2.669h-3.733"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M295.2 226h-1.5c-.4 1.5-3.6 2.4-3.6 2.4-.4-1.2.5-2.9.5-2.9-3.7-1-3.7-2.2-3.7-2.2.5-1.3 4-1.5 4-1.5-1-1.1-.8-3-.8-3 2.3.2 4.2 2.5 4.2 2.5s-2.3-1.2-2-5.2c0 0 1.2 0 2 .8 0 0 0-4.4 1.8-4.9h.2c1.8.5 1.8 4.9 1.8 4.9.8-.9 2-.8 2-.8.3 4-2 5.2-2 5.2s1.9-2.3 4.2-2.4c0 0 .1 1.8-.7 3 0 0 3.4.1 4 1.4 0 0 0 1.3-3.8 2.2 0 0 .8 1.7.5 3 0 0-3.3-1-3.6-2.5h-3.5 0z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.734 166.127a3.2 3.203 0 100-6.405 3.2 3.203 0 000 6.405" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.4}
          d="M296 226.8a3 3 0 100-6 3 3 0 000 6z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M315.734 164.74a1.813 1.815 0 100-3.63 1.813 1.815 0 000 3.63" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M296 225.5a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M340.374 167.408l1.6.32c0 1.602 3.2 3.31 3.2 3.31.64-1.068.107-3.096.107-3.096 4.16-.107 4.373-1.495 4.373-1.495-.213-1.494-3.733-2.455-3.733-2.455 1.067-.96 1.387-2.882 1.387-2.882-2.454-.428-4.907 1.494-4.907 1.494s2.667-.64 3.2-4.91c0 0-1.173-.321-2.133.32 0 0 .96-4.484-.854-5.338l-.213-.107c-2.027 0-2.987 4.59-2.987 4.59-.64-1.067-1.92-1.174-1.92-1.174-1.173 4.057.96 5.765.96 5.765s-1.493-2.776-3.84-3.416c0 0-.533 1.921 0 3.203 0 0-3.52-.534-4.373.64 0 0-.32 1.388 3.307 3.203 0 0-1.174 1.601-1.067 2.99 0 0 3.52-.321 4.267-1.816l1.6.32 2.133.427"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M319.1 228l1.5.3c0 1.5 3 3.1 3 3.1.6-1 .1-2.9.1-2.9 3.9-.1 4.1-1.4 4.1-1.4-.2-1.4-3.5-2.3-3.5-2.3 1-.9 1.3-2.7 1.3-2.7-2.3-.4-4.6 1.4-4.6 1.4s2.5-.6 3-4.6c0 0-1.1-.3-2 .3 0 0 .9-4.2-.8-5l-.2-.1c-1.9 0-2.8 4.3-2.8 4.3-.6-1-1.8-1.1-1.8-1.1-1.1 3.8.9 5.4.9 5.4s-1.4-2.6-3.6-3.2c0 0-.5 1.8 0 3 0 0-3.3-.5-4.1.6 0 0-.3 1.3 3.1 3 0 0-1.1 1.5-1 2.8 0 0 3.3-.3 4-1.7l1.5.3 2 .4"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M339.201 168.049a3.286 3.289 0 111.493-6.406 3.274 3.277 0 01-1.386 6.406" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.4}
          d="M318 228.6a3 3 0 111.4-6 3 3 0 01-1.3 6z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M339.628 166.66a1.813 1.815 0 11.746-3.522 1.813 1.815 0 01-.746 3.523" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M318.4 227.3a1.7 1.7 0 11.7-3.3 1.7 1.7 0 01-.7 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M290.454 166.981l-1.6.214c-.213 1.708-3.52 3.202-3.52 3.202-.533-1.28 0-3.202 0-3.202-3.946-.427-4.16-1.815-4.16-1.815.427-1.388 4.054-2.135 4.054-2.135-1.067-1.068-1.174-2.99-1.174-2.99 2.347-.213 4.694 1.922 4.694 1.922s-2.56-.854-2.88-5.124c0 0 1.386-.32 2.24.427 0 0-.534-4.59 1.28-5.338h.213c2.027.213 2.56 4.804 2.56 4.804.747-.96 2.133-1.068 2.133-1.068.747 4.27-1.493 5.765-1.493 5.765s1.707-2.669 4.053-3.202c0 0 .427 2.028-.32 3.31 0 0 3.627-.321 4.374 1.067 0 0 .213 1.28-3.627 2.775 0 0 1.067 1.708.96 2.99 0 0-3.52-.534-4.267-2.136l-1.493.32-2.133.214"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M272.3 227.6l-1.5.2c-.2 1.6-3.3 3-3.3 3-.5-1.2 0-3 0-3-3.7-.4-3.9-1.7-3.9-1.7.4-1.3 3.8-2 3.8-2-1-1-1.1-2.8-1.1-2.8 2.2-.2 4.4 1.8 4.4 1.8s-2.4-.8-2.7-4.8c0 0 1.3-.3 2.1.4 0 0-.5-4.3 1.2-5h.2c1.9.2 2.4 4.5 2.4 4.5.7-.9 2-1 2-1 .7 4-1.4 5.4-1.4 5.4s1.6-2.5 3.8-3c0 0 .4 1.9-.3 3.1 0 0 3.4-.3 4.1 1 0 0 .2 1.2-3.4 2.6 0 0 1 1.6.9 2.8 0 0-3.3-.5-4-2l-1.4.3-2 .2"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M291.414 167.835a3.228 3.231 0 10-.853-6.405 3.228 3.231 0 00.853 6.405" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.4}
          d="M273.2 228.4a3 3 0 10-.8-6 3 3 0 00.8 6z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="#fff" d="M291.2 166.34a1.813 1.815 0 10-.426-3.522 1.813 1.815 0 00.427 3.523" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M273 227a1.7 1.7 0 10-.4-3.3 1.7 1.7 0 00.4 3.3z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M362.881 173.92s-.853-2.135-2.667-1.387-1.6 1.067-3.2 1.067c0 0-.64-2.028.214-2.882 0 0-2.56-.961-3.2-3.203 0 0 1.386-1.601 4.693-.96 0 0-.107-1.602.32-2.35 0 0 3.52 1.068 3.52 3.096 0 0-1.067-3.843.853-6.619 0 0 1.6.641 1.494 2.456 0 0 .746-3.63 5.546-2.669 0 0-2.56 2.349-2.666 3.416-.214 1.068-2.347 2.883-2.454 3.523 0 .534-.213 1.602-.853 2.242-.64.64-.747 1.708-.747 2.135 0 .214 0 1.708-.853 2.135"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M340.2 234.1s-.8-2-2.5-1.3-1.5 1-3 1c0 0-.6-1.9.2-2.7 0 0-2.4-.9-3-3 0 0 1.3-1.5 4.4-.9 0 0-.1-1.5.3-2.2 0 0 3.3 1 3.3 2.9 0 0-1-3.6.8-6.2 0 0 1.5.6 1.4 2.3 0 0 .7-3.4 5.2-2.5 0 0-2.4 2.2-2.5 3.2-.2 1-2.2 2.7-2.3 3.3 0 .5-.2 1.5-.8 2.1-.6.6-.7 1.6-.7 2 0 .2 0 1.6-.8 2z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M360.214 169.65a3.2 3.203 0 015.12-1.921c0 .533-.32 1.387-.853 1.921-.64.64-.747 1.708-.747 2.135a3.2 3.203 0 01-.426 1.708h-.534a3.2 3.203 0 01-2.56-3.843"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.4}
          d="M337.7 230.1a3 3 0 014.8-1.8c0 .5-.3 1.3-.8 1.8-.6.6-.7 1.6-.7 2a3 3 0 01-.4 1.6h-.5a3 3 0 01-2.4-3.6z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M361.601 169.97a1.813 1.815 0 013.2-.747l-.32.427c-.64.64-.747 1.708-.747 2.135V172h-.64c-1.066-.107-1.6-1.068-1.386-2.135"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M339 230.4a1.7 1.7 0 013-.7l-.3.4c-.6.6-.7 1.6-.7 2v.2h-.6c-1-.1-1.5-1-1.3-2z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fc0"
          d="M269.014 173.066s.854-2.135 2.667-1.28c1.707.96 1.493 1.174 3.2 1.174 0 0 .64-1.922 0-2.776 0 0 2.56-.747 3.2-2.99 0 0-1.28-1.707-4.587-1.28 0 0 .214-1.602-.213-2.349 0 0-3.52.854-3.627 2.776 0 0 1.28-3.737-.426-6.62 0 0-1.707.641-1.707 2.35 0 0-.533-3.63-5.334-2.883 0 0 2.454 2.455 2.454 3.523s2.133 2.99 2.133 3.63c0 .533.214 1.708.854 2.348.64.64.64 1.708.533 2.135 0 .214 0 1.709.853 2.136"
        />
        <path
          fill="#bcac0b"
          stroke="#000"
          strokeWidth={0.7}
          d="M252.2 233.3s.8-2 2.5-1.2c1.6.9 1.4 1.1 3 1.1 0 0 .6-1.8 0-2.6 0 0 2.4-.7 3-2.8 0 0-1.2-1.6-4.3-1.2 0 0 .2-1.5-.2-2.2 0 0-3.3.8-3.4 2.6 0 0 1.2-3.5-.4-6.2 0 0-1.6.6-1.6 2.2 0 0-.5-3.4-5-2.7 0 0 2.3 2.3 2.3 3.3s2 2.8 2 3.4c0 .5.2 1.6.8 2.2.6.6.6 1.6.5 2 0 .2 0 1.6.8 2z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M271.788 168.903a3.2 3.203 0 00-4.907-2.135c0 .533.213 1.388.747 1.921.64.64.64 1.708.533 2.135 0 .214 0 1.068.427 1.815h.426a3.2 3.203 0 002.774-3.736"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.4}
          d="M254.8 229.4a3 3 0 00-4.6-2c0 .5.2 1.3.7 1.8.6.6.6 1.6.5 2 0 .2 0 1 .4 1.7h.4a3 3 0 002.6-3.5z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="#fff"
          d="M270.4 169.116a1.813 1.815 0 00-3.2-.96l.428.533c.64.64.64 1.708.533 2.135v.214h.747c.96 0 1.6-.96 1.493-1.922"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.3}
          d="M253.5 229.6a1.7 1.7 0 00-3-.9l.4.5c.6.6.6 1.6.5 2v.2h.7c.9 0 1.5-.9 1.4-1.8z"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
          d="M257.2 251.6s33.8-13.2 76.4.3"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M338.4 241.1c-47.1-15-84.7-.8-84.7-.8"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
        <path fill="red" d="M315.734 177.87l-4.053 2.029 3.627 2.242 4.266-2.135-3.84-2.135" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={0.5}
          d="M296 237.8l-3.8 1.9 3.4 2.1 4-2-3.6-2"
          transform="matrix(1.06667 0 0 1.06758 0 -76)"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const ESGAFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

ESGAFlagIcon.displayName = 'ESGAFlagIcon';
