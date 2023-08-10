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
      [nzRange]="to.nzRange"
      [nzDefaultValue]="to.nzDefaultValue"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzDots]="to.nzDots"
      [nzIncluded]="to.nzIncluded"
      [nzMarks]="to.nzMarks"
      [nzMax]="to.nzMax"
      [nzMin]="to.nzMin"
      [nzStep]="to.nzStep"
      [nzTipFormatter]="to.nzTipFormatter"
      [nzVertical]="to.nzVertical"
      [nzReverse]="to.nzReverse"
      [nzTooltipPlacement]="$any(to.nzTooltipPlacement)"
      [nzTooltipVisible]="to.nzTooltipVisible"
      (nzOnAfterChange)="to.nzOnAfterChange && to.nzOnAfterChange($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSliderComponent extends FieldType<NzFormlyFieldConfig<SliderOptions>> {
  defaultOptions = {
    templateOptions: {
      nzMax: 100,
      nzMin: 0,
      nzStep: 1,
      nzIncluded: true,
      nzTooltipVisible: 'default' as NzSliderShowTooltip,
      nzTooltipPlacement: 'top' as NzSafeAny
    }
  };
}
