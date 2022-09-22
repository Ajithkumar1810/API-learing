import { Component,  OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {
  @Output() backbutton=new EventEmitter<{type:boolean}>();
  Details=true
  info=false
  Supplier_Key=''
  Supplier_Name=''
  supplier_email_id=''
  Supplier_Contact_Details=''
  State_Name=''
  Country_Name=''
  City_Name=''
  Status='1'  
  constructor() { }

  ngOnInit(): void {
  }
  onclickBack(){
    this.backbutton.emit({type:true})

  }
  onSupplier_Key(event:any){
    this.Supplier_Key=(<HTMLInputElement>event?.target).value;
  }
  onSupplier_Name(event:any){
    this.Supplier_Name=(<HTMLInputElement>event?.target).value;
  }
  onsupplier_email_id(event:any){
    this.supplier_email_id=(<HTMLInputElement>event?.target).value;
  }
  onSupplier_Contact_Details(event:any){
    this.Supplier_Contact_Details=(<HTMLInputElement>event?.target).value;
  }
onState_Name(event:any){
this.State_Name=(<HTMLInputElement>event?.target).value;
}
onCountry_Name(event:any){
this.Country_Name=(<HTMLInputElement>event?.target).value;
}
onCity_Name(event:any){
this.City_Name=(<HTMLInputElement>event?.target).value;
}
  onSubmit(){
    if(this.Supplier_Key===''||this.Supplier_Name===''||this.supplier_email_id===''
    ||this.Supplier_Contact_Details===''||this.State_Name===''||this.Country_Name===''){
      this.Details=false
      this.info=false

    }
    else{
      this.Details=true
      this.info=true
    }
  }  

}
