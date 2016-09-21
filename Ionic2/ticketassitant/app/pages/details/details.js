import {Page, NavController, NavParams, Alert,Toast} from 'ionic-angular';
import {StepsPage} from '../steps/steps'
/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/details/details.html',
})
export class DetailsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav,navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.showFinish = this.navParams.get('showFinish');
    this.deviceHiddenValue = "隐藏";
    this.flowHiddenValue = "隐藏";
    this.disabledFlag = false; 
    
  }
  viewSteps(){
    this.nav.push(StepsPage);
  }
  hiddenFlowDetails() {
    this.hiddenFlowFlag = !this.hiddenFlowFlag;
    if (this.flowHiddenValue == "隐藏") {
      this.flowHiddenValue = "详细资料";
    } else {
      this.flowHiddenValue = "隐藏"
    }
  }
  hiddenDevice() {
    this.hiddenDeviceFlag = !this.hiddenDeviceFlag;
    if (this.deviceHiddenValue == "隐藏") {
      this.deviceHiddenValue = "详细资料";
    } else {
      this.deviceHiddenValue = "隐藏"
    }
    
  }
  
  commit() {
    let toast = Toast.create({
    message: '已提交审核',
      duration: 3000
    });

    toast.onDismiss(() => {
      console.log('Dismissed toast');
    });
    
    this.nav.present(toast);
    this.disabledFlag = true;
  }
}
