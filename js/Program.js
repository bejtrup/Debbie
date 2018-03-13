$( makeMusikProgram );
function makeMusikProgram(){
   $.each(programArray, function(k,v){
     var day =  $("#day_"+k);
     $.each(v, function(k,v){
        var start = v.start == 0000 ? 2400 : v.start;
          var h = start >= 1000 ? parseInt(start.toString().substr(0, 2)) : parseInt(start.toString().substr(0, 1));
        var m = parseInt(start.toString().substr(2, 4));
        var left = h * 4.1666666667; // for hours
        left = left + m; //husk at lave for min
        var band = "<h4 style='transform: translateX("+left+"%);'>"+v.name+"</h4>";
        day.append(band);
     });
   });
}

var now = { day: 4, time: 800 };
$( function(){ settime(now) } );

function settime(now) {
  console.log(now);
  var time = now.time == 0000 ? 2400 : now.time;
  var h = time >= 1000 ? parseInt(time.toString().substr(0, 2)) : parseInt(time.toString().substr(0, 1));
  var left = (now.day * 600) + (h*(100/4)); // 10 = marginleft 600=bredden for en dag // 100/4 da der er 4 timer på en skærm
  $(".program").css({"transform": "translateX(-"+left+"vw)"});
  //$(".program").css({"transform": "translateX(-25695px)"});
}
$(function(){
  $("div.bandName").html(getBandNameHtml(0)).removeClass("out");
  var isAnimationOn = false;
  $("div.food").click(function(){
    if(!isAnimationOn){
      $this = $(this);
      $this.addClass("fall");
      isAnimationOn = true;
      setTimeout(function(){
        $this.removeClass("fall");
        isAnimationOn = false;
        loadNextBand();
      }, 1200);
    }
  });
});

function rateBand(){

}
function loadNextBand(){
  $("div.bandName").addClass("out");
  setTimeout(function(){
    var id = $("div.bandName input").val();
    id = parseInt(id)+1
    $("div.bandName").html(getBandNameHtml( id ));
    $("div.bandName").removeClass("out");
  }, 700);
}
function getBandNameHtml(id){
  var name = bands[id].name;
  var day = bands[id].fullDate;
  return "<h1>"+name+"</h1><h4>"+day+"</h4><input type='hidden' name=''' value='"+id+"'>";
}
