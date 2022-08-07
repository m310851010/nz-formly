import { ChangeDetectionStrategy, Component, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { ReplaySubject } from 'rxjs';
import { FormlyBoxTemplates } from '../service/formly-box-templates.directive';

@Component({
  selector: 'nz-formly-dropdown',
  template: `
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div nz-menu [formlyAttributes]="field">
        <ng-container *ngFor="let item of field.fieldGroup">
          <formly-field
            nz-menu-item
            [formlyAttributes]="item"
            [field]="item"
            [nzSelected]="item.props?.nzSelected"
            [nzDisabled]="item.props?.nzDisabled"
            [nzPaddingLeft]="item.props?.nzPaddingLeft"
          ></formly-field>
        </ng-container>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDropdownComponent extends FieldType implements OnInit {
  override defaultOptions = {
    props: { _subject: new ReplaySubject<NzDropdownMenuComponent>() }
  };

  @ViewChild('menu', { read: NzDropdownMenuComponent, static: true }) instance!: NzDropdownMenuComponent;
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
    if (this.props._subject) {
      this.props._subject.next(this.instance);
    }
    this.props.instance = this.instance;
    this.props.init?.(this.instance, this);
  }
}
