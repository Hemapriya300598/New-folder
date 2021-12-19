import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder, Validators, FormArray} from '@angular/forms';
import{ContactDetails} from '../contact-managerform/contactdeatilsform';
import{ApiService} from '../contact-managerform/api.service';


@Component({
  selector: 'app-create-contact-manager',
  templateUrl: './create-contact-manager.component.html',
  styleUrls: ['./create-contact-manager.component.css']
})
export class CreateContactManagerComponent implements OnInit {
  ContactDetailsform ;
  //ContactDetailsobj:any;
  ContactDetailsobj :ContactDetails= new ContactDetails();
  List :any;
  productForm: FormGroup;

  constructor(private ContactDetailsvalue: FormBuilder,private api:ApiService,private fb:FormBuilder) {

   }


  ngOnInit(): void {
    
   
  
  }


  getContactDetailsList(){
    this.api.getContactDetailsList()
   .subscribe(res=>{
      this.List=res;
    })
  }
 deleteContactDetailsList(row:any){
   this.api.deleteContactDetailsList(row.id)
   .subscribe(res=>{
   alert("Deleted Successfully")
   this.getContactDetailsList();
  })
 }
}
