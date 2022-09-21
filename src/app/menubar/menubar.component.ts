import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
@Output() callMaster=new EventEmitter<{Name:String}>();
@Output() callNew=new EventEmitter<{Name:String}>();
// NameMenucall='';

  constructor() { }

  ngOnInit(): void {
  }
  onAddMaster(){
    this.callMaster.emit({Name:'Master'});
  }
  onAddNew(){
    this.callNew.emit({Name:'New'});
  }

}
