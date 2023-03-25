import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { SliderOptions } from './formly.type';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSliderShowTooltip } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-formly-slider-component',
  template: `
    <nz-slider
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzRange]="props.nzRange"
      [nzDefaultValue]="props.nzDefaultValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDots]="props.nzDots"
      [nzIncluded]="props.nzIncluded"
      [nzMarks]="props.nzMarks"
      [nzMax]="props.nzMax"
      [nzMin]="props.nzMin"
      [nzStep]="props.nzStep"
      [nzTipFormatter]="props.nzTipFormatter"
      [nzVertical]="props.nzVertical"
      [nzReverse]="props.nzReverse"
      [nzTooltipPlacement]="$any(props.nzTooltipPlacement)"
      [nzTooltipVisible]="props.nzTooltipVisible"
      (nzOnAfterChange)="props.nzOnAfterChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSliderComponent extends FieldType<NzFormlyFieldConfig<SliderOptions>> {
  override defaultOptions = {
    props: {
      nzMax: 100,
      nzMin: 0,
      nzStep: 1,
      nzIncluded: true,
      nzTooltipVisible: 'default' as NzSliderShowTooltip,
      nzTooltipPlacement: 'top' as NzSafeAny
    }
  };
}
