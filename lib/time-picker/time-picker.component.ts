import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig, resolveTplName } from '@xmagic/nz-formly/common';
import { TimePickerOptions } from './formly.type'

@Component({
  selector: 'nz-formly-time-picker-component',
  template: `
    <nz-time-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzId]="field.id || to.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="to.nzSize"
      [nzBackdrop]="to.nzBackdrop"
      [nzAllowEmpty]="to.nzAllowEmpty"
      [nzAutoFocus]="to.nzAutoFocus"
      [nzClearText]="to.nzClearText"
      [nzNowText]="to.nzNowText"
      [nzOkText]="to.nzOkText"
      [nzDefaultOpenValue]="to.nzDefaultOpenValue"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzDisabledHours]="to.nzDisabledHours"
      [nzDisabledMinutes]="to.nzDisabledMinutes"
      [nzDisabledSeconds]="to.nzDisabledSeconds"
      [nzFormat]="to.nzFormat"
      [nzHideDisabledOptions]="to.nzHideDisabledOptions"
      [nzHourStep]="to.nzHourStep"
      [nzMinuteStep]="to.nzMinuteStep"
      [nzSecondStep]="to.nzSecondStep"
      [nzPlaceHolder]="to.nzPlaceHolder || to.placeholder"
      [nzPopupClassName]="to.nzPopupClassName"
      [nzUse12Hours]="to.nzUse12Hours"
      [nzSuffixIcon]="nzSuffixIcon!"
      (nzOpenChange)=" to.nzOpenChange &&  to.nzOpenChange($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTimePickerComponent extends FieldType<NzFormlyFieldConfig<TimePickerOptions>> {
  defaultOptions = {
    templateOptions: {
      nzAllowEmpty: true,
      nzFormat: 'HH:mm:ss',
      nzHourStep: 1,
      nzMinuteStep: 1,
      nzSecondStep: 1,
      nzShowToday: true,
      nzShowNow: true,
      nzInputReadOnly: false
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzSuffixIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSuffixIcon');
  }

  get nzAddOn() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzAddOn');
  }
}
