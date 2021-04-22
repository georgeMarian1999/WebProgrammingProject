var slideindex=0;
document.addEventListener("DOMContentLoaded",function c() {
  changeRecipe(); 
})
var time;
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
  $("div.nextButtonJQ").click(function(){
    clearTimeout(timeJQ);
    changeRecipeJQ();
  })
  $("div.previousButtonJQ").click(function(){
    clearTimeout(timeJQ);
    slideindexJQ=slideindexJQ-2;
    changeRecipeJQ();
  })
}); 