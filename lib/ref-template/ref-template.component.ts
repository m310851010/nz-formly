import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, resolveTplName } from '@xmagic/nz-formly/common';

/**
 * 引用模板，支持HTML,TemplateRef对象,或者NamedTemplate
 * @example
 *
 * 用法1: 使用NamedTemplate(推荐)
 *
 * html
 * ```html
 * <formly-form formly-box >
 *  <ng-template named="test"></ng-template>
 * </formly-form>
 * ```
 *
 * 配置
 * ```js
 * {
 *   type: 'ref-template',
 *   templateOptions: {
 *     refName: 'test'
 *   }
 * }
 * ```
 *
 * 用法2:TemplateRef对象
 * ```html
 * <ng-template #test2></ng-template>
 * ```
 *
 * 配置
 * @viewChild('test2') test2: TemplateRef<{}>;
 *
 * ```js
 * {
 *   type: 'ref-template',
 *   templateOptions: {
 *     ref: this.test2
 *   }
 * }
 * ```
 *
 * 用法3: 使用html
 *
 * 配置
 * ```js
 * {
 *   type: 'ref-template',
 *   templateOptions: {
 *     ref: '<div>test text</div>'
 *   }
 * }
 * ```
 */
@Component({
  selector: 'nz-formly-ref-template',
  template: `
    <ng-container *nzStringTemplateOutlet="ref; context: { $implicit: field, templateOptions: to }">
      <div [innerHTML]="$any(ref) | trustHtml"></div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldRefTemplateComponent extends FieldType {
  constructor(@Optional() public fieldTemplates: FormlyBoxTemplates) {
    super();
  }

  get ref() {
    return resolveTplName(this.to, this.fieldTemplates, 'ref');
  }
}
