'use strict';

angular.module('playListApp')
    .controller('ListController', ['$scope', 'videos', function($scope, videos) {
        $scope.videos = videos.getVideoList();
        $scope.play = function() {
            console.log('hey');
            $scope.videos = videos.getVideoList();
            console.log($scope.videos)
            $scope.length = $scope.videos.length;
            var i = 0;
            $scope.video = $scope.videos[i];
            $scope.playerVars = {
                controls: 0,
                autoplay: 1,
                start: $scope.videos[i].start,
                end: $scope.videos[i].end
            };
            $scope.theBestVideo = $scope.videos[i].id;
            $scope.$on('youtube.player.ended', function($event, player) {
                console.log(player)

                $scope.theBestVideo = $scope.videos[++i].id;
                $scope.video = $scope.videos[i];

                $scope.playerVars = {
                    controls: 0,
                    autoplay: 1,
                    start: $scope.videos[i].start,
                    end: $scope.videos[i].end
                };

                player.playVideo();


            });

        }


    }])

.controller('FormController', ['$scope', 'videos', function($scope, videos) {
    // console.log($scope.video);
    $scope.video = { id: '', title: '', start: 0, end: 0 };

    $scope.addVideo = function() {

        $scope.video.id = $scope.video.id.replace('https://www.youtube.com/watch?v=', '')
            // $scope.video.url=$scope.video.url+'?autoplay=1&start='+$scope.video.start+'&end='+$scope.video.end;
            //console.log($scope.video.url)
        videos.putVideo({ id: $scope.video.id, title: $scope.video.title, start: $scope.video.start, end: $scope.video.end });
        // console.log(videos.getVideoList())




    }



}])

// .controller('VideoController', ['$scope', 'videos', function($scope, videos) {


// }]);
