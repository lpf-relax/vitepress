import{h as H,u as z,aE as R,p as B,q as U,C as M,c,o as u,j as i,G as s,w as n,e as E,k as e,t as _,F as w,B as F,a as p,N as G,b as A}from"./framework.ThKVdx8S.js";import{b as q,a as Q,c as W,E as y,d as X,s as T,e as $,f as Y,g as Z}from"./theme.CqS-yJ8n.js";import{g as ee}from"./getArrayRandomItem.LhrzGfRF.js";const D=(m,l)=>{const a=m.split("/").filter(Boolean);return a.pop(),a.push(`${l}.html`),a.join("/")},J=(m,l="")=>{try{return m?JSON.parse(m):void 0}catch{return l}},te=(m,l)=>H(()=>{const a=m.value;if(!(a!=null&&a.length))return{};const f=a.findIndex(L=>L===l);if(f<0)return{first:a[0],last:a[a.length-1]};const x=a[0],d=a[a.length-1],k=a[f-1<0?0:f-1],h=a[f+1>a.length-1?a.length-1:f+1];return{first:x===l?void 0:x,last:d===l?void 0:d,current:l,prev:k===l?void 0:k,next:h===l?void 0:h}}),le={class:"flex justify-center"},ae={class:"flex justify-center"},se={key:0,class:"flex justify-center"},ne={class:"flex flex-wrap justify-between"},oe={class:"rounded-xs flex bg-neutral-100/70 mb-3",style:{width:"calc(50% - 16px)"}},ie={class:"bg-teal-800 text-white font-bold p-1.5 flex-none"},re={class:"flex flex-wrap justify-between"},de={class:"rounded-xs bg-neutral-100/70 mb-3 w-full"},ue={class:"flex flex-wrap justify-between"},ce={class:"rounded-xs bg-neutral-100/70 mb-3 w-full"},fe=["innerHTML"],ve=["innerHTML"],pe={class:"flex items-center justify-center pt-8"},ye={__name:"index",setup(m){const{params:l}=z(),{route:a,go:f}=R(),x=l.value.data.id,d=l.value.data,k=l.value.idList,h=l.value.favModalLocalKey,L=l.value.favLocalKey,C=B(J(localStorage.getItem(h),!1)||!1),j=()=>{const o=J(localStorage.getItem(L),[]);return Array.isArray(o)?o:[]},b=B(k),g=B(j()),K=H(()=>g.value.some(o=>o===x)),v=te(b,x),O=()=>{const o=j();o.some(t=>t===x)?g.value=o.filter:g.value=[...o,x],C.value&&(b.value=g.value),localStorage.setItem(L,JSON.stringify(g.value))};U(C,async(o,t)=>{o?(g.value=j(),b.value=g.value):b.value=k,localStorage.setItem(h,JSON.stringify(o))},{immediate:!0});const V=H(()=>{var o,t;return{icon:d.icon,bg:((o=d==null?void 0:d.avatar)==null?void 0:o.m)||d.icon,list:[(t=d==null?void 0:d.avatar)==null?void 0:t.m,d.icon].filter(Boolean)}}),P=()=>{f(D(a.path,ee(b.value)))},S=o=>{f(D(a.path,o))};return(o,t)=>{const N=M("ViHideSpan"),I=M("ViHideDiv");return u(),c(w,null,[i("div",{id:"pkg-wrap",class:"max-w-lg mx-auto bg-contain",style:G({backgroundImage:`url(${V.value.bg})`})},[s(e(Q),{class:"w-full px-4 py-16 backdrop-blur-lg",direction:"vertical",alignment:"normal"},{default:n(()=>[i("div",le,[s(e(q),{style:{width:"100px",height:"100px"},src:V.value.icon,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":V.value.list,"show-progress":"","preview-teleported":"",fit:"cover"},null,8,["src","preview-src-list"])]),i("div",ae,[s(N,{class:"rounded-xs flex bg-neutral-100/70 mb-3 p-1.5"},{default:n(()=>[i("b",null,_(e(l).data.name),1)]),_:1})]),e(l).data.summary?(u(),c("div",se,[s(N,{class:"rounded-xs flex bg-neutral-100/70 mb-3 p-1.5"},{default:n(()=>[i("b",null,_(e(l).data.summary),1)]),_:1})])):E("",!0),i("div",ne,[(u(!0),c(w,null,F(e(l).data.attrs,r=>(u(),c("div",oe,[i("div",ie,_(r[0]),1),s(I,{class:"p-1.5 text-right flex-1"},{default:n(()=>[p(_(r[1]),1)]),_:2},1024)]))),256))]),e(l).data.skill?(u(),c(w,{key:1},[t[5]||(t[5]=i("div",{class:"rounded-xs flex bg-neutral-100/70 mb-3 p-1.5 my-8 justify-center"},[i("b",null,"技能")],-1)),i("div",re,[(u(!0),c(w,null,F(e(l).data.skill,r=>(u(),c("div",de,[s(I,{class:"bg-teal-800 font-bold p-1.5 flex-none",unActiveClass:"text-white",activeClass:"text-teal-800"},{default:n(()=>[p(_(r.title),1)]),_:2},1024),s(I,{class:"p-1.5 flex-1"},{default:n(()=>[p(_(r.desc),1)]),_:2},1024)]))),256))])],64)):E("",!0),e(l).data.destiny?(u(),c(w,{key:2},[t[6]||(t[6]=i("div",{class:"rounded-xs flex bg-neutral-100/70 mb-3 p-1.5 my-8 justify-center"},[i("div",null,"命之座")],-1)),i("div",ue,[(u(!0),c(w,null,F(e(l).data.destiny,r=>(u(),c("div",ce,[s(I,{class:"bg-teal-800 font-bold p-1.5 flex-none",unActiveClass:"text-white",activeClass:"text-teal-800"},{default:n(()=>[i("div",{innerHTML:r[0]},null,8,fe)]),_:2},1024),s(I,{class:"p-1.5 text-right flex-1"},{default:n(()=>[i("div",{innerHTML:r[1]},null,8,ve)]),_:2},1024)]))),256))])],64)):E("",!0)]),_:1})],4),s(e(Z),{target:"body",position:"bottom",offset:32},{default:n(()=>[i("div",pe,[s(e(W),{size:"default"},{default:n(()=>[s(e(y),{type:"primary",onClick:t[0]||(t[0]=r=>S(e(v).first)),disabled:!e(v).first},{default:n(()=>t[7]||(t[7]=[p("首")])),_:1},8,["disabled"]),s(e(y),{type:"primary",onClick:t[1]||(t[1]=r=>S(e(v).prev)),disabled:!e(v).prev},{default:n(()=>t[8]||(t[8]=[p("上一个")])),_:1},8,["disabled"]),s(e(y),{type:"primary",onClick:P,disabled:!b.value.length},{default:n(()=>t[9]||(t[9]=[p("随机")])),_:1},8,["disabled"]),s(e(y),{type:"primary",onClick:t[2]||(t[2]=r=>S(e(v).next)),disabled:!e(v).next},{default:n(()=>t[10]||(t[10]=[p("下一个")])),_:1},8,["disabled"]),s(e(y),{type:"primary",onClick:t[3]||(t[3]=r=>S(e(v).last)),disabled:!e(v).last},{default:n(()=>t[11]||(t[11]=[p("尾")])),_:1},8,["disabled"]),s(e(y),{type:"primary"},{default:n(()=>[s(e(X),{class:"w-4",onClick:O},{default:n(()=>[K.value?(u(),A(e(T),{key:0})):(u(),A(e($),{key:1}))]),_:1})]),_:1}),s(e(y),{type:"primary"},{default:n(()=>[s(e(Y),{modelValue:C.value,"onUpdate:modelValue":t[4]||(t[4]=r=>C.value=r),"inline-prompt":"","active-icon":e(T),"inactive-icon":e($)},null,8,["modelValue","active-icon","inactive-icon"])]),_:1})]),_:1})])]),_:1})],64)}}};export{ye as _};
