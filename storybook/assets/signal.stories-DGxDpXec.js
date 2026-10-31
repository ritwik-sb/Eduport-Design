import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-CsmrxRvM.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r={title:`Signal patterns`,parameters:{layout:`padded`}},i=[`Rahul Kumar`,`Sana Noor`,`Arun Joseph`,`Meera Varma`,`Priya Thomas`,`Faisal Ali`],a={render:()=>n`<div style="display: flex; gap: var(--ep-space-150); flex-wrap: wrap">
    ${[`1`,`2`,`3`,`4`,`5`,`6`].map(e=>n`<ep-icon-tile tone=${e} icon="atom"></ep-icon-tile>`)}
  </div>`},o={render:()=>n`<div style="display: flex; gap: var(--ep-space-150); align-items: center">
    <ep-icon-tile size="sm" tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile size="lg" tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile icon="book"></ep-icon-tile>
  </div>`},s={render:()=>n`<div style="display: flex; gap: var(--ep-space-300); align-items: center">
    <ep-progress-ring size="sm" tone="1" value="68" label="Physics completion"></ep-progress-ring>
    <ep-progress-ring tone="2" value="54" label="Chemistry completion"></ep-progress-ring>
    <ep-progress-ring size="lg" tone="3" value="81" label="Mathematics completion"></ep-progress-ring>
    <ep-progress-ring value="30" label="Overall completion"></ep-progress-ring>
  </div>`},c={render:()=>n`<div style="display: grid; gap: var(--ep-space-200)">
    <ep-avatar-group label="Students in Physics 11" max="3">
      ${i.map(e=>n`<ep-avatar name=${e}></ep-avatar>`)}
    </ep-avatar-group>
    <ep-avatar-group label="Teachers" size="md">
      ${i.slice(0,3).map(e=>n`<ep-avatar name=${e}></ep-avatar>`)}
    </ep-avatar-group>
  </div>`},l={render:()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ep-space-150)">
    <ep-stat label="Students" value="128"><span slot="note">+6 this week</span></ep-stat>
    <ep-stat label="To grade" value="16" tone="5"><span slot="note">Oldest: 3 days</span></ep-stat>
    <ep-stat label="Avg. progress" value="64%" tone="4"></ep-stat>
    <ep-stat label="Classes today" value="3" tone="1"></ep-stat>
  </div>`},u=[{tone:`1`,icon:`atom`,name:`Physics`,meta:`Class 11 · 32 students`,value:68,due:4,people:6},{tone:`2`,icon:`flask`,name:`Chemistry`,meta:`Class 12 · 29 students`,value:54,due:6,people:5},{tone:`3`,icon:`math-function`,name:`Mathematics`,meta:`Class 10 · 35 students`,value:81,due:2,people:6},{tone:`4`,icon:`leaf`,name:`Biology`,meta:`Class 9 · 32 students`,value:47,due:4,people:4}],d={render:()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ep-layout-gutter)">
    ${u.map(e=>n`<ep-card tone=${e.tone}>
        <div slot="media" style="display: flex; justify-content: space-between; align-items: flex-start; min-height: 5rem">
          <ep-icon-tile tone=${e.tone} icon=${e.icon}></ep-icon-tile>
          <ep-progress-ring tone=${e.tone} value=${e.value} label=${`${e.name} completion`}></ep-progress-ring>
        </div>
        <h3 slot="heading">${e.name}</h3>
        ${e.meta}
        <div slot="footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%">
          <ep-avatar-group label=${`Students in ${e.name}`} max="3">
            ${i.slice(0,e.people).map(e=>n`<ep-avatar name=${e}></ep-avatar>`)}
          </ep-avatar-group>
          <ep-badge variant="accent">${e.due} due</ep-badge>
        </div>
      </ep-card>`)}
  </div>`},f={render:()=>n`<div style="max-width: 280px">
    <ep-card interactive>
      <h3 slot="heading"><a href="#" style="color: inherit; text-decoration: none">Physics, Class 11</a></h3>
      32 students · 4 assignments due
    </ep-card>
  </div>`},p=[`waves`,`rings`,`dots`,`blocks`,`orbit`,`mesh`],m={render:()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--ep-space-200)">
    ${p.map((e,t)=>n`<ep-card>
        <ep-cover slot="media" pattern=${e} tone=${String(t%6+1)} seed=${t+3} style="--ep-cover-radius: 0"></ep-cover>
        <h3 slot="heading">${e}</h3>
        <span>tone ${t%6+1}, seed ${t+3}</span>
      </ep-card>`)}
  </div>`},h={render:()=>n`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--ep-space-150)">
    <ep-stat label="Submissions" value="63">
      <span slot="note">+12 this week</span>
      <ep-sparkline slot="chart" values="12, 18, 15, 24, 31, 28, 40, 52, 63" label="Submissions, last 9 days"></ep-sparkline>
    </ep-stat>
    <ep-stat label="Avg. score" value="78%">
      <span slot="note">+3 points</span>
      <ep-sparkline slot="chart" tone="2" variant="line" values="60, 64, 63, 70, 72, 71, 78" label="Average score, last 7 tests"></ep-sparkline>
    </ep-stat>
    <ep-stat label="Attendance" value="94%">
      <span slot="note">Steady</span>
      <ep-sparkline slot="chart" tone="3" variant="bars" values="9, 8, 10, 7, 9, 10, 9" label="Students present, last 7 days"></ep-sparkline>
    </ep-stat>
  </div>`},g=[`Tones`,`IconTile`,`ProgressRing`,`AvatarGroup`,`Stat`,`CourseCards`,`InteractiveCard`,`Cover`,`Sparkline`]})))()}_();export{c as AvatarGroup,d as CourseCards,m as Cover,o as IconTile,f as InteractiveCard,s as ProgressRing,h as Sparkline,l as Stat,a as Tones,g as __namedExportsOrder,r as default};