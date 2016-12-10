import { Component } from '@angular/core';
import { NavParams,ViewController,NavController  } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

/*
  Generated class for the OrderDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html'
})
export class OrderDetail {

  title;
  description;
  rate;
  
 
  constructor(public navParams: NavParams,public navCtrl: NavController, public view: ViewController){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').id;
    this.description = this.navParams.get('item').choice;
    this.rate = this.navParams.get('item').rating; 
   
  }

  saveRating(){
    this.navParams.get('item').rating = this.rate;
    this.view.dismiss();
 
  }

}
