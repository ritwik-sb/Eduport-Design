import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,i as n,n as r,s as i}from"./iframe-B53Dzao9.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{i(),r(),a={title:`Feedback and overlays`},o={render:()=>t`<div class="sb-stack" style="max-width: 640px">
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
  </div>`},c={render:()=>t`<ep-button
    variant="secondary"
    @click=${()=>{let e=n({variant:`success`,message:`Course deleted.`}),t=document.createElement(`ep-button`);t.slot=`action`,t.size=`sm`,t.variant=`ghost`,t.textContent=`Undo`,t.addEventListener(`click`,()=>e.close()),e.append(t)}}
    >Delete course</ep-button
  >`},l={render:()=>t`<div class="sb-row" style="padding: 48px">
    ${[`top`,`bottom`,`left`,`right`].map(e=>t`<ep-tooltip content=${`Shown on ${e}`} placement=${e}><ep-button variant="secondary">${e}</ep-button></ep-tooltip>`)}
  </div>`},u={render:()=>t`<div class="sb-row" style="padding: 48px; gap: 4px" role="toolbar" aria-label="Formatting">
    ${[`edit`,`copy`,`link`,`trash`].map(e=>t`<ep-tooltip content=${e}><ep-icon-button icon=${e} label=${e}></ep-icon-button></ep-tooltip>`)}
  </div>`},d={render:()=>t`<ep-button @click=${e=>e.target.nextElementSibling.show()}>Open modal</ep-button>
    <ep-modal heading="Delete this course?" size="sm">
      All its lessons, tests and submissions will be deleted. This can't be undone.
      <ep-button slot="footer" variant="ghost" @click=${e=>e.target.closest(`ep-modal`).close()}>Cancel</ep-button>
      <ep-button slot="footer" variant="danger" @click=${e=>e.target.closest(`ep-modal`).close()}>Delete course</ep-button>
    </ep-modal>`},f=[`Alert`,`Toast`,`ToastWithUndo`,`Tooltip`,`TooltipToolbar`,`Modal`]})))()}p();export{o as Alert,d as Modal,s as Toast,c as ToastWithUndo,l as Tooltip,u as TooltipToolbar,f as __namedExportsOrder,a as default};