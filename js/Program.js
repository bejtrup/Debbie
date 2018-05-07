var date =  new Date
var min = date.getMinutes() < 10 ? 0+''+date.getMinutes() : date.getMinutes();
var time = parseInt(date.getHours()+""+min);
var now = { day: 0, time: time };

$( function(){
  settime(now);
  makeMusikProgram();
  }
);

function makeMusikProgram(){
    $.each(programArray, function(k,v){
      var rateClass = BandRating[k] == undefined ? "ikkeSat" : BandRating[k];
      if(v.day >= now.day && rateClass != -1){
         //var start = v.start == 0000 ? 2400 : v.start;
         //var start = v.start < 100 ? 2400+v.start  : v.start;
         var start = v.start ;
         var h = parseInt(start.toString().slice(0, -2));
         h = !h ? "0" : h;
         var m = parseInt(start.toString().slice(-2)) * 0.069444445;
         var left = h * 4.1666666667; // for hours
         left = left + m;
         var length = v.length * 4.16666667;
         var startString = (start.toString().slice(0, -2) == 0 ? "0": start.toString().slice(0, -2)) + ":" + (v.start.toString().slice(-2) == 0 ? "00" : v.start.toString().slice(-2));
         if(rateClass == 1) {
           rateClass = "poo";
         } else if( rateClass == 0 ) {
          rateClass = "pee";
         }
         var band = "<div class='band "+rateClass+"' style='left: "+left+"%; top:0; width: "+length+"%;'><div><h4>"+v.name+"</h4><h6>kl"+ startString +" på "+v.stage+"</h6></div></div>";
         $("#day_"+v.day).find(".stage"+v.stageId).append(band);
       }
    });
}

function settime(now) {
  date =  new Date
  min = date.getMinutes() < 10 ? 0+''+date.getMinutes() : date.getMinutes();
  time = parseInt(date.getHours()+""+min);
  now = { day: 3, time: time };
  console.log(now);
  var t = now.time == 0000 ? 2400 : now.time;
  var h = parseInt( t.toString().slice(0, -2) );
  var m = parseInt(t.toString().slice(-2)) * (100/4.835/60);
  var left = (now.day * 500) + (h*(100/4.835)) - (30) ; // 10 = marginleft 500=bredden for en dag // 100/8 da der er 8 timer på en skærm
  left = left + m;

  $(".program").css({"transform": "translateX(-"+left+"vw)"});
  $("#nowArrowText").html(h+":"+time.toString().slice(-2));
  setTimeout(function(){ settime(now)  }, 30000 ); //0.5min.
}

$(document).ready(function(){
    $('div#landscape').bind('scroll',chk_scroll);
});

var isScrolling;
var lastScroll = 0;
var scrolledDistLeft = 0;
var fiftyProcent = $(window).width() / 2;

function chk_scroll()
{
  //get dist and end
  scrolledDistLeft = $("div#landscape").scrollLeft() - lastScroll;
  window.clearTimeout( isScrolling );
  isScrolling = setTimeout(function() {
		// Run the callback
		console.log( 'Scrolling has stopped.' );
    lastScroll = $("div#landscape").scrollLeft();

    //$(".SkamLepos").css({"transform":"translateX(0)"})
	}, 66);

  // rotate now arrow
   if($("div#landscape").scrollLeft() > 10){
     $("div.nowArrow").addClass("left");
   } else {
     $("div.nowArrow").removeClass("left");
   }
   // show SkamLepos
  //  if(scrolledDistLeft > 300){
  //    var left = ((scrolledDistLeft*0.6)-300);
  //    left = left > 50 ? 50 : left;
  //    $(".SkamLepos").css({"transform":"translateX(-"+left+"px)"})
  //  }
  //  if($("div#landscape").scrollRight() < fiftyProcent){
  //    console.log($("div#landscape").scrollRight());
  //    var right = $("div#landscape").scrollRight() - fiftyProcent -50;
  //    $(".SkamLepos").css({"transform":"translateX("+right+"px)"})
  //  }
  //  if($("div#landscape").scrollRight() < 5){
  //    $(".SkamLepos").css({"transform":"translateX(0)"})
  //  }
}

function goToNow(){
  $("div#landscape").animate({scrollLeft: 0}, 700);
  return false;
}

// $.fn.extend({
//   scrollRight: function(property) {
//     return this[0].scrollWidth - (this[0].scrollLeft + this[0].clientWidth) + 1;
//   }
// });
