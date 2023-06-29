import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  // {
  //   path: 'product/edit',
  //   component: EditProductComponent
  // },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: EditProductComponent
  },
  {
    path: 'user',
    component: UserComponent
  }, 
  // {
  //   path: 'customer',
  //   component: CustomerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
