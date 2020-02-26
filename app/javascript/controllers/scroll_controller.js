function scrollWin(elementSelector, offset, time){
  if(typeof(offset)=="undefined")
    offset = 0;
  if(typeof(time)=="undefined")
    time = 500;
  $('body,html').stop().animate({scrollTop: $(elementSelector).offset().top+offset}, time);
}

$viewport = $('body,html');
$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
  if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
     $viewport.stop();
  }
});

$(document).on("click", ".scroll-down", function(e){
  scrollWin(".intro-about", 0, 1000);
});

