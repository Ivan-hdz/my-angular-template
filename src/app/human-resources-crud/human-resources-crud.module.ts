import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesCrudRoutingModule } from './human-resources-crud-routing.module';
import { CreateComponent } from './components/create/create.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {FormsModule} from '@angular/forms';
import {AutoFocusModule} from '../shared/modules/auto-focus/auto-focus.module';

@NgModule({
  imports: [
    CommonModule,
    HumanResourcesCrudRoutingModule,
    AutoFocusModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CreateComponent
  ]
})
export class HumanResourcesCrudModule { }
