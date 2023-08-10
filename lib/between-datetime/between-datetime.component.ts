import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BetweenDatetimeOptions } from './formly.type';
import { NzFormlyFieldConfig } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-between-datetime',
  template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="to.startMinDateTime"
      [startMaxDateTime]="to.startMaxDateTime"
      [endMaxDateTime]="to.endMaxDateTime"
      [endMinDateTime]="to.endMinDateTime"
      [nzShowToday]="to.nzShowToday"
      [nzShowTime]="to.nzShowTime"
      [nzFormat]="to.nzFormat"
      [nzMode]="to.nzMode"
      [nzxDisabled]="to.nzxDisabled"
      [nzxEndAllowClear]="to.nzxEndAllowClear"
      [nzxEndAutoFocus]="to.nzxEndAutoFocus"
      [nzxEndBackdrop]="to.nzxEndBackdrop"
      [nzxEndDateRender]="to.nzxEndDateRender"
      [nzxSize]="to.nzxSize"
      [nzxEndDefaultPickerValue]="to.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="to.nzxEndDisabled"
      [nzxEndDropdownClassName]="to.nzxEndDropdownClassName"
      [nzxEndId]="to.nzxEndId"
      [nzxEndInputReadOnly]="to.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="to.nzxEndPlaceholder"
      [nzxEndPopupStyle]="to.nzxEndPopupStyle"
      [nzxEndReName]="to.nzxEndReName"
      [nzxEndRenderExtraFooter]="to.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="to.nzxEndShowNow"
      [nzxEndShowTime]="to.nzxEndShowTime"
      [nzxEndShowToday]="to.nzxEndShowToday"
      [nzxEndSuffixIcon]="to.nzxEndSuffixIcon"
      [nzxStartAllowClear]="to.nzxStartAllowClear"
      [nzxStartAutoFocus]="to.nzxStartAutoFocus"
      [nzxStartBackdrop]="to.nzxStartBackdrop"
      [nzxStartDateRender]="to.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="to.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="to.nzxStartDisabled"
      [nzxStartDropdownClassName]="to.nzxStartDropdownClassName"
      [nzxStartId]="to.nzxStartId"
      [nzxStartInputReadOnly]="to.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="to.nzxStartPlaceholder"
      [nzxStartPopupStyle]="to.nzxStartPopupStyle"
      [nzxStartReName]="to.nzxStartReName"
      [nzxStartRenderExtraFooter]="to.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="to.nzxStartShowNow"
      [nzxStartShowTime]="to.nzxStartShowTime"
      [nzxStartShowToday]="to.nzxStartShowToday"
      [nzxStartSuffixIcon]="to.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="to.nzxEndOnCalendarChange && to.nzxEndOnCalendarChange($event, field, instance)"
      (nzxEndOnOk)="to.nzxEndOnOk && to.nzxEndOnOk($event, field, instance)"
      (nzxEndOnOpenChange)="to.nzxEndOnOpenChange && to.nzxEndOnOpenChange($event, field, instance)"
      (nzxEndOnPanelChange)="to.nzxEndOnPanelChange && to.nzxEndOnPanelChange($event, field, instance)"
      (nzxStartOnCalendarChange)="to.nzxStartOnCalendarChange && to.nzxStartOnCalendarChange($event, field, instance)"
      (nzxStartOnOk)="to.nzxStartOnOk && to.nzxStartOnOk($event, field, instance)"
      (nzxStartOnOpenChange)="to.nzxStartOnOpenChange && to.nzxStartOnOpenChange($event, field, instance)"
      (nzxStartOnPanelChange)="to.nzxStartOnPanelChange && to.nzxStartOnPanelChange($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenDatetimeComponent extends FieldType<NzFormlyFieldConfig<BetweenDatetimeOptions>> {
  defaultOptions = {
    templateOptions: {
      nzxSize: 'default',
      nzMode: 'date',
      nzxStartPlaceholder: '起始值',
      nzxEndPlaceholder: '结束值',
      nzxStartReName: 'start',
      nzxEndReName: 'end',
      nzxStartShowNow: true,
      nzxEndShowNow: true,
      nzShowToday: true
    } as BetweenDatetimeOptions
  };
}
