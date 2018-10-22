import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {wysiwygModuleRoutes} from '../wysiwyg/wysiwyg-routing.module';
import {hsModuleRoutes} from '../human-resources-crud/human-resources-crud-routing.module';

const routesArray = [].concat(
  wysiwygModuleRoutes,
  hsModuleRoutes
);

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: routesArray
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavBarRoutingModule {
}
