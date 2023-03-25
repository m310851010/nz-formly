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
      [nzAllowClear]="props.nzAllowClear !== false"
      [nzAllowHalf]="props.nzAllowHalf"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzCount]="props.nzCount"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzCharacter]="nzCharacter"
      [nzTooltips]="props.nzTooltips || []"
      (nzOnHoverChange)="props.onHoverChange?.($event, field, instance)"
      (nzOnBlur)="props.nzOnBlur?.($event, field, instance)"
      (nzOnFocus)="props.nzOnFocus?.($event, field, instance)"
      (nzOnKeyDown)="props.nzOnKeyDown?.($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldRateComponent extends FieldType {
  override defaultOptions = {
    props: { nzCount: 5 }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzCharacter() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzCharacter');
  }
}
