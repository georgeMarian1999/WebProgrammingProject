const judetAlba =["Alba Iulia", "Abrud","Teius"];
const judetCluj=[ "Cluj-Napoca","Turda","Baciu"];
const judetSibiu=["Sibiu","Medias","Avrig"];
var initializare =function(){
  var orasSelect=document.getElementById("orasSelect");
  orasSelect.options.length=0;
  for (var i = 0; i < judetAlba.length; i++) {
    var optn = judetAlba[i];
    var el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    orasSelect.appendChild(el);
}};
document.addEventListener("DOMContentLoaded", initializare);
function onJudetSelect(){
  var judet=document.getElementById("judetSelect")
  var orasSelect=document.getElementById("orasSelect");
  if(judet.options[judet.selectedIndex].value==="Alba"){
    orasSelect.options.length=0;
    for (var i = 0; i < judetAlba.length; i++) {
      var optn = judetAlba[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      orasSelect.appendChild(el);
  }
  } 
  if(judet.options[judet.selectedIndex].value==="Cluj"){
    orasSelect.options.length=0;
    for (var i = 0; i < judetCluj.length; i++) {
      var optn = judetCluj[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      orasSelect.appendChild(el);
  }
  }
  if(judet.options[judet.selectedIndex].value==="Sibiu"){
    orasSelect.options.length=0;
    for (var i = 0; i < judetSibiu.length; i++) {
      var optn = judetSibiu[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      orasSelect.appendChild(el);
  }
  } 
}