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
      [nzBanner]="props.nzBanner"
      [nzMessage]="nzMessage"
      [nzAction]="nzAction"
      [nzCloseable]="props.nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzIconType]="props.nzIconType"
      [nzShowIcon]="props.nzShowIcon"
      [nzType]="props.nzType"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
    ></nz-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldAlertComponent extends FieldType<NzFormlyFieldConfig<AlertOptions>> {
  override defaultOptions = {
    props: {
      nzType: 'info'
    } as AlertOptions
  };

  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get nzDescription() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzDescription');
  }
  get nzMessage() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzMessage');
  }
  get nzAction() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzAction');
  }
  get nzCloseText() {
    return resolveTplName(this.props, this.fieldTemplates, 'nzCloseText');
  }
}
