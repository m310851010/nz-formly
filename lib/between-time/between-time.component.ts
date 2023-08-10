import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig, resolveTplName } from '@xmagic/nz-formly/common';
import { BetweenTimeOptions } from './formly.type';

@Component({
  selector: 'nz-formly-between-time',
  template: `
    <nzx-between-time
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="to.startMinDateTime"
      [startMaxDateTime]="to.startMaxDateTime"
      [endMaxDateTime]="to.endMaxDateTime"
      [endMinDateTime]="to.endMinDateTime"
      [nzFormat]="to.nzFormat"
      [nzxDisabled]="to.nzxDisabled"
      [nzxEndAutoFocus]="to.nzxEndAutoFocus"
      [nzxEndBackdrop]="to.nzxEndBackdrop"
      [nzxSize]="to.nzxSize"
      [nzxEndDisabled]="to.nzxEndDisabled"
      [nzxEndId]="to.nzxEndId"
      [nzxEndPlaceholder]="to.nzxEndPlaceholder"
      [nzxEndReName]="to.nzxEndReName"
      [nzxStartId]="to.nzxStartId"
      [nzxStartHourStep]="to.nzxStartHourStep"
      [nzxStartMinuteStep]="to.nzxStartMinuteStep"
      [nzxStartSecondStep]="to.nzxStartSecondStep"
      [nzxStartClearText]="to.nzxStartClearText"
      [nzxStartNowText]="to.nzxStartNowText"
      [nzxStartOkText]="to.nzxStartOkText"
      [nzxStartPopupClassName]="to.nzxStartPopupClassName"
      [nzxStartPlaceholder]="to.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="to.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="to.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="to.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="to.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="to.nzxStartAutoFocus"
      [nzxStartBackdrop]="to.nzxStartBackdrop"
      [nzxEndHourStep]="to.nzxEndHourStep"
      [nzxEndMinuteStep]="to.nzxEndMinuteStep"
      [nzxEndSecondStep]="to.nzxEndSecondStep"
      [nzxEndClearText]="to.nzxEndClearText"
      [nzxEndNowText]="to.nzxEndNowText"
      [nzxEndOkText]="to.nzxEndOkText"
      [nzxEndPopupClassName]="to.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="to.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="to.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="to.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="to.nzxEndAllowEmpty"
      [nzxStartReName]="to.nzxStartReName"
      [nzxStartDisabled]="to.nzxStartDisabled"
      (nzxEndOpenChange)="to.nzxEndOpenChange && to.nzxEndOpenChange($event, field, instance)"
      (nzxStartOpenChange)="to.nzxStartOpenChange && to.nzxStartOpenChange($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenTimeComponent extends FieldType<NzFormlyFieldConfig<BetweenTimeOptions>> {
  defaultOptions = {
    templateOptions: {
      nzxSize: 'default',
      nzxStartPlaceholder: '起始值',
      nzxEndPlaceholder: '结束值',
      nzxStartReName: 'start',
      nzxEndReName: 'end',
      nzxStartHourStep: 1,
      nzxStartMinuteStep: 1,
      nzxStartSecondStep: 1,
      nzxStartUse12Hours: false
    } as BetweenTimeOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzxStartAddOn() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzxStartAddOn');
  }

  get nzxEndAddOn() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzxEndAddOn');
  }

  get nzxStartSuffixIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzxStartSuffixIcon');
  }

  get nzxEndSuffixIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzxEndSuffixIcon');
  }
}
