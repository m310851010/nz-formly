import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-select-component',
  template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="to.nzxType"
      [nzxStartPlaceholder]="to.nzxStartPlaceholder"
      [nzxEndPlaceholder]="to.nzxEndPlaceholder"
      [nzxEndDisabled]="to.nzxEndDisabled"
      [nzxStartDisabled]="to.nzxStartDisabled"
      [nzxEndReName]="to.nzxEndReName"
      [nzxStartReName]="to.nzxStartReName"
      [nzxStarPrecision]="to.nzxStarPrecision"
      [nzxEndPrecision]="to.nzxEndPrecision"
      [nzxStarStep]="to.nzxStarStep"
      [nzxEndStep]="to.nzxEndStep"
      [nzxEndFormatter]="to.nzxEndFormatter"
      [nzxStartFormatter]="to.nzxStartFormatter"
      [nzxStarId]="to.nzxStarId"
      [nzxEndId]="to.nzxEndId"
      [nzxSize]="to.nzxSize"
      [nzxEndMax]="to.nzxEndMax"
      [nzxEndMin]="to.nzxEndMin"
      [nzxStartMax]="to.nzxStartMax"
      [nzxStartMin]="to.nzxStartMin"
      [nzxDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      ngDefaultControl
    ></nzx-between-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldBetweenInputComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
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
