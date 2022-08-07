import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzFormlyFieldConfig, resolveTplName } from '../formly-utils';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';
import { TreeOptions } from './formly.type'

@Component({
  selector: 'nz-formly-tree',
  template: `
    <nz-tree
      #instance
      [formlyAttributes]="field"
      [nzData]="props.nzData | toAsync: $any(props) | async"
      [nzBlockNode]="props.nzBlockNode"
      [nzCheckable]="props.nzCheckable"
      [nzShowExpand]="props.nzShowExpand"
      [nzShowIcon]="props.nzShowIcon"
      [nzAsyncData]="props.nzAsyncData"
      [nzBeforeDrop]="props.nzBeforeDrop"
      [nzCheckedKeys]="props.nzCheckedKeys"
      [nzCheckStrictly]="props.nzCheckStrictly"
      [nzDraggable]="props.nzDraggable"
      [nzExpandAll]="props.nzExpandAll"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="props.nzExpandedKeys"
      [nzHideUnMatched]="props.nzHideUnMatched"
      [nzMultiple]="props.nzMultiple"
      [nzSearchFunc]="props.nzSearchFunc"
      [nzSearchValue]="props.nzSearchValue"
      [nzSelectedKeys]="props.nzSelectedKeys"
      [nzSelectMode]="props.nzSelectMode"
      [nzShowLine]="props.nzShowLine"
      [nzVirtualHeight]="props.nzVirtualHeight"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzTreeTemplate]="nzTreeTemplate"
      (nzClick)="props.nzClick?.($event, field, instance)"
      (nzDblClick)="props.nzDblClick?.($event, field, instance)"
      (nzContextMenu)="props.nzContextMenu?.($event, field, instance)"
      (nzCheckBoxChange)="props.nzCheckBoxChange?.($event, field, instance)"
      (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
      (nzSearchValueChange)="props.nzSearchValueChange?.($event, field, instance)"
      (nzOnDragStart)="props.nzOnDragStart?.($event, field, instance)"
      (nzOnDragEnter)="props.nzOnDragEnter?.($event, field, instance)"
      (nzOnDragOver)="props.nzOnDragOver?.($event, field, instance)"
      (nzOnDragLeave)="props.nzOnDragLeave?.($event, field, instance)"
      (nzOnDrop)="props.nzOnDrop?.($event, field, instance)"
      (nzOnDragEnd)="props.nzOnDragEnd?.($event, field, instance)"
    ></nz-tree>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTreeComponent extends FieldType<NzFormlyFieldConfig<TreeOptions>> {
  override defaultOptions = {
    props: {
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
    return resolveTplName(this.props, this.fieldTemplates, 'nzTreeTemplate');
  }
  get nzExpandedIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzExpandedIcon');
  }
}
