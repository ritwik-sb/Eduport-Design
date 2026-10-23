import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-JNQlWaeD.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Date picker`},i={render:()=>n`<div style="max-width: 320px; min-height: 440px">
      <ep-date-picker
        label="Exam date"
        helper-text="Weekends aren't available."
        min="2026-01-01"
        max="2026-12-31"
        .isDateDisabled=${e=>e.getDay()===0||e.getDay()===6}
      ></ep-date-picker>
    </div>`},a={render:()=>n`<div style="max-width: 320px; min-height: 440px">
      <ep-date-picker label="Date of birth" value="2010-06-15" required></ep-date-picker>
    </div>`},o={render:()=>n`<ep-calendar value="2026-10-15"></ep-calendar>`},s=[`Default`,`WithValue`,`Calendar`]})))()}c();export{o as Calendar,i as Default,a as WithValue,s as __namedExportsOrder,r as default};