import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContactManagerComponent } from './components/create-contact-manager/create-contact-manager.component';
import { ListContactManagerComponent } from './components/list-contact-manager/list-contact-manager.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { ContactManagerformComponent } from './components/contact-managerform/contact-managerform.component';


const routes: Routes = [
  { path: '',redirectTo:'/create',pathMatch: 'full'},
  { path: 'create', component: CreateContactManagerComponent },
  { path: 'list', component: ListContactManagerComponent },
  {path:'Cmform',component:ContactManagerformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
