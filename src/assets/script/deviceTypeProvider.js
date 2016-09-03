'use strict';
var app = angular.module('profileApp.deviceTypeProvider', []);

app.provider('deviceType', function (
    $windowProvider
) {
    var $window = $windowProvider.$get();
    this.$get = function () {
        return {
            // Return device type (desktop/tablet/mobile)
            getDeviceType: function () {
                var deviceType = 'desktop',
                    userAgentString = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'],
                    isSmart = (/iPhone|iPod|iPad|Silk|Android| BlackBerry | Opera Mini| IEMobile /).test(userAgentString),
                    width = $window['outerWidth'];

                if (isSmart) deviceType = width >= 768 ? 'tablet' : 'mobile';

                return deviceType;
            }
        }
    };
});