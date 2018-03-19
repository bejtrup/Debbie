var date =  new Date
var min = date.getMinutes() < 10 ? 0+''+date.getMinutes() : date.getMinutes();
var time = parseInt(date.getHours()+""+min);
var now = { day: 4, time: time };

$( function(){
  settime(now);
  makeMusikProgram();
  }
);

function makeMusikProgram(){
    $.each(programArray, function(k,v){
      if(v.day >= now.day){
  //    var day =  $("#day_"+k);
         var start = v.start == 0000 ? 2400 : v.start;
         var h = parseInt(start.toString().slice(0, -2));
         var m = parseInt(v.start.toString().slice(-2)) * 0.069444445;
         var left = h * 4.1666666667; // for hours
         left = left + m;
         var length = 1.5 * 4.16666667;
         var top = (v.stage) * (100/6);

         var band = "<div class='band' style='left: "+left+"%; top:"+top+"%; width: "+length+"%;'><div><h4>"+v.name+"</h4><h6>kl"+ v.start +" ("+v.length+"t.) (scene "+v.stage+")</h6></div></div>";
         $("#day_"+v.day).append(band);
       }
    });

    $(".band:odd").addClass("poo");
    $(".band:even").addClass("pee");
}

function settime(now) {
  date =  new Date
  min = date.getMinutes() < 10 ? 0+''+date.getMinutes() : date.getMinutes();
  time = parseInt(date.getHours()+""+min);
  now = { day: 4, time: time };
  console.log(now);
  var t = now.time == 0000 ? 2400 : now.time;
  var h = parseInt( t.toString().slice(0, -2) );
  var m = parseInt(t.toString().slice(-2)) * (100/8/60);
  var left = (now.day * 300) + (h*(100/8)) - (100/8); // 10 = marginleft 300=bredden for en dag // 100/8 da der er 8 timer på en skærm

  left = left + m;

  $(".program").css({"transform": "translateX(-"+left+"vw)"});
  $("#nowArrowText").html(h+":"+time.toString().slice(-2));
  setTimeout(function(){ settime(now)  }, 30000 ); //0.5min.
}

$(document).ready(function(){
    $('div#landscape').bind('scroll',chk_scroll);
});


function chk_scroll()
{
   if($("div#landscape").scrollLeft() > 10){
     $("div.nowArrow").addClass("left");
   } else {
     $("div.nowArrow").removeClass("left");
   }
}

function goToNow(){
  $("div#landscape").animate({scrollLeft: 0}, 700);
  return false;
}
