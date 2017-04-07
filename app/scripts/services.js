'use strict'
angular.module('playListApp')
    .service('videos', ['$http', function($http) {
            this.videos = [];


            this.getVideoList = function() {
                return this.videos;
            }

            this.getVideo = function(id) {
                // return API CALL to Youtube 

                // return $http({
                //     method: 'GET',
                //     url: "https://www.youtube.com/iframe_api"}).then(function successCallback(response) {
                //     // this callback will be called asynchronously
                //     // when the response is available
                // }, function errorCallback(response) {
                //     // called asynchronously if an error occurs
                //     // or server returns response with an error status.
                // });

            }

            this.putVideo = function(obj) {
                this.videos.push(obj);
            }
        }]);
