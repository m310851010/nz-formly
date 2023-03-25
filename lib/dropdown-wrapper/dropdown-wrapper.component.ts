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
      [nzDisabled]="props.nzDropdown.nzDisabled"
      [nzPlacement]="props.nzDropdown.nzPlacement || 'bottomLeft'"
      [nzBackdrop]="props.nzDropdown.nzBackdrop"
      [nzClickHide]="props.nzDropdown.nzClickHide !== false"
      [nzTrigger]="props.nzDropdown.nzTrigger || 'hover'"
      [nzMatchWidthElement]="props.nzDropdown.nzMatchWidthElement"
      [nzOverlayClassName]="props.nzDropdown.nzOverlayClassName"
      [nzOverlayStyle]="props.nzDropdown.nzOverlayStyle"
      (nzVisibleChange)="props.nzDropdown.nzVisibleChange?.($event, field, dropdownDirective)"
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
    const dropdownField = findField(this.field, this.props.nzDropdown.ref);
    if (!dropdownField) {
      return;
    }

    const subject = dropdownField.props!._subject;
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
