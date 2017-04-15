angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
      this.video = [];
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
