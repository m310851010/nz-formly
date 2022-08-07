import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-checkbox-component',
  template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      ngDefaultControl
    ></nzx-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCheckboxComponent extends FieldType {
  override defaultOptions = {
    props: { options: [] }
  };
}
