import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the OrderData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderData {
   public order: any;
   private fireAuth: any;
   private dbRef:any;
    today:any = new Date().toISOString();
    year:any;
    month:any;
    day:any;
    uName:any;
    
  constructor(public http: Http) {
    //this.fireAuth = firebase.auth();
    //this.dbRef = firebase.database();
  }

  getCoffess(): any {
    console.log("inside getCoffees");
     this.year = this.today.split("-")[0];
    this.month = this.today.split("-")[1];
    this.day = ( this.today.split("-")[2] ).split("T")[0];
    // this.today = new Date(this.year, this.month, this.day);//today to query the database to get the results
    this.today = this.day + "-" + this.month + "-" + this.year;
    var mydate = this.today 
     firebase.auth().onAuthStateChanged(function(user) {
     this.uName =  firebase.auth().currentUser.email.replace("@","CAFFEIOTAT").replace(".","CAFFEDOT");
     console.log(this.uName);
    console.log('/dailyConsumption' + '/' + this.uName + '/'+  mydate);
    var coffeeCountRef =  firebase.database().ref('/dailyConsumption' + '/' + this.uName + '/'+  mydate);
    // coffeeCountRef.on('value', function(snapshot) {
      console.log("hi");
       return coffeeCountRef;
    // })
    });
    return this.getCoffess;
  }

}
