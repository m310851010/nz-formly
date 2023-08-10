import { Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-space',
  template: `
    <nz-space
      [nzSize]="to.nzSize"
      [nzAlign]="to.nzAlign"
      [nzDirection]="to.nzDirection"
      [nzSplit]="nzSplit!"
      [nzWrap]="to.nzWrap"
      [formlyAttributes]="field"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field *nzSpaceItem [field]="item"></formly-field>
      </ng-container>
    </nz-space>
  `
})
export class FormlyFieldSpaceComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzSize: 'small', nzDirection: 'horizontal' }
  };
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzSplit() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzSplit');
  }
}
