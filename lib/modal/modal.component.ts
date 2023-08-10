import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-modal',
  template: `
    <nz-modal
      *ngIf="to.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="to.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="to.nzAutofocus"
      [nzBodyStyle]="to.nzBodyStyle"
      [nzCancelDisabled]="to.nzCancelDisabled"
      [nzCancelLoading]="to.nzCancelLoading"
      [nzCancelText]="to.nzCancelText"
      [nzCentered]="to.nzCentered"
      [nzClassName]="to.nzClassName"
      [nzClosable]="to.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="to.nzCloseOnNavigation"
      [nzComponentParams]="to.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="to.nzIconType"
      [nzKeyboard]="to.nzKeyboard"
      [nzMask]="to.nzMask"
      [nzMaskClosable]="to.nzMaskClosable"
      [nzMaskStyle]="to.nzMaskStyle"
      [nzModalType]="to.nzModalType"
      [nzNoAnimation]="to.nzNoAnimation"
      [nzOkDanger]="to.nzOkDanger"
      [nzOkDisabled]="to.nzOkDisabled"
      [nzOkLoading]="to.nzOkLoading"
      [nzOkText]="to.nzOkText"
      [nzOkType]="to.nzOkType"
      [nzStyle]="to.nzStyle"
      [nzWidth]="to.nzWidth"
      [nzWrapClassName]="to.nzWrapClassName"
      [nzZIndex]="to.nzZIndex"
      (nzAfterClose)="to.onAfterClose && to.onAfterClose(field, instance)"
      (nzAfterOpen)="to.nzAfterOpen && to.nzAfterOpen(field, instance)"
      (nzOnCancel)="to.nzOnCancel(field, instance)"
      (nzOnOk)="to.nzOnOk(field, instance)"
      (nzVisibleChange)="to.nzVisibleChange && to.nzVisibleChange($event, field)"
    >
      <ng-container *nzModalContent>
        <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
        <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: to }">
          {{ nzContent }}
        </ng-container>
      </ng-container>
    </nz-modal>
  `
})
export class FormlyFieldModalComponent extends FieldType implements OnInit {
  @ViewChild('nzModal', { static: true }) instance!: NzModalComponent;
  defaultOptions = {
    templateOptions: {
      nzOkType: 'primary',
      nzCloseOnNavigation: true,
      nzMaskClosable: false,
      nzKeyboard: false,
      nzClosable: true,
      nzMask: true,
      nzIconType: 'question-circle',
      nzAutofocus: 'auto',
      nzWidth: 520,
      nzVisible: false,
      nzCloseIcon: 'close',
      nzOnCancel: (field: FormlyFieldConfig, instance: NzModalComponent) => (field.templateOptions!.nzVisible = false),
      nzOnOk: (field: FormlyFieldConfig, instance: NzModalComponent) => (field.templateOptions!.nzVisible = false)
    }
  };
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
    this.to.instance = this.instance;
    this.to.init?.(this.instance, this);
  }

  get nzTitle() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzTitle');
  }

  get nzFooter() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzFooter');
  }

  get nzCloseIcon() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzCloseIcon');
  }

  get nzContent() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzContent');
  }
}
