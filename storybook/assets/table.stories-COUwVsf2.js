import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./iframe-B53Dzao9.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{n(),r={title:`Table`,argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},striped:{control:`boolean`}},args:{size:`md`,striped:!1}},i=[[`Ananya Menon`,`11 A`,92,`Paid`],[`Rahul Nair`,`11 A`,78,`Due`],[`Fatima Rasheed`,`11 B`,85,`Paid`],[`Arjun Pillai`,`11 B`,64,`Overdue`]],a=`position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap`,o={Paid:`success`,Due:`warning`,Overdue:`danger`},s={render:({size:e,striped:n})=>t`<ep-table size=${e} ?striped=${n}>
      <table>
        <caption>
          Class 11 students
        </caption>
        <thead>
          <tr>
            <th scope="col" aria-sort="ascending"><button type="button">Name</button></th>
            <th scope="col"><button type="button">Section</button></th>
            <th scope="col" style="text-align: end">Score</th>
            <th scope="col">Fees</th>
            <th scope="col"><span style=${a}>Actions</span></th>
          </tr>
        </thead>
        <tbody>
          ${i.map(([e,n,r,i],a)=>t`<tr aria-selected=${a===1?`true`:`false`}>
                <td>${e}</td>
                <td>${n}</td>
                <td style="text-align: end">${r}</td>
                <td><ep-badge variant=${o[i]}>${i}</ep-badge></td>
                <td style="text-align: end">
                  <ep-icon-button icon="dots-vertical" label=${`Actions for ${e}`} size="sm"></ep-icon-button>
                </td>
              </tr>`)}
        </tbody>
      </table>
    </ep-table>`},c={render:()=>t`<div style="max-width: 360px">${s.render({size:`md`,striped:!1})}</div>`},l=[`Default`,`ScrollsSideways`]})))()}u();export{s as Default,c as ScrollsSideways,l as __namedExportsOrder,r as default};