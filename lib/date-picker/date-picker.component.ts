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
      (nzOnOpenChange)="props.nzOnOpenChange?.($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="props.nzDisabledTime"
      [nzShowTime]="props.nzShowTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      (nzOnOk)=" props.nzOnOk?.($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDatePickerComponent extends FieldType {
  override defaultOptions = {
    props: {
      nzAllowClear: true,
      nzDisabled: false,
      nzPopupStyle: {},
      nzShowToday: true,
      nzShowNow: true,
      nzInputReadOnly: false
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
