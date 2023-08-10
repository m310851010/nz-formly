import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig, resolveTplName } from '@xmagic/nz-formly/common';
import { AlertOptions } from './formly.type';

@Component({
  selector: 'nz-formly-alert',
  template: `
    <nz-alert
      #instance
      [formlyAttributes]="field"
      [nzBanner]="to.nzBanner"
      [nzMessage]="nzMessage!"
      [nzCloseable]="to.nzCloseable"
      [nzCloseText]="nzCloseText!"
      [nzDescription]="nzDescription!"
      [nzIconType]="to.nzIconType"
      [nzShowIcon]="to.nzShowIcon"
      [nzType]="to.nzType"
      (nzOnClose)="to.nzOnClose && to.nzOnClose($event, field, instance)"
    ></nz-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldAlertComponent extends FieldType<NzFormlyFieldConfig<AlertOptions>> {
  defaultOptions = {
    templateOptions: {
      nzType: 'info'
    } as AlertOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzDescription() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzDescription');
  }
  get nzMessage() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzMessage');
  }
  get nzCloseText() {
    return resolveTplName(this.to, this.fieldTemplates, 'nzCloseText');
  }
}
