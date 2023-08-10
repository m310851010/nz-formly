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
      [nzType]="to.nzType"
      [nzAccept]="to.nzAccept"
      [nzAction]="to.nzAction"
      [nzDirectory]="to.nzDirectory"
      [nzOpenFileDialogOnClick]="to.nzOpenFileDialogOnClick"
      [nzBeforeUpload]="to.nzBeforeUpload"
      [nzCustomRequest]="to.nzCustomRequest"
      [nzData]="to.nzData"
      [nzFilter]="to.nzFilter"
      [nzDisabled]="to.disabled != null ? to.disabled! : formControl?.disabled!"
      [nzHeaders]="to.nzHeaders"
      [nzListType]="to.nzListType"
      [nzMultiple]="to.nzMultiple"
      [nzName]="to.nzName"
      [nzShowUploadList]="to.nzShowUploadList"
      [nzShowButton]="to.nzShowButton"
      [nzWithCredentials]="to.nzWithCredentials"
      [nzRemove]="to.nzRemove"
      [nzPreview]="to.nzPreview"
      [nzPreviewFile]="to.nzPreviewFile"
      [nzPreviewIsImage]="to.nzPreviewIsImage"
      [nzTransformFile]="to.nzTransformFile"
      [nzDownload]="to.nzDownload"
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzSize]="to.nzSize"
      [nzLimit]="to.nzLimit"
      [nzxShowUploadButtonIcon]="to.nzxShowUploadButtonIcon"
      [nzxHint]="to.nzxHint"
      [nzxUploadButton]="uploadButton"
      [nzxUploadButtonIcon]="to.nzxUploadButtonIcon"
      [nzxFileNameDuplicate]="to.nzxFileNameDuplicate"
      [nzxValidateMessage]="to.nzxValidateMessage"
      [nzxFileNameLength]="to.nzxFileNameLength"
      [nzxShowValidateMessage]="to.nzxShowValidateMessage"
      [nzTotalSize]="to.nzTotalSize"
      [nzFileType]="to.nzFileType"
      (nzChange)="to.nzChange && to.nzChange($event, field, instance)"
      (nzFileListChange)="to.nzFileListChange && to.nzFileListChange($event, field, instance)"
    ></nzx-upload>
  `
})
export class FormlyFieldUploadComponent extends FieldType<NzFormlyFieldConfig<UploadOptions>> {
  defaultOptions = {
    templateOptions: {
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
    return resolveTplName(this.to, this.fieldTemplates, 'uploadButton');
  }

  get nzIconRender() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzIconRender');
  }
  get nzFileListRender() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzFileListRender');
  }
}
