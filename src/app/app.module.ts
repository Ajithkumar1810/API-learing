import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TargetpageComponent } from './menubar/targetpage/targetpage.component';
import { SupplierMasterComponent } from './menubar/supplier-master/supplier-master.component';
import { NewSupplierComponent } from './menubar/new-supplier/new-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    NavbarComponent,
    TargetpageComponent,
    SupplierMasterComponent,
    NewSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
