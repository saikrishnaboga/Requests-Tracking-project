import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsPagesRoutingModule } from './requests-pages-routing.module';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RequestsPagesRoutingModule,
  ]
})
export class RequestsPagesModule { }
