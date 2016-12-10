import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyTeams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeams {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyTeams Page');
  }
  addTeam(){
    
  }

}
