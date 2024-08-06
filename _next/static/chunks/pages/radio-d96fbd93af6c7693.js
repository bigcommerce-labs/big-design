(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2383],{22200:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radio",function(){return r(60540)}])},64947:function(e,n,r){"use strict";r.d(n,{Oq:function(){return c},Pt:function(){return d},uu:function(){return o},vH:function(){return h}});var t=r(97458);r(52983);var i=r(29676),s=r(63692),a=r(5423);let o=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:(0,t.jsx)(i.p,{href:{hash:"message-item-prop-table",query:{props:"message-item"}},children:"MessageItem"}),description:(0,t.jsxs)(t.Fragment,{children:["See"," ",(0,t.jsx)(i.p,{href:{hash:"message-item-prop-table",query:{props:"message-item"}},children:"MessageItem"})," ","for usage."]}),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],l=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:(0,t.jsx)(i.p,{href:{hash:"message-link-item-prop-table",query:{props:"message-link-item"}},children:"MessageLinkItem"}),description:(0,t.jsxs)(t.Fragment,{children:["See"," ",(0,t.jsx)(i.p,{href:{hash:"message-link-item-prop-table",query:{props:"message-link-item"}},children:"MessageLinkItem"})," ","for usage."]})}],d=[{name:"external",types:"boolean",description:(0,t.jsxs)(t.Fragment,{children:["Shows an external icon when the ",(0,t.jsx)(s.E,{primary:!0,children:"external"}),' prop is set and target="_blank".']})},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],c=e=>(0,t.jsx)(a.n,{propList:l,title:"",...e,id:"message-item-prop-table"}),h=e=>(0,t.jsx)(a.n,{propList:d,title:"",...e,id:"message-link-item-prop-table"})},41957:function(e,n,r){"use strict";r.d(n,{F:function(){return d}});var t=r(97458),i=r(67778),s=r(31321);r(52983);var a=r(53398);let o=(e,n)=>{let{query:r,push:t}=(0,a.useRouter)(),i=e.map(e=>{let{render:n,...r}=e;return r}),s=r[n],o=s&&!Array.isArray(s)?s:e[0].id;return{activeContent:e.find(e=>e.id===o),activePills:o?[o]:[],pills:i,handlePillClick:e=>{t({query:{...r,[n]:e}},void 0,{scroll:!1,shallow:!0})}}},l=e=>{let{routes:n,id:r}=e,{activeContent:a,activePills:l,pills:d,handlePillClick:c}=o(n,r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.N,{activePills:l,items:d,onPillClick:c}),(0,t.jsx)(s.x,{marginTop:"xSmall",children:null==a?void 0:a.render()})]})},d=e=>0===e.routes.length?null:(0,t.jsx)(l,{...e})},22465:function(e,n,r){"use strict";r.d(n,{t:function(){return c}});var t=r(97458),i=r(76635),s=r(39270),a=r(83273),o=r(31321),l=r(31962),d=r(62831);r(52983);let c=e=>{let{recommended:n,discouraged:r}=e;return(0,t.jsxs)(t.Fragment,{children:[n.length>0&&(0,t.jsx)(i.W,{columns:[{header:"Do",hash:"do",render:e=>{let{recommend:n}=e;return n}}],items:n.map(e=>({recommend:(0,t.jsxs)(s.k,{alignItems:"center",children:[(0,t.jsx)(a.B,{flexGrow:0,marginRight:"large",children:(0,t.jsx)(l.r,{color:"success"})}),(0,t.jsx)(a.B,{children:e})]})}))}),r.length>0&&(0,t.jsx)(o.x,{marginTop:"xLarge",children:(0,t.jsx)(i.W,{columns:[{header:"Don't",hash:"dont",render:e=>{let{discourage:n}=e;return n}}],items:r.map(e=>({discourage:(0,t.jsxs)(s.k,{alignItems:"center",children:[(0,t.jsx)(a.B,{flexGrow:0,marginRight:"large",children:(0,t.jsx)(d.P,{color:"danger"})}),(0,t.jsx)(a.B,{children:e})]})}))})})]})}},29676:function(e,n,r){"use strict";r.d(n,{p:function(){return o}});var t=r(97458),i=r(4857),s=r(75246),a=r.n(s);r(52983);let o=e=>{let{children:n,href:r}=e;return(0,t.jsx)(a(),{href:r,legacyBehavior:!0,passHref:!0,children:(0,t.jsx)(i.r,{children:n})})}},5423:function(e,n,r){"use strict";r.d(n,{n:function(){return m}});var t=r(97458),i=r(2513),s=r(89983),a=r(39270),o=r(4857),l=r(52983),d=r(63692),c=r(30765),h=r(76249);let p=(0,r(57931).ZP)(a.k).withConfig({componentId:"sc-e6496ff5-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=e=>{let{children:n,title:r}=e,[i,a]=(0,l.useState)(!0),o=()=>a(!i);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p,{alignItems:"center",marginBottom:"xSmall",onClick:o,onKeyPress:e=>{("Enter"===e.key||" "===e.key)&&o()},tabIndex:0,children:[i?(0,t.jsx)(c.X,{title:"Expand"}):(0,t.jsx)(h.h,{title:"Collapse"}),(0,t.jsx)(s.xv,{children:r})]}),!i&&n]})},m=e=>{let{collapsible:n,id:r,propList:o,title:l,inheritedProps:c,nativeElement:h}=e,p=()=>o.length>0?(0,t.jsxs)(i.r,{marginBottom:n||c?"xLarge":"none",children:[(0,t.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:e=>{let{name:n,required:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.E,{primary:!0,children:n}),r?(0,t.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:e=>{let{types:n}=e;return(0,t.jsx)(x,{types:n})}},{header:"Default",hash:"default",render:e=>{let{defaultValue:n}=e;return(0,t.jsx)(d.E,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:e=>{let{description:n}=e;return(0,t.jsx)(s.xv,{children:n})}}],id:r,items:o}),(0,t.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null;return n?(0,t.jsx)(u,{title:"".concat(l," Props"),children:p()}):(0,t.jsxs)(t.Fragment,{children:[(()=>{if(h){let[e,n]=h;return(0,t.jsxs)(s.xv,{children:["Supports ",n," native ",(0,t.jsxs)(d.E,{children:["<",e," />"]})," element attributes."]})}return null})(),p(),c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.H3,{children:"Inherited"}),(0,t.jsx)(a.k,{flexDirection:"column",children:c})]}):null]})},g=e=>{let{type:n}=e;return(0,l.isValidElement)(n)&&n.type===o.r?(0,t.jsx)(d.E,{highlight:!1,children:n}):(0,t.jsx)(d.E,{children:n})},x=e=>{let{types:n}=e;return Array.isArray(n)?n.map((e,r)=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)(g,{type:e}),r<n.length-1?" | ":null]},(0,l.isValidElement)(e)&&e.key?e.key:r)):(0,t.jsx)(g,{type:n})}},60540:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(97458),i=r(89983),s=r(81237),a=r(52983),o=r(38933),l=r(41957),d=r(63692),c=r(84210),h=r(22465),p=r(29676),u=r(5423),m=r(64947);let g=[{name:"label",types:["string","RadioLabel"],required:!0,description:(0,t.jsxs)(t.Fragment,{children:["Label to display next to a ",(0,t.jsx)(d.E,{primary:!0,children:"Radio"})," component."]})},{name:"description",types:["string","RadioDescription"],description:(0,t.jsxs)(t.Fragment,{children:["See"," ",(0,t.jsx)(p.p,{href:{hash:"radio-description-prop-table",query:{props:"radio-description"}},children:"RadioDescription"})," ","for usage."]})}],x=[{name:"text",types:["string"],required:!0,description:(0,t.jsxs)(t.Fragment,{children:["Description to display below ",(0,t.jsx)(d.E,{primary:!0,children:"label"}),"."]})},{name:"link",types:["RadioDescriptionLink"],description:(0,t.jsxs)(t.Fragment,{children:["See"," ",(0,t.jsx)(p.p,{href:{hash:"radio-description-link-prop-table",query:{props:"radio-description-link"}},children:"RadioDescriptionLink"})," ","for usage."]})}],j=e=>(0,t.jsx)(u.n,{nativeElement:["input","all"],propList:g,title:"Radio",...e}),f=e=>(0,t.jsx)(u.n,{propList:x,title:"Radio[RadioDescription]",...e,id:"radio-description-prop-table"}),b=e=>(0,t.jsx)(u.n,{propList:m.Pt,title:"Radio[RadioDescriptionLink]",...e,id:"radio-description-link-prop-table"});var v=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.H1,{children:"Radio"}),(0,t.jsxs)(s.s,{header:"Overview",headerId:"overview",children:[(0,t.jsx)(i.xv,{children:"Radio buttons let users select an option from a list of two or more items."}),(0,t.jsx)(i.xv,{bold:!0,children:"When to use:"}),(0,t.jsx)(o.a,{children:(0,t.jsx)(o.a.Item,{children:"Use radio buttons when a user can only make one, mutually exclusive selection from a list."})})]}),(0,t.jsx)(s.s,{header:"Implementation",headerId:"implementation",children:(0,t.jsx)(l.F,{id:"implementation",routes:[{id:"basic",title:"Basic",render:()=>(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)(i.xv,{children:["A ",(0,t.jsx)(d.E,{primary:!0,children:"Radio"})," is a group of items from which a single option can be selected."]}),(0,t.jsx)(c.G,{children:'function Example() {\n  const [selected, setSelected] = useState(\'\');\n\n  const handleChange: InputProps[\'onChange\'] = (event) =>\n    setSelected(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Radio\n          checked={selected === \'on\'}\n          label="On"\n          onChange={handleChange}\n          value="on"\n        />\n        <Radio\n          checked={selected === \'off\'}\n          label="Off"\n          onChange={handleChange}\n          value="off"\n        />\n        <Radio\n          checked={selected === \'disabled\'}\n          disabled={true}\n          label="Disabled"\n          onChange={handleChange}\n          value="disabled"\n        />\n      </FormGroup>\n    </Form>\n  );\n}'})]},"basic")},{id:"grouping",title:"Grouping",render:()=>(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)(i.xv,{children:["In order to group radio controls, use the ",(0,t.jsx)(d.E,{children:"Fieldset"})," component to separate the controls."]}),(0,t.jsx)(c.G,{children:'function Example() {\n  const [firstRadio, setFirstRadio] = useState(\'\');\n  const [secondRadio, setSecondRadio] = useState(\'\');\n\n  const handleFirstChange: InputProps[\'onChange\'] = (event) =>\n    setFirstRadio(event.target.value);\n  const handleSecondChange: InputProps[\'onChange\'] = (event) =>\n    setSecondRadio(event.target.value);\n\n  return (\n    <Form>\n      <Fieldset legend="First Group">\n        <FormGroup>\n          <Radio\n            checked={firstRadio === \'on\'}\n            label="On"\n            onChange={handleFirstChange}\n            value="on"\n          />\n          <Radio\n            checked={firstRadio === \'off\'}\n            label="Off"\n            onChange={handleFirstChange}\n            value="off"\n          />\n        </FormGroup>\n      </Fieldset>\n      <Fieldset legend="Second Group">\n        <FormGroup>\n          <Radio\n            checked={secondRadio === \'on\'}\n            label="On"\n            onChange={handleSecondChange}\n            value="on"\n          />\n          <Radio\n            checked={secondRadio === \'off\'}\n            label="Off"\n            onChange={handleSecondChange}\n            value="off"\n          />\n        </FormGroup>\n      </Fieldset>\n    </Form>\n  );\n}'})]},"grouping")},{id:"description",title:"Description",render:()=>(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)(i.xv,{children:["Radio support ",(0,t.jsx)(d.E,{primary:!0,children:"description"})," passed as a prop, which contains a text and an optional link."]}),(0,t.jsx)(c.G,{children:"function Example() {\n  const [selected, setSelected] = useState('');\n\n  const handleChange: InputProps['onChange'] = (event) =>\n    setSelected(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Radio\n          checked={selected === 'on'}\n          description=\"Description for on\"\n          label=\"On\"\n          onChange={handleChange}\n          value=\"on\"\n        />\n        <Radio\n          checked={selected === 'off'}\n          description=\"Description for off\"\n          label=\"Off\"\n          onChange={handleChange}\n          value=\"off\"\n        />\n        <Radio\n          checked={selected === 'disabled'}\n          description={{\n            text: 'Description for disabled.',\n            link: {\n              text: 'Learn more',\n              target: '_blank',\n              href: 'http://www.bigcommerce.com',\n            },\n          }}\n          disabled={true}\n          label=\"Disabled\"\n          onChange={handleChange}\n          value=\"disabled\"\n        />\n      </FormGroup>\n    </Form>\n  );\n}"})]},"description")}]})}),(0,t.jsx)(s.s,{header:"Props",headerId:"props",children:(0,t.jsx)(l.F,{id:"props",routes:[{id:"radio",title:"Radio",render:()=>(0,t.jsx)(j,{})},{id:"radio-description",title:"RadioDescription",render:()=>(0,t.jsx)(f,{})},{id:"radio-description-link",title:"RadioDescriptionLink",render:()=>(0,t.jsx)(b,{})}]})}),(0,t.jsx)(s.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,t.jsx)(h.t,{discouraged:[(0,t.jsx)(t.Fragment,{children:"Don’t use radio buttons for long lists of short items. Use a select input instead."}),(0,t.jsx)(t.Fragment,{children:"A set of radio buttons should not have a state of being “unselected.” There must always be a selection."})],recommended:[(0,t.jsx)(t.Fragment,{children:"Group related radio buttons under input headings."}),(0,t.jsx)(t.Fragment,{children:"Include a default selected option with the radio buttons."}),(0,t.jsx)(t.Fragment,{children:"Lay radio buttons vertically."})]})})]})}},function(e){e.O(0,[1814,9905,6417,3599,6295,6278,1605,7830,6710,2888,9774,179],function(){return e(e.s=22200)}),_N_E=e.O()}]);