import { Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig, resolveTplName } from '@xmagic/nz-formly/common';
import { UploadOptions } from './formly.type';

@Component({
  selector: 'nz-formly-upload',
  template: `
    <nzx-upload
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzType]="props.nzType"
      [nzAccept]="props.nzAccept"
      [nzAction]="props.nzAction"
      [nzDirectory]="props.nzDirectory"
      [nzOpenFileDialogOnClick]="props.nzOpenFileDialogOnClick"
      [nzBeforeUpload]="props.nzBeforeUpload"
      [nzCustomRequest]="props.nzCustomRequest"
      [nzData]="props.nzData"
      [nzFilter]="props.nzFilter"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzHeaders]="props.nzHeaders"
      [nzListType]="props.nzListType"
      [nzMultiple]="props.nzMultiple"
      [nzName]="props.nzName"
      [nzShowUploadList]="props.nzShowUploadList"
      [nzShowButton]="props.nzShowButton"
      [nzWithCredentials]="props.nzWithCredentials"
      [nzRemove]="props.nzRemove"
      [nzPreview]="props.nzPreview"
      [nzPreviewFile]="props.nzPreviewFile"
      [nzPreviewIsImage]="props.nzPreviewIsImage"
      [nzTransformFile]="props.nzTransformFile"
      [nzDownload]="props.nzDownload"
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzSize]="props.nzSize"
      [nzLimit]="props.nzLimit"
      [nzxShowUploadButtonIcon]="props.nzxShowUploadButtonIcon"
      [nzxHint]="props.nzxHint"
      [nzxUploadButton]="uploadButton"
      [nzxUploadButtonIcon]="props.nzxUploadButtonIcon"
      [nzxFileNameDuplicate]="props.nzxFileNameDuplicate"
      [nzxValidateMessage]="props.nzxValidateMessage"
      [nzxFileNameLength]="props.nzxFileNameLength"
      [nzxShowValidateMessage]="props.nzxShowValidateMessage"
      [nzTotalSize]="props.nzTotalSize"
      [nzFileType]="props.nzFileType"
      (nzChange)="props.nzChange?.($event, field, instance)"
      (nzFileListChange)="props.nzFileListChange?.($event, field, instance)"
    ></nzx-upload>
  `
})
export class FormlyFieldUploadComponent extends FieldType<NzFormlyFieldConfig<UploadOptions>> {
  override defaultOptions = {
    props: {
      nzType: 'select',
      nzOpenFileDialogOnClick: true,
      nzFilter: [],
      nzListType: 'text',
      nzName: 'file',
      nzShowUploadList: true,
      nzShowButton: true,
      nzxUploadButtonIcon: 'cloud-upload'
    } as UploadOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get uploadButton() {
    return resolveTplName(this.props, this.fieldTemplates, 'uploadButton');
  }

  get nzIconRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzIconRender');
  }
  get nzFileListRender() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzFileListRender');
  }
}
