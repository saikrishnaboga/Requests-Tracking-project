import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  // {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"register", component: RequestFormComponent},
  {path:"getList", component:RequestListComponent},
  {path:"**", redirectTo:"register", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsPagesRoutingModule { }
export const myRoutings = [
  RequestFormComponent,
  RequestListComponent
]
