import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { LoginComponent } from './user-authentication/login/login.component';

const routes: Routes = [
  {path:'login/header', component:HeaderComponent, 
    children:[
      {path:'contacts', component:ContactsComponent}
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
