import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import '../../assets/js/bootstrap.min.js';
import '../../assets/js/jquery-3.3.1.slim.min.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})
export class HomePage {
  status: string = "all";
  constructor(public navCtrl: NavController) {

  }

}
