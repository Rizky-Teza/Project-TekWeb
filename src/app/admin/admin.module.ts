import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/product'
      }
    ]
  }

]

@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent,
    ProductDetailComponent,
    FileUploaderComponent
  ],
  entryComponents:[ ],
  imports: [
    CommonModule,  
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
 })
 export class AdminModule { }
 
