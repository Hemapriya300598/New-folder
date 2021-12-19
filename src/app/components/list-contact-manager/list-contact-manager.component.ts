import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-contact-manager',
  templateUrl: './list-contact-manager.component.html',
  styleUrls: ['./list-contact-manager.component.css']
})
export class ListContactManagerComponent implements OnInit {
  ColumnDefs;  

  AgLoad: boolean;  
  Contacts: any;
  constructor() { }  
  
  ngOnInit() {  
    this.GetAgColumns();  
    this.GetGiftVoucherList();  
  }  
  GetAgColumns() {  
    this.ColumnDefs = [  
      { headerName: 'Contact Name', field: 'contact_name', sortable: true, filter: true },  
      { headerName: 'Company Name', field: 'company_name', sortable: true, filter: true },  
      { headerName: 'First Name', field: 'first_name', sortable: true, filter: true },  
      { headerName: 'Last Name', field: 'last_name', sortable: true, filter: true }, 
      { headerName: 'Status', field: 'status', sortable: true, filter: true },     
     { headerName: 'Email', field: 'email', sortable: true, filter: true },
      { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
      { headerName: 'Created-Time', field: 'created_time', sortable: true, filter: true } ,
      { headerName: 'Last-Modified-Time', field: 'last_modified_time', sortable: true, filter: true } ,
      { headerName: 'Recievable Amount', field: 'outstanding_receivable_amount', sortable: true, filter: true }  

    ];  
  }  
  GetGiftVoucherList() {  
    this.AgLoad = true;  
    this.Contacts = [  

      
      {
            "contact_id": 460000000026049,
            "contact_name": "Bowman and Co",
            "company_name": "Aayush Food and Herbs Ltd",
            "contact_type": "customer",
            "status": "active",
            "payment_terms": 15,
            "payment_terms_label": "Net 15",
            "currency_id": 460000000000097,
            "currency_code": "USD",
            "outstanding_receivable_amount": 250,
            "unused_credits_receivable_amount": 1369.66,
            "first_name": "Will",
            "last_name": "Smith",
            "email": "test@zylker.org",
            "phone": "9444671234",
            "mobile": "9467891234",
            "created_time": "2013-10-07T12:06:10+0530",
            "last_modified_time": "2013-11-08T18:24:51+0530"
         
      },  
      {  
        "contact_id": 460000888026079,
        "contact_name": "John fernandaz",
        "company_name": "Chothani Foods Ltd",
        "contact_type": "customer",
        "status": "in-active",
        "payment_terms": 19,
        "payment_terms_label": "Net 25",
        "currency_id": 460000888076089,
        "currency_code": "USD",
        "outstanding_receivable_amount": 250,
        "unused_credits_receivable_amount": 1789.66,
        "first_name": "Chot",
        "last_name": "hani",
        "email": "chotta@zimo.org",
        "phone": "9444695924",
        "mobile": "9444699092",
        "created_time": "2010-10-07T12:06:10+0530",
        "last_modified_time": "2010-11-09T18:24:51+0530"
      },  
      {  
        "contact_id": 4600008880266789,
            "contact_name": "Nedunchezhiyan",
            "company_name": "Sheetal Cool Products Ltd",
            "contact_type": "Cashier",
            "status": "duplicate",
            "payment_terms": 67,
            "payment_terms_label": "Net 67",
            "currency_id": 460000845676049,
            "currency_code": "AMD",
            "outstanding_receivable_amount": 50,
            "unused_credits_receivable_amount": 1789.66,
            "first_name": "Gold",
            "last_name": "Smith",
            "email": "Smith@zimo.org",
            "phone": "9444695924",
            "mobile": "9444699092",
            "created_time": "2011-10-07T12:06:10+0530",
            "last_modified_time": "2011-11-09T18:24:51+0530"
      },  
      {  
        "contact_id": 4600001110266789,
        "contact_name": "Shilpha",
        "company_name": "Nestle India ltd",
        "contact_type": "Accountant",
        "status": "crm",
        "payment_terms": 58,
        "payment_terms_label": "Net 34",
        "currency_id": 461115845676049,
        "currency_code": "AMD",
        "outstanding_receivable_amount": 250,
        "unused_credits_receivable_amount": 5789.66,
        "first_name": "Caron",
        "last_name": "Zim",
        "email": "Zim@Caron.org",
        "phone": "9444789431",
        "mobile": "9444906792",
        "created_time": "2020-10-01T12:06:10+0530",
        "last_modified_time": "2020-11-09T18:24:51+0530" 
      },  
      {  
        "contact_id": 5600008880266789,
        "contact_name": "Rupa",
        "company_name": "Tasty Dairy Specialities Ltd",
        "contact_type": "Manager",
        "status": "duplicate",
        "payment_terms": 100,
        "payment_terms_label": "Net 100",
        "currency_id": 460000789676049,
        "currency_code": "EUR",
        "outstanding_receivable_amount": 250,
        "unused_credits_receivable_amount": 789.66,
        "first_name": "Devi",
        "last_name": "Sha",
        "email": "Sha@zimo.org",
        "phone": "9444595924",
        "mobile": "9444599092",
        "created_time": "2011-10-07T12:06:10+0530",
        "last_modified_time": "2011-10-09T18:24:51+0530"
      },  
     {
      "contact_id": 7600008880266789,
      "contact_name": "Andrew",
      "company_name": "Zydus wellness ltd",
      "contact_type": "Manager",
      "status": "crm",
      "payment_terms": 100,
      "payment_terms_label": "Net 100",
      "currency_id": 460000789676049,
      "currency_code": "EUR",
      "outstanding_receivable_amount": 250,
      "unused_credits_receivable_amount": 789.66,
      "first_name": "David",
      "last_name": "Son",
      "email": "David@Son.org",
      "phone": "91444595924",
      "mobile": "9444599092",
      "created_time": "2011-10-07T12:06:10+0530",
      "last_modified_time": "2011-10-09T18:24:51+0530"
     },
     {
      "contact_id": 7900008880266789,
      "contact_name": "Durga",
      "company_name": "Prabhat Dairy Ltd",
      "contact_type": "Associate",
      "status": "active",
      "payment_terms": 900,
      "payment_terms_label": "Net 900",
      "currency_id": 460000789676049,
      "currency_code": "EUR",
      "outstanding_receivable_amount": 250,
      "unused_credits_receivable_amount": 789.66,
      "first_name": "Selva",
      "last_name": "Vathi",
      "email": "Durga@Devi.org",
      "phone": "91444595924",
      "mobile": "9444599092",
      "created_time": "2009-10-07T12:06:10+0530",
      "last_modified_time": "2009-10-09T18:24:51+0530"

     }
    ];  
  }  
}
