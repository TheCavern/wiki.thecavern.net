"use strict";(self.webpackChunkcavern_wiki=self.webpackChunkcavern_wiki||[]).push([[41],{4833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const i={},o="Contributing",a={id:"Contributing",title:"Contributing",description:"Go to the GitHub to start contributing!",source:"@site/docs/Contributing.md",sourceDirName:".",slug:"/Contributing",permalink:"/Contributing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Commands",permalink:"/commands/Basic-Commands"}},d={},c=[{value:"Starting Out",id:"starting-out",level:2},{value:"Structure",id:"structure",level:2},{value:"Standards",id:"standards",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Go to the ",(0,r.jsx)(t.a,{href:"https://github.com/TheCavern/wiki.thecavern.net",children:"GitHub"})," to start contributing!"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-out",children:"Starting Out"}),"\n",(0,r.jsxs)(t.p,{children:['At the GitHub page linked at the top of this page, sign in and create your own fork of the project by clicking the "Fork" button.\r\n',(0,r.jsx)(t.img,{alt:"fork_button",src:n(2918).A+"",width:"432",height:"54"})]}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Markdown"})," write the documentation you wish to be added.\r\nOnce you've made the changes in your editor (I suggest using ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),") you must commit the changes to GitHub."]}),"\n",(0,r.jsxs)(t.p,{children:["If you are not familiar with GitHub, download ",(0,r.jsx)(t.a,{href:"https://desktop.github.com/download/",children:"GitHub Desktop"}),", documentation for it can be found ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/desktop",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Optionally, you can navigate to the directory which you have made changes in both on GitHub and your file explorer, and upload the changed files.\r\n",(0,r.jsx)(t.img,{alt:"Upload Step 1",src:n(932).A+"",width:"1586",height:"371"}),"\r\n",(0,r.jsx)(t.img,{alt:"Upload Step 2",src:n(643).A+"",width:"1390",height:"812"})]}),"\n",(0,r.jsxs)(t.p,{children:["A proper commit should look something like this.\r\n",(0,r.jsx)(t.img,{alt:"commit",src:n(3947).A+"",width:"1876",height:"448"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"After this, you can click the commit button, and your changes should be uploaded to your fork."}),"\n",(0,r.jsxs)(t.p,{children:['To submit changes to the wiki, navigate to the "Pull Requests" button at the top of your repo\'s page.\r\nClick the "New pull request" button followed by the "Create pull request" button, and fill out the fields describing your changes.\r\n',(0,r.jsx)(t.img,{alt:"new_pr",src:n(9327).A+"",width:"1580",height:"226"}),"\r\n",(0,r.jsx)(t.img,{alt:"new_pr",src:n(7561).A+"",width:"1259",height:"321"}),"\r\n",(0,r.jsx)(t.img,{alt:"pr_screen",src:n(4416).A+"",width:"933",height:"694"})]}),"\n",(0,r.jsx)(t.p,{children:"After following these steps, a new pull request will be made on the main repo, allowing others to review, comment on, and suggest changes."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(t.p,{children:"Docs are stored in the docs folder (duh). Categories will be a directory with a lowercase name.\r\nSections within these categories will be formatted with an uppercase at the start of each word with dashes replacing spaces."}),"\n",(0,r.jsx)(t.p,{children:"Images are stored in docs/assets/img/, all image names are lowercase with underscores replacing all spaces."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"docs\r\n\u251c\u2500\u2500 assets\r\n\u2502   \u2514\u2500\u2500 img\r\n\u2502       \u251c\u2500\u2500 category\r\n\u2502       \u2502   \u2514\u2500\u2500 Category-Section\r\n\u2502       \u2502       \u251c\u2500\u2500 img_1.png\r\n\u2502       \u2502       \u2514\u2500\u2500 img_1.png\r\n\u2502       \u2514\u2500\u2500 Main-Category\r\n\u2502           \u251c\u2500\u2500 img_1.png\r\n\u2502           \u2514\u2500\u2500 img_1.png\r\n\u251c\u2500\u2500 category\r\n\u2502   \u251c\u2500\u2500 _category_.json\r\n\u2502   \u2514\u2500\u2500 Category-Section.md\r\n\u2514\u2500\u2500 intro.md\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"standards",children:"Standards"}),"\n",(0,r.jsx)(t.p,{children:"I hate laying out standards, so to keep it short. Use markdown where possible, avoid using JSX."}),"\n",(0,r.jsx)(t.p,{children:"As the documentation grows, this section will become more detailed."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3947:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/commit_screen-b531bd18d230e22b93bbe58e23af6b6b.png"},7561:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create_pr_button-63fe879120121122b1a6effbfced84a2.png"},932:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/file_upload_button-bba09cdcbd75486342fb156974ff5056.png"},2918:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,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"},9327:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/new_pr_button-656e9d34fcca8fca4f102826db1ff64c.png"},4416:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pr_screen-4f05c17bee5acd4ff369522b78eb1c3f.png"},643:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/upload_screen-1937cbf35fe2e981902c60af9f58e2b6.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);