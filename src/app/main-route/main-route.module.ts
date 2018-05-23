import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRouteRoutingModule } from './main-route-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRouteRoutingModule,
    DashboardModule
  ],
  declarations: []
})
export class MainRouteModule { }
