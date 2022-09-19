import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output('menuoption')menu_onpress=false;
  constructor() { }

  ngOnInit(): void {
  }
  onPressmenu(){
    this.menu_onpress=!this.menu_onpress;
  }

}
