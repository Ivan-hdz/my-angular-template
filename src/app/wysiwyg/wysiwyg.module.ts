
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import {WYSIWYGRoutingModule} from './wysiwyg-routing.module';



@NgModule({
  imports: [
    CommonModule,
    WYSIWYGRoutingModule
  ],
  declarations: [EditorComponent],
  exports: []
})
export class WYSIWYGModule {
}


