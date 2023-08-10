import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-tree-select-component',
  template: `
    <ng-container *ngIf="to.options | toAsync: $any(to) | async as nodesData">
      <nz-tree-select
        #instance
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzExpandedKeys]="to.nzExpandedKeys"
        [nzAllowClear]="to.nzAllowClear"
        [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
        [nzShowIcon]="to.nzShowIcon"
        [nzNotFoundContent]="to.nzNotFoundContent"
        [nzDropdownStyle]="to.nzDropdownStyle"
        [nzMultiple]="to.nzMultiple"
        [nzHideUnMatched]="to.nzHideUnMatched"
        [nzDropdownClassName]="to.nzDropdownClassName"
        [nzSize]="to.nzSize"
        [nzCheckStrictly]="to.nzCheckStrictly"
        [nzDropdownMatchSelectWidth]="to.nzDropdownMatchSelectWidth !== false"
        [nzNodes]="$any(nodesData)"
        [nzShowLine]="to.nzShowLine"
        [nzDefaultExpandAll]="to.nzDefaultExpandAll"
        [nzShowExpand]="to.nzShowExpand !== false"
        [nzAsyncData]="to.nzAsyncData"
        [nzShowSearch]="to.nzShowSearch"
        [nzCheckable]="to.nzCheckable"
        [nzPlaceHolder]="to.nzPlaceHolder || to.placeholder"
        [nzDisplayWith]="to.nzDisplayWith"
        [nzMaxTagCount]="to.nzMaxTagCount"
        [nzMaxTagPlaceholder]="nzMaxTagPlaceholder!"
        [nzTreeTemplate]="nzTreeTemplate!"
        [nzVirtualHeight]="to.nzVirtualHeight"
        [nzVirtualItemSize]="to.nzVirtualItemSize"
        [nzVirtualMaxBufferPx]="to.nzVirtualMaxBufferPx"
        [nzVirtualMinBufferPx]="to.nzVirtualMinBufferPx"
        [nzBackdrop]="to.nzBackdrop"
        [nzId]="field.id || to.nzId"
        (nzExpandChange)="to.nzExpandChange && to.nzExpandChange($event, field, instance)"
        (nzOpenChange)="to.nzOpenChange && to.nzOpenChange($event, field, instance)"
        (nzTreeCheckBoxChange)="to.nzTreeCheckBoxChange && to.nzTreeCheckBoxChange($event, field, instance)"
        (nzRemoved)="to.nzRemoved && to.nzRemoved($event, field, instance)"
        (nzCleared)="to.nzCleared && to.nzCleared(field, instance)"
        (nzTreeClick)="to.nzTreeClick && to.nzTreeClick($event, field, instance)"
        ngDefaultControl
      ></nz-tree-select>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTreeSelectComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
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
    return resolveTplName(this.to, this.fieldTemplates, 'nzExpandedIcon');
  }

  get nzMaxTagPlaceholder() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzMaxTagPlaceholder');
  }
  get nzTreeTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTreeTemplate');
  }
}
