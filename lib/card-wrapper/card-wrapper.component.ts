import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName, resolveTplNameArray } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-card-wrapper',
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
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWrapperComponent extends FieldWrapper {
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
}
