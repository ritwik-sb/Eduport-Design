import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,l as n,n as r,u as i}from"./iframe-JNQlWaeD.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),r(),a={title:`Display`},o=[`neutral`,`accent`,`info`,`success`,`warning`,`danger`],s={render:()=>i`<div class="sb-row">
    ${o.map(e=>i`<ep-badge variant=${e}>${e}</ep-badge>`)}
    <ep-badge variant="success" dot>Online</ep-badge>
  </div>`},c={render:()=>i`<div class="sb-row" @ep-remove=${e=>e.target.remove()}>
    ${o.map(e=>i`<ep-tag variant=${e} removable>${e}</ep-tag>`)}
  </div>`},l={render:()=>i`<div class="sb-row">
    ${[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>i`<ep-avatar size=${e} name="Anjali Menon"></ep-avatar>`)}
    <ep-avatar></ep-avatar>
  </div>`},u={render:()=>i`<div class="sb-row" style="align-items: stretch">
    ${[`outlined`,`elevated`,`filled`].map(e=>i`<ep-card variant=${e} style="width: 260px">
        <h3 slot="heading">Physics for Class 11</h3>
        Motion, forces and energy, with weekly practice tests.
        <ep-button slot="footer" size="sm" variant="tertiary">Open</ep-button>
      </ep-card>`)}
  </div>`},d={render:()=>i`<div class="sb-row" style="font-size: 24px">
    ${t().map(e=>i`<ep-icon name=${e} label=${e}></ep-icon>`)}
  </div>`},f=[`Badge`,`Tag`,`Avatar`,`Card`,`Icons`]})))()}p();export{l as Avatar,s as Badge,u as Card,d as Icons,c as Tag,f as __namedExportsOrder,a as default};