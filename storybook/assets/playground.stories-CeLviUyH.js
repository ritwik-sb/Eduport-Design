import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-CsmrxRvM.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),r={title:`Playground style`,parameters:{layout:`padded`}},i={style:`playground`,theme:`light`},a={style:`playground`,theme:`dark`},o=[`Rahul Kumar`,`Sana Noor`,`Arun Joseph`,`Meera Varma`],s=[{tone:`1`,icon:`atom`,name:`Physics`,meta:`Class 11 · 32 students`,value:68,due:4},{tone:`2`,icon:`flask`,name:`Chemistry`,meta:`Class 12 · 29 students`,value:54,due:6},{tone:`3`,icon:`math-function`,name:`Mathematics`,meta:`Class 10 · 35 students`,value:81,due:2},{tone:`5`,icon:`leaf`,name:`Biology`,meta:`Class 9 · 32 students`,value:47,due:4}],c=()=>n`<div style="display: flex; flex-wrap: wrap; gap: var(--ep-space-200); align-items: center; padding-block-end: var(--ep-space-100)">
  <ep-button>Primary</ep-button>
  <ep-button variant="secondary">Secondary</ep-button>
  <ep-button variant="tertiary">Tertiary</ep-button>
  <ep-button variant="ghost">Ghost</ep-button>
  <ep-button variant="danger">Danger</ep-button>
  <ep-button disabled>Disabled</ep-button>
  <ep-icon-button label="Settings" icon="settings"></ep-icon-button>
</div>`,l=()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ep-layout-gutter); padding-block-end: var(--ep-space-100)">
  ${s.map(e=>n`<ep-card tone=${e.tone}>
      <div slot="media" style="display: flex; justify-content: space-between; align-items: flex-start; min-height: 4rem">
        <ep-icon-tile tone=${e.tone} icon=${e.icon}></ep-icon-tile>
        <ep-progress-ring tone=${e.tone} value=${e.value} label=${`${e.name} completion`}></ep-progress-ring>
      </div>
      <h3 slot="heading">${e.name}</h3>
      ${e.meta}
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%">
        <ep-avatar-group label=${`Students in ${e.name}`} max="3">
          ${o.map(e=>n`<ep-avatar name=${e}></ep-avatar>`)}
        </ep-avatar-group>
        <ep-badge variant="accent">${e.due} due</ep-badge>
      </div>
    </ep-card>`)}
</div>`,u=()=>n`<div style="display: grid; gap: var(--ep-space-200); max-width: 420px; padding-block-end: var(--ep-space-100)">
  <ep-text-field label="Course name" value="Physics, Class 11" help="Students see this on their timetable."></ep-text-field>
  <ep-select label="Term">
    <option value="1">Term 1</option>
    <option value="2" selected>Term 2</option>
  </ep-select>
  <ep-checkbox checked>Send a reminder the day before</ep-checkbox>
  <ep-switch checked>Allow late submissions</ep-switch>
  <ep-tabs label="Course sections">
    <ep-tab panel="overview">Overview</ep-tab>
    <ep-tab panel="students">Students</ep-tab>
    <ep-tab-panel name="overview">16 submissions are waiting.</ep-tab-panel>
    <ep-tab-panel name="students">128 students.</ep-tab-panel>
  </ep-tabs>
  <ep-alert variant="success" heading="Saved">Your changes are live.</ep-alert>
</div>`,d=()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ep-space-200); padding-block-end: var(--ep-space-100)">
  <ep-stat label="Students" value="128"><span slot="note">+6 this week</span></ep-stat>
  <ep-stat label="To grade" value="16" tone="5"><span slot="note">Oldest: 3 days</span></ep-stat>
  <ep-stat label="Avg. progress" value="64%" tone="4"></ep-stat>
</div>`,f={globals:i,render:c},p={globals:i,render:l},m={globals:i,render:u},h={globals:i,render:d},g={globals:a,render:c},_={globals:a,render:l},v={globals:a,render:u},y={globals:a,render:d},b=[`Buttons`,`CourseCards`,`FormsAndFeedback`,`Stats`,`ButtonsDark`,`CourseCardsDark`,`FormsAndFeedbackDark`,`StatsDark`]})))()}x();export{f as Buttons,g as ButtonsDark,p as CourseCards,_ as CourseCardsDark,m as FormsAndFeedback,v as FormsAndFeedbackDark,h as Stats,y as StatsDark,b as __namedExportsOrder,r as default};