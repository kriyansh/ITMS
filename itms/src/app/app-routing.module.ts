import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
import { CircleListComponent } from './master/circle/components/circle-list/circle-list.component';
import { ProductListComponent } from './master/product/components/product-list/product-list.component';
import { ZoneFormComponent } from './master/zone/components/zone-form/zone-form.component';
import { ZoneListComponent } from './master/zone/components/zone-list/zone-list.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { LoginComponent } from './user-authentication/login/login.component';

const routes: Routes = [
  {path:'login/header', component:HeaderComponent, 
    children:[
      {path:'contacts', component:ContactsComponent},
      {path:'product', component:ProductListComponent},
      {path:'zone-master', component:ZoneListComponent},
      {path:'zone-form', component:ZoneFormComponent},
      {path:'circle', component:CircleListComponent},
      {path:'Add-Update', component:CircleFormComponent},
    ]
},
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
 
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
