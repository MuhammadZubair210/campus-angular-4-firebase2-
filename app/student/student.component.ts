import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CompanyComponent } from '../company/company.component';
import { StudentService } from "../student.service";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {

  constructor(public af: AngularFireAuth, public afd: AngularFireDatabase, private fb: FormBuilder, public router: Router, public sservice: StudentService,public cc:CompanyService ) { }
  company=this.cc.ex;
fm = this.sservice.form;
  // this.
  ngOnInit() {

  }
  submit(user){
    this.sservice.submit(user);
  }


}








    // this.form = new FormGroup({
    //   name: new FormControl("", Validators.required),
    //   qualification: new FormControl("", Validators.required),
    //   cgpa: new FormControl("", Validators.required),
    //   program: new FormControl("", Validators.required),
    //   contact: new FormControl("", Validators.required)
    // })


  // signout() {
  //   this.af.auth.signOut();
  //   this.router.navigate(["/signup"]);
  // }

  // submit(user) {
  //   this.afd.list('/student/').push(user);
  //   console.log(user)
  // }













// createform() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     qualification: ['', Validators.required],
  //     cgpa: ['', Validators.required],
  //     program: ['', Validators.required],
  //     contact: ['', Validators.required],

  //   })
  // }







  //  companydetails=this.cp.submitCD(this);




  // const { name, qualification, cgpa, program, contact } = this.form.value;
  // if (this.form.value != "") {
  //   let formdata = { name, qualification, cgpa, program, contact };
  //   this.uid = this.af.auth.currentUser.uid;
  //   this.afd.list('/student/' + this.uid).push(formdata);
  //   console.log(name, qualification, cgpa, program, contact)
  // }
  // else {
  //   console.log("fill");
  // }
  //   this.uid = this.af.auth.currentUser.uid;

  // submit() {
  //   console.log("successfull");

  //   this.uid = this.af.auth.currentUser.uid;
  //   let formdata = { name: "", qualification: "", cgpa: "", program: "", contact: "" };
  //   this.afd.list("/students/" + this.uid).push(formdata);
  // }