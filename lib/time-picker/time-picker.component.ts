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
      [nzId]="field.id || props.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="props.nzSize"
      [nzBackdrop]="props.nzBackdrop"
      [nzAllowEmpty]="props.nzAllowEmpty"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzClearText]="props.nzClearText"
      [nzNowText]="props.nzNowText"
      [nzOkText]="props.nzOkText"
      [nzDefaultOpenValue]="props.nzDefaultOpenValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledHours]="props.nzDisabledHours"
      [nzDisabledMinutes]="props.nzDisabledMinutes"
      [nzDisabledSeconds]="props.nzDisabledSeconds"
      [nzFormat]="props.nzFormat"
      [nzHideDisabledOptions]="props.nzHideDisabledOptions"
      [nzHourStep]="props.nzHourStep"
      [nzMinuteStep]="props.nzMinuteStep"
      [nzSecondStep]="props.nzSecondStep"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzPopupClassName]="props.nzPopupClassName"
      [nzUse12Hours]="props.nzUse12Hours"
      [nzStatus]="props.nzStatus"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)=" props.nzOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTimePickerComponent extends FieldType<NzFormlyFieldConfig<TimePickerOptions>> {
  override defaultOptions = {
    props: {
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
  }

  get nzAddOn() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzAddOn');
  }
}
