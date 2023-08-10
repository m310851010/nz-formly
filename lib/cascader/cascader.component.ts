import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@xmagic/nz-formly/common';
import { resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-cascader-component',
  template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="to.options | toAsync: $any(to) | async"
      [nzAutoFocus]="to.nzAutoFocus"
      [nzAllowClear]="to.nzAllowClear"
      [nzBackdrop]="to.nzBackdrop"
      [nzChangeOn]="to.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon!"
      [nzLabelRender]="nzLabelRender!"
      [nzLoadData]="to.nzLoadData"
      [nzMouseEnterDelay]="to.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="to.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender!"
      [nzShowArrow]="to.nzShowArrow"
      [nzShowInput]="to.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon!"
      [nzTriggerAction]="to.nzTriggerAction"
      [nzChangeOnSelect]="to.nzChangeOnSelect"
      [nzColumnClassName]="to.nzColumnClassName"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzExpandTrigger]="to.nzExpandTrigger"
      [nzMenuClassName]="to.nzMenuClassName"
      [nzMenuStyle]="to.nzMenuStyle"
      [nzLabelProperty]="to.nzLabelProperty || 'label'"
      [nzPlaceHolder]="to.nzPlaceHolder || to.placeholder"
      [nzShowSearch]="to.nzShowSearch"
      [nzSize]="to.nzSize"
      [nzValueProperty]="to.nzValueProperty || 'value'"
      (nzClear)="to.nzClear && to.nzClear(field, nzCascader)"
      (nzSelect)="to.nzSelect && to.nzSelect($event, field, nzCascader)"
      (nzSelectionChange)="to.nzSelectionChange && to.nzSelectionChange($event, field, nzCascader)"
      (nzVisibleChange)="to.nzVisibleChange && to.nzVisibleChange($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCascaderComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      nzPlaceHolder: '请选择',
      nzExpandTrigger: 'click',
      nzTriggerAction: 'click',
      nzAllowClear: true,
      nzLabelProperty: 'label',
      nzValueProperty: 'value',
      nzShowArrow: true,
      nzShowInput: true,
      nzSize: 'default'
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzNotFoundContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzNotFoundContent');
  }

  get nzExpandIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzExpandIcon');
  }

  get nzLabelRender() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzLabelRender');
  }

  get nzOptionRender() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzOptionRender');
  }

  get nzSuffixIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSuffixIcon');
  }
}
