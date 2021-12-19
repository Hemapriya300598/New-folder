import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { ContactDetails } from './contactdeatilsform';

@Component({
  selector: 'app-contact-managerform',
  templateUrl: './contact-managerform.component.html',
  styleUrls: ['./contact-managerform.component.css']
})
export class ContactManagerformComponent implements OnInit {

  ContactDetailsform ;
  //ContactDetailsobj:any;
  ContactDetailsobj :ContactDetails= new ContactDetails();
  List :any;
  productForm: FormGroup;

  constructor(private ContactDetailsvalue: FormBuilder,private api:ApiService,private fb:FormBuilder) {

    

   }


  ngOnInit(): void {
    this.ContactDetailsform = this.ContactDetailsvalue.group({
      contact_name :['',Validators.required],
      company_name:[''],
      first_name:[''],
      last_name:[''],
      email:[''],
      phone:[''],
      shipphone:[''],
      facebook:[''],
      twitter:[''],
      language_code:[''],
      payment_terms:[''],
      currency_id:[''],
      website:[''],
   notes:[''],
    value:[''],
    street2:[''],
    address:[''],
    city:[''],
    state:[''],
    tax_authority_name:[''],
    shipstreet2:[''],
    shipaddress:[''],
    shipcity:[''],
    shipstate:[''],
    });

  
    this.getContactDetailsList();
   
  
  }


  postContactDetails(){

  
	  this.ContactDetailsobj.contact_name=this.ContactDetailsform.value.contact_name;
     this.ContactDetailsobj.company_name=this.ContactDetailsform.value.company_name;
    this.ContactDetailsobj.website=this.ContactDetailsform.value.website;
    this.ContactDetailsobj.language_code=this.ContactDetailsform.value.language_code;
   
    this.ContactDetailsobj.currency_id=this.ContactDetailsform.value.currency_id;
    this.ContactDetailsobj.payment_terms=this.ContactDetailsform.value.payment_terms;
    this.ContactDetailsobj.address=this.ContactDetailsform.value.address;
    this.ContactDetailsobj.fax="1234";
    this.ContactDetailsobj.tax_authority_name=this.ContactDetailsform.value.tax_authority_name;
    this.ContactDetailsobj.zip="1267890";
    this.ContactDetailsobj.phone=this.ContactDetailsform.value.phone;

    this.api.postContactDetails(this.ContactDetailsobj)
    .subscribe(res=>{
      console.log(res);
     let ref=document.getElementById("close")
     ref?.click();
     alert('Details Submitted Successfully')
      this.ContactDetailsform.reset();
      this.getContactDetailsList();
    })
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