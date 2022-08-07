import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzFormlyFieldConfig } from '../formly-utils'
import { SwitchOptions } from './formly.type'

@Component({
  selector: 'nz-formly-switch-component',
  template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="props.nzxCheckedValue"
      [nzxUnCheckedValue]="props.nzxUnCheckedValue"
      [nzCheckedChildren]="props.nzCheckedChildren"
      [nzUnCheckedChildren]="props.nzUnCheckedChildren"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzControl]="props.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSwitchComponent extends FieldType<NzFormlyFieldConfig<SwitchOptions>> {
  override defaultOptions = {
    props: { nzxCheckedValue: true, nzxUnCheckedValue: false }
  };
}
