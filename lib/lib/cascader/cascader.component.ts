import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';
import { resolveTplName } from '../formly-utils';

@Component({
  selector: 'nz-formly-cascader-component',
  template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="props.options | toAsync: $any(props) | async"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzAllowClear]="props.nzAllowClear"
      [nzBackdrop]="props.nzBackdrop"
      [nzChangeOn]="props.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon"
      [nzLabelRender]="nzLabelRender"
      [nzLoadData]="props.nzLoadData"
      [nzMouseEnterDelay]="props.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="props.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender"
      [nzShowArrow]="props.nzShowArrow"
      [nzShowInput]="props.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzTriggerAction]="props.nzTriggerAction"
      [nzChangeOnSelect]="props.nzChangeOnSelect"
      [nzColumnClassName]="props.nzColumnClassName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzExpandTrigger]="props.nzExpandTrigger"
      [nzMenuClassName]="props.nzMenuClassName"
      [nzMenuStyle]="props.nzMenuStyle"
      [nzLabelProperty]="props.nzLabelProperty || 'label'"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzShowSearch]="props.nzShowSearch"
      [nzSize]="props.nzSize"
      [nzValueProperty]="props.nzValueProperty || 'value'"
      (nzClear)="props.nzClear?.(field, nzCascader)"
      (nzSelect)="props.nzSelect?.($event, field, nzCascader)"
      (nzSelectionChange)="props.nzSelectionChange?.($event, field, nzCascader)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCascaderComponent extends FieldType {
  override defaultOptions = {
    props: {
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzNotFoundContent');
  }

  get nzExpandIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzExpandIcon');
  }

  get nzLabelRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzLabelRender');
  }

  get nzOptionRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzOptionRender');
  }

  get nzSuffixIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
  }
}
