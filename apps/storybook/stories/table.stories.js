import { html } from 'lit';

export default {
  title: 'Table',
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] }, striped: { control: 'boolean' } },
  args: { size: 'md', striped: false },
};

const students = [
  ['Ananya Menon', '11 A', 92, 'Paid'],
  ['Rahul Nair', '11 A', 78, 'Due'],
  ['Fatima Rasheed', '11 B', 85, 'Paid'],
  ['Arjun Pillai', '11 B', 64, 'Overdue'],
];
// Visually hidden, still read by screen readers: a header cell needs text.
const hidden =
  'position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap';
const fee = { Paid: 'success', Due: 'warning', Overdue: 'danger' };

export const Default = {
  render: ({ size, striped }) =>
    html`<ep-table size=${size} ?striped=${striped}>
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
            <th scope="col"><span style=${hidden}>Actions</span></th>
          </tr>
        </thead>
        <tbody>
          ${students.map(
            ([name, section, score, status], i) =>
              html`<tr aria-selected=${i === 1 ? 'true' : 'false'}>
                <td>${name}</td>
                <td>${section}</td>
                <td style="text-align: end">${score}</td>
                <td><ep-badge variant=${fee[status]}>${status}</ep-badge></td>
                <td style="text-align: end">
                  <ep-icon-button icon="dots-vertical" label=${`Actions for ${name}`} size="sm"></ep-icon-button>
                </td>
              </tr>`,
          )}
        </tbody>
      </table>
    </ep-table>`,
};

export const ScrollsSideways = {
  render: () => html`<div style="max-width: 360px">${Default.render({ size: 'md', striped: false })}</div>`,
};
