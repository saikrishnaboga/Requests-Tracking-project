import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './requests-pages/request-form/request-form.component';
import { RequestListComponent } from './requests-pages/request-list/request-list.component';

const routes: Routes = [
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"register", component: RequestFormComponent},
  {path:"getList", component:RequestListComponent},
 {path:"**", redirectTo:"register", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

