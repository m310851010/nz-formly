import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-grid',
  template: `
    <div
      nz-row
      [nzAlign]="to.nzAlign || formState.nzAlign"
      [nzGutter]="to.nzGutter || formState.nzGutter"
      [nzJustify]="to.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.templateOptions?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.templateOptions?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.templateOptions?.colNzLg || formState.colNzLg"
        [nzMd]="item.templateOptions?.colNzMd || formState.colNzMd"
        [nzOffset]="item.templateOptions?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.templateOptions?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.templateOptions?.colNzPull || formState.colNzPull"
        [nzPush]="item.templateOptions?.colNzPush || formState.colNzPush"
        [nzSm]="item.templateOptions?.colNzSm || formState.colNzSm"
        [nzXl]="item.templateOptions?.colNzXl || formState.colNzXl"
        [nzXs]="item.templateOptions?.colNzXs || formState.colNzXs"
        [nzXXl]="item.templateOptions?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ templateOptions: { attributes: item.templateOptions?.colAttributes } }"
      ></formly-field>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldGridComponent extends FieldType {}
