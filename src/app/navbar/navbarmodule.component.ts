
import { HomeComponent } from '../home/home.component';
import { CareerComponent } from '../career/career.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ProductsComponent } from '../products/products.component';


import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'career', component: CareerComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'Products', component: ProductsComponent}
   ];
