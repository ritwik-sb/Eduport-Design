import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-CsmrxRvM.js";var r,i,a;function o(){return(o=e((()=>{t(),r={title:`Popover`,argTypes:{placement:{control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`]}},args:{placement:`bottom`}},i={render:({placement:e})=>n`<div style="min-height: 320px; padding: 120px 160px">
      <ep-popover label="Filter students" placement=${e}>
        <ep-button slot="trigger" variant="secondary"><ep-icon slot="prefix" name="filter"></ep-icon>Filters</ep-button>
        <div class="sb-stack" style="width: 260px">
          <ep-select label="Grade" placeholder="Any grade">
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
          </ep-select>
          <ep-checkbox>Only show students with pending fees</ep-checkbox>
          <ep-button size="sm" @click=${e=>e.target.closest(`ep-popover`).hide()}>Apply</ep-button>
        </div>
      </ep-popover>
    </div>`},a=[`Default`]})))()}o();export{i as Default,a as __namedExportsOrder,r as default};