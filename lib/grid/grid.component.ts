import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-formly-grid',
  template: `
    <div
      nz-row
      [nzAlign]="props.nzAlign || formState.nzAlign"
      [nzGutter]="props.nzGutter || formState.nzGutter"
      [nzJustify]="props.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.props?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.props?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.props?.colNzLg || formState.colNzLg"
        [nzMd]="item.props?.colNzMd || formState.colNzMd"
        [nzOffset]="item.props?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.props?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.props?.colNzPull || formState.colNzPull"
        [nzPush]="item.props?.colNzPush || formState.colNzPush"
        [nzSm]="item.props?.colNzSm || formState.colNzSm"
        [nzXl]="item.props?.colNzXl || formState.colNzXl"
        [nzXs]="item.props?.colNzXs || formState.colNzXs"
        [nzXXl]="item.props?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ props: { attributes: item.props?.colAttributes } }"
      ></formly-field>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldGridComponent extends FieldType {}
