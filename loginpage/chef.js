var time;
var defaultms=3000;
var index=-1;
var repeated=false
function changeImage(){
  var list=document.getElementsByClassName("sliderimage");
  if(index<list.length){
    for(var i=0;i<list.length;i++){
      list[i].style.display="none";
    }
  }
  if(index==list.length-1&&repeated==false){
    list[index].style.display="flex"
  }
  index++;
  if(index>list.length-1&&repeated){
    index=0;
    list[list.length-1].style.display="none";
  }
  if(index<list.length) {
    list[index].style.display="flex";
  }
  time=setTimeout(changeImage,defaultms)
}
function repeat(){
  if(document.getElementById("repeat").checked==true){
    repeated=true;
  }
  else repeated=false;
}
function play(){
  time=setTimeout(changeImage,defaultms);
  document.getElementById("sliderbttn").innerHTML="Pause";
  document.getElementById("sliderbttn").style.color="red"
}
function pause(){
  document.getElementById("sliderbttn").innerHTML="Play";
  document.getElementById("sliderbttn").style.color="green"
  clearTimeout(time); 
}
function changeButton(){
  var bttn=document.getElementById("sliderbttn");
  if(bttn.innerHTML=="Pause"){
    pause();
  }
  else play();
}
function changeSeconds(){
  var input=document.getElementById("interval");
  clearTimeout(time);
  defaultms=input.value*1000;
  play()
}
document.addEventListener("DOMContentLoaded",function start(){
  changeImage(defaultms);
});
function compare(index) {
  return function(a, b) {
      var A = $(a).children('td').eq(index).text(), B = $(b).children('td').eq(index).text();
      return $.isNumeric(A) && $.isNumeric(B) ? A - B : A.toString().localeCompare(B)
  }
}
var ascendent=true;
$(function(){
  $('th').click(function(){
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(compare($(this).index()))
    ascendent = !ascendent;
    if (!ascendent){rows = rows.reverse()}
    for (var i = 0; i < rows.length; i++){table.append(rows[i])}
  })
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
  if (this.readyState==4 && this.status==200) {
      document.getElementById("chefTable").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","getchefs.php",true);
  xmlhttp.send();
})
var awardTime;
var direction=true;
var ms=3000;
function changeAwardSlides(){
  console.log(direction);
  if(direction==true){
    if($('.active').next().length){
      $slide = $('.active').width();
    $('.containerSlide').animate({left: '-=' + $slide});
    $('.active').next().removeClass('next');
    $('.active').prev().removeClass('prev');
    $('.active').next().next().addClass('next');
    
    $('.active').addClass('prev');
    $('.active').next().addClass('active');
    $('.active.prev').removeClass('active');
    }
    else {
      direction=false;
    }
  }
  else {
    if($('.active').prev().length){
      $slide = $('.active').width();
      $('.containerSlide').animate({left: '+=' + $slide});
      $('.active').next().removeClass('next');
      $('.active').prev().removeClass('prev');
      $('.active').prev().prev().addClass('prev');
      
      $('.active').addClass('next');
      $('.active').prev().addClass('active');
      $('.active.next').removeClass('active');
    }
    else direction=true;
  }
  awardTime=setTimeout(changeAwardSlides,ms);
}
function playJQ(){
  awardTime=setTimeout(changeAwardSlides,ms);
  $('#playpause').text("Pause");
}
function pauseJQ(){
  clearTimeout(awardTime);
  $('#playpause').text("Play");
}
jQuery(document).ready(function ($) {
  $('.slide:nth-child(' +2+ ')').addClass('active');
  $('.slide:nth-child(' + 2 + ')').prev().addClass('prev');
  $('.slide:nth-child(' + 2+ ')').next().addClass('next');

  $('#slideprev').click(function(){
    pauseJQ();
    $slide = $('.active').width();
    $('.containerSlide').animate({left: '+=' + $slide});
    $('.active').next().removeClass('next');
    $('.active').prev().removeClass('prev');
    $('.active').prev().prev().addClass('prev');
    direction=false;
    $('.active').addClass('next');
    $('.active').prev().addClass('active');
    $('.active.next').removeClass('active');
  
  })
  $('#slidenext').click(function(){
    pauseJQ();
    $slide = $('.active').width();
    $('.containerSlide').animate({left: '-=' + $slide});
    $('.active').next().removeClass('next');
    $('.active').prev().removeClass('prev');
    $('.active').next().next().addClass('next');
    direction=true;
    $('.active').addClass('prev');
    $('.active').next().addClass('active');
    $('.active.prev').removeClass('active');
  })
  $('#playpause').click(function(){
    if($('#playpause').text()=="Pause"){
      pauseJQ();
    }
    else playJQ();
  })
  $('#intervalAwards').change(function(){
    ms=$('#intervalAwards').val()*1000;
    clearTimeout(awardTime);
    changeAwardSlides();
  })
  changeAwardSlides();
  
});
