(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9688],{56705:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tooltip",function(){return n(56405)}])},41957:function(e,t,n){"use strict";n.d(t,{F:function(){return d}});var r=n(97458),i=n(67778),o=n(31321);n(52983);var l=n(53398);let s=(e,t)=>{let{query:n,push:r}=(0,l.useRouter)(),i=e.map(e=>{let{render:t,...n}=e;return n}),o=n[t],s=o&&!Array.isArray(o)?o:e[0].id;return{activeContent:e.find(e=>e.id===s),activePills:s?[s]:[],pills:i,handlePillClick:e=>{r({query:{...n,[t]:e}},void 0,{scroll:!1,shallow:!0})}}},a=e=>{let{routes:t,id:n}=e,{activeContent:l,activePills:a,pills:d,handlePillClick:h}=s(t,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.N,{activePills:a,items:d,onPillClick:h}),(0,r.jsx)(o.x,{marginTop:"xSmall",children:null==l?void 0:l.render()})]})},d=e=>0===e.routes.length?null:(0,r.jsx)(a,{...e})},22465:function(e,t,n){"use strict";n.d(t,{t:function(){return h}});var r=n(97458),i=n(76635),o=n(39270),l=n(83273),s=n(31321),a=n(31962),d=n(62831);n(52983);let h=e=>{let{recommended:t,discouraged:n}=e;return(0,r.jsxs)(r.Fragment,{children:[t.length>0&&(0,r.jsx)(i.W,{columns:[{header:"Do",hash:"do",render:e=>{let{recommend:t}=e;return t}}],items:t.map(e=>({recommend:(0,r.jsxs)(o.k,{alignItems:"center",children:[(0,r.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,r.jsx)(a.r,{color:"success"})}),(0,r.jsx)(l.B,{children:e})]})}))}),n.length>0&&(0,r.jsx)(s.x,{marginTop:"xLarge",children:(0,r.jsx)(i.W,{columns:[{header:"Don't",hash:"dont",render:e=>{let{discourage:t}=e;return t}}],items:n.map(e=>({discourage:(0,r.jsxs)(o.k,{alignItems:"center",children:[(0,r.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,r.jsx)(d.P,{color:"danger"})}),(0,r.jsx)(l.B,{children:e})]})}))})})]})}},5423:function(e,t,n){"use strict";n.d(t,{n:function(){return x}});var r=n(97458),i=n(2513),o=n(89983),l=n(39270),s=n(4857),a=n(52983),d=n(63692),h=n(30765),c=n(76249);let p=(0,n(57931).ZP)(l.k).withConfig({componentId:"sc-e6496ff5-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=e=>{let{children:t,title:n}=e,[i,l]=(0,a.useState)(!0),s=()=>l(!i);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p,{alignItems:"center",marginBottom:"xSmall",onClick:s,onKeyPress:e=>{("Enter"===e.key||" "===e.key)&&s()},tabIndex:0,children:[i?(0,r.jsx)(h.X,{title:"Expand"}):(0,r.jsx)(c.h,{title:"Collapse"}),(0,r.jsx)(o.xv,{children:n})]}),!i&&t]})},x=e=>{let{collapsible:t,id:n,propList:s,title:a,inheritedProps:h,nativeElement:c}=e,p=()=>s.length>0?(0,r.jsxs)(i.r,{marginBottom:t||h?"xLarge":"none",children:[(0,r.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:e=>{let{name:t,required:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.E,{primary:!0,children:t}),n?(0,r.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:e=>{let{types:t}=e;return(0,r.jsx)(g,{types:t})}},{header:"Default",hash:"default",render:e=>{let{defaultValue:t}=e;return(0,r.jsx)(d.E,{highlight:!1,children:t})}},{header:"Description",hash:"description",width:"50%",render:e=>{let{description:t}=e;return(0,r.jsx)(o.xv,{children:t})}}],id:n,items:s}),(0,r.jsx)(o.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null;return t?(0,r.jsx)(m,{title:"".concat(a," Props"),children:p()}):(0,r.jsxs)(r.Fragment,{children:[(()=>{if(c){let[e,t]=c;return(0,r.jsxs)(o.xv,{children:["Supports ",t," native ",(0,r.jsxs)(d.E,{children:["<",e," />"]})," element attributes."]})}return null})(),p(),h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.H3,{children:"Inherited"}),(0,r.jsx)(l.k,{flexDirection:"column",children:h})]}):null]})},u=e=>{let{type:t}=e;return(0,a.isValidElement)(t)&&t.type===s.r?(0,r.jsx)(d.E,{highlight:!1,children:t}):(0,r.jsx)(d.E,{children:t})},g=e=>{let{types:t}=e;return Array.isArray(t)?t.map((e,n)=>(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(u,{type:e}),n<t.length-1?" | ":null]},(0,a.isValidElement)(e)&&e.key?e.key:n)):(0,r.jsx)(u,{type:t})}},56405:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(97458),i=n(89983),o=n(81237),l=n(52983),s=n(63692),a=n(38933),d=n(41957),h=n(84210),c=n(22465),p=n(5423);let m=[{name:"trigger",types:"ReactElement",required:!0,description:"React Element that triggers the tooltip on hover."},{name:"placement",defaultValue:"top",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Tooltip."}],x=e=>(0,r.jsx)(p.n,{propList:m,title:"Tooltip",...e});var u=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.H1,{children:"Tooltip"}),(0,r.jsxs)(o.s,{header:"Overview",headerId:"overview",children:[(0,r.jsxs)(i.xv,{children:[(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"s contain information to help users understand actions or page elements."]}),(0,r.jsx)(i.xv,{bold:!0,children:"When to use:"}),(0,r.jsxs)(a.a,{children:[(0,r.jsx)(a.a.Item,{children:"They are short, and triggered by a user hovering with their keyboard or mouse over a UI element."}),(0,r.jsx)(a.a.Item,{children:"They are used to help reduce information density on otherwise crowded pages or forms."}),(0,r.jsx)(a.a.Item,{children:"Use tooltips to explain columns in a table, explain buttons (e.g. add, edit) on page or alongisde a help icon."})]})]}),(0,r.jsx)(o.s,{header:"Implementation",headerId:"implementation",children:(0,r.jsx)(d.F,{id:"implementation",routes:[{id:"basic",title:"Basic",render:()=>(0,r.jsx)(h.G,{children:'<Tooltip placement="right" trigger={<Button>Hover</Button>}>\n  Tooltip Content\n</Tooltip>'},"basic")},{id:"anchor",title:"Anchor",render:()=>(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(i.xv,{children:["Tooltips can wrap any ",(0,r.jsx)(s.E,{children:"Element"}),". Tooltip will show on hover."]}),(0,r.jsx)(h.G,{children:'<Flex alignItems="center">\n  <Box marginRight="medium">\n    <Tooltip placement="right" trigger={<Button>Button</Button>}>\n      Tooltip Content\n    </Tooltip>\n  </Box>\n\n  <Box marginRight="medium">\n    <Tooltip placement="right" trigger={<WarningIcon />}>\n      Tooltip Content\n    </Tooltip>\n  </Box>\n  <Box marginRight="medium">\n    <Tooltip placement="right" trigger={<span>Span</span>}>\n      Tooltip Content\n    </Tooltip>\n  </Box>\n</Flex>'})]},"anchor")},{id:"placement",title:"Placement",render:()=>(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(i.xv,{children:["Tooltip can be anchored in different directions with the"," ",(0,r.jsx)(s.E,{primary:!0,children:"placement"})," property. It will automatically find a position if there's not enough space in the chosen direction."]}),(0,r.jsx)(h.G,{children:'<Grid gridColumns="repeat(4, min-content)">\n  <Tooltip placement="right" trigger={<Button>Right</Button>}>\n    Tooltip Content\n  </Tooltip>\n  <Tooltip placement="top" trigger={<Button>Top</Button>}>\n    Tooltip Content\n  </Tooltip>\n  <Tooltip placement="left" trigger={<Button>Left</Button>}>\n    Tooltip Content\n  </Tooltip>\n  <Tooltip placement="bottom" trigger={<Button>Bottom</Button>}>\n    Tooltip Content\n  </Tooltip>\n</Grid>\n'})]},"placement")}]})}),(0,r.jsx)(o.s,{header:"Props",headerId:"props",children:(0,r.jsx)(x,{})}),(0,r.jsx)(o.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,r.jsx)(c.t,{discouraged:[(0,r.jsxs)(r.Fragment,{children:["Avoid headers in ",(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"s."]}),(0,r.jsxs)(r.Fragment,{children:["Don’t place actions in ",(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"s."]}),(0,r.jsxs)(r.Fragment,{children:["If information is vital to complete a step, then it should be visible above/next to the element, not hidden in the ",(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"."]})],recommended:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"s should have short, static information."]}),(0,r.jsxs)(r.Fragment,{children:["Keep ",(0,r.jsx)(s.E,{primary:!0,children:"Tooltip"}),"s to less than three lines tall."]})]})})]})}},function(e){e.O(0,[1814,9905,6417,3599,6295,6278,1605,7830,6710,2888,9774,179],function(){return e(e.s=56705)}),_N_E=e.O()}]);