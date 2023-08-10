import { ChangeDetectionStrategy, Component, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { ReplaySubject } from 'rxjs';
import { FormlyBoxTemplates } from '@xmagic/nz-formly/common';

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
            [nzSelected]="item.templateOptions?.nzSelected"
            [nzDisabled]="item.templateOptions?.nzDisabled"
            [nzPaddingLeft]="item.templateOptions?.nzPaddingLeft"
          ></formly-field>
        </ng-container>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldDropdownComponent extends FieldType implements OnInit {
  defaultOptions = {
    templateOptions: { _subject: new ReplaySubject<NzDropdownMenuComponent>() }
  };

  @ViewChild('menu', { read: NzDropdownMenuComponent, static: true }) instance!: NzDropdownMenuComponent;
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
    if (this.to._subject) {
      this.to._subject.next(this.instance);
    }
    this.to.instance = this.instance;
    this.to.init?.(this.instance, this);
  }
}
