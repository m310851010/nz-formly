import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName, resolveTplNameArray } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-card-wrapper',
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
}
