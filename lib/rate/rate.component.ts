import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-rate-component',
  template: `
    <nz-rate
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzAllowClear]="to.nzAllowClear !== false"
      [nzAllowHalf]="to.nzAllowHalf"
      [nzAutoFocus]="to.nzAutoFocus"
      [nzCount]="to.nzCount"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzCharacter]="nzCharacter!"
      [nzTooltips]="to.nzTooltips || []"
      (nzOnHoverChange)="to.onHoverChange && to.onHoverChange($event, field, instance)"
      (nzOnBlur)="to.nzOnBlur && to.nzOnBlur($event, field, instance)"
      (nzOnFocus)="to.nzOnFocus && to.nzOnFocus($event, field, instance)"
      (nzOnKeyDown)="to.nzOnKeyDown && to.nzOnKeyDown($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldRateComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzCount: 5 }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzCharacter() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzCharacter');
  }
}
