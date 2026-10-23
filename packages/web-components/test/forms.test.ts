import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import type { EpButton } from '../src/components/button/index.js';
import type { EpCheckbox } from '../src/components/checkbox/index.js';
import type { EpRadioGroup } from '../src/components/radio/index.js';
import type { EpSelect } from '../src/components/select/index.js';
import type { EpSwitch } from '../src/components/switch/index.js';
import type { EpTextField } from '../src/components/text-field/index.js';
import type { EpTextarea } from '../src/components/textarea/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

describe('ep-text-field', () => {
  it('fires input while typing and change when the edit is committed', async () => {
    const field = await fixture<EpTextField>('<ep-text-field label="Name"></ep-text-field>');
    const onInput = vi.fn();
    const onChange = vi.fn();
    field.addEventListener('input', onInput);
    field.addEventListener('change', onChange);

    await userEvent.type(shadow(field, 'input'), 'Ada');
    expect(onInput).toHaveBeenCalledTimes(3);
    expect(onChange).not.toHaveBeenCalled();

    await userEvent.tab();
    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].target).toBe(field);
    expect(field.value).toBe('Ada');
  });

  it('submits its form on Enter', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-text-field label="Name" name="name"></ep-text-field>
      <ep-button type="submit">Save</ep-button>
    </form>`);
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);

    await userEvent.type(shadow(form.querySelector('ep-text-field')!, 'input'), 'Ada{Enter}');
    expect(onSubmit).toHaveBeenCalledOnce();
    expect(new FormData(form).get('name')).toBe('Ada');
  });

  it('passes a native submit button to the submit event as the submitter', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-text-field label="Name" name="name"></ep-text-field>
      <button name="action" value="save">Save</button>
    </form>`);
    const onSubmit = vi.fn((event: SubmitEvent) => event.preventDefault());
    form.addEventListener('submit', onSubmit);

    await userEvent.type(shadow(form.querySelector('ep-text-field')!, 'input'), '{Enter}');
    expect(onSubmit.mock.calls[0][0].submitter).toBe(form.querySelector('button'));
  });

  it('does not submit on Enter when the submit button is disabled', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-text-field label="Name"></ep-text-field>
      <ep-button type="submit" disabled>Save</ep-button>
    </form>`);
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);

    await userEvent.type(shadow(form.querySelector('ep-text-field')!, 'input'), '{Enter}');
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('takes part in form data, validation and reset', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-text-field label="Email" name="email" type="email" value="a@b.co" required></ep-text-field>
    </form>`);
    const field = form.querySelector<EpTextField>('ep-text-field')!;
    expect(new FormData(form).get('email')).toBe('a@b.co');

    field.value = '';
    await field.updateComplete;
    expect(field.checkValidity()).toBe(false);

    form.reset();
    await field.updateComplete;
    expect(field.value).toBe('a@b.co');
    expect(field.checkValidity()).toBe(true);
  });

  it('links helper and error text to the input', async () => {
    const field = await fixture<EpTextField>(
      '<ep-text-field label="Name" helper-text="As on your ID" error-text="Enter a name"></ep-text-field>',
    );
    const input = shadow(field, 'input');
    expect(input.getAttribute('aria-describedby')).toBe('helper error');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(field.validity.customError).toBe(true);
  });

  it('keeps a hidden label as the accessible name', async () => {
    const field = await fixture<EpTextField>('<ep-text-field label="Search" hide-label type="search"></ep-text-field>');
    const label = shadow(field, 'label');
    expect(label.classList.contains('visually-hidden')).toBe(true);
    expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    expect((shadow(field, 'input') as HTMLInputElement).labels?.[0]).toBe(label);
    await expectNoA11yViolations();
  });
});

describe('ep-textarea', () => {
  it('fires change when the edit is committed', async () => {
    const textarea = await fixture<EpTextarea>('<ep-textarea label="Notes"></ep-textarea>');
    const onChange = vi.fn();
    textarea.addEventListener('change', onChange);

    await userEvent.type(shadow(textarea, 'textarea'), 'Hello');
    await userEvent.tab();
    expect(onChange).toHaveBeenCalledOnce();
    expect(textarea.value).toBe('Hello');
  });

  it('adds a new line on Enter instead of submitting', async () => {
    const form = await fixture<HTMLFormElement>('<form><ep-textarea label="Notes" name="notes"></ep-textarea></form>');
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);

    await userEvent.type(shadow(form.querySelector('ep-textarea')!, 'textarea'), 'a{Enter}b');
    expect(onSubmit).not.toHaveBeenCalled();
    expect(new FormData(form).get('notes')).toBe('a\nb');
  });
});

