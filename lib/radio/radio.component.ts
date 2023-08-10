import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-radio-component',
  template: `
    <nz-radio-group
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzName]="to.nzName"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzSize]="to.nzSize"
      [nzButtonStyle]="to.nzButtonStyle"
      ngDefaultControl
    >
      <ng-container *ngIf="to.type !== 'button'; else buttonTemplate">
        <ng-container *ngFor="let item of to.options | toAsync: $any(to) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio
            [formlyAttributes]="{ templateOptions: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            {{ item.label }}
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-container>

      <ng-template #buttonTemplate>
        <ng-container *ngFor="let item of to.options | toAsync: $any(to) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio-button
            [formlyAttributes]="{ templateOptions: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            <ng-container *ngIf="labelTemplate; else strLabelTpl">
              <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
                <span>{{ labelTemplate }}</span>
              </ng-container>
            </ng-container>

            <ng-template #strLabelTpl>
              <span>{{item.label}}</span>
            </ng-template>
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-template>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldRadioComponent extends FieldType {
  defaultOptions = {
    templateOptions: { nzSize: 'default', options: [] }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get labelTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'labelTemplate');
  }
}
