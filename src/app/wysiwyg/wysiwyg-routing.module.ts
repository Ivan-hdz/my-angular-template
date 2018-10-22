import {EditorComponent} from './components/editor/editor.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


export const wysiwygModuleRoutes: Routes = [
  { path: 'editor', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(wysiwygModuleRoutes)],
  exports: [RouterModule]
})
export class WYSIWYGRoutingModule {
}
