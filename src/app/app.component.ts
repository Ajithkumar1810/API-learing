import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Destination='Master';
  
  menu=false;
  menuvalue=false;
  title = 'Bigtapp_portal';
  onMenu(){
    this.menu=!this.menu;
  }
  onClickMaster(DestinationName:{Name:any}){
    this.Destination=DestinationName.Name;
    // console.log(DestinationName);
  }
  onClickNew(DestinationName:{Name:any}){
    this.Destination=DestinationName.Name;
    // console.log('Hi');
  }
 
  
}
