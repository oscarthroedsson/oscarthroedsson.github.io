(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JpX0:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("rPLL"),m=t.n(r);a.a=function(e){var a=e.text,t=e.onClick;return l.a.createElement("button",{className:m.a.button,onClick:t},a)}},rPLL:function(e,a,t){e.exports={button:"button-module--button--2P_RA"}},rfQa:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("JpX0"),m=function(e){var a=e.type,t=e.label,n=e.name,r=e.value,m=e.onChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"text-white",htmlFor:n},t),l.a.createElement("input",{type:a,className:"form-control",id:n,name:n,value:r,onChange:function(e){return m(e)}}))};a.a=function(e){var a=e.showPriceInfo,t=e.applicationRef,c=Object(n.useState)(""),o=c[0],s=c[1],i=Object(n.useState)(""),u=i[0],d=i[1],p=Object(n.useState)(""),f=p[0],E=p[1],g=Object(n.useState)(""),v=g[0],h=g[1],b=Object(n.useState)(""),N=b[0],k=b[1],y=Object(n.useState)(""),x=y[0],w=y[1],S=Object(n.useState)(""),C=S[0],j=S[1],O=Object(n.useState)(""),P=O[0],J=O[1],A=Object(n.useState)(!1),F=A[0],I=A[1],L=Object(n.useState)(!1),T=L[0],D=L[1],R={firstName:d,lastName:E,email:h,phoneNumber:k,streetAddress:w,postalCode:j,city:J,acceptTerms:I},V=function(e){R[e.target.name](e.target.value)};return l.a.createElement("section",{ref:t,id:"anmalan",className:"signup-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-lg-8 mx-auto text-center"},l.a.createElement("h2",{className:"text-white mb-5"},"Anmälan"),l.a.createElement("div",{className:"info"},a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Prisinformation*"),l.a.createElement("p",null,"Startavgift: 1200kr"),l.a.createElement("p",null,"Månadspris: 3500kr"),l.a.createElement("p",{className:"font-italic mb-3"},"*Alla priser är inklusive moms"),l.a.createElement("p",{className:"mb-3"},"Startdatum: 15/2 och pågår i sex månader")),l.a.createElement("p",{className:"text-black-50"},"Din ansökan är ",l.a.createElement("u",null,"bindande"),"."),l.a.createElement("p",{className:"text-black-50"},"Vid frågor, maila mig på"," ",l.a.createElement("a",{href:"mailto:oscar.throedsson@gmail.com"},"oscar.throedsson@gmail.com"))),!T&&l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(m,{type:"text",label:"Förnamn",name:"firstName",value:u,onChange:V})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(m,{type:"text",label:"Efternamn",name:"lastName",value:f,onChange:V})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(m,{type:"email",label:"Email",name:"email",value:v,onChange:V})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(m,{type:"phone",label:"Telefonnummer",name:"phoneNumber",value:N,onChange:V})),l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement(m,{type:"text",label:"Address",name:"streetAddress",value:x,onChange:V})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement(m,{type:"phone",label:"Postnummer",name:"postalCode",value:C,onChange:V})),l.a.createElement("div",{className:"form-group col-md-8"},l.a.createElement(m,{type:"text",label:"Stad",name:"city",value:P,onChange:V}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12 text-left"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input mr-3",type:"checkbox",id:"acceptTerms",name:"acceptTerms",onChange:function(e){return V(e)}}),l.a.createElement("label",{className:"form-check-label text-white",htmlFor:"acceptTerms"},"Jag förstår att denna ansökan är bindande när jag har blivit tilldelad en profil och ett träningsprogram (ev: kostprogram). Läs mer om"," ",l.a.createElement("a",{href:"/kopesavtal.pdf",target:"_blank"},"köpesavtalet."),".")))),l.a.createElement("div",{className:"col-md-12 text-left text-white"},l.a.createElement("p",null,"Har du inte blivit tilldelad en profil eller träningsprogram kan du ångra din ansökan inom 14 dagar.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement(r.a,{onClick:function(e){if(e.preventDefault(),u&&f&&v&&x&&C&&P&&N)if(F){s("");var a=new FormData;a.append("entry.994694613",u),a.append("entry.1870770121",f),a.append("entry.1999044351",v),a.append("entry.1267153669",x),a.append("entry.561609485",C),a.append("entry.2076041145",P),a.append("entry.1378902402",N),fetch("https://docs.google.com/forms/u/5/d/e/1FAIpQLSeEiKVe8tPSZc7JseRlJ6m1y6gYVHPKdiUDhZ-iPZIYziXjJQ/formResponse",{method:"POST",body:a,mode:"no-cors"}).then((function(){return D(!0)}))}else s("Vänligen acceptera villkoren innan du går vidare.");else s("Vänligen fyll i alla fält innan du går vidare")},text:"Let's go!"}))),o&&l.a.createElement("p",{className:"text-white"},o)),T&&l.a.createElement("h3",{className:"text-white"},"Tack för din intresseanmälan.")))))}},zxDK:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Zttt"),m=t("Rnav"),c=t("rfQa");a.default=function(){return l.a.createElement(r.a,null,l.a.createElement(m.a,{logoOnly:!0}),l.a.createElement(c.a,{showPriceInfo:!0}))}}}]);
//# sourceMappingURL=component---src-pages-livsforandringen-js-c3a8536078900befef11.js.map