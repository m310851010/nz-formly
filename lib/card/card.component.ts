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
      [nzBorderless]="props.nzBorderless"
      [nzCover]="nzCover"
      [nzExtra]="nzExtra"
      [nzHoverable]="props.nzHoverable"
      [nzLoading]="props.nzLoading"
      [nzActions]="nzActions"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzBordered]="props.nzBordered"
      [nzType]="props.nzType"
      [nzSize]="props.nzSize"
    >
      <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
      <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
        {{ nzContent }}
      </ng-container>
    </nz-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldCardComponent extends FieldType<NzFormlyFieldConfig<CardOptions>> {
  override defaultOptions = {
    props: { nzSize: 'default', type: 'button' } as CardOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzTitle() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
  }
  get nzCover() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzCover');
  }
  get nzExtra() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzExtra');
  }
  get nzActions() {
    return resolveTplNameArray(this.props, this.fieldTemplates, 'nzActions') || [];
  }
  get nzContent() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzContent');
  }
}
