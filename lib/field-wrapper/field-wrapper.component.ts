import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'formly-field-wrapper',
  template: `
    <nz-form-item [class]="this.field.className">
      <ng-container *ngIf="hasLabel && props.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="props.labelClass || formState.labelClass"
          [nzRequired]="props.required && props.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="props.nzTooltipIcon"
          [nzSpan]="props.labelNzSpan || formState.labelNzSpan"
          [nzFlex]="props.labelNzFlex || formState.labelNzFlex"
          [nzLg]="props.labelNzLg || formState.labelNzLg"
          [nzMd]="props.labelNzMd || formState.labelNzMd"
          [nzOffset]="props.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="props.labelNzOrder || formState.labelNzOrder"
          [nzPull]="props.labelNzPull || formState.labelNzPull"
          [nzPush]="props.labelNzPush || formState.labelNzPush"
          [nzSm]="props.labelNzSm || formState.labelNzSm"
          [nzXl]="props.labelNzXl || formState.labelNzXl"
          [nzXs]="props.labelNzXs || formState.labelNzXs"
          [nzXXl]="props.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: props }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="props.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="props.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="props.nzHasFeedback || formState.nzHasFeedback"
        [nzDisableAutoTips]="props.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="props.description || nzExtra"
        [nzSpan]="props.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="props.controlNzFlex || formState.controlNzFlex"
        [nzLg]="props.controlNzLg || formState.controlNzLg"
        [nzMd]="props.controlNzMd || formState.controlNzMd"
        [nzOffset]="props.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="props.controlNzOrder || formState.controlNzOrder"
        [nzPull]="props.controlNzPull || formState.controlNzPull"
        [nzPush]="props.controlNzPush || formState.controlNzPush"
        [nzSm]="props.controlNzSm || formState.controlNzSm"
        [nzXl]="props.controlNzXl || formState.controlNzXl"
        [nzXs]="props.controlNzXs || formState.controlNzXs"
        [nzXXl]="props.controlNzXXl || formState.controlNzXXl"
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzTooltipTitle');
  }
  get nzExtra() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzExtra');
  }

  get hasLabel() {
    return hasTplNameValue(this.props, 'label');
  }

  get label() {
    return resolveTplName(this.props, this.fieldTemplates, 'label');
  }

  get hasError() {
    return (this.formControl?.dirty || this.formControl?.touched) && this.formControl.errors;
  }

  get validateStatus() {
    return this.hasError ? 'error' : null;
  }
}
