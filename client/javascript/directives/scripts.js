// Quick directive--to get used to the concept
angular.module("signaturePieces", []);

angular.module('signaturePieces')
.directive('helloFriend', function() {
  return {
    template: '<span class="red1">S</span><span class="blue2">i</span><span class="yellow3">g</span><span class="green4">n</span><span class="red1">a</span><span class="blue2">t</span><span class="yellow3">u</span><span class="green4">r</span4><span class="red1">e</span> <span class="blue2">P</span><span class="yellow3">i</span><span class="green4">e</span><span class="red1">c</span><span class="blue2">e</span><span class="yellow3">s</span>',
    restrict: 'CA',
  }
});