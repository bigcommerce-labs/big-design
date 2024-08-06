(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3360],{83714:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/select",function(){return t(72725)}])},72725:function(n,e,t){"use strict";t.r(e);var o=t(97458),l=t(89983),i=t(81237),r=t(52983),a=t(63692),c=t(38933),s=t(41957),p=t(84210),d=t(22465),u=t(29676),h=t(75946);e.default=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.H1,{children:"Select"}),(0,o.jsxs)(i.s,{header:"Overview",headerId:"overview",children:[(0,o.jsxs)(l.xv,{children:[(0,o.jsx)(a.E,{primary:!0,children:"Select"})," gives merchants the ability to make a single selection or multiple selections from a list of options."]}),(0,o.jsx)(l.xv,{bold:!0,children:"When to use:"}),(0,o.jsx)(c.a,{children:(0,o.jsx)(c.a.Item,{children:"When a user needs to make selections in a form."})})]}),(0,o.jsx)(i.s,{header:"Implementation",headerId:"implementation",children:(0,o.jsx)(s.F,{id:"implementation",routes:[{id:"basic",title:"Basic",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:[(0,o.jsx)(a.E,{primary:!0,children:"Selects"})," are typeable inputs with selectable options."]}),(0,o.jsx)(p.G,{children:"function Example() {\n  const [value, setValue] = useState('mx');\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Select\n          action={{\n            actionType: 'destructive' as const,\n            content: 'Remove Country',\n            icon: <DeleteIcon />,\n            onActionClick: () => null,\n          }}\n          filterable={true}\n          label=\"Countries\"\n          maxHeight={300}\n          onOptionChange={handleChange}\n          options={[\n            { value: 'us', content: 'United States' },\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n            { value: 'ru', content: 'Russia', disabled: true },\n            { value: 'ch', content: 'Chile' },\n            { value: 'bo', content: 'Bolivia' },\n            { value: 'jp', content: 'Japan' },\n            { value: 'cn', content: 'China' },\n            { value: 'sk', content: 'South Korea' },\n            { value: 'au', content: 'Australia' },\n            { value: 'ug', content: 'Uganda' },\n          ]}\n          placeholder=\"Choose country\"\n          placement=\"bottom-start\"\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"})]},"basic")},{id:"position",title:"Position",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:[(0,o.jsx)(a.E,{primary:!0,children:"Select"})," can be anchored in different directions with the"," ",(0,o.jsx)(a.E,{primary:!0,children:"position"})," property. It will automatically find a position if there's not enough space in the chosen direction."]}),(0,o.jsx)(p.G,{children:"<Grid gridColumns=\"repeat(4, 1fr)\">\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from above\"\n    placement=\"top\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from below\"\n    placement=\"bottom-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the right\"\n    placement=\"right-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the left\"\n    placement=\"left-end\"\n    required\n  />\n</Grid>"})]},"position")},{id:"max-height",title:"Max height",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:["Once the content is longer than the max-height, the ",(0,o.jsx)(a.E,{primary:!0,children:"Select"})," ","will be scrollable. It is possible to modify the dimension by passing a"," ",(0,o.jsx)(a.E,{primary:!0,children:"maxHeight"})," property."]}),(0,o.jsx)(p.G,{children:"<Grid gridColumns=\"repeat(3, 1fr)\">\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={150}\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Smaller\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={350}\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n      { value: 9, content: 'Option' },\n      { value: 10, content: 'Option' },\n      { value: 11, content: 'Option' },\n      { value: 12, content: 'Option' },\n    ]}\n    placeholder=\"Larger\"\n    required\n  />\n</Grid>"})]},"max-height")},{id:"disabled",title:"Disabled",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:["It is possible to disable the entire ",(0,o.jsx)(a.E,{primary:!0,children:"Select"})," component, similar to how you would disable a native HTML select element, by using the"," ",(0,o.jsx)(a.E,{primary:!0,children:"disabled"})," property."]}),(0,o.jsx)(p.G,{children:"<Form>\n  <FormGroup>\n    <Select\n      disabled\n      label=\"Select\"\n      maxHeight={350}\n      onOptionChange={() => null}\n      options={[\n        { value: 1, content: 'Option' },\n        { value: 2, content: 'Option' },\n        { value: 3, content: 'Option' },\n        { value: 4, content: 'Option' },\n      ]}\n      placeholder=\"Larger\"\n      required\n    />\n  </FormGroup>\n</Form>\n"})]},"disabled")},{id:"action",title:"Action",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:["Accepts an ",(0,o.jsx)(a.E,{children:"action"})," object to display at the end of the list."]}),(0,o.jsx)(p.G,{children:"<Form>\n  <FormGroup>\n    <Select\n      action={{\n        actionType: 'destructive',\n        content: 'Remove Country',\n        icon: <DeleteIcon />,\n        onActionClick: () => null,\n      }}\n      label=\"Countries\"\n      onOptionChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder=\"Choose country\"\n      placement=\"bottom-start\"\n      required\n    />\n  </FormGroup>\n</Form>"})]},"action")},{id:"error",title:"Error",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:["An ",(0,o.jsx)(a.E,{primary:!0,children:"error"})," prop receives a ",(0,o.jsx)(a.E,{children:"string"})," to display."]}),(0,o.jsx)(p.G,{children:"<Form>\n  <FormGroup>\n    <Select\n      error=\"Need to choose a country before proceeding\"\n      label=\"Countries\"\n      onOptionChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder=\"Choose country\"\n      placement=\"bottom-start\"\n      required\n    />\n  </FormGroup>\n</Form>"})]},"error")},{id:"select-group",title:"Select group",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(l.xv,{children:["It is possible to create grouped options with labels with a"," ",(0,o.jsx)(a.E,{primary:!0,children:"Select Group"})," by passing ",(0,o.jsx)(a.E,{primary:!0,children:"label"})," and"," ",(0,o.jsx)(a.E,{primary:!0,children:"options"})," to the top-level ",(0,o.jsx)(a.E,{primary:!0,children:"options"})," ","property."]}),(0,o.jsx)(p.G,{children:"<Form>\n  <FormGroup>\n    <Select\n      filterable\n      label=\"My Options\"\n      onOptionChange={() => null}\n      options={[\n        {\n          label: 'Group 1',\n          options: [\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n          ],\n        },\n        {\n          label: 'Group 2',\n          options: [\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n          ],\n        },\n      ]}\n      value=\"ca\"\n    />\n  </FormGroup>\n</Form>"})]},"select-group")},{id:"description",title:"Description",render:()=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(l.xv,{children:"It is possible to add a description for select options and actions."}),(0,o.jsx)(p.G,{children:"function Example() {\n  const [value, setValue] = useState(1);\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Select\n          action={{\n            actionType: 'destructive',\n            content: 'Remove',\n            description: 'Description for remove action',\n            icon: <DeleteIcon />,\n            onActionClick: () => null,\n          }}\n          label=\"Select\"\n          onChange={handleChange}\n          onOptionChange={() => null}\n          options={[\n            {\n              value: 1,\n              content: 'Option #1',\n              description: 'Description for option #1',\n            },\n            {\n              value: 2,\n              content: 'Option #2',\n              description: 'Description for option #2',\n              disabled: true,\n            },\n            { value: 3, content: 'Option #3' },\n            { value: 4, content: 'Option #4' },\n            { value: 5, content: 'Option #5' },\n          ]}\n          placeholder=\"Larger\"\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"})]},"description")}]})}),(0,o.jsx)(i.s,{header:"Props",headerId:"props",children:(0,o.jsx)(s.F,{id:"props",routes:[{id:"select",title:"Select",render:()=>(0,o.jsx)(h.cL,{})},{id:"select-option",title:"SelectOption",render:()=>(0,o.jsx)(h.Kl,{})},{id:"select-action",title:"SelectAction",render:()=>(0,o.jsx)(h.Pr,{})},{id:"select-group",title:"SelectGroup",render:()=>(0,o.jsx)(h.bf,{})}]})}),(0,o.jsx)(i.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,o.jsx)(d.t,{discouraged:[(0,o.jsxs)(o.Fragment,{children:["Don’t use ",(0,o.jsx)(a.E,{primary:!0,children:"Select "}),"component when user needs to make more than one selection (see ",(0,o.jsx)(u.p,{href:"/multi-select",children:"MultiSelect"}),")."]}),(0,o.jsxs)(o.Fragment,{children:["In most cases avoid using long ",(0,o.jsx)(a.E,{primary:!0,children:"labels"})," (ideally less than three words)."]})],recommended:[(0,o.jsxs)(o.Fragment,{children:["Use within ",(0,o.jsx)(u.p,{href:"/panel",children:"Panels"}),"."]}),"Create all select options within a container.",(0,o.jsxs)(o.Fragment,{children:["Use for a single selection between 4 or more pre-defined ",(0,o.jsx)(a.E,{primary:!0,children:"options"}),"."]}),"Default a selection if possible.","Add placeholder text if additional context is needed.","Logically group select options when it makes sense."]})})]})}},function(n){n.O(0,[1814,9905,6417,3599,6295,6278,1605,7830,6710,7233,2888,9774,179],function(){return n(n.s=83714)}),_N_E=n.O()}]);