import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { CompanyComponent } from './company/company.component';
@Injectable()
export class CompanyService {

  addPosts: FirebaseListObservable<any[]>;
  constructor(public cc: CompanyComponent, public db: AngularFireDatabase, public af: AngularFireAuth) {
    this.addPosts = db.list("/addposts" + this.uid);
  }
  ex = this.cc.cdetails;
  uid;
  post
  description;
  name;
  password;

  // submit() {
  //   this.uid = this.af.auth.currentUser.uid;
  //   this.cdetails = this.db.list('/compdetails/' + this.uid, { preserveSnapshot: true });
  //   this.cdetails
  //     .subscribe(snapshots => {
  //       snapshots.forEach(snapshot => {
  //         console.log(snapshot.val())
  //       })
  //     });
  // }


  addPost(post: String, description: String) {
    this.uid = this.af.auth.currentUser.uid;
    let formdata = { post, description }
    this.description = this.db.list("/addposts/" + this.uid).push(formdata);
  }

  get demo(): any{
    this.viewPost();
    return this.array; 
  }

  array = [];
  viewPost() {
    this.uid = this.af.auth.currentUser.uid;
    this.addPosts = this.db.list('/addposts/' + this.uid, { preserveSnapshot: true });
    this.addPosts
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val())
          this.array.push(snapshot.val())
          console.log(this.array);

        });
      })
  }
}
