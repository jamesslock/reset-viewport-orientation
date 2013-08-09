// trigger a reflow after orientation change to fix iphone bug
var forceReflow = function(elem) {
    elem = elem || document.documentElement;

    // force a reflow by increasing size 1px
    var width = elem.style.width,
        px = elem.offsetWidth+1;

    elem.style.width = px+'px';

    setTimeout(function(){
        // undo resize, unfortunately forces another reflow
        elem.style.width = width;
        elem = null;
    }, 0);
};

window.addEventListener('orientationchange', function() {
  forceReflow();
});