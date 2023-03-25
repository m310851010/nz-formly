import { ChangeDetectionStrategy, Component, Optional, TemplateRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TabsItem } from './formly.type';

@Component({
  selector: 'nz-formly-tabs',
  template: `
    <nz-tabset
      #instance
      [formlyAttributes]="field"
      [(nzSelectedIndex)]="props.nzSelectedIndex"
      [nzAnimated]="props.nzAnimated"
      [nzSize]="props.nzSize"
      [nzTabBarExtraContent]="nzTabBarExtraContent"
      [nzTabBarStyle]="props.nzTabBarStyle"
      [nzTabPosition]="props.nzTabPosition"
      [nzType]="props.nzType"
      [nzTabBarGutter]="props.nzTabBarGutter"
      [nzHideAll]="props.nzHideAll"
      [nzLinkRouter]="props.nzLinkRouter"
      [nzLinkExact]="props.nzLinkExact"
      [nzCanDeactivate]="props.nzCanDeactivate"
      [nzCentered]="props.nzCentered"
      (nzSelectedIndexChange)="props.nzSelectedIndexChange?.($event, field, instance)"
      (nzSelectChange)="props.nzSelectChange?.($event, field, instance)"
      [nzHideAdd]="props.nzHideAdd"
      [nzAddIcon]="props.nzAddIcon"
      (nzAdd)="props.nzAdd?.($event, field, instance)"
      (nzClose)="props.nzClose?.($event, field, instance)"
    >
      <ng-container *ngIf="props.tabs?.length; else fieldGroupTemplate">
        <ng-container *ngFor="let item of props.tabs">
          <nz-tab
            *ngIf="item.hide !== false"
            [nzTitle]="getNzTitle(item)"
            (nzClick)="item.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.nzForceRender"
            [nzDisabled]="item.nzDisabled || item.disabled"
            (nzContextmenu)="item.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.nzClosable"
            [nzCloseIcon]="item.nzCloseIcon"
            [formlyAttributes]="item"
          >
            <ng-container
              *ngTemplateOutlet="getNzxContent(item); context: { $implicit: item, field: field }"
            ></ng-container>
          </nz-tab>
        </ng-container>
      </ng-container>

      <ng-template #fieldGroupTemplate>
        <ng-container *ngFor="let item of field.fieldGroup">
          <nz-tab
            *ngIf="item.props.tab?.hide !== false"
            [nzTitle]="getNzTitle(item.props?.tab || {})"
            (nzClick)="item.props.tab?.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.props.tab?.nzForceRender"
            [nzDisabled]="item.props.tab?.nzDisabled || item.props.tab?.disabled"
            (nzContextmenu)="item.props.tab?.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.props.tab?.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.props.tab?.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.props.tab?.nzClosable"
            [nzCloseIcon]="item.props.tab?.nzCloseIcon"
            [formlyAttributes]="item.props.tab"
          >
            <formly-field [field]="item"></formly-field>
          </nz-tab>
        </ng-container>
      </ng-template>
    </nz-tabset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTabsComponent extends FieldType {
  override defaultOptions = {
    props: { nzTabPosition: 'top', nzType: 'line', nzAnimated: true, nzSize: 'default', nzLinkExact: true }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzTabBarExtraContent() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzTabBarExtraContent');
  }

  getNzTitle(config: NzSafeAny): TemplateRef<NzSafeAny> | undefined {
    return resolveTplName(config, this.fieldTemplates, 'nzTitle');
  }

  /**
   * 获取tab内容
   * @param item
   */
  getNzxContent(item: TabsItem) {
    return resolveTplName(item, this.fieldTemplates, 'nzxContent');
  }
}
