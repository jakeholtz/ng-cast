angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
      // console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
