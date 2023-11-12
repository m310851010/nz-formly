import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import { TemplateRef, TrackByFunction } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import {
  CellEventArg,
  FetchSetting,
  HeaderEventArg,
  NzxColumn,
  NzxTableComponent,
  PageInfo,
  RowEventArg,
  SorterResult
} from '@xmagic/nzx-antd/table';
import {
  NzTableLayout,
  NzTablePaginationPosition,
  NzTablePaginationType,
  NzTableQueryParams,
  NzTableSize
} from 'ng-zorro-antd/table';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { FetchParams } from '@xmagic/nzx-antd/service';
import { Any } from '@xmagic/nzx-antd';

/**
 * Table模板配置
 */
export interface TableOptions<T extends Record<string, Any> = Any> extends ControlOptions {
  instance?: NzxTableComponent<T>;
  init?: (instance: NzxTableComponent<T>, component: NzSafeAny) => void;
  /**
   * 请求处理
   */
  api?: string | Promise<T[]> | Observable<T[]>;

  /**
   * 请求参数
   */
  params?: FetchParams;
  /**
   * 请求之前处理函数
   */
  beforeFetch?: (params: Record<string, NzSafeAny>) => Record<string, NzSafeAny> | Promise<NzSafeAny>;
  /**
   * 请求之后处理函数
   */
  afterFetch?: (res: NzSafeAny, pageIndex: number) => PageInfo<T> | Promise<PageInfo<T>>;

  /**
   * 请求配置
   */
  fetchSetting?: FetchSetting;
  /**
   * 排序函数
   */
  sortFn?: (data: SorterResult) => SorterResult;

  /**
   * 配置列
   */
  nzxColumns?: NzxColumn<T>[];
  /**
   * 显示配置列, 只在非合并表头时可用
   */
  nzxSettingVisible?: boolean;
  /**
   * 默认渲染表头
   */
  nzxDefaultRenderHeader?: boolean;
  /**
   * 标题
   */
  title?: string | TemplateRef<void>;
  /**
   * 工具栏
   */
  toolbar?: string | TemplateRef<void>;
  /**
   * 是否能调整列大小
   */
  nzxResizable?: boolean;
  /**
   * 表格布局
   */
  nzTableLayout?: NzTableLayout;
  /**
   * 用于显示数据总量和当前数据范围，用法参照 Pagination 组件
   */
  nzShowTotal?: TemplateRef<{ $implicit: number; range: [number, number] }>;
  nzShowTotalName?: string;
  /**
   * 用于自定义页码的结构，用法参照 Pagination 组件
   */
  nzItemRender?: TemplateRef<PaginationItemRenderContext>;
  nzItemRenderName?: string;
  /**
   * 表格标题
   */
  nzTitle?: string | TemplateRef<NzSafeAny>;
  nzTitleName?: string;
  /**
   * 表格尾部
   */
  nzFooter?: string | TemplateRef<NzSafeAny>;
  nzFooterName?: string;
  /**
   * 无数据时显示内容
   */
  nzNoResult?: string | TemplateRef<NzSafeAny>;
  nzNoResultName?: string;
  /**
   * 	页数选择器可选值
   */
  nzPageSizeOptions?: number[];
  /**
   * 虚拟滚动时每一列的高度，与 cdk itemSize 相同
   */
  nzVirtualItemSize?: number;
  /**
   * 	缓冲区最大像素高度，与 cdk maxBufferPx 相同
   */
  nzVirtualMaxBufferPx?: number;
  /**
   * 缓冲区最小像素高度，低于该值时将加载新结构，与 cdk minBufferPx 相同
   */
  nzVirtualMinBufferPx?: number;
  /**
   * 延迟显示加载效果的时间（防止闪烁）
   */
  nzLoadingDelay?: number;
  /**
   * 	当前页码，可双向绑定
   */
  nzPageIndex?: number;
  /**
   * 每页展示多少数据，可双向绑定
   */
  nzPageSize?: number;
  /**
   * 当前总数据，在服务器渲染时需要传入
   */
  nzTotal?: number;
  /**
   * 表头分组时指定每列宽度，与 th 的 [nzWidth] 不可混用
   */
  nzWidthConfig?: ReadonlyArray<string | null>;
  /**
   * 表格数据
   */
  nzData?: readonly T[];
  /**
   * 指定分页显示的位置
   */
  nzPaginationPosition?: NzTablePaginationPosition;
  /**
   * 横向支持滚动
   */
  scrollX?: string;
  /**
   * 纵向支持滚动
   */
  scrollY?: string;
  /**
   * 指定分页显示的尺寸
   */
  nzPaginationType?: NzTablePaginationType;
  /**
   * 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false
   */
  nzFrontPagination?: boolean;
  /**
   * 模板模式，无需将数据传递给 nzData
   */
  nzTemplateMode?: boolean;
  /**
   * 	是否显示分页器
   */
  nzShowPagination?: boolean;
  /**
   * 页面是否加载中
   */
  nzLoading?: boolean;
  /**
   * 是否显示外边框
   */
  nzOuterBordered?: boolean;
  /**
   * 加载指示符
   */
  nzLoadingIndicator?: TemplateRef<NzSafeAny>;
  nzLoadingIndicatorName?: string;
  /**
   * 是否展示外边框和列边框
   */
  nzBordered?: boolean;
  /**
   * 表格大小, 正常或迷你类型
   */
  nzSize?: NzTableSize;
  /**
   * 是否可以改变 nzPageSize
   */
  nzShowSizeChanger?: boolean;
  /**
   * 只有一页时是否隐藏分页器
   */
  nzHideOnSinglePage?: boolean;
  /**
   * 是否可以快速跳转至某页
   */
  nzShowQuickJumper?: boolean;
  /**
   * 当添加该属性时，显示为简单分页
   */
  nzSimple?: boolean;

