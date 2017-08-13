import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from "../data.service";
import { StudentService } from "../student.service";
import { CompanyService } from "../company.service";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  uid;
  del;
  name;
  email;
  password;
  type;
  itemss: FirebaseListObservable<any[]>;
  constructor(public _service: DataService, private db: AngularFireDatabase, private router: Router, public af: AngularFireAuth, public st: StudentService, public cc: CompanyService) {
    // this.students = this.st.items;



  }
// show();
  ngOnInit() {
  }
  // studentDetail = { gpa: "", name: "", phone: "", program: "" };

  // showDetail(i) {
  //   this.studentDetail = this.students[i];
  // }
  





  company = this.cc.ex;
  student = this.st.items;
  users = this._service.users;


studentprofile:FirebaseListObservable<any[]>;
studentdata:FirebaseListObservable<any[]>;
 studentnum = [];
 allCompanyKey = [];
  deleteValues(i) {
    this.studentprofile = this.db.list("/users")
    this.studentprofile.remove(i).then(_ => console.log('deleted!'));

    this.studentdata = this.db.list('/student/', { preserveSnapshot: true });
    this.studentdata.remove(i);
  }
}
