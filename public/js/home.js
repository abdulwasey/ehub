
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 3) {
        $(".black").css("background" , "white");
        $("a").css("color","black");
        $(".dropdown-content").css("background-color","white");
        
      }

      else{
          $(".black").css("background" , "transparent");
             
      }
  });
});


// **** AutoScroll + ScrollSpy ****
var CORRECTION = 50;  // height of the navbar 
// don't forget to setup the data-offset attribute of the <body> tag

var DELAY_READING = 8000; // 4 seconds = 4000; 10 seconds = 10000
var DELAY_SCROLLING = 5500;

var links = [ '#slide1', '#slide2', '#slide3', '#slide4', '#slide5' ];
var timerId = 0;

delayLinks(0);

$( '#slide5 a' ).click(function(event) { 
  event.preventDefault();
  clearTimeout(timerId); 
});

$( '#navbar-1 li a' ).click(function(event) {
  event.preventDefault();
  scrollToLink( $(this).attr('href') );
});

function delayLinks( i ) {
  if( i >= links.length ) i = 0;
  scrollToLink( links[i] );
  
  var next = ( i == links.length - 1 ? 0 : i + 1);
  timerId = setTimeout(function() { delayLinks( next ) }, DELAY_READING ); 
}

function scrollToLink( link ) {
  selectLink = $( link );
  if ( selectLink.length ) {
    var top = selectLink.offset().top - CORRECTION;
    $('body,html').stop().animate({scrollTop: top}, DELAY_SCROLLING);
  } else {
    console.log('The link is not found: ' + link);
  }
}


$(document).ready(function() {
  
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
    siteFooter();
  });
  
  function siteFooter() {
    var siteContent = $('#site-content');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('#site-footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    console.log('Content Height = ' + siteContentHeight + 'px');
    console.log('Content Width = ' + siteContentWidth + 'px');
    console.log('Footer Height = ' + siteFooterHeight + 'px');
    console.log('Footer Width = ' + siteFooterWidth + 'px');

    siteContent.css({
      "margin-bottom" : siteFooterHeight + 50
    });
  };
});