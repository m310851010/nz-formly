import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzFormlyFieldConfig } from '../formly-utils'
import { BetweenDatetimeOptions } from './formly.type'

@Component({
  selector: 'nz-formly-between-datetime',
  template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowTime]="props.nzShowTime"
      [nzFormat]="props.nzFormat"
      [nzMode]="props.nzMode"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAllowClear]="props.nzxEndAllowClear"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxEndDateRender]="props.nzxEndDateRender"
      [nzxSize]="props.nzxSize"
      [nzxEndDefaultPickerValue]="props.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndDropdownClassName]="props.nzxEndDropdownClassName"
      [nzxEndId]="props.nzxEndId"
      [nzxEndInputReadOnly]="props.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndPopupStyle]="props.nzxEndPopupStyle"
      [nzxEndReName]="props.nzxEndReName"
      [nzxEndRenderExtraFooter]="props.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="props.nzxEndShowNow"
      [nzxEndShowTime]="props.nzxEndShowTime"
      [nzxEndShowToday]="props.nzxEndShowToday"
      [nzxEndSuffixIcon]="props.nzxEndSuffixIcon"
      [nzxStartAllowClear]="props.nzxStartAllowClear"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxStartDateRender]="props.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="props.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxStartDropdownClassName]="props.nzxStartDropdownClassName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartInputReadOnly]="props.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartPopupStyle]="props.nzxStartPopupStyle"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartRenderExtraFooter]="props.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="props.nzxStartShowNow"
      [nzxStartShowTime]="props.nzxStartShowTime"
      [nzxStartShowToday]="props.nzxStartShowToday"
      [nzxStartSuffixIcon]="props.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="props.nzxEndOnCalendarChange?.($event, field, instance)"
      (nzxEndOnOk)="props.nzxEndOnOk?.($event, field, instance)"
      (nzxEndOnOpenChange)="props.nzxEndOnOpenChange?.($event, field, instance)"
      (nzxEndOnPanelChange)="props.nzxEndOnPanelChange?.($event, field, instance)"
      (nzxStartOnCalendarChange)="props.nzxStartOnCalendarChange?.($event, field, instance)"
      (nzxStartOnOk)="props.nzxStartOnOk?.($event, field, instance)"
      (nzxStartOnOpenChange)="props.nzxStartOnOpenChange?.($event, field, instance)"
      (nzxStartOnPanelChange)="props.nzxStartOnPanelChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenDatetimeComponent extends FieldType<NzFormlyFieldConfig<BetweenDatetimeOptions>> {
  override defaultOptions = {
    props: {
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
