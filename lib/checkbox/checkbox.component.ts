import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-checkbox-component',
  template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="props.nzxLayout"
      [nzxMultiple]="props.nzxMultiple"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      (nzxItemChange)="props.nzxItemChange && props.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCheckboxComponent extends FieldType {
  override defaultOptions = {
    props: { options: [], nzxMultiple: true, nzxLayout: 'horizontal' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get labelTemplate() {
    return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
  }
}
