import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

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
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
import { WardListComponent } from './master/ward/components/ward-list/ward-list.component';
import { WardFormComponent } from './master/ward/components/ward-form/ward-form.component';
import { RoleListComponent } from './master/role/components/role-list/role-list.component';
import { RoleFormComponent } from './master/role/components/role-form/role-form.component';
import { CompanyFormComponent } from './master/company/components/company-form/company-form.component';
import { CompanyListComponent } from './master/company/components/company-list/company-list.component';
import { SectorFormComponent } from './master/sector/components/sector-form/sector-form.component';
import { SectorListComponent } from './master/sector/components/sector-list/sector-list.component';
import { VehicleTypeFormComponent } from './master/vehicle-type/components/vehicle-type-form/vehicle-type-form.component';
import { VehicleTypeListComponent } from './master/vehicle-type/components/vehicle-type-list/vehicle-type-list.component';


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
    CircleListComponent,
    CircleFormComponent,
    WardListComponent,
    WardFormComponent,
    RoleListComponent,
    RoleFormComponent,
    CompanyFormComponent,
    CompanyListComponent,
    SectorFormComponent,
    SectorListComponent,
    VehicleTypeFormComponent,
    VehicleTypeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
