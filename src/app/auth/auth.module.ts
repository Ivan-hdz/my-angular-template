import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoFocusModule} from '../shared/modules/auto-focus/auto-focus.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {
}
