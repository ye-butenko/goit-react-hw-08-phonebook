"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{3840:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,a,s,o,x,d,p,l=t(2791),u=t(168),c=t(9256),m=c.ZP.div(r||(r=(0,u.Z)(["\n  margin: 40px auto;\n  padding: 20px;\n  max-width: 650px;\n  text-align: center;\n  border-radius: 10px;\n\n  h1 {\n    margin-bottom: 20px;\n    padding: 5px;\n    font-size: 44px;\n    border-radius: 10px;\n  }\n\n  h2 {\n    margin-bottom: 20px;\n    padding: 5px;\n    font-size: 32px;\n    border-radius: 10px;\n  }\n"]))),f=t(5705),h=(0,c.ZP)(f.l0)(i||(i=(0,u.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 24px;\n"]))),b=(0,c.ZP)(f.gN)(a||(a=(0,u.Z)(["\n  padding: 5px 10px;\n  width: 100%;\n\n  text-align: center;\n  font-size: 24px;\n  border-radius: 5px;\n"]))),g=c.ZP.button(s||(s=(0,u.Z)(["\n  margin-top: 12px;\n\n  padding: 5px 15px;\n  flex-basis: 15%;\n\n  font-size: 18px;\n  font-weight: 500;\n\n  background-color: transparent;\n  border-radius: 5px;\n\n  cursor: pointer;\n"]))),j=t(9434),v=t(2286),w=t(3661),Z=t(3329),y=function(){var n=(0,j.v9)(v.Af),e=(0,j.I0)();return(0,Z.jsx)(f.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i=r.resetForm,a={name:t.name,number:t.number};n.find((function(n){return n.name===a.name}))?alert("".concat(a.name," is already in contacts")):e((0,w.uK)(a)),i()},children:(0,Z.jsxs)(h,{children:[(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,Z.jsx)(b,{type:"text",id:"name",name:"name",autoComplete:"name",required:!0})]}),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("label",{htmlFor:"number",children:"Number:"}),(0,Z.jsx)(b,{type:"tel",id:"number",name:"number",required:!0})]}),(0,Z.jsx)(g,{type:"submit",children:"Add contact"})]})})},P=c.ZP.ul(o||(o=(0,u.Z)(["\n  margin: 0 auto;\n  max-width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n"]))),k=c.ZP.li(x||(x=(0,u.Z)(["\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n\n  border-radius: 5px;\n\n  .name {\n    text-align: left;\n    font-size: 22px;\n\n    flex-basis: 33.333%;\n  }\n\n  .number {\n    text-align: right;\n\n    font-weight: 500;\n    font-size: 22px;\n\n    flex-basis: 33.333%;\n  }\n"]))),z=c.ZP.button(d||(d=(0,u.Z)(["\n  padding: 5px 15px;\n  flex-basis: 15%;\n\n  font-size: 18px;\n  font-weight: 500;\n\n  background-color: transparent;\n  border-radius: 5px;\n\n  cursor: pointer;\n"]))),C=function(){var n=(0,j.I0)(),e=(0,j.v9)(v.Af),t=(0,j.v9)(v.Cc),r=(0,j.v9)(v.Uv),i=(0,j.v9)(v.JP);(0,l.useEffect)((function(){n((0,w.yF)())}),[n]);var a=e.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())}));return(0,Z.jsxs)(Z.Fragment,{children:[t&&(0,Z.jsx)("div",{children:"Loaging..."}),r&&(0,Z.jsxs)("div",{children:["`$",r,"`"]}),(0,Z.jsx)(P,{children:a.map((function(e){var t=e.id,r=e.name,i=e.number;return(0,Z.jsxs)(k,{children:[(0,Z.jsx)("span",{className:"name",children:r}),(0,Z.jsx)("span",{className:"number",children:i}),(0,Z.jsx)(z,{type:"button",onClick:function(){n((0,w.GK)(t))},children:"Delete"})]},t)}))})]})},F=c.ZP.label(p||(p=(0,u.Z)(["\n  margin-bottom: 10px;\n  margin-right: 10px;\n  font-weight: 500;\n  font-size: 24px;\n\n  + input {\n    padding: 5px 10px;\n    width: 100%;\n    max-width: 300px;\n    text-align: center;\n    font-size: 24px;\n    border-radius: 5px;\n  }\n"]))),N=function(){var n=(0,j.v9)(v.JP),e=(0,j.I0)();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(F,{htmlFor:"filter",children:"Find contacts by name"}),(0,Z.jsx)("input",{name:"filter",type:"text",id:"filter",value:n,onChange:function(n){return e((0,w.ch)(n.currentTarget.value))}})]})},_=function(){return(0,Z.jsxs)(m,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(y,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(N,{}),(0,Z.jsx)(C,{})]})}}}]);
//# sourceMappingURL=840.644e6a9b.chunk.js.map