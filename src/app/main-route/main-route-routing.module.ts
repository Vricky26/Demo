import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},{
  path:"dashboard",
  loadChildren: () => DashboardModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouteRoutingModule { }
