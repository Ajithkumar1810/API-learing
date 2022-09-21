import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})
export class SupplierMasterComponent implements OnInit {
  @Output() addMasterbutton=new EventEmitter<{type:boolean}>();


  constructor() { }

  ngOnInit(): void {
  }
  onclickAddMasterbutton(){
    this.addMasterbutton.emit({type:true})

  }

}
