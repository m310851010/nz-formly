import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-select-component',
  template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="props.nzxType"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStarPrecision]="props.nzxStarPrecision"
      [nzxEndPrecision]="props.nzxEndPrecision"
      [nzxStarStep]="props.nzxStarStep"
      [nzxEndStep]="props.nzxEndStep"
      [nzxEndFormatter]="props.nzxEndFormatter"
      [nzxStartFormatter]="props.nzxStartFormatter"
      [nzxStarId]="props.nzxStarId"
      [nzxEndId]="props.nzxEndId"
      [nzxSize]="props.nzxSize"
      [nzxEndMax]="props.nzxEndMax"
      [nzxEndMin]="props.nzxEndMin"
      [nzxStartMax]="props.nzxStartMax"
      [nzxStartMin]="props.nzxStartMin"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      ngDefaultControl
    ></nzx-between-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenInputComponent extends FieldType {
  override defaultOptions = {
    props: {
      nzxSize: 'default',
      nzxType: 'input',
      nzxStartPlaceholder: '起始值',
      nzxEndPlaceholder: '结束值',
      nzxStartMax: Infinity,
      nzxEndMax: Infinity,
      nzxStartMin: -Infinity,
      nzxEndMin: -Infinity,
      nzxStarStep: 1,
      nzxEndStep: 1
    }
  };
}
