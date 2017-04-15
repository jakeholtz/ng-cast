angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
