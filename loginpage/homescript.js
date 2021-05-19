var slideindex=0;
document.addEventListener("DOMContentLoaded",function c() {
  changeRecipe(); 
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("recTable").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","getrecipes.php",true);
  xmlhttp.send();
});
var time;
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
})
function nextSlide(){
  clearTimeout(time);
  slideindex++;
  nextRecipe();
}
function previousSlide(){
  clearTimeout(time);
  slideindex--;
  previousRecipe();
}
function previousRecipe(){
  var listItems=document.getElementsByClassName("listItem");
  for(var i=0;i<listItems.length;i++){
    listItems[i].style.display= "none";
  }
  if(slideindex<0) { slideindex=listItems.length-1;}
  console.log(slideindex);
  listItems[slideindex].style.display="block";
  time=setTimeout(changeRecipe,3000);
}
function nextRecipe(){
  var listItems=document.getElementsByClassName("listItem");
  for(var i=0;i<listItems.length;i++){
    listItems[i].style.display= "none";
  }
  if(slideindex>=listItems.length) { slideindex=0;}
  listItems[slideindex].style.display="block";
  time=setTimeout(changeRecipe,3000);
}

function changeRecipe(){
  var listItems=document.getElementsByClassName("listItem");
  for(var i=0;i<listItems.length;i++){
    listItems[i].style.display= "none";
  }
  slideindex++;
  if(slideindex>=listItems.length) { slideindex=0;}
  listItems[slideindex].style.display="block";
  time=setTimeout(changeRecipe,5000);
}
var slideindexJQ=-1;
var timeJQ;
function changeRecipeJQ(){
  var $listItems=$("li.listItemJQ");
  $listItems.hide();
  slideindexJQ++;
  if(slideindexJQ>=$listItems.length){
    slideindexJQ=0;
  }
  if(slideindexJQ<0){
    slideindexJQ=$listItems.length-1;
  }
  $listItems.eq(slideindexJQ).slideDown();
  timeJQ=setTimeout(changeRecipeJQ,3000);
}
$(function() {
  changeRecipeJQ();
  console.log("ceva");
  $("div.nextButtonJQ").click(function(){
    clearTimeout(timeJQ);
    changeRecipeJQ();
  })
  $("div.previousButtonJQ").click(function(){
    clearTimeout(timeJQ);
    slideindexJQ=slideindexJQ-2;
    changeRecipeJQ();
  })
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
  if (this.readyState==4 && this.status==200) {
      document.getElementById("recTable").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","getrecipes.php",true);
  xmlhttp.send();
  
}); 