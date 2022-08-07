import { Component, OnInit, Optional, TemplateRef, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzxTableComponent } from '@xmagic/nzx-antd/table';
import { distinctUntilChanged, filter } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormlyFieldConfig, resolveTplName } from '../formly-utils';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';
import { TableOptions } from './formly.type';

@Component({
  selector: 'nz-formly-table',
  template: `
    <nzx-table
      #nzxTable
      [api]="props.api"
      [params]="props.params"
      [beforeFetch]="props.beforeFetch"
      [afterFetch]="props.afterFetch"
      [fetchSetting]="props.fetchSetting"
      [sortFn]="props.sortFn"
      [nzxColumns]="props.nzxColumns"
      [nzxSettingVisible]="props.nzxSettingVisible"
      [nzxDefaultRenderHeader]="props.nzxDefaultRenderHeader"
      [nzxResizable]="props.nzxResizable"
      [nzTableLayout]="props.nzTableLayout"
      [nzShowTotal]="nzShowTotal"
      [nzItemRender]="nzItemRender"
      [nzTitle]="nzTitle"
      [nzFooter]="nzFooter"
      [nzNoResult]="nzNoResult"
      [nzPageSizeOptions]="props.nzPageSizeOptions"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzLoadingDelay]="props.nzLoadingDelay"
      [(nzPageIndex)]="props.nzPageIndex"
      [(nzPageSize)]="props.nzPageSize"
      [nzTotal]="props.nzTotal"
      [nzWidthConfig]="props.nzWidthConfig"
      [nzData]="props.nzData"
      [nzPaginationPosition]="props.nzPaginationPosition"
      [scrollX]="props.scrollX"
      [scrollY]="props.scrollY"
      [nzPaginationType]="props.nzPaginationType"
      [nzFrontPagination]="props.nzFrontPagination"
      [nzTemplateMode]="props.nzTemplateMode"
      [nzShowPagination]="props.nzShowPagination"
      [nzLoading]="props.nzLoading"
      [nzOuterBordered]="props.nzOuterBordered"
      [nzLoadingIndicator]="nzLoadingIndicator"
      [nzBordered]="props.nzBordered"
      [nzSize]="props.nzSize"
      [nzShowSizeChanger]="props.nzShowSizeChanger"
      [nzHideOnSinglePage]="props.nzHideOnSinglePage"
      [nzShowQuickJumper]="props.nzShowQuickJumper"
      [nzSimple]="props.nzSimple"
      [actionVisible]="props.actionVisible"
      [toolbarVisible]="props.toolbarVisible"
      [nzVirtualForTrackBy]="props.nzVirtualForTrackBy"
      [title]="title"
      [toolbar]="toolbar"
      [tplMap]="tplMap"
      (rowClick)="props.rowClick?.($event, field, nzxTable)"
      (rowContextmenu)="props.rowContextmenu?.($event, field, nzxTable)"
      (cellClick)="props.cellClick?.($event, field, nzxTable)"
      (cellContextmenu)="props.cellContextmenu?.($event, field, nzxTable)"
      (cellDblclick)="props.cellDblclick?.($event, field, nzxTable)"
      (headerClick)="props.headerClick?.($event, field, nzxTable)"
      (headerContextmenu)="props.headerContextmenu?.($event, field, nzxTable)"
      (headerDblclick)=" props.headerDblclick?.($event, field, nzxTable)"
      (nzCurrentPageDataChange)="props.nzCurrentPageDataChange?.($event, field, nzxTable)"
      (nzPageIndexChange)="props.nzPageIndexChange?.($event, field, nzxTable)"
      (nzPageSizeChange)="props.nzPageSizeChange?.($event, field, nzxTable)"
      (nzQueryParams)="props.nzQueryParams?.($event, field, nzxTable)"
      (rowDblclick)="props.rowDblclick?.($event, field, nzxTable)"
    ></nzx-table>
  `
})
export class FormlyFieldTableComponent extends FieldType<NzFormlyFieldConfig<TableOptions>> implements OnInit {
  tplMap?: Map<string, TemplateRef<NzSafeAny>>;
  @ViewChild('nzxTable', { static: true }) instance!: NzxTableComponent<any>;
  override defaultOptions = {
    props: {
      nzxColumns: [],
      nzShowPagination: true,
      nzxSettingVisible: true,
      nzxResizable: true,
      nzVirtualItemSize: 0,
      nzVirtualMaxBufferPx: 200,
      nzVirtualMinBufferPx: 100,
      nzLoadingDelay: 0,
      nzPageIndex: 1,
      nzPageSize: 10,
      nzWidthConfig: [],
      nzData: [],
      nzPaginationPosition: 'bottom',
      nzPaginationType: 'default',
      nzSize: 'small',
      nzShowSizeChanger: true,
      nzShowQuickJumper: true
    } as TableOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
    if (this.fieldTemplates) {
      this.fieldTemplates.templateChange
        .pipe(
          distinctUntilChanged(),
          filter(v => !!v.size)
        )
        .subscribe(() => {
          this.tplMap = new Map(this.fieldTemplates?.templates);
        });
    }
  }

  ngOnInit(): void {
    this.props.instance = this.instance;
    this.props.init?.(this.instance, this);
  }

  get toolbar() {
    return resolveTplName(this.props, this.fieldTemplates, 'toolbar');
  }

  get title() {
    return resolveTplName(this.props, this.fieldTemplates, 'title');
  }

  get nzTitle() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
  }
  get nzShowTotal() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzShowTotal');
  }
  get nzItemRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzItemRender');
  }
  get nzFooter() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzFooter');
  }
  get nzNoResult() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzNoResult');
  }
  get nzLoadingIndicator() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzLoadingIndicator');
  }
}
