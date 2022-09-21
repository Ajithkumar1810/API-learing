import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css']
})
export class TargetpageComponent implements OnInit {
@Input('tragetpagename') targetpagename='Master';
@Input('backbutton') back=false;
@Input('addMasterbutton') addMasterButton=false;

  viewpage=false;
  constructor( ) {

    
   }

  ngOnInit(): void {
    
  
  }
  onClickbackbutton(DestinationName:{type:any}){
    this.back=DestinationName.type;
    if(this.back===true){
      this.targetpagename='Master'
      this.back=false
    }
   
    // console.log(DestinationName);
  }
  onClickAddMasterButton(DestinationName:{type:any}){
    this.addMasterButton=DestinationName.type;
        
    if(this.addMasterButton===true){
      this.targetpagename='New'
      this.addMasterButton=false;
    }
   
    // console.log(DestinationName);
  }

}