  /**
   * 是否显示操作按钮小图标
   */
  actionVisible?: boolean;
  /**
   * 是否显示顶部标题
   */
  toolbarVisible?: boolean;

  /**
   * 由外部传入模板列表
   */
  tplMap?: Map<string, TemplateRef<NzSafeAny>>;
  /**
   * 虚拟滚动数据 TrackByFunction 函数
   */
  nzVirtualForTrackBy?: TrackByFunction<T>;
  /**
   * 页数改变时的回调函数
   */
  nzPageSizeChange?: (evt: number, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 当前页码改变时的回调函数
   */
  nzPageIndexChange?: (evt: number, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 	当服务端分页、筛选、排序时，用于获得参数
   */
  nzQueryParams?: (
    evt: NzTableQueryParams,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;
  /**
   * 当前页面展示数据改变的回调函数
   */
  nzCurrentPageDataChange?: (
    evt: T[],
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;

  /**
   * 数据行点击事件
   */
  rowClick?: (evt: RowEventArg<T>, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 数据行双击事件
   */
  rowDblclick?: (evt: RowEventArg<T>, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 数据行右键菜单事件
   */
  rowContextmenu?: (
    evt: RowEventArg<T>,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;

  /**
   * 单元格点击事件
   */
  cellClick?: (evt: CellEventArg<T>, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 单元格双击事件
   */
  cellDblclick?: (
    evt: CellEventArg<T>,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;
  /**
   * 单元格右键菜单事件
   */
  cellContextmenu?: (
    evt: CellEventArg<T>,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;

  /**
   * 表头单元格事件
   */
  headerClick?: (evt: HeaderEventArg, field: NzFormlyFieldConfig<TableOptions>, instance: NzxTableComponent<T>) => void;
  /**
   * 表头单元格双击事件
   */
  headerDblclick?: (
    evt: HeaderEventArg,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;
  /**
   * 表头单元格右键菜单事件
   */
  headerContextmenu?: (
    evt: HeaderEventArg,
    field: NzFormlyFieldConfig<TableOptions>,
    instance: NzxTableComponent<T>
  ) => void;
}

/**
 * Table配置
 */
export interface TableFieldConfig extends NzFormlyFieldConfig<TableOptions> {
  type: 'table';
}
