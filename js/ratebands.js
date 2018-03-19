$(function(){
  $("div.bandName").html(getBandNameHtml(0)).removeClass("out");
  var isAnimationOn = false;
  $("div.food").click(function(){
    if(!isAnimationOn){
      $this = $(this);
      $this.addClass("fall");
      isAnimationOn = true;
      setTimeout(function(){
        loadNextBand();
      }, 600);
      setTimeout(function(){
        $this.removeClass("fall");
        isAnimationOn = false;
      }, 1600);
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

//  menu
$(function(){
  $("div#menubtn").on('click', function(){
    $("#menu").addClass("out");
  });
  $("#close").on('click', function(){
    $("#menu").removeClass("out");
  });
});
