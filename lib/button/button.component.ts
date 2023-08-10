import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName  } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-button',
  template: `
    <button
      nz-button
      [formlyAttributes]="field"
      [type]="to.type"
      [nzBlock]="to.nzBlock"
      [nzDanger]="to.nzDanger"
      [nzGhost]="to.nzGhost"
      [nzSize]="to.nzSize"
      [nzLoading]="to.nzLoading"
      [nzSearch]="to.nzSearch"
      [nzShape]="to.nzShape"
      [nzType]="to.nzType"
      [nzWaveExtraNode]="to.nzWaveExtraNode"
      nz-dropdown
    >
      <i *ngIf="to.beforeIcon" nz-icon [nzType]="to.beforeIcon"></i>
      <ng-container *ngIf="hasText">
        <ng-container *nzStringTemplateOutlet="text; context: { $implicit: field, options: to }">
          {{ text }}
        </ng-container>
      </ng-container>
      <i *ngIf="to.afterIcon" nz-icon [nzType]="to.afterIcon"></i>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldButtonComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzSize: 'default', type: 'button' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get hasText() {
    return hasTplNameValue(this.to, 'text');
  }

  get text() {
    return resolveTplName(this.to, this.fieldTemplates, 'text');
  }
}
