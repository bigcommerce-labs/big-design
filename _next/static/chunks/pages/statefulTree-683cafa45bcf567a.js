(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2090],{80171:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/statefulTree",function(){return r(32030)}])},41957:function(e,n,r){"use strict";r.d(n,{F:function(){return o}});var t=r(97458),i=r(67778),s=r(31321);r(52983);var l=r(53398);let d=(e,n)=>{let{query:r,push:t}=(0,l.useRouter)(),i=e.map(e=>{let{render:n,...r}=e;return r}),s=r[n],d=s&&!Array.isArray(s)?s:e[0].id;return{activeContent:e.find(e=>e.id===d),activePills:d?[d]:[],pills:i,handlePillClick:e=>{t({query:{...r,[n]:e}},void 0,{scroll:!1,shallow:!0})}}},a=e=>{let{routes:n,id:r}=e,{activeContent:l,activePills:a,pills:o,handlePillClick:c}=d(n,r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.N,{activePills:a,items:o,onPillClick:c}),(0,t.jsx)(s.x,{marginTop:"xSmall",children:null==l?void 0:l.render()})]})},o=e=>0===e.routes.length?null:(0,t.jsx)(a,{...e})},22465:function(e,n,r){"use strict";r.d(n,{t:function(){return c}});var t=r(97458),i=r(76635),s=r(39270),l=r(83273),d=r(31321),a=r(31962),o=r(62831);r(52983);let c=e=>{let{recommended:n,discouraged:r}=e;return(0,t.jsxs)(t.Fragment,{children:[n.length>0&&(0,t.jsx)(i.W,{columns:[{header:"Do",hash:"do",render:e=>{let{recommend:n}=e;return n}}],items:n.map(e=>({recommend:(0,t.jsxs)(s.k,{alignItems:"center",children:[(0,t.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,t.jsx)(a.r,{color:"success"})}),(0,t.jsx)(l.B,{children:e})]})}))}),r.length>0&&(0,t.jsx)(d.x,{marginTop:"xLarge",children:(0,t.jsx)(i.W,{columns:[{header:"Don't",hash:"dont",render:e=>{let{discourage:n}=e;return n}}],items:r.map(e=>({discourage:(0,t.jsxs)(s.k,{alignItems:"center",children:[(0,t.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,t.jsx)(o.P,{color:"danger"})}),(0,t.jsx)(l.B,{children:e})]})}))})})]})}},29676:function(e,n,r){"use strict";r.d(n,{p:function(){return d}});var t=r(97458),i=r(4857),s=r(75246),l=r.n(s);r(52983);let d=e=>{let{children:n,href:r}=e;return(0,t.jsx)(l(),{href:r,legacyBehavior:!0,passHref:!0,children:(0,t.jsx)(i.r,{children:n})})}},5423:function(e,n,r){"use strict";r.d(n,{n:function(){return x}});var t=r(97458),i=r(2513),s=r(89983),l=r(39270),d=r(4857),a=r(52983),o=r(63692),c=r(30765),u=r(76249);let h=(0,r(57931).ZP)(l.k).withConfig({componentId:"sc-e6496ff5-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=e=>{let{children:n,title:r}=e,[i,l]=(0,a.useState)(!0),d=()=>l(!i);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h,{alignItems:"center",marginBottom:"xSmall",onClick:d,onKeyPress:e=>{("Enter"===e.key||" "===e.key)&&d()},tabIndex:0,children:[i?(0,t.jsx)(c.X,{title:"Expand"}):(0,t.jsx)(u.h,{title:"Collapse"}),(0,t.jsx)(s.xv,{children:r})]}),!i&&n]})},x=e=>{let{collapsible:n,id:r,propList:d,title:a,inheritedProps:c,nativeElement:u}=e,h=()=>d.length>0?(0,t.jsxs)(i.r,{marginBottom:n||c?"xLarge":"none",children:[(0,t.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:e=>{let{name:n,required:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.E,{primary:!0,children:n}),r?(0,t.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:e=>{let{types:n}=e;return(0,t.jsx)(g,{types:n})}},{header:"Default",hash:"default",render:e=>{let{defaultValue:n}=e;return(0,t.jsx)(o.E,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:e=>{let{description:n}=e;return(0,t.jsx)(s.xv,{children:n})}}],id:r,items:d}),(0,t.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null;return n?(0,t.jsx)(p,{title:"".concat(a," Props"),children:h()}):(0,t.jsxs)(t.Fragment,{children:[(()=>{if(u){let[e,n]=u;return(0,t.jsxs)(s.xv,{children:["Supports ",n," native ",(0,t.jsxs)(o.E,{children:["<",e," />"]})," element attributes."]})}return null})(),h(),c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.H3,{children:"Inherited"}),(0,t.jsx)(l.k,{flexDirection:"column",children:c})]}):null]})},m=e=>{let{type:n}=e;return(0,a.isValidElement)(n)&&n.type===d.r?(0,t.jsx)(o.E,{highlight:!1,children:n}):(0,t.jsx)(o.E,{children:n})},g=e=>{let{types:n}=e;return Array.isArray(n)?n.map((e,r)=>(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(m,{type:e}),r<n.length-1?" | ":null]},(0,a.isValidElement)(e)&&e.key?e.key:r)):(0,t.jsx)(m,{type:n})}},32030:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(97458),i=r(89983),s=r(81237),l=r(50573),d=r(52983),a=r(63692),o=r(38933),c=r(41957),u=r(84210),h=r(22465),p=r(29676),x=r(5423);let m=[{name:"defaultExpanded",types:"string[]",description:"An array of expanded node ids. Can also be used to reset expanded nodes."},{name:"defaultSelected",types:"string[]",description:"An array of selected node ids. Can also be used to reset selected nodes."},{name:"disabledNodes",types:"string[]",description:"An array of disabled node ids. Nodes will not be abled to be selectedable but can still expand/collapse."},{name:"iconless",types:"boolean",description:"Hides/shows all icons on the tree."},{name:"id",types:"string",description:"Defines a HTML id attribute to the parent wrapper."},{name:"nodes",types:(0,t.jsx)(p.p,{href:{hash:"tree-node-prop-table",query:{props:"treenode"}},children:"TreeNode[]"}),description:(0,t.jsxs)(t.Fragment,{children:["Nodes to render in the tree. See"," ",(0,t.jsx)(p.p,{href:{hash:"tree-node-prop-table",query:{props:"treenode"}},children:"TreeNode"})," ","for usage."]}),required:!0},{name:"onExpandedChange",types:"(expandedNodes: string[]) => void",description:"Function that will get called when a tree node is expanded/collapsed. Passes the ids of expanded nodes as an argument."},{name:"onNodeClick",types:"(event: React.MouseEvent<HTMLLIElement>, nodeId: string) => void",description:"Function that will get called when a tree node is clicked."},{name:"onSelectionChange",types:"(selectedValues: T[]) => void",description:"Function that will get called when a tree node is selected/deselecteds. Passes the values of selected nodes as an argument."},{name:"selectable",types:["multi","radio"],description:"Determines the type of selectable tree to render."}],g=e=>(0,t.jsx)(x.n,{propList:m,title:"StatefulTree",...e}),f=[{name:"children",types:"TreeNode[]",description:"Children for the current node."},{name:"icon",types:(0,t.jsx)(p.p,{href:"/icons",children:"Icon"}),description:"Custom icon, in place of the folder icon."},{name:"id",types:"string",description:"TreeNode identifier, must be unique.",required:!0},{name:"label",types:"string",description:"Label for the tree node.",required:!0},{name:"value",types:"T",description:(0,t.jsxs)(t.Fragment,{children:["Value of the selected node. A checkbox or radio will not appear if"," ",(0,t.jsx)(a.E,{primary:!0,children:"value"})," and ",(0,t.jsx)(a.E,{primary:!0,children:"selectable"})," is not defined."]})}],j=e=>(0,t.jsx)(x.n,{propList:f,title:"StatefulTree[TreeNode]",...e});var y=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.H1,{children:"StatefulTree"}),(0,t.jsxs)(s.s,{header:"Overview",headerId:"overview",children:[(0,t.jsxs)(i.xv,{children:["The ",(0,t.jsx)(a.E,{primary:!0,children:"StatefulTree"})," component is used to display a tree of items. Useful for defining a tree of categories or subcollections."]}),(0,t.jsx)(i.xv,{bold:!0,children:"When to use:"}),(0,t.jsxs)(o.a,{children:[(0,t.jsx)(o.a.Item,{children:"To display a tree of items"}),(0,t.jsx)(o.a.Item,{children:"Creating or assigning items to a specific category/sub-category"}),(0,t.jsx)(o.a.Item,{children:"To organize items through structure hierarchy"})]})]}),(0,t.jsx)(s.s,{header:"Implementation",headerId:"implementation",children:(0,t.jsx)(c.F,{id:"implementation",routes:[{id:"multiple-selections",title:"Multiple selections",render:()=>(0,t.jsx)(u.G,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      value: 0,\n      label: 'Category',\n      children: [\n        {\n          id: '5',\n          value: 5,\n          label: 'Category',\n          children: [{ id: '9', value: 9, label: 'Category' }],\n        },\n      ],\n    },\n    {\n      id: '1',\n      value: 1,\n      label: 'Category',\n      children: [{ id: '6', value: 6, label: 'Category' }],\n    },\n    { id: '2', value: 2, label: 'Category' },\n    {\n      id: '3',\n      value: 3,\n      label: 'Category',\n      children: [{ id: '7', value: 7, label: 'Category' }],\n    },\n    {\n      id: '4',\n      value: 4,\n      label: 'Category',\n      children: [{ id: '8', value: 8, label: 'Category' }],\n    },\n  ];\n\n  return (\n    <StatefulTree\n      defaultExpanded={['0', '5', '1']}\n      defaultSelected={['9', '3', '7']}\n      disabledNodes={['1']}\n      nodes={nodes}\n      selectable=\"multi\"\n    />\n  );\n}"},"multiple-selections")},{id:"single-select",title:"Single selection",render:()=>(0,t.jsx)(u.G,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      value: 0,\n      label: 'Category',\n      children: [{ id: '3', value: 3, label: 'Subcategory' }],\n    },\n    { id: '1', value: 1, label: 'Category' },\n    { id: '2', value: 2, label: 'Category' },\n  ];\n\n  return (\n    <StatefulTree\n      defaultExpanded={['0']}\n      disabledNodes={['0', '2']}\n      nodes={nodes}\n      selectable=\"radio\"\n    />\n  );\n}"},"single-select")},{id:"custom-icons",title:"Custom icons",render:()=>(0,t.jsxs)(d.Fragment,{children:[(0,t.jsx)(i.xv,{children:"You can replace the folder icon with a custom icon of your choice."}),(0,t.jsx)(l.v,{marginBottom:"medium",messages:[{text:"If you use the iconless prop, ALL icons will be hidden (including custom ones)."}],type:"warning"}),(0,t.jsx)(u.G,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      icon: <StoreIcon color=\"primary\" />,\n      label: 'Storefront - US',\n      children: [{ id: '3', label: 'Subcategory' }],\n    },\n    {\n      id: '1',\n      icon: <LanguageIcon color=\"primary\" />,\n      label: 'Storefront - CA',\n    },\n    {\n      id: '2',\n      icon: <AssignmentIcon color=\"primary\" />,\n      label: 'Storefront - EU',\n    },\n  ];\n\n  return <StatefulTree defaultExpanded={['0']} nodes={nodes} />;\n}"})]},"custom-icons")}]})}),(0,t.jsx)(s.s,{header:"Props",headerId:"props",children:(0,t.jsx)(c.F,{id:"props",routes:[{id:"stateful-tree",title:"StatefulTree",render:()=>(0,t.jsx)(g,{})},{id:"tree-node",title:"TreeNode",render:()=>(0,t.jsx)(j,{id:"tree-node-prop-table"})}]})}),(0,t.jsx)(s.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,t.jsx)(h.t,{discouraged:["Make sure radio buttons and checkboxes are used correctly within BigDesign Guidelines. Checkboxes are additive, radio buttons are either/or.","Don’t use to display a list of items."],recommended:["Display collapsable side navigation if sub-categories exist.","Use an icon next to categories, regardless of heirarchy.","Use checkboxes when multiple items can be selected vs. radio buttons for either/or.","Selected sub-categories should always be shown numerically next to the parent catergories, both in collapsed or expanded states."]})})]})}},function(e){e.O(0,[1814,9905,6417,3599,6295,6278,1605,7830,6710,2888,9774,179],function(){return e(e.s=80171)}),_N_E=e.O()}]);