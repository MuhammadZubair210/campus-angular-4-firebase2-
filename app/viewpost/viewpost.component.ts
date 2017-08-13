import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { AngularFireDatabase } from "angularfire2/database";
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  constructor(public cs: CompanyService, public db: AngularFireDatabase) { }

  ngOnInit() {
  }
  arr = [];
  
// viewpost;
// show(){
viewpost=this.cs.demo;
//  console.log(this.cs.viewPost());
// }
}
