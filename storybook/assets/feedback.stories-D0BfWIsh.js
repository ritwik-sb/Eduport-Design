import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,i as n,n as r,s as i}from"./iframe-Dxg5Dtmx.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),r(),a={title:`Feedback and overlays`},o={render:()=>t`<div class="sb-stack" style="max-width: 640px">
    <ep-alert variant="info" heading="Scheduled maintenance">The portal will be unavailable on Sunday from 2 to 4 AM.</ep-alert>
    <ep-alert variant="success" heading="Assignment submitted">Your teacher will review it by Thursday.</ep-alert>
    <ep-alert variant="warning" heading="Fee due in 3 days" dismissible>
      Pay before the due date to avoid a late fee.
      <ep-button slot="actions" size="sm" variant="secondary">Pay now</ep-button>
    </ep-alert>
    <ep-alert variant="danger" heading="Upload failed" dismissible>The file is larger than 25 MB.</ep-alert>
  </div>`},s={render:()=>t`<div class="sb-row">
    ${[`success`,`info`,`warning`,`danger`].map(e=>t`<ep-button variant="secondary" @click=${()=>n({variant:e,heading:e,message:`This is a toast.`})}
          >${e}</ep-button
        >`)}
  </div>`},c={render:()=>t`<div class="sb-row" style="padding: 48px">
    ${[`top`,`bottom`,`left`,`right`].map(e=>t`<ep-tooltip content=${`Shown on ${e}`} placement=${e}><ep-button variant="secondary">${e}</ep-button></ep-tooltip>`)}
  </div>`},l={render:()=>t`<ep-button @click=${e=>e.target.nextElementSibling.show()}>Open modal</ep-button>
    <ep-modal heading="Delete this course?" size="sm">
      All its lessons, tests and submissions will be deleted. This can't be undone.
      <ep-button slot="footer" variant="ghost" @click=${e=>e.target.closest(`ep-modal`).close()}>Cancel</ep-button>
      <ep-button slot="footer" variant="danger" @click=${e=>e.target.closest(`ep-modal`).close()}>Delete course</ep-button>
    </ep-modal>`},u=[`Alert`,`Toast`,`Tooltip`,`Modal`]})))()}d();export{o as Alert,l as Modal,s as Toast,c as Tooltip,u as __namedExportsOrder,a as default};