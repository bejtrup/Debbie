
if( localStorage.getItem("BandRating") ){
  var BandRating = JSON.parse(localStorage.getItem("BandRating"));
} else {
  var BandRating = [];
}

$(function(){
  var startBand = BandRating.length;
  if( startBand < 182 ){
    $("div.bandName").html(getBandNameHtml(startBand)).removeClass("out");
    var isAnimationOn = false;
    $("img.food").click(function(){
      if(!isAnimationOn){
        $this = $(this);
        $this.addClass("fall");
        isAnimationOn = true;
        setTimeout(function(){
          var id = $("div.bandName input").val();
          id = parseInt(id)+1
          var rate = $this.data("rate");
          saveRateBand(id, rate);
          loadNextBand(id);
        }, 600);
        setTimeout(function(){
          $this.removeClass("fall");
          isAnimationOn = false;
        }, 1600);
      }
    });
  } else {
      slutScene();
  }
  if(startBand <= 0){
    $("#menu").addClass("out");
  }
});

function saveRateBand(id, rate){
  if(BandRating[id] == undefined){
    BandRating.push(rate)
  } else {
    BandRating[id] = rate;
  }
  localStorage.setItem('BandRating', JSON.stringify(BandRating));
  updateMusikProgram = true;
}
function loadNextBand(id){
  if(id < 182){
    $("div.bandName").addClass("out");
    setTimeout(function(){
      $("div.bandName").html(getBandNameHtml( id ));
      $("div.bandName").removeClass("out");
    }, 350);
  } else {
    slutScene();
  }
}
function getBandNameHtml(id){
  var name = programArray[id].name;
  var day = programArray[id].date;
  return "<h1>"+name+" ?</h1><h4>"+day+" <a href='https://open.spotify.com/search/artists/"+encodeURI(name)+"' target='_blank'>søg spotify</a><h4><input type='hidden' name=''' value='"+id+"'>";
}

function slutScene(){
  $("div#ratebands").hide();
  $("div#endscene").show();
}

//  menu
$(function(){
  $("div#menubtn").on('click', function(){
    $("#menu").addClass("out");
  });
  $("#close").on('click', function(){
    $("#menu").removeClass("out");
  });
  $("div#listbtn").on('click', function(){
    $("#list").addClass("out");
    makeList();
  });
  $("#closeList").on('click', function(){
    $("#list").removeClass("out");
  });
});

function makeList(){
  var html = '';
$.each(programArray,function(k,v){
   var rate = BandRating[k];
   html += getListhtml(k,v.name,rate);
});
  html += "<div class='listitem'><h5 onclick='clearLocalStoarge();'>nulstil alle</h5></div>"
  $("div#listWrapper").html(html);
}

function getListhtml(id,name,rate){
  var html = "";
  var onclick = "onclick='toggleRating("+id+","+rate+")'";
  html += "<div id='listitem_"+id+"'' class='listitem'>";
  if( rate == -1 ){
    html += "<h4 "+onclick+" class='nope'><strike>"+name+"</strike><span>nope</span></h4>";
  }
  else if ( rate == 0) {
    html += "<h4 "+onclick+" class='meh'>"+name+"<span>meh</span></h4>";
  }
  else if (rate == 1){
    html += "<h4 "+onclick+" class='yeah'>"+name+"</b><span>Yeah</span></h4>";
  }
  else {
    html += "<h4 class='nope'>"+name + "<span>?</span></h4>";
  }
  html += "</div>";
  return html;
}

function clearLocalStoarge(){
  var con = confirm("Er du helt helt helt sikker?");
  if(con){
    localStorage.removeItem("BandRating");
    location.reload();
  }
}

function toggleRating(id, rate) {
  var newrate = rate == 1 ? -1 : rate + 1;
  saveRateBand(id,newrate)
  var html = getListhtml(id,programArray[id].name,newrate);
  $("div#listitem_"+id).replaceWith(html);
  updateMusikProgram = true;
}
