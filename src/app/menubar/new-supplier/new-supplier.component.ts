import { Component,  OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {
  @Output() backbutton=new EventEmitter<{type:boolean}>();
  constructor() { }

  ngOnInit(): void {
  }
  onclickBack(){
    this.backbutton.emit({type:true})

  }
  

}
