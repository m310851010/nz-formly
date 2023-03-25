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
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzFormat]="props.nzFormat"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxSize]="props.nzxSize"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndId]="props.nzxEndId"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartStatus]="props.nzxStartStatus"
      [nzxStartHourStep]="props.nzxStartHourStep"
      [nzxStartMinuteStep]="props.nzxStartMinuteStep"
      [nzxStartSecondStep]="props.nzxStartSecondStep"
      [nzxStartClearText]="props.nzxStartClearText"
      [nzxStartNowText]="props.nzxStartNowText"
      [nzxStartOkText]="props.nzxStartOkText"
      [nzxStartPopupClassName]="props.nzxStartPopupClassName"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="props.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="props.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="props.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="props.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxEndStatus]="props.nzxEndStatus"
      [nzxEndHourStep]="props.nzxEndHourStep"
      [nzxEndMinuteStep]="props.nzxEndMinuteStep"
      [nzxEndSecondStep]="props.nzxEndSecondStep"
      [nzxEndClearText]="props.nzxEndClearText"
      [nzxEndNowText]="props.nzxEndNowText"
      [nzxEndOkText]="props.nzxEndOkText"
      [nzxEndPopupClassName]="props.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="props.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="props.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="props.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="props.nzxEndAllowEmpty"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartDisabled]="props.nzxStartDisabled"
      (nzxEndOpenChange)="props.nzxEndOpenChange?.($event, field, instance)"
      (nzxStartOpenChange)="props.nzxStartOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenTimeComponent extends FieldType<NzFormlyFieldConfig<BetweenTimeOptions>> {
  override defaultOptions = {
    props: {
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzxStartAddOn');
  }

  get nzxEndAddOn() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzxEndAddOn');
  }

  get nzxStartSuffixIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzxStartSuffixIcon');
  }

  get nzxEndSuffixIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzxEndSuffixIcon');
  }
}
