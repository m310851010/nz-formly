import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-date-picker-component',
  template: `
    <nz-date-picker
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
      (nzOnOpenChange)="to.nzOnOpenChange && to.nzOnOpenChange($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="to.nzDisabledTime"
      [nzShowTime]="to.nzShowTime"
      [nzShowToday]="to.nzShowToday"
      [nzShowNow]="to.nzShowNow"
      (nzOnOk)=" to.nzOnOk &&  to.nzOnOk($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDatePickerComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      nzAllowClear: true,
      nzDisabled: false,
      nzPopupStyle: {},
      nzShowToday: true,
      nzShowNow: true,
      nzInputReadOnly: false,
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
