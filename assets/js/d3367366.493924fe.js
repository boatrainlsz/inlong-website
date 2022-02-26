"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6647],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98477:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Architecture"},l="1\u3001intro",c={unversionedId:"modules/dataproxy-sdk/architecture",id:"version-0.11.0/modules/dataproxy-sdk/architecture",title:"Architecture",description:"When the business uses the message access method, the business generally only needs to format the data in a proxy-recognizable format (such as six-segment protocol, digital protocol, etc.)",source:"@site/versioned_docs/version-0.11.0/modules/dataproxy-sdk/architecture.md",sourceDirName:"modules/dataproxy-sdk",slug:"/modules/dataproxy-sdk/architecture",permalink:"/docs/0.11.0/modules/dataproxy-sdk/architecture",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy-sdk/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"Architecture"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/dataproxy/quick_start"},next:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/dataproxy-sdk/quick_start"}},d={},u=[{value:"2.1 overall functions",id:"21-overall-functions",level:2},{value:"2.2 Data transmission function description",id:"22-data-transmission-function-description",level:2},{value:"Synchronous batch function",id:"synchronous-batch-function",level:3},{value:"Synchronize a single function",id:"synchronize-a-single-function",level:3},{value:"Asynchronous batch function",id:"asynchronous-batch-function",level:3},{value:"Asynchronous single function",id:"asynchronous-single-function",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1intro"},"1\u3001intro"),(0,o.kt)("p",null,"When the business uses the message access method, the business generally only needs to format the data in a proxy-recognizable format (such as six-segment protocol, digital protocol, etc.)\nAfter group packet transmission, data can be connected to inlong. But in order to ensure data reliability, load balancing, and dynamic update of the proxy list and other security features\nThe user program needs to consider more and ultimately leads to the program being too cumbersome and bloated."),(0,o.kt)("p",null,"The original intention of API design is to simplify user access and assume some reliability-related logic. After the user integrates the API in the service delivery program, the data can be sent to the proxy without worrying about the grouping format, load balancing and other logic."),(0,o.kt)("h1",{id:"2functions"},"2\u3001functions"),(0,o.kt)("h2",{id:"21-overall-functions"},"2.1 overall functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"function"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Package function (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"The user data is packaged and sent to the proxy in a packet format recognized by the proxy (such as six-segment protocol, digital protocol, etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compression function"),(0,o.kt)("td",{parentName:"tr",align:null},"Before sending proxy, compress user data to reduce network bandwidth usage")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maintain proxy list"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the proxy list every five minutes to detect whether there is a proxy machine on the operation and maintenance side; automatically remove unavailable connections every 20s to ensure that the connected proxy can operate normally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Indicator statistics (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Increase the indicator of business minute-level sending volume (interface level)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Load balancing (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Use the new strategy to load balance the sent data among multiple proxies, instead of relying on simple random + polling mechanism to ensure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxy list persistence (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Persist the proxy list according to the business group id to prevent the configuration center from failing to send data when the program starts")))),(0,o.kt)("h2",{id:"22-data-transmission-function-description"},"2.2 Data transmission function description"),(0,o.kt)("h3",{id:"synchronous-batch-function"},"Synchronous batch function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\nParameter Description\n\nbodyListIt is a collection of multiple pieces of data that users need to send. The total length is recommended to be less than 512k. groupId represents the service id, and streamId represents the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout & timeUnit: These two parameters are used to set the timeout time for sending data, and it is generally recommended to set it to 20s.\n")),(0,o.kt)("h3",{id:"synchronize-a-single-function"},"Synchronize a single function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\nParameter Description\n\nbody is the content of a single piece of data that the user wants to send, and the meaning of the remaining parameters is basically the same as the batch sending interface.\n")),(0,o.kt)("h3",{id:"asynchronous-batch-function"},"Asynchronous batch function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)\n\nParameter Description\n\nSendMessageCallback is a callback for processing messages. The bodyList is a collection of multiple pieces of data that users need to send. The total length of multiple pieces of data is recommended to be less than 512k. groupId is the service id, and streamId is the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout and timeUnit are the timeout time for sending data, generally recommended to be set to 20s.\n")),(0,o.kt)("h3",{id:"asynchronous-single-function"},"Asynchronous single function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\nParameter Description\n\nThe body is the content of a single message, and the meaning of the remaining parameters is basically the same as the batch sending interface\n")))}m.isMDXComponent=!0}}]);