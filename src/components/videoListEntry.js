angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){ //check & function binding
      this.video = {};
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
