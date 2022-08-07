import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '../formly-utils';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';

@Component({
  selector: 'nz-formly-radio-component',
  template: `
    <nz-radio-group
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzName]="props.nzName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzButtonStyle]="props.nzButtonStyle"
      ngDefaultControl
    >
      <ng-container *ngIf="props.type !== 'button'; else buttonTemplate">
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio
            [formlyAttributes]="{ props: item }"
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
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio-button
            [formlyAttributes]="{ props: item }"
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
  override defaultOptions = {
    props: { nzSize: 'default', options: [] }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get labelTemplate() {
    return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
  }
}
