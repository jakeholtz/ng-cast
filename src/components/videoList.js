angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
      this.onClick = function () {};
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
