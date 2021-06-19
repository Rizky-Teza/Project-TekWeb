import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        redirectTo:'/admin/dashboard',
        pathMatch:'full'
      }
    ]
  },
  
]


@NgModule({
  declarations: 
  [AdminComponent,
   DashboardComponent,
  ],
  entryComponents:[ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
  ]
})
export class AdminModule { }