import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Camera} from 'ionic-native';
/*
  Generated class for the StepsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/steps/steps.html',
    
})
export class StepsPage {
    
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
        this.images = [];
        this.deviceHiddenValueDetail = "隐藏";
        
    }
  
    
  
 
    hiddenDeviceDetail() {
        this.hiddenDeviceFlagDetail = !this.hiddenDeviceFlagDetail;
        this.deviceHiddenValueDetail = "隐藏"?"显示":"隐藏";
    }
    finish() {
        this.nav.pop();
    }
    takePhoto() {
        let options = {
            sourceType: navigator.camera.PictureSourceType.CAMERA, 
            destinationType: navigator.camera.DestinationType.DATA_URL, 
            encodingType: navigator.camera.EncodingType.JPEG, 
            saveToPhotoAlbum: false, 
            allowEdit: false, 
            quality: 80
        };

        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.images = base64Image;
        }, (err) => {
        });
    }
}
