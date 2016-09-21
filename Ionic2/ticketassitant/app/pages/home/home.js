import {Page, NavController, Alert} from 'ionic-angular';
import {DetailsPage} from '../details/details'
import {SettingPage} from '../setting/setting'
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  static get parameters(){
        return [[NavController]];
  }
  constructor(nav) {
      this.nav = nav;
      this.searchQuery = '';
      this.initializeItems();
    
  }
  viewDetails(){
        this.nav.push(DetailsPage);
  }
  initializeItems() {
    this.items = [
      '11#变频器低穿整改',
      '螺栓力矩紧固，主轴，偏航轴承注液',
      '变频器未准备就绪'
    ];
  }
  setting() {
    this.nav.push(SettingPage);
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
