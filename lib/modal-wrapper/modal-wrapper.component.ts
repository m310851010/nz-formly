import { ChangeDetectionStrategy, Component, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FormlyFieldConfig } from '@ngx-formly/core/lib/models';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'nz-formly-modal-wrapper',
  template: `
    <nz-modal
      *ngIf="props.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="props.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="props.nzAutofocus"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzCancelDisabled]="props.nzCancelDisabled"
      [nzCancelLoading]="props.nzCancelLoading"
      [nzCancelText]="props.nzCancelText"
      [nzCentered]="props.nzCentered"
      [nzClassName]="props.nzClassName"
      [nzClosable]="props.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="props.nzCloseOnNavigation"
      [nzComponentParams]="props.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="props.nzIconType"
      [nzKeyboard]="props.nzKeyboard"
      [nzMask]="props.nzMask"
      [nzMaskClosable]="props.nzMaskClosable"
      [nzMaskStyle]="props.nzMaskStyle"
      [nzModalType]="props.nzModalType"
      [nzNoAnimation]="props.nzNoAnimation"
      [nzOkDanger]="props.nzOkDanger"
      [nzOkDisabled]="props.nzOkDisabled"
      [nzOkLoading]="props.nzOkLoading"
      [nzOkText]="props.nzOkText"
      [nzOkType]="props.nzOkType"
      [nzStyle]="props.nzStyle"
      [nzWidth]="props.nzWidth"
      [nzWrapClassName]="props.nzWrapClassName"
      [nzZIndex]="props.nzZIndex"
      (nzAfterClose)="props.onAfterClose && props.onAfterClose($event, field, instance)"
      (nzAfterOpen)="props.nzAfterOpen && props.nzAfterOpen(field, instance)"
      (nzOnCancel)="props.nzOnCancel?.($event, field, instance)"
      (nzOnOk)="props.nzOnOk?.($event, field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, instance)"
    >
      <ng-container *nzModalContent>
        <ng-container #fieldComponent></ng-container>
      </ng-container>
    </nz-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWrapperComponent extends FieldWrapper implements OnInit {
  @ViewChild('nzModal', { static: true }) instance!: NzModalComponent;
  override defaultOptions = {
    props: {
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
      nzOnCancel: (v: NzSafeAny, field: FormlyFieldConfig, instance: NzModalComponent) =>
        (field.props!.nzVisible = false),
      nzOnOk: (v: NzSafeAny, field: FormlyFieldConfig, instance: NzModalComponent) => (field.props!.nzVisible = false)
    }
  };
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
    this.props.instance = this.instance;
    this.props.init?.(this.instance, this);
  }

  get nzTitle() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
  }

  get nzFooter() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzFooter');
  }

  get nzCloseIcon() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzCloseIcon');
  }
}
