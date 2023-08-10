import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig, resolveTplName } from '@xmagic/nz-formly/common';
import { TreeOptions } from './formly.type'

@Component({
  selector: 'nz-formly-tree',
  template: `
    <nz-tree
      #instance
      [formlyAttributes]="field"
      [nzData]="to.nzData | toAsync: $any(to) | async"
      [nzBlockNode]="to.nzBlockNode"
      [nzCheckable]="to.nzCheckable"
      [nzShowExpand]="to.nzShowExpand"
      [nzShowIcon]="to.nzShowIcon"
      [nzAsyncData]="to.nzAsyncData"
      [nzBeforeDrop]="to.nzBeforeDrop"
      [nzCheckedKeys]="to.nzCheckedKeys"
      [nzCheckStrictly]="to.nzCheckStrictly"
      [nzDraggable]="to.nzDraggable"
      [nzExpandAll]="to.nzExpandAll"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="to.nzExpandedKeys"
      [nzHideUnMatched]="to.nzHideUnMatched"
      [nzMultiple]="to.nzMultiple"
      [nzSearchFunc]="to.nzSearchFunc"
      [nzSearchValue]="to.nzSearchValue"
      [nzSelectedKeys]="to.nzSelectedKeys"
      [nzSelectMode]="to.nzSelectMode"
      [nzShowLine]="to.nzShowLine"
      [nzVirtualHeight]="to.nzVirtualHeight"
      [nzVirtualItemSize]="to.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="to.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="to.nzVirtualMinBufferPx"
      [nzTreeTemplate]="nzTreeTemplate"
      (nzClick)="to.nzClick && to.nzClick($event, field, instance)"
      (nzDblClick)="to.nzDblClick && to.nzDblClick($event, field, instance)"
      (nzContextMenu)="to.nzContextMenu && to.nzContextMenu($event, field, instance)"
      (nzCheckBoxChange)="to.nzCheckBoxChange && to.nzCheckBoxChange($event, field, instance)"
      (nzExpandChange)="to.nzExpandChange && to.nzExpandChange($event, field, instance)"
      (nzSearchValueChange)="to.nzSearchValueChange && to.nzSearchValueChange($event, field, instance)"
      (nzOnDragStart)="to.nzOnDragStart && to.nzOnDragStart($event, field, instance)"
      (nzOnDragEnter)="to.nzOnDragEnter && to.nzOnDragEnter($event, field, instance)"
      (nzOnDragOver)="to.nzOnDragOver && to.nzOnDragOver($event, field, instance)"
      (nzOnDragLeave)="to.nzOnDragLeave && to.nzOnDragLeave($event, field, instance)"
      (nzOnDrop)="to.nzOnDrop && to.nzOnDrop($event, field, instance)"
      (nzOnDragEnd)="to.nzOnDragEnd && to.nzOnDragEnd($event, field, instance)"
    ></nz-tree>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTreeComponent extends FieldType<NzFormlyFieldConfig<TreeOptions>> {
  defaultOptions = {
    templateOptions: {
      nzShowExpand: true,
      nzData: [],
      nzSelectedKeys: [],
      nzCheckedKeys: [],
      nzExpandedKeys: [],
      nzVirtualItemSize: 28,
      nzVirtualMaxBufferPx: 500,
      nzVirtualMinBufferPx: 28
    }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzTreeTemplate() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTreeTemplate');
  }
  get nzExpandedIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzExpandedIcon');
  }
}
