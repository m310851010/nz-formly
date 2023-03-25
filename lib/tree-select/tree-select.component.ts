import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-tree-select-component',
  template: `
    <ng-container *ngIf="props.options | toAsync: $any(props) | async as nodesData">
      <nz-tree-select
        #instance
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [nzStatus]="props.nzStatus"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzExpandedKeys]="props.nzExpandedKeys"
        [nzAllowClear]="props.nzAllowClear"
        [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
        [nzShowIcon]="props.nzShowIcon"
        [nzNotFoundContent]="props.nzNotFoundContent"
        [nzDropdownStyle]="props.nzDropdownStyle"
        [nzMultiple]="props.nzMultiple"
        [nzHideUnMatched]="props.nzHideUnMatched"
        [nzDropdownClassName]="props.nzDropdownClassName"
        [nzSize]="props.nzSize"
        [nzCheckStrictly]="props.nzCheckStrictly"
        [nzDropdownMatchSelectWidth]="props.nzDropdownMatchSelectWidth !== false"
        [nzNodes]="$any(nodesData)"
        [nzShowLine]="props.nzShowLine"
        [nzDefaultExpandAll]="props.nzDefaultExpandAll"
        [nzShowExpand]="props.nzShowExpand !== false"
        [nzAsyncData]="props.nzAsyncData"
        [nzShowSearch]="props.nzShowSearch"
        [nzCheckable]="props.nzCheckable"
        [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
        [nzDisplayWith]="props.nzDisplayWith"
        [nzMaxTagCount]="props.nzMaxTagCount"
        [nzMaxTagPlaceholder]="nzMaxTagPlaceholder"
        [nzTreeTemplate]="nzTreeTemplate"
        [nzVirtualHeight]="props.nzVirtualHeight"
        [nzVirtualItemSize]="props.nzVirtualItemSize"
        [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
        [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
        [nzBackdrop]="props.nzBackdrop"
        [nzId]="field.id || props.nzId"
        (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
        (nzOpenChange)="props.nzOpenChange?.($event, field, instance)"
        (nzTreeCheckBoxChange)="props.nzTreeCheckBoxChange?.($event, field, instance)"
        (nzRemoved)="props.nzRemoved?.($event, field, instance)"
        (nzCleared)="props.nzCleared?.(field, instance)"
        (nzTreeClick)="props.nzTreeClick?.($event, field, instance)"
        ngDefaultControl
      ></nz-tree-select>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTreeSelectComponent extends FieldType {
  override defaultOptions = {
    props: {
      nzDisplayWith: (node: NzTreeNode) => node.title,
      options: [],
      nzVirtualItemSize: 28,
      nzVirtualMaxBufferPx: 500,
      nzVirtualMinBufferPx: 28,
      nzDropdownStyle: { 'max-height': '300px' },
      defaultValue: []
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzExpandedIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzExpandedIcon');
  }

  get nzMaxTagPlaceholder() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzMaxTagPlaceholder');
  }
  get nzTreeTemplate() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzTreeTemplate');
  }
}
