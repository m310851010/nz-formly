import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-checkbox-component',
  template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzxOptions]="to.options | toAsync: $any(to) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="to.nzxLayout"
      [nzxMultiple]="to.nzxMultiple"
      (nzxBlur)="to.blur && to.blur(field, $event)"
      (nzxFocus)="to.focus && to.focus(field, $event)"
      (nzxItemChange)="to.nzxItemChange && to.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: { options: [], nzxMultiple: true, nzxLayout: 'horizontal' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get labelTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'labelTemplate');
  }
}
