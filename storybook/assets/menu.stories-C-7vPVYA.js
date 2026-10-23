import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,u as n}from"./iframe-JNQlWaeD.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Menu`},i={render:()=>n`<div style="min-height: 280px">
      <ep-menu @ep-select=${e=>console.log(`ep-select`,e.detail.value)}>
        <ep-button slot="trigger" variant="secondary"
          >Actions<ep-icon slot="suffix" name="chevron-down"></ep-icon
        ></ep-button>
        <ep-menu-item value="edit"><ep-icon slot="prefix" name="edit"></ep-icon>Edit</ep-menu-item>
        <ep-menu-item value="duplicate"><ep-icon slot="prefix" name="copy"></ep-icon>Duplicate</ep-menu-item>
        <ep-menu-item value="share"
          ><ep-icon slot="prefix" name="share"></ep-icon>Share<span slot="suffix">Ctrl+S</span></ep-menu-item
        >
        <ep-menu-item value="archive" disabled><ep-icon slot="prefix" name="folder"></ep-icon>Archive</ep-menu-item>
        <ep-menu-divider></ep-menu-divider>
        <ep-menu-item value="delete" variant="danger"
          ><ep-icon slot="prefix" name="trash"></ep-icon>Delete</ep-menu-item
        >
      </ep-menu>
    </div>`},a={render:()=>n`<div style="min-height: 200px">
      <ep-menu label="Row actions">
        <ep-icon-button slot="trigger" icon="dots-vertical" label="Row actions"></ep-icon-button>
        <ep-menu-item>View profile</ep-menu-item>
        <ep-menu-item>Send message</ep-menu-item>
        <ep-menu-item variant="danger">Remove from class</ep-menu-item>
      </ep-menu>
    </div>`},o=[`Default`,`IconTrigger`]})))()}s();export{i as Default,a as IconTrigger,o as __namedExportsOrder,r as default};