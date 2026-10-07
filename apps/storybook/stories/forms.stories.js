import { html } from 'lit';

export default { title: 'Forms' };

export const TextField = {
  name: 'Text field',
  render: () => html`<div class="sb-stack">
    <ep-text-field label="Full name" placeholder="Anjali Menon"></ep-text-field>
    <ep-text-field label="Email" type="email" helper-text="We'll send the receipt here." required></ep-text-field>
    <ep-text-field label="Roll number" value="11-B-42x" error-text="Use the format 11-B-42."></ep-text-field>
    <ep-text-field label="Search" type="search"><ep-icon slot="prefix" name="search"></ep-icon></ep-text-field>
    <ep-text-field label="School" value="Govt. HSS Kozhikode" disabled></ep-text-field>
  </div>`,
};

export const Textarea = {
  render: () => html`<div class="sb-stack">
    <ep-textarea label="Feedback" maxlength="200" helper-text="Your teacher will see this."></ep-textarea>
    <ep-textarea label="Answer" value="Force equals mass times" error-text="This answer is incomplete."></ep-textarea>
  </div>`,
};

export const Select = {
  render: () => html`<div class="sb-stack">
    <ep-select label="Class" placeholder="Choose a class">
      <option value="10">Class 10</option>
      <option value="11">Class 11</option>
      <option value="12">Class 12</option>
    </ep-select>
    <ep-select label="Batch" placeholder="Choose a batch" error-text="Pick a batch to continue.">
      <option value="morning">Morning</option>
      <option value="evening">Evening</option>
    </ep-select>
  </div>`,
};

export const Checkbox = {
  render: () => html`<div class="sb-stack">
    <ep-checkbox>Unchecked</ep-checkbox>
    <ep-checkbox checked>Checked</ep-checkbox>
    <ep-checkbox indeterminate>Indeterminate</ep-checkbox>
    <ep-checkbox checked helper-text="Includes the optional statistics unit.">Mathematics</ep-checkbox>
    <ep-checkbox disabled>Disabled</ep-checkbox>
  </div>`,
};

export const RadioGroup = {
  name: 'Radio group',
  render: () => html`<div class="sb-stack">
    <ep-radio-group label="Plan" name="plan" value="term">
      <ep-radio value="month">Monthly</ep-radio>
      <ep-radio value="term">Per term</ep-radio>
      <ep-radio value="year">Yearly</ep-radio>
      <ep-radio value="life" disabled>Lifetime (sold out)</ep-radio>
    </ep-radio-group>
    <ep-radio-group label="Difficulty" orientation="horizontal">
      <ep-radio value="easy">Easy</ep-radio>
      <ep-radio value="medium">Medium</ep-radio>
      <ep-radio value="hard">Hard</ep-radio>
    </ep-radio-group>
  </div>`,
};

export const Switch = {
  render: () => html`<div class="sb-stack">
    <ep-switch checked helper-text="Reminders for classes and due dates.">Email notifications</ep-switch>
    <ep-switch>Show my profile to classmates</ep-switch>
    <ep-switch disabled>Offline downloads</ep-switch>
  </div>`,
};
