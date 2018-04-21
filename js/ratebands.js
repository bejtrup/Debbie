
if( localStorage.getItem("BandRating") ){
  var BandRating = JSON.parse(localStorage.getItem("BandRating"));
} else {
  var BandRating = [];
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
        var id = $("div.bandName input").val();
        id = parseInt(id)+1
        var rate = $this.data("rate");
        rateBand(id, rate);
        loadNextBand(id);
      }, 600);
      setTimeout(function(){
        $this.removeClass("fall");
        isAnimationOn = false;
      }, 1600);
    }
  });
});

function rateBand(id, rate){

  BandRating.push(rate)
  localStorage.setItem('BandRating', JSON.stringify(BandRating));
}
function loadNextBand(id){
  $("div.bandName").addClass("out");
  setTimeout(function(){
    $("div.bandName").html(getBandNameHtml( id ));
    $("div.bandName").removeClass("out");
  }, 700);
}
function getBandNameHtml(id){
  var name = programArray[id].name;
  var day = programArray[id].date;
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
