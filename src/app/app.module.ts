import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestFormComponent } from './requests-pages/request-form/request-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './apis.service';
import { DataList } from './requests-pages/dataList';
import { RequestListComponent } from './requests-pages/request-list/request-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    RequestFormComponent,
    RequestListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent,RequestFormComponent]
})
export class AppModule { }
