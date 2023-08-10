import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'formly-field-wrapper',
  template: `
    <nz-form-item [class]="field.className">
      <ng-container *ngIf="hasLabel && to.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="to.labelClass || formState.labelClass"
          [nzRequired]="to.required && to.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="to.nzTooltipIcon"
          [nzSpan]="to.labelNzSpan || formState.labelNzSpan"
          [nzNoColon]="to.nzNoColon || formState.nzNoColon"
          [nzFlex]="to.labelNzFlex || formState.labelNzFlex"
          [nzLg]="to.labelNzLg || formState.labelNzLg"
          [nzMd]="to.labelNzMd || formState.labelNzMd"
          [nzOffset]="to.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="to.labelNzOrder || formState.labelNzOrder"
          [nzPull]="to.labelNzPull || formState.labelNzPull"
          [nzPush]="to.labelNzPush || formState.labelNzPush"
          [nzSm]="to.labelNzSm || formState.labelNzSm"
          [nzXl]="to.labelNzXl || formState.labelNzXl"
          [nzXs]="to.labelNzXs || formState.labelNzXs"
          [nzXXl]="to.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: to }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="to.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="to.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="to.nzHasFeedback || formState.nzHasFeedback"
        [nzSuccessTip]="nzSuccessTip || formState.nzSuccessTip"
        [nzValidatingTip]="nzValidatingTip || formState.nzValidatingTip"
        [nzWarningTip]="nzWarningTip || formState.nzWarningTip"
        [nzDisableAutoTips]="to.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="to.description || nzExtra"
        [nzSpan]="to.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="to.controlNzFlex || formState.controlNzFlex"
        [nzLg]="to.controlNzLg || formState.controlNzLg"
        [nzMd]="to.controlNzMd || formState.controlNzMd"
        [nzOffset]="to.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="to.controlNzOrder || formState.controlNzOrder"
        [nzPull]="to.controlNzPull || formState.controlNzPull"
        [nzPush]="to.controlNzPush || formState.controlNzPush"
        [nzSm]="to.controlNzSm || formState.controlNzSm"
        [nzXl]="to.controlNzXl || formState.controlNzXl"
        [nzXs]="to.controlNzXs || formState.controlNzXs"
        [nzXXl]="to.controlNzXXl || formState.controlNzXXl"
      >
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTip>
          <formly-validation-message *ngIf="hasError" [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldWrapperComponent extends FieldWrapper {
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }
  get nzTooltipTitle() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTooltipTitle');
  }
  get nzExtra() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzExtra');
  }

  get hasLabel() {
    return hasTplNameValue(this.to, 'label');
  }

  get label() {
    return resolveTplName(this.to, this.fieldTemplates, 'label');
  }
  get nzSuccessTip() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSuccessTip');
  }
  get nzValidatingTip() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzValidatingTip');
  }
  get nzWarningTip() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzWarningTip');
  }

  get hasError() {
    return (this.formControl?.dirty || this.formControl?.touched) && this.formControl.errors;
  }

  get validateStatus() {
    return this.hasError ? 'error' : this.to.nzValidateStatus;
  }
}
