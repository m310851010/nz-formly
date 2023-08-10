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
      [(nzSelectedIndex)]="to.nzSelectedIndex"
      [nzAnimated]="to.nzAnimated"
      [nzSize]="to.nzSize"
      [nzTabBarExtraContent]="nzTabBarExtraContent"
      [nzTabBarStyle]="to.nzTabBarStyle"
      [nzTabPosition]="to.nzTabPosition"
      [nzType]="to.nzType"
      [nzTabBarGutter]="to.nzTabBarGutter"
      [nzHideAll]="to.nzHideAll"
      [nzLinkRouter]="to.nzLinkRouter"
      [nzLinkExact]="to.nzLinkExact"
      [nzCanDeactivate]="to.nzCanDeactivate"
      [nzCentered]="to.nzCentered"
      (nzSelectedIndexChange)="to.nzSelectedIndexChange && to.nzSelectedIndexChange($event, field, instance)"
      (nzSelectChange)="to.nzSelectChange && to.nzSelectChange($event, field, instance)"
      [nzHideAdd]="to.nzHideAdd"
      [nzAddIcon]="to.nzAddIcon"
      (nzAdd)="to.nzAdd && to.nzAdd($event, field, instance)"
      (nzClose)="to.nzClose && to.nzClose($event, field, instance)"
    >
      <ng-container *ngIf="to.tabs?.length; else fieldGroupTemplate">
        <ng-container *ngFor="let item of to.tabs">
          <nz-tab
            *ngIf="item.hide !== false"
            [nzTitle]="getNzTitle(item)!"
            (nzClick)="item.nzClick && item.nzClick($event, item.templateOptions.tab, instance)"
            [nzForceRender]="item.nzForceRender"
            [nzDisabled]="item.nzDisabled != null ? item.nzDisabled : item.disabled"
            (nzContextmenu)="item.nzContextmenu && item.nzContextmenu($event, item.templateOptions.tab, instance)"
            (nzSelect)="item.nzSelect && item.nzSelect($event, item.templateOptions.tab, instance)"
            (nzDeselect)="item.nzDeselect && item.nzDeselect($event, item.templateOptions.tab, instance)"
            [nzClosable]="item.nzClosable"
            [nzCloseIcon]="item.nzCloseIcon"
            [formlyAttributes]="item"
          >
            <ng-container
              *ngTemplateOutlet="getNzxContent(item)!; context: { $implicit: item, field: field }"
            ></ng-container>
          </nz-tab>
        </ng-container>
      </ng-container>

      <ng-template #fieldGroupTemplate>
        <ng-container *ngFor="let item of field.fieldGroup">
          <nz-tab
            *ngIf="item.templateOptions.tab?.hide !== false"
            [nzTitle]="getNzTitle(item.templateOptions?.tab || {})!"
            (nzClick)="item.templateOptions.tab?.nzClick && item.templateOptions.tab?.nzClick($event, item.templateOptions.tab, instance)"
            [nzForceRender]="item.templateOptions.tab?.nzForceRender"
            [nzDisabled]="item.templateOptions.tab?.nzDisabled || item.templateOptions.tab?.disabled"
            (nzContextmenu)="item.templateOptions.tab?.nzContextmenu && item.templateOptions.tab?.nzContextmenu($event, item.templateOptions.tab, instance)"
            (nzSelect)="item.templateOptions.tab?.nzSelect && item.templateOptions.tab?.nzSelect($event, item.templateOptions.tab, instance)"
            (nzDeselect)="item.templateOptions.tab?.nzDeselect && item.templateOptions.tab?.nzDeselect($event, item.templateOptions.tab, instance)"
            [nzClosable]="item.templateOptions.tab?.nzClosable"
            [nzCloseIcon]="item.templateOptions.tab?.nzCloseIcon"
            [formlyAttributes]="item.templateOptions.tab"
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
  defaultOptions = {
    templateOptions: { nzTabPosition: 'top', nzType: 'line', nzAnimated: true, nzSize: 'default', nzLinkExact: true }
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzTabBarExtraContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTabBarExtraContent');
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
