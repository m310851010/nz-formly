import { TemplateRef } from '@angular/core';
import { ControlOptions, NzFormlyFieldConfig } from '@xmagic/nz-formly/common';
import {
  NzShowUploadList,
  NzUploadChangeParam,
  NzUploadFile,
  NzUploadTransformFileType,
  NzUploadType,
  NzUploadXHRArgs,
  UploadFilter
} from 'ng-zorro-antd/upload';
import { Observable, Subscription } from 'rxjs';
import { NzxUploadComponent } from '@xmagic/nzx-antd/upload';

/**
 * 多行文本模板配置
 */
export interface UploadOptions extends ControlOptions {
  /**
   * 上传按钮的图标
   */
  nzxUploadButtonIcon?: string;
  /**
   * 文件名重复验证
   */
  nzxFileNameDuplicate?: boolean;
  /**
   * 文件名长度
   */
  nzxFileNameLength?: number;
  /**
   * 错误信息映射
   */
  nzxValidateMessage?: { [validateKey: string]: string };
  /**
   * 是否显示验证错误提示信息
   */
  nzxShowValidateMessage?: boolean;
  /**
   * 总文件大小,单位kb
   */
  nzTotalSize?: number;
  nzFileListChange?: (
    evt: NzUploadFile[],
    field: NzFormlyFieldConfig<UploadOptions>,
    instance: NzxUploadComponent
  ) => void;
  nzType?: NzUploadType;
  /**
   * 接受上传的文件类型, 详见 input accept Attribute
   */
  nzAccept?: string;
  /**
   * 必选参数, 上传的地址
   */
  nzAction?: string | ((file: NzUploadFile) => string | Observable<string>);
  /**
   * 支持上传文件夹（caniuse）
   */
  nzDirectory?: boolean;
  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。注意：IE9 不支持该方法；注意：务必使用 => 定义处理方法。
   */
  nzBeforeUpload?: (file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>;
  /**
   * 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 => 定义处理方法。
   */
  nzCustomRequest?: (item: NzUploadXHRArgs) => Subscription;
  /**
   * 上传所需参数或返回上传参数的方法；注意：务必使用 => 定义处理方法。
   */
  nzData?: Object | ((file: NzUploadFile) => Object | Observable<{}>);
  /**
   * 是否禁用
   */
  nzDisabled?: boolean;
  /**
   * 文件列表，双向绑定
   */
  nzFileList?: NzUploadFile[];
  /**
   * 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
   */
  nzLimit?: number;
  /**
   * 提示信息
   */
  nzxHint?: string;
  /**
   * 是否显示上传按钮的图标
   */
  nzxShowUploadButtonIcon?: boolean;
  /**
   * 限制文件大小，单位：KB；0 表示不限
   */
  nzSize?: number;
  /**
   * 限制文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
   */
  nzFileType?: string;
  /**
   * 自定义过滤器
   */
  nzFilter?: UploadFilter[];
  /**
   * 设置上传的请求头部，IE10 以上有效；注意：务必使用 => 定义处理方法。
   */
  nzHeaders?: Object | ((file: NzUploadFile) => Object | Observable<{}>);
  /**
   * 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
   */
  nzListType?: 'text' | 'picture' | 'picture-card';
  /**
   * 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
   */
  nzMultiple?: boolean;
  /**
   * 发到后台的文件参数名
   */
  nzName?: string;
  /**
   * 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon，showRemoveIcon 和 showDownloadIcon
   */
  nzShowUploadList?: boolean | NzShowUploadList;
  /**
   * 是否展示上传按钮
   */
  nzShowButton?: boolean;
  /**
   * 上传请求时是否携带 cookie
   */
  nzWithCredentials?: boolean;
  /**
   * 点击打开文件对话框
   */
  nzOpenFileDialogOnClick?: boolean;
  /**
   * 点击文件链接或预览图标时的回调；注意：务必使用 => 定义处理方法。
   */
  nzPreview?: (file: NzUploadFile) => void;
  /**
   * 自定义文件预览逻辑；注意：务必使用 => 定义处理方法。
   */
  nzPreviewFile?: (file: NzUploadFile) => Observable<string>;
  /**
   * 自定义预览文件是否有效图像，一般用于图像URL为非标准格式；注意：务必使用 => 定义处理方法。
   */
  nzPreviewIsImage?: (file: NzUploadFile) => boolean;
  /**
   * 点击移除文件时的回调，返回值为 false 时不移除。支持返回 Observable 对象；注意：务必使用 => 定义处理方法。
   */
  nzRemove?: (file: NzUploadFile) => boolean | Observable<boolean>;
  /**
   * 上传文件改变时的状态
   */
  nzChange?: (
    evt: NzUploadChangeParam,
    field: NzFormlyFieldConfig<UploadOptions>,
    instance: NzxUploadComponent
  ) => void;

  /**
   * 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页
   */
  nzDownload?: (file: NzUploadFile) => void;
  /**
   * 在上传之前转换文件。支持返回一个 Observable 对象
   */
  nzTransformFile?: (file: NzUploadFile) => NzUploadTransformFileType;
  /**
   * 自定义显示 icon
   */
  nzIconRender?: TemplateRef<{ $implicit: NzUploadFile }>;
  nzIconRenderName?: string;
  /**
   * 自定义显示整个列表
   */
  nzFileListRender?: TemplateRef<{ $implicit: NzUploadFile[] }>;
  nzFileListRenderName?: string;
}

/**
 *  上传文件配置
 */
export interface UploadFieldConfig extends NzFormlyFieldConfig<UploadOptions> {
  type: 'upload';
}
