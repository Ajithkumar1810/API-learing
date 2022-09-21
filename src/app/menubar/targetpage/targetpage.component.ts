import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css']
})
export class TargetpageComponent implements OnInit {
@Input('tragetpagename') targetpagename='Master';
  viewpage=false;
  constructor() { }

  ngOnInit(): void {
  }
  

}
