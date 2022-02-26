"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1272],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),f=i,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6340:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return c},default:function(){return f}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={title:"Usage Manual",sidebar_position:1},l=void 0,u={unversionedId:"user_guide/user_manual",id:"user_guide/user_manual",title:"Usage Manual",description:"User Login",source:"@site/docs/user_guide/user_manual.md",sourceDirName:"user_guide",slug:"/user_guide/user_manual",permalink:"/docs/next/user_guide/user_manual",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/user_guide/user_manual.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Usage Manual",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/sdk/dataproxy-sdk/overview"},next:{title:"Parse InLongMsg",permalink:"/docs/next/development/inlong_msg"}},d={},c=[{value:"User Login",id:"user-login",level:2},{value:"Data Access",id:"data-access",level:2},{value:"Data Stream Group Information",id:"data-stream-group-information",level:3},{value:"Access Requirements",id:"access-requirements",level:4},{value:"Group Information",id:"group-information",level:4},{value:"Access Scale",id:"access-scale",level:4},{value:"Data Stream",id:"data-stream",level:3},{value:"Basic Information",id:"basic-information",level:4},{value:"Data Sources",id:"data-sources",level:4},{value:"Data Information",id:"data-information",level:4},{value:"Data Storage",id:"data-storage",level:4},{value:"My Application",id:"my-application",level:2},{value:"Application Data Access Details",id:"application-data-access-details",level:4},{value:"Data Consumption",id:"data-consumption",level:2},{value:"Consumer Information",id:"consumer-information",level:3}],p={toc:c};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-login"},"User Login"),(0,r.kt)("p",null,"Requires the user to enter the account name and password of the system, default account is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin inlong"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"User login",src:a(91727).Z,width:"554",height:"322"})),(0,r.kt)("h2",{id:"data-access"},"Data Access"),(0,r.kt)("p",null,"The data access module displays a list of all tasks connected to the system within the current user authority, and can\nview, edit, update and delete the details of these tasks."),(0,r.kt)("p",null,"Click ","[Create]",", there are two steps to fill in data access information: Group information, data stream."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Create Group",src:a(68927).Z,width:"1570",height:"402"})),(0,r.kt)("h3",{id:"data-stream-group-information"},"Data Stream Group Information"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Create Group",src:a(97050).Z,width:"819",height:"749"})),(0,r.kt)("h4",{id:"access-requirements"},"Access Requirements"),(0,r.kt)("p",null,"Access requirements require users to choose message middleware: high throughput (TUBE) or High reliability (PULSAR):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"high throughput (Inlong TubeMQ): high-throughput message transmission component, suitable for log message transmission."),(0,r.kt)("li",{parentName:"ul"},"high reliability (Apache PULSAR): high-reliability message transmission component, suitable for billing transmission.")),(0,r.kt)("h4",{id:"group-information"},"Group Information"),(0,r.kt)("p",null,"You are required to fill in basic data stream group information for access tasks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group Name: Unified lowercase English name, please try to include the product name and concise\nspecifications, such as pay_base"),(0,r.kt)("li",{parentName:"ul"},"Group Label: the label of the group, easy to use and retrieve, up to 128 characters"),(0,r.kt)("li",{parentName:"ul"},"Group responsible person: at least 1 people, the group responsible person can view and modify group\ninformation, add and modify all access configuration items"),(0,r.kt)("li",{parentName:"ul"},"Group introduction: Cut SMS to introduce the group background and application of this access task:")),(0,r.kt)("h4",{id:"access-scale"},"Access Scale"),(0,r.kt)("p",null,"The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage\nresources later."),(0,r.kt)("h3",{id:"data-stream"},"Data Stream"),(0,r.kt)("p",null,"Click ","[Next]"," to enter the data stream information filling step. There are four modules for data stream information filling:\nbasic information, data source, data information, and data stream."),(0,r.kt)("p",null,"In the data stream process, you can click ","[Create]"," to create a new data stream:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Create stream",src:a(25263).Z,width:"881",height:"587"})),(0,r.kt)("h4",{id:"basic-information"},"Basic Information"),(0,r.kt)("p",null,"You are required to fill in the basic information of the data stream in the access task:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data stream id: The prefix is automatically generated according to the product/project, which is unique in a\nspecific group and is consistent with the stream id in the data source and the storage table"),(0,r.kt)("li",{parentName:"ul"},"Data stream name: interface information description, the length is limited to 64 characters (32 Chinese characters)"),(0,r.kt)("li",{parentName:"ul"},"Data stream owner: The data stream owner can view and modify data stream information, add and modify all access\nconfiguration items"),(0,r.kt)("li",{parentName:"ul"},"Introduction to data stream: simple text introduction to data stream")),(0,r.kt)("h4",{id:"data-sources"},"Data Sources"),(0,r.kt)("p",null,"You are required to select the source of the data stream."),(0,r.kt)("p",null,"Currently, two methods of file and independent push are supported, and the detailed information of the data source can\nbe supplemented in the advanced options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File: The business data is in the file, and the business machine deploys InLong Agent, which is read according to\ncustomized policy rules"),(0,r.kt)("li",{parentName:"ul"},"Autonomous push: Push data to the messaging middleware through the SDK")),(0,r.kt)("h4",{id:"data-information"},"Data Information"),(0,r.kt)("p",null,"You are required to fill in the data-related information in the data stream."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Data info",src:a(54045).Z,width:"1499",height:"466"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Format"),(0,r.kt)("li",{parentName:"ul"},"Data encoding"),(0,r.kt)("li",{parentName:"ul"},"Source field separator"),(0,r.kt)("li",{parentName:"ul"},"Source data field")),(0,r.kt)("h4",{id:"data-storage"},"Data Storage"),(0,r.kt)("p",null,"You are required to select the final flow direction of this data stream, this part is not currently supports both hive storage\nand autonomous push."),(0,r.kt)("p",null,"Add HIVE storage:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Hive info",src:a(47041).Z,width:"1192",height:"774"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target database: hive database name (prepared to create in advance)"),(0,r.kt)("li",{parentName:"ul"},"Target table: hive table name"),(0,r.kt)("li",{parentName:"ul"},"First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,r.kt)("li",{parentName:"ul"},"Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,r.kt)("li",{parentName:"ul"},"Username: hive server connection account name"),(0,r.kt)("li",{parentName:"ul"},"User password: hive server connection account password"),(0,r.kt)("li",{parentName:"ul"},"HDFS url: Hive bottom HDFS connection"),(0,r.kt)("li",{parentName:"ul"},"JDBC url: jdbc url of hive server"),(0,r.kt)("li",{parentName:"ul"},"Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,\nand support deletion and addition")),(0,r.kt)("h2",{id:"my-application"},"My Application"),(0,r.kt)("p",null,"The approval management function module currently includes my application and my approval, and all tasks of data access\nand consumption application approval in the management system."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"My application",src:a(13660).Z,width:"1577",height:"510"})),(0,r.kt)("p",null,"Display the current task list submitted by the applicant for data access and consumption in the system, click ","[Details]","\nto view the current basic information and approval process of the task."),(0,r.kt)("h4",{id:"application-data-access-details"},"Application Data Access Details"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Application detail",src:a(79169).Z,width:"1554",height:"704"})),(0,r.kt)("p",null,"Data access task detailed display The current basic information of the application task includes: applicant-related\ninformation, basic information about application access, and current approval process nodes."),(0,r.kt)("h2",{id:"data-consumption"},"Data Consumption"),(0,r.kt)("p",null,"Data consumption currently does not support direct consumption access to data, and data can be consumed normally after\nthe approval process."),(0,r.kt)("p",null,"Click ","[Create]"," to enter the data consumption process, and you need to fill in information related to\nconsumption."),(0,r.kt)("h3",{id:"consumer-information"},"Consumer Information"),(0,r.kt)("p",null,"Applicants need to gradually fill in the basic consumer data stream group information related to data consumption applications in\nthe information filling module"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Consumer info",src:a(30594).Z,width:"888",height:"476"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumer group name: The brief name of the\nconsumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the consumer\nname based on the abbreviation splicing"),(0,r.kt)("li",{parentName:"ul"},"Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person\ncan view and modify the consumption information"),(0,r.kt)("li",{parentName:"ul"},"Consumer target data stream group id: you need to select the group id of the consumer data, you can click ","[Query]"," and\nselect the appropriate group id in the pop-up window"),(0,r.kt)("li",{parentName:"ul"},"Data usage: select data usage usage"),(0,r.kt)("li",{parentName:"ul"},"Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to\ntheir own consumption scenarios After completing the information, click ","[Submit]",", and the data consumption process\nwill be formally submitted to the approver before it will take effect.")))}f.isMDXComponent=!0},79169:function(e,t,a){t.Z=a.p+"assets/images/application-detail-10b25da1ba95ab563c9aa59270fc90f5.png"},30594:function(e,t,a){t.Z=a.p+"assets/images/consumer-info-9cd38b8e4e8af2be0d43076d2680fada.png"},68927:function(e,t,a){t.Z=a.p+"assets/images/create-group-c2c00b83d7afb5072085ff94e6bf1634.png"},25263:function(e,t,a){t.Z=a.p+"assets/images/create-stream-0c815737e37527832790ab4816942fc0.png"},54045:function(e,t,a){t.Z=a.p+"assets/images/data-info-249333ddc4dea4af0b679c3c733ad6a5.png"},97050:function(e,t,a){t.Z=a.p+"assets/images/group-information-0a820b89a26b83451dbcc142828d34c1.png"},47041:function(e,t,a){t.Z=a.p+"assets/images/hive-info-e59f897e276874091039c471adabf9cb.png"},13660:function(e,t,a){t.Z=a.p+"assets/images/my-application-9be4dcdcadf24dfd7f1106cbda6158fd.png"},91727:function(e,t){t.Z="data:image/png;base64,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"}}]);