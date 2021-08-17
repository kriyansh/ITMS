import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { ProductFormComponent } from './master/product/components/product-form/product-form.component';
import { ProductListComponent } from './master/product/components/product-list/product-list.component';
import { CircleListComponent } from './master/circle/components/circle-list/circle-list.component';
import { ZoneListComponent } from './master/zone/components/zone-list/zone-list.component';
import { ZoneFormComponent } from './master/zone/components/zone-form/zone-form.component';
<<<<<<< HEAD
import { CompanyListComponent } from './master/company/components/company-list/company-list.component';
import { CompanyFormComponent } from './master/company/components/company-form/company-form.component';

=======
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
>>>>>>> 16e73ef4ea6596b736a532df49e9f4cdc82567be
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ContactsComponent,
    ForgetPasswordComponent,
    ProductFormComponent,
    ProductListComponent,
    ZoneListComponent,
    ZoneFormComponent,
<<<<<<< HEAD
    CompanyListComponent,
    CompanyFormComponent
=======
    CircleListComponent,
    CircleFormComponent
>>>>>>> 16e73ef4ea6596b736a532df49e9f4cdc82567be
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