describe('ep-button', () => {
  it('submits and resets its form', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-text-field label="Name" name="name" value="Ada"></ep-text-field>
      <ep-button type="submit">Save</ep-button>
      <ep-button type="reset" variant="secondary">Reset</ep-button>
    </form>`);
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);
    const [submit, reset] = form.querySelectorAll<EpButton>('ep-button');
    const field = form.querySelector<EpTextField>('ep-text-field')!;

    await userEvent.click(submit);
    expect(onSubmit).toHaveBeenCalledOnce();

    field.value = 'Grace';
    await userEvent.click(reset);
    await field.updateComplete;
    expect(field.value).toBe('Ada');
  });

  it('is disabled inside a disabled fieldset', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <fieldset disabled><ep-button type="submit">Save</ep-button></fieldset>
    </form>`);
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);
    const button = form.querySelector<EpButton>('ep-button')!;

    expect(button.matches(':disabled')).toBe(true);
    expect(shadow(button, 'button').hasAttribute('disabled')).toBe(true);
    shadow(button, 'button').click();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});

describe('disabled fieldsets', () => {
  const controls = (attrs = '') => `
    <ep-text-field label="Name" ${attrs}></ep-text-field>
    <ep-textarea label="Notes" ${attrs}></ep-textarea>
    <ep-select label="Year" ${attrs}><option>1</option><option>2</option></ep-select>
    <ep-checkbox ${attrs}>Agree</ep-checkbox>
    <ep-switch ${attrs}>Alerts</ep-switch>
    <ep-button ${attrs}>Save</ep-button>`;
  const inner = (el: Element) => shadow(el, 'input, textarea, select, button') as HTMLInputElement;

  it('disables every control and enables it again, without touching the disabled property', async () => {
    const fieldset = await fixture<HTMLFieldSetElement>(`<fieldset>${controls()}</fieldset>`);
    const elements = [...fieldset.children] as (HTMLElement & { disabled: boolean })[];

    fieldset.disabled = true;
    await settle(fieldset);
    for (const el of elements) {
      expect(inner(el).disabled, el.localName).toBe(true);
      expect(el.disabled, el.localName).toBe(false);
    }

    fieldset.disabled = false;
    await settle(fieldset);
    for (const el of elements) expect(inner(el).disabled, el.localName).toBe(false);
  });

  it("keeps a control's own disabled when the fieldset is enabled again", async () => {
    const fieldset = await fixture<HTMLFieldSetElement>(`<fieldset>${controls('disabled')}</fieldset>`);
    const elements = [...fieldset.children] as (HTMLElement & { disabled: boolean })[];

    fieldset.disabled = true;
    await settle(fieldset);
    fieldset.disabled = false;
    await settle(fieldset);
    for (const el of elements) {
      expect(el.disabled, el.localName).toBe(true);
      expect(inner(el).disabled, el.localName).toBe(true);
    }
  });

  it('disables a radio group and its options', async () => {
    const fieldset = await fixture<HTMLFieldSetElement>(`<fieldset>
      <ep-radio-group label="Plan" value="a"><ep-radio value="a">A</ep-radio><ep-radio value="b">B</ep-radio></ep-radio-group>
    </fieldset>`);
    const group = fieldset.querySelector<EpRadioGroup>('ep-radio-group')!;
    const radios = [...group.querySelectorAll('ep-radio')];

    fieldset.disabled = true;
    await settle(fieldset);
    expect(radios.every((r) => r.getAttribute('aria-disabled') === 'true')).toBe(true);
    radios[1].click();
    expect(group.value).toBe('a');

    fieldset.disabled = false;
    await settle(fieldset);
    expect(radios.some((r) => r.hasAttribute('aria-disabled'))).toBe(false);
    expect(group.disabled).toBe(false);
  });
});

