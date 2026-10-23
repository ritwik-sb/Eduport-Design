import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-JNQlWaeD.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r={title:`Actions/Button`,component:`ep-button`,args:{label:`Button`,variant:`primary`,size:`md`,disabled:!1,loading:!1,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}},render:({label:e,variant:t,size:r,disabled:i,loading:a,fullWidth:o})=>n`<ep-button variant=${t} size=${r} ?disabled=${i} ?loading=${a} ?full-width=${o}
      >${e}</ep-button
    >`},i={},a={render:()=>n`<div class="sb-row">
    <ep-button>Primary</ep-button>
    <ep-button variant="secondary">Secondary</ep-button>
    <ep-button variant="tertiary">Tertiary</ep-button>
    <ep-button variant="ghost">Ghost</ep-button>
    <ep-button variant="danger">Danger</ep-button>
  </div>`},o={render:()=>n`<div class="sb-row">
    <ep-button size="sm">Small</ep-button>
    <ep-button>Medium</ep-button>
    <ep-button size="lg">Large</ep-button>
  </div>`},s={render:()=>n`<div class="sb-row">
    <ep-button><ep-icon slot="prefix" name="plus"></ep-icon>New course</ep-button>
    <ep-button variant="tertiary">Next<ep-icon slot="suffix" name="arrow-right"></ep-icon></ep-button>
  </div>`},c={render:()=>n`<div class="sb-row">
    <ep-button disabled>Primary</ep-button>
    <ep-button variant="secondary" disabled>Secondary</ep-button>
  </div>`},l={render:()=>{let e=e=>t=>{let n=t.currentTarget;n.loading=!0,setTimeout(()=>n.loading=!1,e)};return n`<div class="sb-row">
      <ep-button @click=${e(200)}><ep-icon slot="prefix" name="check"></ep-icon>Fast save (200ms)</ep-button>
      <ep-button @click=${e(2e3)}><ep-icon slot="prefix" name="check"></ep-icon>Slow save (2s)</ep-button>
      <ep-button variant="secondary" loading>Always loading</ep-button>
    </div>`}},u=[`Playground`,`Variants`,`Sizes`,`WithIcons`,`Disabled`,`Loading`]})))()}d();export{c as Disabled,l as Loading,i as Playground,o as Sizes,a as Variants,s as WithIcons,u as __namedExportsOrder,r as default};