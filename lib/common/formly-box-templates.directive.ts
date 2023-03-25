import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChange,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { NamedTemplate } from '@xmagic/nzx-antd/directive';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Directive({
  selector: '[formly-box]',
  exportAs: 'FormlyBox'
})
export class FormlyBoxTemplates implements AfterContentInit, OnChanges {
  private tplMap = new Map<string, TemplateRef<NzSafeAny>>();
  @Input('formly-box') templateList?: TemplateList;
  @Output() templateChange = new EventEmitter<Map<string, TemplateRef<NzSafeAny>>>();
  @ContentChildren(NamedTemplate) namedTemplate!: QueryList<NamedTemplate<NzSafeAny>>;

  get templates(): Map<string, TemplateRef<NzSafeAny>> {
    return this.tplMap;
  }

  /**
   * 根据模板名称获取TemplateRef
   * @param templateName 模板名称
   */
  get(templateName: string): TemplateRef<NzSafeAny> | undefined {
    return this.tplMap.get(templateName);
  }

  constructor() {}

  ngAfterContentInit(): void {
    this.update();
    this.namedTemplate.changes.subscribe(v => {
      this.update();
    });
  }

  update(emitChange = true) {
    this.tplMap.clear();
    this.mergeTemplate(this.tplMap, emitChange);
  }

  ngOnChanges(changes: { [K in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.templateList && !changes.templateList.isFirstChange()) {
      this.update();
    }
  }

  /**
   * 合并参数模板
   * @param tplMap
   * @param emitChange
   */
  mergeTemplate(tplMap: Map<string, TemplateRef<NzSafeAny>>, emitChange = true) {
    this.mergeTemplates(tplMap, this.templateList);
    this.mergeQueryTemplate(tplMap, this.namedTemplate);
    this.templateChange.emit(tplMap);
  }

  /**
   * 合并content 模板
   * @param tplMap
   * @param templateList
   * @private
   */
  private mergeQueryTemplate(
    tplMap: Map<string, TemplateRef<NzSafeAny>>,
    templateList?: QueryList<NamedTemplate<NzSafeAny>>
  ): void {
    if (templateList) {
      templateList.forEach(v => {
        tplMap.set(v.named, v.template);
      });
    }
  }

  /**
   * 合并魔板列表
   * @param tplMap 模板Map
   * @param templateList
   */
  private mergeTemplates(tplMap: Map<string, TemplateRef<NzSafeAny>>, templateList?: TemplateList): void {
    if (!templateList) {
      return;
    }

    templateList.forEach(v => {
      if (v instanceof NamedTemplate) {
        tplMap.set(v.named, v.template);
      } else {
        const namedTpl = new NamedTemplate(v);
        namedTpl.resolveName();
        tplMap.set(namedTpl.named, namedTpl.template);
      }
    });

    return;
  }
}

/**
 * 魔板列表
 */
export type TemplateList =
  | QueryList<TemplateRef<NzSafeAny>>
  | QueryList<NamedTemplate<NzSafeAny>>
  | NamedTemplate<NzSafeAny>[];
