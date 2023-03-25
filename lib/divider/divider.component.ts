import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-divider',
  template: `
    <nz-divider
      [nzType]="props.nzType"
      [nzDashed]="props.nzDashed"
      [nzOrientation]="props.nzOrientation"
      [nzPlain]="props.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ props.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDividerComponent extends FieldType {
  override defaultOptions = {
    props: { nzOrientation: 'center', nzType: 'horizontal' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }
}
