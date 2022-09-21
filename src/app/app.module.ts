import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TargetpageComponent } from './menubar/targetpage/targetpage.component';
import { SupplierMasterComponent } from './menubar/supplier-master/supplier-master.component';
import { NewSupplierComponent } from './menubar/new-supplier/new-supplier.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
