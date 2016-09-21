// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        if (cordova.platformId == 'android') { StatusBar.hide(); }
        // 处理 Cordova 暂停并恢复事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        document.getElementById('btnAlert').onclick = function () {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        };

        document.getElementById('btnConfirm').onclick = function () {
            navigator.notification.confirm(
                'You are the winner!', // message
                onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart', 'Exit']     // buttonLabels
            );
        };


        document.getElementById('btnPrompt').onclick = function () {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok', 'Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        };
        document.getElementById('btnBeep').onclick = function () {
            navigator.notification.beep(2);
        };


        document.getElementById('btnTakePhoto').onclick = function () {
            navigator.camera.getPicture(function (imageURI) {
                var pic = document.getElementById('divPic');
                pic.innerHTML = "<img src= '" + imageURI + "'/>";
            }, null, null);
        };

        document.getElementById('btnShowLocation').onclick = function () {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        };

        document.getElementById('followLocation').onclick = function () {
             var watchID = navigator.geolocation.watchPosition(onSuccess1, onError1, { timeout: 300 });

        };
       
        document.getElementById('btnFindContact').onclick = function () {
            // find all contacts with 'Bob' in any name field
            var options = new ContactFindOptions();
            options.filter = "zh";
            options.multiple = true;
            options.desiredFields = [navigator.contacts.fieldType.id];
            options.hasPhoneNumber = true;
            var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
            navigator.contacts.find(fields, onSuccess2, onError2, options);
        };


        document.getElementById('btnOpenBrowser').onclick = function () {
            var ref = cordova.InAppBrowser.open('http://10.23.35.166:8086/login.aspx',
                '_blank', 'location=yes');
            ref.addEventListener('loadstart', function (event) {
                // alert(event.url);
            });
        };
        

    };
    
    function onSuccess2(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError2(contactError) {
        alert('onError!');
    };
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    var onSuccess = function (position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
              'Longitude: ' + position.coords.longitude + '\n' +
              'Altitude: ' + position.coords.altitude + '\n' +
              'Accuracy: ' + position.coords.accuracy + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
              'Heading: ' + position.coords.heading + '\n' +
              'Speed: ' + position.coords.speed + '\n' +
              'Timestamp: ' + position.timestamp + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    }
    function alertDismissed() {
        // do something
    }
    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess1(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                            'Longitude: ' + position.coords.longitude + '<br />' +
                            '<hr />' + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError1(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    }

   


} )();