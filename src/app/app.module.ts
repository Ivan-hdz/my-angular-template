import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {WYSIWYGModule} from './wysiwyg/wysiwyg.module';
import {HumanResourcesCrudModule} from './human-resources-crud/human-resources-crud.module';
import {SideNavBarModule} from './side-nav-bar/side-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SideNavBarModule,
    WYSIWYGModule,
    HumanResourcesCrudModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
