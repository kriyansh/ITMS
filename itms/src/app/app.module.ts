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
import { ZoneListComponent } from './master/zone/components/zone-list/zone-list.component';
import { ZoneFormComponent } from './master/zone/components/zone-form/zone-form.component';
import { CompanyListComponent } from './master/company/components/company-list/company-list.component';
import { CompanyFormComponent } from './master/company/components/company-form/company-form.component';

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
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
