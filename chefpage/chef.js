var time;
var defaultms=3000;
var index=-1;
var repeated=false
function changeImage(){
  var list=document.getElementsByClassName("sliderimage");
  console.log(index);
  console.log(list.length);
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
  $('th').click(function(){
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(compare($(this).index()))
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (var i = 0; i < rows.length; i++){table.append(rows[i])}
  })
});
function compare(index) {
  return function(a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }