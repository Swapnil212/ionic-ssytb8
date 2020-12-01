import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from './home.service';

import '../../assets/js/bootstrap.min.js';
import '../../assets/js/jquery-3.3.1.slim.min.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})
export class HomePage {
  status: string = "all";
  searchTerm : any="";
  jsonData : any;

  constructor(public navCtrl: NavController
  ,public data:Data) {
  }

  ionViewDidLoad(){
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.jsonData = this.data.filterItems(this.searchTerm);
  }
}
