import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, hasTplNameValue, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-button',
  template: `
    <button
      nz-button
      [formlyAttributes]="field"
      [type]="props.type"
      [nzBlock]="props.nzBlock"
      [nzDanger]="props.nzDanger"
      [nzGhost]="props.nzGhost"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzSearch]="props.nzSearch"
      [nzShape]="props.nzShape"
      [nzType]="props.nzType"
      [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzWaveExtraNode]="props.nzWaveExtraNode"
      nz-dropdown
    >
      <i *ngIf="props.beforeIcon" nz-icon [nzType]="props.beforeIcon"></i>
      <ng-container *ngIf="hasText">
        <ng-container *nzStringTemplateOutlet="text; context: { $implicit: field, options: props }">
          {{ text }}
        </ng-container>
      </ng-container>
      <i *ngIf="props.afterIcon" nz-icon [nzType]="props.afterIcon"></i>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldButtonComponent extends FieldType {
  override defaultOptions = {
    props: { nzSize: 'default', type: 'button' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get hasText() {
    return hasTplNameValue(this.props, 'text');
  }

  get text() {
    return resolveTplName(this.props, this.fieldTemplates, 'text');
  }
}
