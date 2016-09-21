import {Page} from 'ionic-angular';
import {Camera} from 'ionic-native';
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor() {
    this.images=[];

  }


  takepic() {
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
