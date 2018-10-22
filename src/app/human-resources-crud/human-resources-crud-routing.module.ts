import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './components/create/create.component';

export const hsModuleRoutes: Routes = [
  {path: 'hr', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(hsModuleRoutes)],
  exports: [RouterModule]
})
export class HumanResourcesCrudRoutingModule {
}