describe('ep-radio-group', () => {
  it('describes the group with its helper text, then its error text', async () => {
    const group = await fixture<EpRadioGroup>(`<ep-radio-group label="Plan" helper-text="You can change this later">
      <ep-radio value="a">A</ep-radio><ep-radio value="b">B</ep-radio>
    </ep-radio-group>`);
    const radiogroup = shadow(group, '[role="radiogroup"]');
    const describedBy = () => radiogroup.getAttribute('aria-describedby')!;
    expect(shadow(group, `#${radiogroup.getAttribute('aria-labelledby')}`).textContent).toBe('Plan');
    expect(shadow(group, `#${describedBy()}`).textContent).toBe('You can change this later');

    group.errorText = 'Pick a plan';
    await group.updateComplete;
    expect(shadow(group, `#${describedBy()}`).textContent).toBe('Pick a plan');
    expect(radiogroup.getAttribute('aria-invalid')).toBe('true');
  });

  it('moves and selects with the arrow keys and fires change', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-radio-group label="Plan" name="plan" value="a">
        <ep-radio value="a">A</ep-radio><ep-radio value="b">B</ep-radio><ep-radio value="c" disabled>C</ep-radio>
      </ep-radio-group>
    </form>`);
    const group = form.querySelector<EpRadioGroup>('ep-radio-group')!;
    const onChange = vi.fn();
    group.addEventListener('change', onChange);

    await userEvent.tab();
    expect(document.activeElement).toBe(group.querySelector('[value="a"]'));
    await userEvent.keyboard('{ArrowDown}');
    await group.updateComplete;
    expect(group.value).toBe('b');
    expect(onChange).toHaveBeenCalledOnce();
    // The disabled option is skipped.
    await userEvent.keyboard('{ArrowDown}');
    await group.updateComplete;
    expect(group.value).toBe('a');
    expect(new FormData(form).get('plan')).toBe('a');
  });
});

describe('ep-checkbox, ep-switch and ep-select', () => {
  it('fire change and report their form values', async () => {
    const form = await fixture<HTMLFormElement>(`<form>
      <ep-checkbox name="agree">Agree</ep-checkbox>
      <ep-switch name="alerts" value="yes">Alerts</ep-switch>
      <ep-select label="Year" name="year"><option value="1">1</option><option value="2">2</option></ep-select>
    </form>`);
    const onChange = vi.fn();
    form.addEventListener('change', onChange);
    const checkbox = form.querySelector<EpCheckbox>('ep-checkbox')!;
    const toggle = form.querySelector<EpSwitch>('ep-switch')!;
    const select = form.querySelector<EpSelect>('ep-select')!;

    await userEvent.click(shadow(checkbox, 'input'));
    await userEvent.click(shadow(toggle, 'button'));
    await userEvent.selectOptions(shadow(select, 'select'), '2');
    await settle(form);

    expect(onChange).toHaveBeenCalledTimes(3);
    const data = new FormData(form);
    expect(data.get('agree')).toBe('on');
    expect(data.get('alerts')).toBe('yes');
    expect(data.get('year')).toBe('2');
  });
});

describe('accessibility', () => {
  it('a form with every control has no axe violations', async () => {
    await fixture(`<form>
      <ep-text-field label="Name" helper-text="As on your ID" required></ep-text-field>
      <ep-text-field label="Email" type="email" error-text="Enter a valid email"></ep-text-field>
      <ep-textarea label="Notes" maxlength="200"></ep-textarea>
      <ep-select label="Year" placeholder="Choose a year"><option>1</option><option>2</option></ep-select>
      <ep-checkbox helper-text="Required to continue">I agree</ep-checkbox>
      <ep-switch>Email alerts</ep-switch>
      <ep-radio-group label="Plan" helper-text="You can change this later" value="a">
        <ep-radio value="a">Monthly</ep-radio><ep-radio value="b">Yearly</ep-radio>
      </ep-radio-group>
      <fieldset disabled>
        <legend>Locked</legend>
        <ep-text-field label="Locked field"></ep-text-field>
        <ep-button>Locked button</ep-button>
      </fieldset>
      <ep-button type="submit">Save</ep-button>
      <ep-button type="reset" variant="secondary">Reset</ep-button>
    </form>`);
    await expectNoA11yViolations();
  });
});
