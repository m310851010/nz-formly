import { NgModule } from '@angular/core';
import { FormlyBoxTemplates } from './formly-box-templates.directive';
import { CommonModule } from '@angular/common';

const COMPONENT = [FormlyBoxTemplates];

@NgModule({
  declarations: COMPONENT,
  imports: [CommonModule],
  exports: COMPONENT
})
export class FormlyCommonModule {}
