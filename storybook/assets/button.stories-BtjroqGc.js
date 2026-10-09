import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./iframe-Dxg5Dtmx.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{n(),r={title:`Actions/Button`,component:`ep-button`,args:{label:`Button`,variant:`primary`,size:`md`,disabled:!1,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}},render:({label:e,variant:n,size:r,disabled:i,fullWidth:a})=>t`<ep-button variant=${n} size=${r} ?disabled=${i} ?full-width=${a}>${e}</ep-button>`},i={},a={render:()=>t`<div class="sb-row">
    <ep-button>Primary</ep-button>
    <ep-button variant="secondary">Secondary</ep-button>
    <ep-button variant="tertiary">Tertiary</ep-button>
    <ep-button variant="ghost">Ghost</ep-button>
    <ep-button variant="danger">Danger</ep-button>
  </div>`},o={render:()=>t`<div class="sb-row">
    <ep-button size="sm">Small</ep-button>
    <ep-button>Medium</ep-button>
    <ep-button size="lg">Large</ep-button>
  </div>`},s={render:()=>t`<div class="sb-row">
    <ep-button><ep-icon slot="prefix" name="plus"></ep-icon>New course</ep-button>
    <ep-button variant="tertiary">Next<ep-icon slot="suffix" name="arrow-right"></ep-icon></ep-button>
  </div>`},c={render:()=>t`<div class="sb-row">
    <ep-button disabled>Primary</ep-button>
    <ep-button variant="secondary" disabled>Secondary</ep-button>
  </div>`},l=[`Playground`,`Variants`,`Sizes`,`WithIcons`,`Disabled`]})))()}u();export{c as Disabled,i as Playground,o as Sizes,a as Variants,s as WithIcons,l as __namedExportsOrder,r as default};