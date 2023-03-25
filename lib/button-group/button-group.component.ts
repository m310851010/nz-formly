import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import { getRootFiled } from '@xmagic/nz-formly/common';

@Component({
  selector: 'nz-formly-button-group',
  template: `
    <nz-button-group [nzSize]="props.nzSize" [formlyAttributes]="field">
      <ng-container *ngFor="let item of props.buttons">
        <ng-container *ngIf="item.dropdown?.ref; else innerTemplateRef">
          <ng-container *ngTemplateOutlet="btnDropdownTemplate; context: { $implicit: item }"></ng-container>
        </ng-container>

        <ng-template #innerTemplateRef>
          <ng-container *ngTemplateOutlet="btnTemplate; context: { $implicit: item }"></ng-container>
        </ng-template>
      </ng-container>
    </nz-button-group>

    <ng-template #btnTemplate let-item>
      <button
        nz-button
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>

    <ng-template #btnDropdownTemplate let-item>
      <button
        nz-button
        nz-dropdown
        #dropdownDirective="nzDropdown"
        [nzDropdownMenu]="item.dropdown.nzDropdownMenu"
        [nzDisabled]="item.dropdown.nzDisabled"
        [nzPlacement]="item.dropdown.nzPlacement || 'bottomLeft'"
        [nzBackdrop]="item.dropdown.nzBackdrop"
        [nzClickHide]="item.dropdown.nzClickHide !== false"
        [nzTrigger]="item.dropdown.nzTrigger || 'hover'"
        [nzMatchWidthElement]="item.dropdown.nzMatchWidthElement"
        [nzOverlayClassName]="item.dropdown.nzOverlayClassName"
        [nzOverlayStyle]="item.dropdown.nzOverlayStyle"
        (nzVisibleChange)="item.dropdown.nzVisibleChange?.($event, field, this)"
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldButtonGroupComponent extends FieldType implements OnDestroy, AfterViewInit {
  @ViewChildren('dropdownDirective', { read: NzDropDownDirective }) dropdownDirectives!: QueryList<NzDropDownDirective>;
  destroy$ = new Subject<void>();
  override defaultOptions = {
    props: { nzSize: 'default', buttons: [] }
  };

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.dropdownChange();
    this.dropdownDirectives.changes.subscribe(() => this.dropdownChange());
  }

  dropdownChange() {
    const dropdownBtn = this.props.buttons.filter((btn: any) => btn.dropdown?.ref);
    if (!dropdownBtn.length) {
      return;
    }

    const rootField = getRootFiled(this.field);
    this.subjectDestroy();

    dropdownBtn.forEach((btn: any, i: number) => {
      if (btn.dropdown?.nzDropdownMenu) {
        return;
      }
      const dropdownField = rootField.get!(btn.dropdown.ref);
      const dropdownDir = this.dropdownDirectives.get(i);
      if (dropdownField && dropdownDir) {
        const instance = dropdownField.props!.instance;
        btn.dropdown.nzDropdownMenu = instance;
        dropdownDir.nzDropdownMenu = instance;
        dropdownDir.ngAfterViewInit();
      }
    });
  }

  subjectDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnDestroy(): void {
    this.subjectDestroy();
  }
}
