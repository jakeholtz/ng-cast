angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {obj: '='},
    template: '</div></div>'
  };
});
