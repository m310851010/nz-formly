import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-repeat',
  template: `
    <div class="repeat-view" [formlyAttributes]="field" [style.max-height]="to.maxHeight">
      <div *ngFor="let f of field.fieldGroup; let i = index" class="repeat-row">
        <formly-field class="repeat-col" [field]="f"></formly-field>

        <ng-container *nzStringTemplateOutlet="removeButton; context: { $implicit: this, field: f }">
          <button class="repeat-close" type="button" (click)="remove(i)">×</button>
        </ng-container>
      </div>
    </div>

    <div *ngIf="to.showAdd">
      <ng-container *nzStringTemplateOutlet="addButton; context: { $implicit: this, field: field }">
        <button nz-button nzType="primary" type="button" (click)="add()">
          <i nz-icon nzType="plus"></i>
          {{ to.addButton }}
        </button>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .repeat-view {
        overflow: auto;
      }
      .repeat-row {
        display: flex;
        align-items: baseline;
      }

      .repeat-col {
        flex: 1 0 0;
      }

      .repeat-close {
        background-color: transparent;
        font-size: 24px;
        border: 0;
        opacity: 0.2;
        line-height: 1;
        padding: 0;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        cursor: pointer;
        margin-left: 10px;
        position: relative;
        top: 2px;
      }

      .repeat-close:hover {
        opacity: 1;
        color: #ff4d4f;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldRepeatComponent extends FieldArrayType {
  defaultOptions = {
    templateOptions: { showAdd: true, addButton: '添加', maxHeight: '300px' }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get addButton() {
    return resolveTplName(this.to, this.fieldTemplates, 'addButton');
  }

  get removeButton() {
    return resolveTplName(this.to, this.fieldTemplates, 'removeButton');
  }
}
