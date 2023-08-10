import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-tag',
  template: `
    <nz-tag
      #instance
      [nzColor]="to.nzColor"
      [nzChecked]="to.nzChecked"
      [nzMode]="to.nzMode"
      (nzOnClose)="to.nzOnClose && to.nzOnClose($event, field, instance)"
      (nzCheckedChange)="to.nzCheckedChange && to.nzCheckedChange($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, templateOptions: to }">
        {{ nzxContent }}
      </ng-container>

      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-tag>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTagComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzMode: 'default' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzxContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzxContent');
  }
}
