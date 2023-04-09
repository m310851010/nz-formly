import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-date-range-picker-component',
  template: `
    <nz-range-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzMode]="props.nzMode"
      [nzAllowClear]="props.nzAllowClear"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzBackdrop]="props.nzBackdrop"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledDate]="props.nzDisabledDate"
      [nzPopupStyle]="props.nzPopupStyle"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzFormat]="props.nzFormat"
      [nzInputReadOnly]="props.nzInputReadOnly"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzBorderless]="props.nzBorderless"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="props.nzInline"
      (nzOnOpenChange)="props.nzOnOpenChange && props.nzOnOpenChange($event, field)"
      [nzStatus]="props.nzStatus"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      [nzDateRender]="props.nzDateRender"
      [nzId]="field.id || props.id"
      [nzDefaultPickerValue]="props.nzDefaultPickerValue"
      (nzOnPanelChange)="props.nzOnPanelChange && props.nzOnPanelChange($event, field, instance)"
      [nzSeparator]="props.nzSeparator"
      [nzRanges]="props.nzRanges"
      (nzOnOk)="props.nzOnOk && props.nzOnOk($event, field)"
      (nzOnCalendarChange)="props.nzOnCalendarChange && props.nzOnCalendarChange($event, field, instance)"
      [nzShowTime]="props.nzShowTime"
      [nzDisabledTime]="props.nzDisabledTime"
      ngDefaultControl
    ></nz-range-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDateRangePickerComponent extends FieldType {
  override defaultOptions = {
    props: {
      nzAllowClear: true,
      nzDisabled: false,
      nzPopupStyle: {},
      nzInputReadOnly: false,
      nzSeparator: '~',
      nzSuffixIcon: 'calendar'
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzRenderExtraFooter() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzRenderExtraFooter');
  }

  get nzDateRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzDateRender');
  }


}
