import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {
  FormlyBoxTemplates,
  NzFormlyFieldConfig,
  resolveTplName,
  resolveTplNameArray
} from '@xmagic/nz-formly/common';
import { CardOptions } from './formly.type';

@Component({
  selector: 'nz-formly-card',
  template: `
    <nz-card
      [nzTitle]="nzTitle"
      [formlyAttributes]="field"
      [nzBorderless]="to.nzBorderless"
      [nzCover]="nzCover"
      [nzExtra]="nzExtra"
      [nzHoverable]="to.nzHoverable"
      [nzLoading]="to.nzLoading"
      [nzActions]="nzActions"
      [nzBodyStyle]="to.nzBodyStyle"
      [nzBordered]="to.nzBordered"
      [nzType]="to.nzType"
      [nzSize]="to.nzSize"
    >
      <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
      <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: to }">
        {{ nzContent }}
      </ng-container>
    </nz-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCardComponent extends FieldType<NzFormlyFieldConfig<CardOptions>> {
  defaultOptions = {
    templateOptions: { nzSize: 'default', type: 'button' } as CardOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzTitle() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTitle');
  }
  get nzCover() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzCover');
  }
  get nzExtra() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzExtra');
  }
  get nzActions() {
    return resolveTplNameArray(this.to, this.fieldTemplates, 'nzActions') || [];
  }
  get nzContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzContent');
  }
}
