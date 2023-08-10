import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { SwitchOptions } from './formly.type';
import { NzFormlyFieldConfig } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-switch-component',
  template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="to.nzxCheckedValue"
      [nzxUnCheckedValue]="to.nzxUnCheckedValue"
      [nzCheckedChildren]="to.nzCheckedChildren"
      [nzUnCheckedChildren]="to.nzUnCheckedChildren"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzSize]="to.nzSize"
      [nzLoading]="to.nzLoading"
      [nzControl]="to.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSwitchComponent extends FieldType<NzFormlyFieldConfig<SwitchOptions>> {
  defaultOptions = {
    templateOptions: { nzxCheckedValue: true, nzxUnCheckedValue: false }
  };
}
