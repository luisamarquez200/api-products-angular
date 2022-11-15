import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// -- Plugins
import {TranslateModule} from '@ngx-translate/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

import {Error500Component} from './components/error500/error500.component';
import {Error404Component} from './components/error404/error404.component';
import {ModalConfirmComponent} from './components/modal-confirm/modal-confirm.component';
import {ModalMessageComponent} from './components/modal-message/modal-message.component';
import {ValidationErrorComponent} from './components/validation-error/validation-error.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    Error500Component,
    Error404Component,
    ModalConfirmComponent,
    ModalMessageComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CKEditorModule
  ],
  exports: [
    TranslateModule,
    CKEditorModule,
    Error500Component,
    Error404Component,
    ModalConfirmComponent,
    ModalMessageComponent,
    ValidationErrorComponent,
    NgxDatatableModule
  ]
})
export class SharedModule {
}
