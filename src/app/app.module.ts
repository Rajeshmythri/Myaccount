import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Coremodule } from './core/core.module';
import { Sharedmodule } from './shared/shared.module';
import { MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { routes } from './navbar/navbarmodule.component';
import {RouterModule} from "@angular/router";
// import { routingComponent } from './navbar/navbarmodule.component';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AppComponent, HomeComponent, CareerComponent, NavbarComponent,ContactusComponent, ProductsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    Coremodule,
    Sharedmodule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    MatTabsModule,    // MdToolbarModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// every time u get scared of something u end up loving it
