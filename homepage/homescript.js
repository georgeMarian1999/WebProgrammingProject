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
  time=setTimeout(changeRecipe,3000);
}