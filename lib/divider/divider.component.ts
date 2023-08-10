import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-divider',
  template: `
    <nz-divider
      [nzType]="to.nzType"
      [nzDashed]="to.nzDashed"
      [nzOrientation]="to.nzOrientation"
      [nzPlain]="to.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ to.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDividerComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzOrientation: 'center', nzType: 'horizontal' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }
}
