import {NgModule} from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
imports: [
    MatToolbarModule,
    MatCheckboxModule
],
exports: [
    MatToolbarModule,
    MatCheckboxModule
]
})
export class Sharedmodule{}