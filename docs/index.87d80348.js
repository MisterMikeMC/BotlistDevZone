import{L as c,R as u,a as n,r as d,B as R}from"./vendor.ee2d9e6d.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};E();function p(){return React.createElement("div",null,React.createElement("section",{className:"HomeBar"},React.createElement("header",null,React.createElement("nav",null,React.createElement("h1",{className:"Title"},"BOTLIST",React.createElement("br",null),"RINCON DE LOS DEVS"),React.createElement("ul",{className:"ReDirects"},React.createElement("li",{className:"Link"},React.createElement(c,{className:"Links",to:"/"},"Home")),React.createElement("li",{className:"Link"},React.createElement(c,{className:"Links",to:"/bots"},"Bots")),React.createElement("li",{className:"Link"},React.createElement(c,{className:"Links",to:"/add"},"Add")),React.createElement("li",{className:"Link"},React.createElement(c,{className:"Links",to:"/about"},"About")))))))}let i=[{BotName:"\u{1F338} Komi Shouko \u{1F338}",BotID:"875166925884370994",DevName:"MrMikeMC#9081",ServerSupport:"http://localhost:3000/"},{BotName:"Tanjiro?",BotID:"921860445164421131",DevName:"Akeno#0347",ServerSupport:"https://discord.gg/vQR6ZZ63Ap"},{BotName:"D-Drum?",BotID:"942524660149522553",DevName:"Akeno#0347",ServerSupport:"https://discord.gg/vQR6ZZ63Ap"},{BotName:"Teegan",BotID:"796767810054258719",DevName:"xAtsuUC_#7030",ServerSupport:"https://discord.gg/vQR6ZZ63Ap"},{BotName:"Megumin",BotID:"881462025514020874",DevName:"IIPOLOII#4840",ServerSupport:"https://discord.gg/vQR6ZZ63Ap"}];function f(){let r;if(i)r=i.map(a=>{let l=`https://discord.com/api/oauth2/authorize?client_id=${a.BotID}&permissions=8&scope=applications.commands%20bot`;return React.createElement("div",{className:"card"},React.createElement("h1",null,a.BotName),React.createElement("p",null,"By ",a.DevName),React.createElement("br",null),React.createElement("a",{href:l,target:"_blank"},"Invitaci\xF3n"),React.createElement("a",{href:a.ServerSupport,target:"_blank"},"Soporte"))});else return r=React.createElement("div",{className:"nocards"},React.createElement("h1",null,"No hay bots.")),r;return React.createElement("div",{className:"CardSection"},r)}function s(){return React.createElement("h1",{className:"Text"},"Proximamente...")}function N(){function r(){window.open("https://discord.gg/vQR6ZZ63Ap")}return React.createElement("footer",{className:"Footer"},React.createElement("div",{className:"Title"},React.createElement("h1",{className:"Title"},"BOTLIST",React.createElement("br",null),"RINCON DE LOS DEVS"),React.createElement("img",{className:"ImageLogo",src:"https://cdn.discordapp.com/attachments/938076154722680883/949869022835515392/BotlistLogo.png",alt:"Logo Botlist",onClick:r})),React.createElement("div",null,React.createElement("h2",{className:"SubTitle"},"S\xEDguenos en:"),React.createElement("a",{id:"LinkButton",href:"https://discord.gg/vQR6ZZ63Ap",target:"_blank"},React.createElement("i",{className:"fa-brands fa-discord"})),React.createElement("a",{id:"LinkButton",href:"https://github.com/MisterMikeMC",target:"_blank"},React.createElement("i",{className:"fa-brands fa-github"})),React.createElement("a",{id:"LinkButton",href:"https://twitter.com/MrMike_Official",target:"_blank"},React.createElement("i",{className:"fa-brands fa-twitter"}))),React.createElement("div",{className:"Copyrigth"},React.createElement("small",null,"\xA9 ",React.createElement("b",null,"Rincon de los Devs")," - 2022")))}function h(){return React.createElement("div",null,React.createElement(p,null),React.createElement(u,null,React.createElement(n,{path:"/",element:React.createElement(s,null)}),React.createElement(n,{path:"/bots",element:React.createElement(f,null)}),React.createElement(n,{path:"/add",element:React.createElement(s,null)}),React.createElement(n,{path:"/about",element:React.createElement(s,null)})),React.createElement(N,null))}d.exports.render(React.createElement(R,null,React.createElement(h,null)),document.getElementById("main"));
