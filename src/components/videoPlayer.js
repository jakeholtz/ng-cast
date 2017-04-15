angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
      currentVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
