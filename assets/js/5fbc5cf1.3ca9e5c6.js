"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[207],{876:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var o=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1643:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=a(7896),n=a(1461),r=(a(2784),a(876)),l=["components"],i={},s="Project structure",u={unversionedId:"api",id:"api",title:"Project structure",description:"React Sigma is composed of one core module, and several others for managing graph layouts.",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/react-sigma/docs/api",draft:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/api.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Setup",permalink:"/react-sigma/docs/start-setup"},next:{title:"core",permalink:"/react-sigma/docs/api/core/"}},p={},c=[{value:"Core",id:"core",level:2},{value:"Layout modules",id:"layout-modules",level:2},{value:"None iterative layouts",id:"none-iterative-layouts",level:3},{value:"Description",id:"description",level:4},{value:"How to use it",id:"how-to-use-it",level:4},{value:"Available layouts",id:"available-layouts",level:4},{value:"Iterative layouts",id:"iterative-layouts",level:3},{value:"Description",id:"description-1",level:4},{value:"How to use it",id:"how-to-use-it-1",level:4},{value:"Available layouts",id:"available-layouts-1",level:4}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-structure"},"Project structure"),(0,r.kt)("p",null,"React Sigma is composed of one core module, and several others for managing graph layouts."),(0,r.kt)("h2",{id:"core"},"Core"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core"},"core")," is the main one with ",(0,r.kt)("a",{parentName:"p",href:"docs/api/core/#component-variables"},"components")," and ",(0,r.kt)("a",{parentName:"p",href:"docs/api/core/#hook-functions"},"hooks")," that help you to display a graph with react."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-sigma/core\n")),(0,r.kt)("h2",{id:"layout-modules"},"Layout modules"),(0,r.kt)("p",null,"There is one module per graphology layout, plus one for the genericity (",(0,r.kt)("a",{parentName:"p",href:"/docs/api/layout-core"},"layout-core"),")."),(0,r.kt)("p",null,"In graphology, there are two types of layout :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None iterative layouts that just need to be call to compute once for all the spatialisation (ex: random, circle)."),(0,r.kt)("li",{parentName:"ul"},"Iterative layouts, that need to spawn a web worker to continuously run the algo (ex: forceatlas2)")),(0,r.kt)("h3",{id:"none-iterative-layouts"},"None iterative layouts"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"For those layouts, in the corresponding module we export a ",(0,r.kt)("strong",{parentName:"p"},"hook")," that you can call to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"compute the new nodes position (the ",(0,r.kt)("inlineCode",{parentName:"li"},"positions")," function)"),(0,r.kt)("li",{parentName:"ul"},"compute the new nodes position and assign it to the sigma graph (the ",(0,r.kt)("inlineCode",{parentName:"li"},"assign")," function)")),(0,r.kt)("h4",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the module")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-sigma/layout-circular graphology-layout\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Initialize the hook in your component (that must be a child of ",(0,r.kt)("inlineCode",{parentName:"li"},"SigmaContainer"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const {positions, assign} = useLayoutCircular(...);\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"positions")," function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { animateNodes } from "sigma/utils/animate";\n...\nuseEffect(() => {\n  animateNodes(sigma.getGraph(), positions(), { duration: 1000 });\n}, [positions, sigma]);\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Or use the ",(0,r.kt)("inlineCode",{parentName:"li"},"assign")," function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n  assign(sigma.getGraph());\n}, [assign, sigma]);\n")),(0,r.kt)("h4",{id:"available-layouts"},"Available layouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-random"},"layout-random")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-circular"},"layout-circular")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-circlepack"},"layout-circlepack"))),(0,r.kt)("h3",{id:"iterative-layouts"},"Iterative layouts"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"For those layouts, in the corresponding module we export :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the same hook than for ",(0,r.kt)("em",{parentName:"li"},"none iterative layouts")," (it run a fix number of iteration of the algo that can be configured in the hook: ",(0,r.kt)("inlineCode",{parentName:"li"},"useLayoutForceAtlas2({ iterations: 100 })")),(0,r.kt)("li",{parentName:"ul"},"A hook to manage the worker layout : ",(0,r.kt)("inlineCode",{parentName:"li"},"const {stop, start, kill, isRunning} = useWorkerLayoutForceAtlas2(...)")),(0,r.kt)("li",{parentName:"ul"},"A control component that use the above hook, to display a stop/start button on the graph")),(0,r.kt)("h4",{id:"how-to-use-it-1"},"How to use it"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the module")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-sigma/layout-forceatlas2 graphology-layout-forceatlas2\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"SigmaContainer")," just add the component :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";\n...\n<SigmaContainer>\n  <MyGraph />\n  <ControlsContainer position={"bottom-right"}>\n    <LayoutForceAtlas2Control />\n  </ControlsContainer>\n</SigmaContainer>\n')),(0,r.kt)("h4",{id:"available-layouts-1"},"Available layouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-forceatlas2"},"layout-forceatlas2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-force"},"layout-force")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/layout-noverlap"},"layout-noverlap"))))}d.isMDXComponent=!0}}]);