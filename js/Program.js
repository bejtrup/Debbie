var now = { day: 3, time: 2300 };
$( makeMusikProgram );
$( function(){ settime(now) } );

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
  console.log(now);
  var time = now.time == 0000 ? 2400 : now.time;
  var h = time >= 1000 ? parseInt(time.toString().substr(0, 2)) : parseInt(time.toString().substr(0, 1));
  var left = (now.day * 300) + (h*(100/8)); // 10 = marginleft 300=bredden for en dag // 100/8 da der er 8 timer på en skærm
  $(".program").css({"transform": "translateX(-"+left+"vw)"});
}
