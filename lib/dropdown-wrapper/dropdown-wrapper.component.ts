import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { Subscription } from 'rxjs';
import { FormlyBoxTemplates, findField } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-dropdown-wrapper',
  template: `
    <div
      nz-dropdown
      style="display: inline-block"
      #dropdownDirective="nzDropdown"
      [nzDisabled]="to.nzDropdown.nzDisabled"
      [nzPlacement]="to.nzDropdown.nzPlacement || 'bottomLeft'"
      [nzBackdrop]="to.nzDropdown.nzBackdrop"
      [nzClickHide]="to.nzDropdown.nzClickHide !== false"
      [nzTrigger]="to.nzDropdown.nzTrigger || 'hover'"
      [nzMatchWidthElement]="to.nzDropdown.nzMatchWidthElement"
      [nzOverlayClassName]="to.nzDropdown.nzOverlayClassName"
      [nzOverlayStyle]="to.nzDropdown.nzOverlayStyle"
      (nzVisibleChange)="to.nzDropdown.nzVisibleChange && to.nzDropdown.nzVisibleChange($event, field, dropdownDirective)"
    >
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownWrapperComponent extends FieldWrapper implements OnInit, OnDestroy {
  @ViewChild('dropdownDirective', { read: NzDropDownDirective, static: true }) dropdownDirective!: NzDropDownDirective;
  private subscription?: Subscription;
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  ngOnInit(): void {
    const dropdownField = findField(this.field, this.to.nzDropdown.ref);
    if (!dropdownField) {
      return;
    }

    const subject = dropdownField.templateOptions!._subject;
    this.subscription = subject.subscribe((instance: NzDropdownMenuComponent) => {
      this.dropdownDirective.nzDropdownMenu = instance;
      this.dropdownDirective.ngAfterViewInit();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
