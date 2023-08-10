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
      [nzMode]="to.nzMode"
      [nzAllowClear]="to.nzAllowClear"
      [nzAutoFocus]="to.nzAutoFocus"
      [nzBackdrop]="to.nzBackdrop"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzDisabledDate]="to.nzDisabledDate"
      [nzPopupStyle]="to.nzPopupStyle"
      [nzDropdownClassName]="to.nzDropdownClassName"
      [nzSize]="to.nzSize"
      [nzFormat]="to.nzFormat"
      [nzInputReadOnly]="to.nzInputReadOnly"
      [nzPlaceHolder]="to.nzPlaceHolder || to.placeholder"
      [nzBorderless]="to.nzBorderless"
      [nzSuffixIcon]="to.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="to.nzInline"
      (nzOnOpenChange)="to.nzOnOpenChange && to.nzOnOpenChange($event, field)"
      [nzShowToday]="to.nzShowToday"
      [nzShowNow]="to.nzShowNow"
      [nzDateRender]="to.nzDateRender"
      [nzId]="field.id || to.id"
      [nzDefaultPickerValue]="to.nzDefaultPickerValue"
      (nzOnPanelChange)="to.nzOnPanelChange && to.nzOnPanelChange($event, field, instance)"
      [nzSeparator]="to.nzSeparator"
      [nzRanges]="to.nzRanges"
      (nzOnOk)="to.nzOnOk && to.nzOnOk($event, field)"
      (nzOnCalendarChange)="to.nzOnCalendarChange && to.nzOnCalendarChange($event, field, instance)"
      [nzShowTime]="to.nzShowTime"
      [nzDisabledTime]="to.nzDisabledTime"
      ngDefaultControl
    ></nz-range-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDateRangePickerComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
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
    return resolveTplName(this.to, this.fieldTemplates, 'nzRenderExtraFooter');
  }

  get nzDateRender() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzDateRender');
  }


}
