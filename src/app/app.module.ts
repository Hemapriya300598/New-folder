import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContactManagerComponent } from './components/create-contact-manager/create-contact-manager.component';
import { ListContactManagerComponent } from './components/list-contact-manager/list-contact-manager.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { ContactManagerformComponent } from './components/contact-managerform/contact-managerform.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateContactManagerComponent,
    ListContactManagerComponent,
    AgGridComponent,
    ContactManagerformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
