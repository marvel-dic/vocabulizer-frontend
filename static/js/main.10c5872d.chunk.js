(this["webpackJsonpvocabulizer-frontend"]=this["webpackJsonpvocabulizer-frontend"]||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(31),a=n.n(i),s=(n(38),n(4)),h=n(54),c=n(60),l=n(57),d=n(47),u=function(e,t,n){var o=""!==t?[e,t].join("__"):e;return"".concat(o," ").concat(n.reduce((function(e,t){return"".concat(e," ").concat(o).concat("--").concat(t)}),""))},m=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n="string"===typeof t?n:t||[],u(e,"string"===typeof t?t:"",Array.isArray(n)?n.filter(Boolean):Object.entries(n).filter((function(e){var t=Object(s.a)(e,2)[1];return Boolean(t)})).map((function(e){return Object(s.a)(e,1)[0]})))}},f=(n(39),m("TextArea")),g=function(e){var t=e.children,n=e.onChange,i=Object(o.useState)(e.value||""),a=Object(s.a)(i,2),h=a[0],c=a[1];return Object(o.useEffect)((function(){null===n||void 0===n||n(h)}),[h]),r.a.createElement("div",{className:f()},r.a.createElement("textarea",{onChange:function(e){return c(e.currentTarget.value)},className:f("input"),value:h}),r.a.createElement("div",{className:f("input-highlighter")},t(h)))},w=n(45),y=n(55),b=n(52),p=n(46),v=n(32),k=n(56),j=n(53),O=n(58),I=n(48),S=n(49),W=n(50),E=Object(v.a)((function(e,t){return Object(O.a)(e)?[t]:Object(I.a)(Object(S.a)(e),function(e,t){var n=e.start,o=e.end,r=t.start,i=t.end;return o<r?[e,t]:i<n?[t,e]:n<=r&&o>=i?[e]:r<=n&&i>=o?[t]:n<=r&&o<=i?[{start:e.start,end:t.end}]:r<=n&&i<=o?[{start:t.start,end:e.end}]:[e,t]}(Object(W.a)(e),t))}),[]),A=(n(40),m("Word")),x=function(e){var t=e.word,n=e.selected,o=e.onSelect;return r.a.createElement("span",{className:A({selected:n}),onClick:function(){return null===o||void 0===o?void 0:o(t)}},t.dictionaryWord,r.a.createElement("sup",{className:A("count")},t.entriesInSrc.length))},T=(n(41),n(51)),N=n(59),C=m("Dictionary"),M=function(e){var t=e.dictionary,n=e.selectedWords,o=e.onSelectWords;return r.a.createElement("div",{className:C()},t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{selected:Object(T.a)(e,n),key:e.dictionaryWord,word:e,onSelect:function(e){return Object(T.a)(e,n)?null===o||void 0===o?void 0:o(Object(N.a)([e],n)):null===o||void 0===o?void 0:o(Object(k.a)(e,n))}})," ")})))},B=n(24),q=(n(42),m("Highlighter")),H=function(e){var t=e.highlighters,n=e.text,i=Object(o.useMemo)((function(){return function(e,t){var n;if(Object(O.a)(t))return[[e,!1]];var o=Object(l.a)(Object(c.a)((function(e){return[e.start,e.end]}),t)),r=Object(v.a)((function(t,n){var o=Object(s.a)(t,3),r=o[0],i=o[1],a=o[2];return[Object(k.a)([Object(B.a)(i,n,e),a],r),n,!a]}),[[],0,!1],o);return Object(k.a)([Object(B.a)(null!==(n=Object(W.a)(o))&&void 0!==n?n:e.length,e.length,e),!1],r[0])}(n,t)}),[t,n]);return r.a.createElement("span",{className:q()},i.map((function(e){var t=Object(s.a)(e,2),n=t[0],o=t[1];return r.a.createElement("span",{className:q("item",{active:o})},n)})))},z=(n(43),m("App")),D=r.a.memo((function(){var e=Object(o.useState)("I spent the first six months of the pandemic sure that help for mothers was on its way. Bills would be passed, systems would be reworked. Workplaces would shift to include caretaking within their cultures. A year of the country \u201cstaying home\u201d would validate the work of stay-at-home mothers. As the fall brought more remote learning, we\u2019d reconfigure school standards to keep children safe from virtual truancy and failing grades given over Zoom in the name of academic rigor. We would listen to women like Natalie Brown, mother of two and a PhD candidate, when she says we\u2019d \u201cshift our focus and policies to helping families survive this time in ways that work for them.\u201d\n\nWhen it came to the 2020\u20132021 school year, maybe that meant we\u2019d take a cue from Bolivia and suspend academics. We\u2019d figure this disease out and then we could start again, on an even footing, a year later. Maybe it meant remote school accompanied by a temporary measure that untied education funding from enrollment. If schools were allowed to keep their enrollment funding from the previous year, a working mother who pulled her kid from their kindergarten class because she couldn\u2019t supervise their remote learning wouldn\u2019t be culpable for impoverishing her neighborhood school. Maybe it meant a government check every month until the pandemic was over, so that women could pay a living wage to childcare workers to supervise their kids\u2019 living and learning. Whatever the shift, we would have had to think outside the demands of our standard systems. As Brown notes, \u201cThis pandemic has underscored how institutions can\u2019t just operate to promote their own agendas while ignoring their roles in the community ecosystem. Our university relies on public schools which relies on daycare providers and parents, etc. We need holistic solutions.\u201d\n\nInstead of holistic solutions, we have a funding and community crisis. My family\u2019s school district is remote through at least October. People are taking their children out of school at a concerning rate. Yesterday, the principal of our elementary school took to the neighborhood Facebook page to tell parents how much money our school was losing each time a child withdrew. I feel for him. He is an excellent educator dedicated to equity. He\u2019s working within a system with broken funding and bitter, often racist, divides. The comments on the post were mostly supportive, many in my neighborhood talked about the importance of maintaining our community through enrollment, it was \u201cthe right thing to do.\u201d\n\nAs a parent who is keeping one daughter in remote public school and has unenrolled another with dyslexia, I stayed quiet. Remote learning isn\u2019t good for kids, but I can offer my oldest to the funding gods. She\u2019ll be fine. My child with dyslexia needs additional support. Remote learning in the spring marked her up in ways I couldn\u2019t ask her to face again. She\u2019d always moved uncertainly through a world with processes running counter to her brain\u2019s wiring. Remote learning, with its links, forms, and online submissions was unintelligible to her. It was too remote. She couldn\u2019t touch it. She\u2019d been cut off. Her insecurity turned into self-loathing. I don\u2019t know if my decision to keep one child in remote public school while taking another child out will be just enough to keep me in my community, or just enough to exile me from it.\n\nLeniency on work schedules and compensation is a request every working mother has made since she brought her first child home from the hospital.\n\nWhen our school district sent out a statement about pods and unenrollment, they said the already present evils of segregation and inequity were worsening in the pandemic. They\u2019re right. One of their tips to help parents keep kids enrolled and remotely present for daily attendance was: \u201cAsk your employer to provide leniency on work schedules and compensation during periods of remote learning.\u201d Leniency on work schedules and compensation is a request every working mother has made since she brought her first child home from the hospital. Sometimes she\u2019s just told no, many times she\u2019s fired over it. It\u2019s a laughable tip, but what is the district supposed to do? When every broken institution depends on the unpaid labor of caretakers and those caretakers are finally broken themselves, all we\u2019re left with are statements and suggestions signifying nothing.\n\nAccording to a recent survey by Morning Consult, four in five parents of remote learning kids say they have \u201cno in-person help educating and caring for them, whether from relatives, neighbors, nannies, or tutors.\u201d When a study like this says parents, it mostly means \u201cmostly mothers.\u201d The bulk of pandemic hardship is falling on the mothers; 54% of women in the survey said they will be the ones handling their children\u2019s weekday education. Many working moms who are deeply engaged in their communities are having to choose between funding the school with enrollment or keeping their jobs.\n\nWhen those mothers choose enrollment and out-of-the-home work, and if they\u2019re unable to ensure their child regularly attends remote classes, they are endangered through the anti-truancy alliance between schools and the state. In \u201chigh-poverty, predominantly Black and Latino school districts\u201d mothers are being hauled into truancy court because their elementary children didn\u2019t attend enough Zoom classes. If mothers unenroll their children because they cannot supervise full-day remote learning and are concerned about the repercussions, they\u2019re told they\u2019ve violated a sacred social contract. Mothers who form pods to get childcare for their kids while they remote learn are privileged pariahs. Single working mothers who do not have the network or money to form a pod will be reported to the authorities when a neighbor realizes their seven-year-old is home alone every day while her mom earns money for food and rent. Stay-at-home mothers are not allowed to feel anything but grateful to be of service to their kids and their community.\n\nI finally understand that help is not coming. With kids home from school but still burdened with scholastic progress, many working moms will cut back when they were just ready to spring forward. They\u2019re going to lose years of progress when it matters most to their careers. In the decades to come, those women will be missing from the leadership positions they would have occupied if we\u2019d decided they mattered enough to help them. Their children will watch them fold into themselves. Stay-at-home moms who depend on school hours to perform household labor, go back to school themselves, and do so much of the daytime community work that keeps communities afloat will find themselves collapsing. The crying won\u2019t stay in the kitchen. We can\u2019t keep holding our homes and communities up if we\u2019ve fallen in ourselves.\n\nIf we can\u2019t fix our culture, can we at least be honest about what it values?\n\nThis financial and social recession will continue to hit mothers \u2014 working in and outside of the home \u2014 with sharp, leveling blows. As always, our inability to think outside of established systems is going to hurt the vulnerable the most. Some of the effects won\u2019t be seen in the labor force withdrawal or in the school district\u2019s ledgers. According to a study on mental health during Covid, conducted by the Centers for Disease Control and Prevention, over 25% of Americans between the ages of 18 and 24 seriously considered suicide in the last 30 days; 16% of those ages 25 to 44 considered it. In America, the average age of a first-time mother is 26. I was 24 when I had my first baby. How many mothers right now are looking out the window for a little too long, gripping their steering wheels a little too tight, giving up a little too much?\n\nWhether we labor in our homes or outside of them, every mother will wake up every morning remembering that when it comes to their needs, America just can\u2019t really be bothered. Can\u2019t be bothered to provide financial help. Can\u2019t be bothered to find a new way. Can\u2019t be bothered to reach across the kitchen table and hold the hand of the mother who can\u2019t lift her head from its crumb-strewn surface. Simply can\u2019t be bothered. I guess I always knew this about America but now, after this pandemic, I understand it."),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(o.useMemo)((function(){return function(e){return Object(h.a)(Object(w.a)((function(e){var t,n,o,r=Object(s.a)(e,2),i=r[0],a=r[1],h=i.slice(a).match(/[\w\u2019]+/);return!!h&&[{dictionaryWord:Object(y.a)(null===h||void 0===h?void 0:h[0]),partOfSpeechTag:"NOUN",entriesInSrc:[{start:a+(null!==(t=h.index)&&void 0!==t?t:0),end:a+(null!==(n=h.index)&&void 0!==n?n:0)+(null===h||void 0===h?void 0:h[0].length)}]},[i,a+h[0].length+(null!==(o=null===h||void 0===h?void 0:h.index)&&void 0!==o?o:0)]]})),Object(b.a)((function(e){return e.dictionaryWord})),p.a,Object(v.a)((function(e,t){var n,o=Object(s.a)(t,2),r=o[0],i=o[1];return Object(k.a)({dictionaryWord:r,partOfSpeechTag:null!==(n=i[0].partOfSpeechTag)&&void 0!==n?n:"--",entriesInSrc:Object(l.a)(i.map(Object(j.a)("entriesInSrc")))},e)}),[]),Object(d.a)((function(e,t){return t.entriesInSrc.length-e.entriesInSrc.length})))([e,0])}(n)}),[n]),u=Object(o.useState)([]),m=Object(s.a)(u,2),f=m[0],O=m[1],I=Object(o.useMemo)((function(){return Object(h.a)(Object(c.a)((function(e){return e.entriesInSrc})),l.a,Object(d.a)((function(e,t){return e.start-t.start})),E)(f)}),[f,a,n]);return r.a.createElement("div",{className:z()},r.a.createElement(g,{value:n,onChange:i},(function(e){return r.a.createElement(H,{text:e,highlighters:I})})),r.a.createElement(M,{selectedWords:f,dictionary:a,onSelectWords:O}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.10c5872d.chunk.js.map