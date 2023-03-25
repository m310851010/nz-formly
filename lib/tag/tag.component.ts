import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-tag',
  template: `
    <nz-tag
      #instance
      [nzColor]="props.nzColor"
      [nzChecked]="props.nzChecked"
      [nzMode]="props.nzMode"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
      (nzCheckedChange)="props.nzCheckedChange?.($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, props: props }">
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
  override defaultOptions = {
    props: { nzMode: 'default' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzxContent() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzxContent');
  }
}
