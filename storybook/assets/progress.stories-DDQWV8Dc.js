import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./iframe-B53Dzao9.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),r={title:`Progress`},i={argTypes:{value:{control:{type:`range`,min:0,max:100}},variant:{control:`inline-radio`,options:[`default`,`success`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`]}},args:{value:64,variant:`default`,size:`md`},render:({value:e,variant:n,size:r})=>t`<div class="sb-stack">
      <ep-progress-bar
        label="Course completion"
        value=${e}
        variant=${n}
        size=${r}
        show-value
        helper-text="16 of 25 lessons"
      ></ep-progress-bar>
    </div>`},a={render:()=>t`<div class="sb-stack">
      <ep-progress-bar label="Preparing your report"></ep-progress-bar>
      <ep-progress-bar label="Syncing" hide-label size="sm"></ep-progress-bar>
    </div>`},o={render:()=>t`<div class="sb-row">
      <ep-spinner size="sm"></ep-spinner>
      <ep-spinner></ep-spinner>
      <ep-spinner size="lg" label="Loading results"></ep-spinner>
      <ep-button loading>Saving…</ep-button>
    </div>`},s=[`ProgressBar`,`Indeterminate`,`Spinner`]})))()}c();export{a as Indeterminate,i as ProgressBar,o as Spinner,s as __namedExportsOrder,r as default};