(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2njj":function(e,a,t){e.exports=t.p+"static/testimonial2-9de09066cda47291efead0b8729332a2.jpg"},BheN:function(e,a,t){e.exports=t.p+"static/testimonial1-df890f7f46bf48a6211dc96bb45d6bc0.jpg"},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Zttt");function c(){return l.a.createElement("footer",{className:"bg-primary small text-center text-white-50"},l.a.createElement("div",{className:"container"},"Copyright © Oscar Throedsson 2020"))}var m=t("obyI"),s=t.n(m);function i(){return l.a.createElement("section",{className:"contact-section bg-primary"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"social d-flex justify-content-center"},s.a.socialLinks.map((function(e){var a=e.icon,t=e.url;return l.a.createElement("a",{key:t,href:t,className:"mx-2"},l.a.createElement("i",{className:"fab "+a}))})))))}var o=t("Rnav"),d=function(e){var a=e.handleNext;return l.a.createElement("div",null,l.a.createElement("h3",{className:"text-white mb-5"},"Vad är ditt mål?"),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,1)}},"Gå ned i vikt")),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,1)}},"Gå upp i vikt")),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,1)}},"Bygga muskler")),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,1)}},"Livsstilsförändring")),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,1)}},"Bli smärtfri")))},u=function(e){var a=e.handleNext,t=e.handlePrevious;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,2)}},"Kvinna")),l.a.createElement("div",null,l.a.createElement("input",{className:"button-radio",type:"radio"}),l.a.createElement("label",{onClick:function(e){return a(e,2)}},"Man"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("button",{onClick:function(e){return t(e,2)},className:"btn btn-secondary float-left "},"Föreågende"))))},g=function(e){var a=e.handleNext,t=e.handlePrevious;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{className:"text-white",htmlFor:"age"},"Ålder"),l.a.createElement("input",{required:!0,type:"number",className:"form-control",id:"age"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{className:"text-white",htmlFor:"weight"},"Vikt"),l.a.createElement("input",{required:!0,type:"number",className:"form-control",id:"weight"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{className:"text-white",htmlFor:"length"},"Längd"),l.a.createElement("input",{required:!0,type:"number",className:"form-control",id:"length"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("button",{className:"btn btn-secondary float-left",onClick:function(e){return t(e,3)}},"Föreågende"),l.a.createElement("button",{className:"btn btn-primary float-right",onClick:function(e){return a(e,3)}},"Nästa"))))},E=function(e){var a=e.handlePrevious,t=e.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{className:"text-white",htmlFor:"firstName"},"Förnamn"),l.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"firstName"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{className:"text-white",htmlFor:"lastName"},"Efternamn"),l.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"lastName"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{className:"text-white",htmlFor:"email"},"Email"),l.a.createElement("input",{required:!0,type:"email",className:"form-control",id:"email"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{className:"text-white",htmlFor:"phone"},"Telefon"),l.a.createElement("input",{required:!0,type:"phone",className:"form-control",id:"phone"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("button",{className:"btn btn-secondary float-left",onClick:function(e){return a(e,4)}},"Föreågende"),l.a.createElement("button",{className:"btn btn-primary float-right",onClick:function(e){return t(e)}},"Skicka"))))},v=function(){var e=Object(n.useState)(1),a=e[0],t=e[1],r=function(e,a){e.preventDefault(),t(a+1)},c=function(e,a){e.preventDefault(),t(a-1)};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-lg-8 mx-auto text-center"},l.a.createElement("h2",{className:"text-white mb-5"},"Kontakt"),l.a.createElement("form",null,1==a&&l.a.createElement(d,{handleNext:r}),2==a&&l.a.createElement(u,{handleNext:r,handlePrevious:c}),3==a&&l.a.createElement(g,{handleNext:r,handlePrevious:c}),4==a&&l.a.createElement(E,{handlePrevious:c,handleSubmit:function(e){e.preventDefault()}})))))},N=t("vCWu"),f=t.n(N),h=t("BheN"),b=t.n(h),p=t("2njj"),k=t.n(p);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,null),l.a.createElement("header",{className:"masthead"}),l.a.createElement("section",{id:"vision",className:"about-section text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("h2",{className:"text-white mb-4"},"Min vision"),l.a.createElement("p",{className:"text-white-50"},"Tänk dig att du vaknar varje dag med energi att göra det du vill. Det tar inte en timme att komma igång på morgonen för att du har smärtor. Du orkar gå i trapporna, hänga med barnen, och deras tempo är inte längre en utmaning. Du kan känna säkerheten att gå till gymmet och improvisera, våga testa nya övningar och inte få ont, känslan av att känna sig stark och sätta nya personrekord! Tänk om majoriteten av Sveriges befolkning hade varit fysiskt aktiva och inte överviktiga! Det är min vision, mitt Sverige!"))))),l.a.createElement("section",{id:"vision",className:"quote-section text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("p",null,"En start med små steg är början på en större förändring"))))),l.a.createElement("section",{id:"about",className:"projects-section bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},l.a.createElement("div",{className:"col-xl-5 col-lg-4"},l.a.createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:f.a,alt:""})),l.a.createElement("div",{className:"col-xl-7 col-lg-8"},l.a.createElement("div",{className:"featured-text text-center text-lg-left"},l.a.createElement("h2",null,"Om mig"),l.a.createElement("p",{className:"text-black-50 mb-3"},"Med glimten i ögat och ett driv för resultat så ser jag till att din träning går framåt men också är rolig på samma gång. Med över 10 000h+ på golvet med kunder så har jag fått chansen att utveckla träning och kostupplägg för att det ska passa kundens behov och förutsättningar. Jag hittar vägar för att människor ska bli smärtfria och kunna träna hårt igen."),l.a.createElement("p",{className:"text-black-50 mb-3"},"Jag har alltid befunnit mig i miljöer där teamkänslan är viktig. Lagsporter var en stor del av min uppväxt och ungdom. Jag beslutade mig för att bli tränare och hjälpa personer med deras hälsa efter att jag hade jobbat på ett HVB hem. Jag såg andra tränare, både fysiskt och online, som jobbade med träning och kost men glömde det viktigaste, helheten!"),l.a.createElement("p",{className:"text-black-50 mb-3"},"Alla kan betala för ett kost- & träningsprogram. Att få allting att fungera som leder till resultat är en annan sak. Möjligheten att få ta del av en annan persons liv, se över behov och förutsättningar för att sen pussla om för att få allting att fungera och bli långvarigt. Det är ingen enkel resa, men den känslan av att få allting att fungera utefter hur du vill, det triggar mig. Jag krigar så länge du krigar. Du avgör hur mycket jag investerar i dig. Ge mig 100% så ger jag dig 110%. Valet ligger alltid hos individen själv, inte hos verktygsleverantören.")))),l.a.createElement("section",{id:"packages",className:"packages-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("h2",{className:"text-primary  mb-4"},"Priser & Paket"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 mb-3 mb-md-0"},l.a.createElement("div",{className:"card py-4 h-100"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("i",{className:"fas fa-globe-europe text-primary mb-2"}),l.a.createElement("h4",{className:"text-uppercase m-0"},"Online"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"small text-black-50"},l.a.createElement("ul",{className:"check-list"},l.a.createElement("li",null,"En sak"),l.a.createElement("li",null,"Två saker")))))),l.a.createElement("div",{className:"col-md-4 mb-3 mb-md-0"},l.a.createElement("div",{className:"card py-4 h-100"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("i",{className:"fas fa-city text-primary mb-2"}),l.a.createElement("h4",{className:"text-uppercase m-0"},"Företag"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"small text-black-50"},l.a.createElement("ul",{className:"check-list"},l.a.createElement("li",null,"Här får man lite fler saker"),l.a.createElement("li",null,"Coola saker ingår"),l.a.createElement("li",null,"Det kommer bli grymt bra!")))))),l.a.createElement("div",{className:"col-md-4 mb-3 mb-md-0"},l.a.createElement("div",{className:"card py-4 h-100"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("i",{className:"fas fa-user text-primary mb-2"}),l.a.createElement("h4",{className:"text-uppercase m-0"},"Privat"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"small text-black-50"},l.a.createElement("ul",{className:"check-list"},l.a.createElement("li",null,"Nu snackar vi"),l.a.createElement("li",null,"Riktigt grymt"),l.a.createElement("li",null,"En annan bra sak"),l.a.createElement("li",null,"???"),l.a.createElement("li",null,"Profit"))))))))),l.a.createElement("div",{className:"row justify-content-center no-gutters mb-5 mb-lg-0"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("img",{className:"img-fluid",src:b.a,alt:""})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"bg-secondary text-center h-100 project"},l.a.createElement("div",{className:"d-flex h-100"},l.a.createElement("div",{className:"project-text w-100 my-auto text-center text-lg-left"},l.a.createElement("h4",{className:"text-primary"},"10/10"),l.a.createElement("p",{className:"mb-0 text-black"},"Grym PT! Aldrig har jag varit i så bra form som jag är idag."),l.a.createElement("hr",{className:"d-none d-lg-block mb-0 ml-0"}),l.a.createElement("p",{className:"mb-0 text-black"},"Kalle Anka")))))),l.a.createElement("div",{className:"row justify-content-center no-gutters"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("img",{className:"img-fluid",src:k.a,alt:""})),l.a.createElement("div",{className:"col-lg-6 order-lg-first"},l.a.createElement("div",{className:"bg-secondary text-center h-100 project"},l.a.createElement("div",{className:"d-flex h-100"},l.a.createElement("div",{className:"project-text w-100 my-auto text-center text-lg-right"},l.a.createElement("h4",{className:"text-primary"},"Rekommenderar verkligen"),l.a.createElement("p",{className:"mb-0 text-black"},"Oscar vet verkligen vad han håller på med. Jag gick ifrån att sova i hundra år till att ha hur mycket energi som helst."),l.a.createElement("hr",{className:"d-none d-lg-block mb-0 mr-0"}),l.a.createElement("p",{className:"mb-0 text-black"},"Törnrosa")))))))),l.a.createElement("section",{id:"contact",className:"signup-section"},l.a.createElement(v,null)),l.a.createElement(i,null),l.a.createElement(c,null))}},obyI:function(e,a){e.exports={siteTitle:"Oscar Throedsson - Personlig Tränare & Coach",manifestName:"Oscar Throedsson",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#00587c",manifestThemeColor:"#00587c",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"",heading:"Oscar Throedsson",subHeading:"När hälsa blir en investering",socialLinks:[{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/oscar-throedsson-8586ba124/"},{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/oscarthroedsson"},{icon:"fa-facebook-f",name:"Facebook",url:"https://www.facebook.com/OscarThroedsson-108575847730516"}],email:"oscar.throedsson@gmail.com",phone:"000-00000",address:"305 Del Sol, Sunnyvale, CA"}},vCWu:function(e,a,t){e.exports=t.p+"static/about-28224956d8ae3f9d3b14545e6ce94e4a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-8cf47dcd8b223347de3c.js.map