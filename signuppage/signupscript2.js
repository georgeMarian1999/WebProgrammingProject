var crtpage=0;
var pagesTitles=["information","personal","terms"];
var pagesForms=["informationform","personalform","termsform"]
var validated=false;
function validateLoginInformation(){
  validated=false;
  var validatedEmail=onValidateEmail();
  var validatedPassword=onValidatePassword();
  var validatedConfirmPassword=onValidateConfirmPassword();
  if(validatedEmail&&validatedPassword&&validatedConfirmPassword){
    validation();
  }
  else {
    nonvalidation();
  }
}
function validatePersonalInformation(){
  validated=false;
  var validatedFName=validateLName();
  var validatedLName=validateFName();
  var validatedPhone=validatePhone();
  var selectFormat=document.getElementById("dateFormat");
  var validatedDate=validateDate(document.getElementById("date").value,selectFormat.options[selectFormat.selectedIndex].value);
  if(validatedFName&&validatedLName&&validatedPhone&&validatedDate){
    validation();
  }
  else {
    nonvalidation();
  }
}
function validateTermsForm(){
  validated=false;
  if(document.getElementById("terms").checked==true){
    validation();
  }
  else {
    nonvalidation();
  }
}
function validation(){
  document.documentElement.style.cssText = `
  --button-color: #0fd77f;
  `
  validated=true;
}
function nonvalidation(){
  document.documentElement.style.cssText = `
          --button-color: #f77062;
          `
  validated=false;
}
function onValidateEmail(){
  var email = /^[\w]+[\w\.]+@([\w]+\.)+[\w]{2,4}$/;
  var emailInput=document.getElementById("email");
  if(emailInput.value!=''&&emailInput.value.match(email)){
    document.getElementById("validatedemail").style.display="flex";
    document.getElementById("nonvalidatedemail").style.display="none";
    return true;
  }
  else {
    document.getElementById("validatedemail").style.display="none";
    document.getElementById("nonvalidatedemail").style.display="flex";
    return false;
  }
}
function validatePhone(){
  var phone=/^\(\+[0-9]{2,}\)[0-9]{9}/;
  var phoneinput=document.getElementById("phone");
  if(phoneinput.value!=''&&phoneinput.value.match(phone)){
    document.getElementById("validatephone").style.display="flex";
    document.getElementById("nonvalidatephone").style.display="none";
    return true;
  }
  else{
    document.getElementById("validatephone").style.display="none";
    document.getElementById("nonvalidatephone").style.display="flex";
    return false;
  }
}
function validateFName(){
  var fname=/^[a-z0-9]+$/;
  var fnameinput=document.getElementById("fname");
  if(fnameinput.value!=''&&fnameinput.value.match(fname)){
    document.getElementById("validatefname").style.display="flex";
    document.getElementById("nonvalidatefname").style.display="none";
    return true;
  }
  else{
    document.getElementById("validatefname").style.display="none";
    document.getElementById("nonvalidatefname").style.display="flex";
    return false;
  }
}
function validateDate(date,format){
  var zzllaaaa=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
  var llzzaaaa=/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
  var zzllaa=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/([5-9][0-9])$/;
  if(date.match(zzllaaaa)&&format=='zz/ll/aaaa'){
    document.getElementById("validatedate").style.display="flex";
    document.getElementById("nonvalidatedate").style.display="none";
    return true;
    
  }
  if(date.match(llzzaaaa)&&format=='ll/zz/aaaa'){
    document.getElementById("validatedate").style.display="flex";
    document.getElementById("nonvalidatedate").style.display="none";
    return true;
  }
  if(date.match(zzllaa)&&format=='zz/ll/aa'){
    document.getElementById("validatedate").style.display="flex";
    document.getElementById("nonvalidatedate").style.display="none";
    return true;
  }
  document.getElementById("validatedate").style.display="none";
  document.getElementById("nonvalidatedate").style.display="flex";
  return false;
}
function validateLName(){
  var lname=/^[a-z0-9]+$/;
  var lnameinput=document.getElementById("lname");
  if(lnameinput.value!=''&&lnameinput.value.match(lname)){
    document.getElementById("validatelname").style.display="flex";
    document.getElementById("nonvalidatelname").style.display="none";
    return true;
  }
  else{
    document.getElementById("validatelname").style.display="none";
    document.getElementById("nonvalidatelname").style.display="flex";
    return false;
  }
}
function showPassword(){
  document.getElementById("show").style.display="none";
  document.getElementById("hide").style.display="flex";
  document.getElementById("pass").setAttribute('type',"text");
}
function hidePassword(){
  document.getElementById("show").style.display="flex";
  document.getElementById("hide").style.display="none";
  document.getElementById("pass").setAttribute('type',"password");
}
function showConfirmPassword(){
  document.getElementById("showconfirm").style.display="none";
  document.getElementById("hideconfirm").style.display="flex";
  document.getElementById("confirmpass").setAttribute('type',"text");
}
function hideConfirmPassword(){
  document.getElementById("showconfirm").style.display="flex";
  document.getElementById("hideconfirm").style.display="none";
  document.getElementById("confirmpass").setAttribute('type',"password");

}
function onValidatePassword(){
  var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*!)(?=.*[a-zA-Z])[a-zA-Z0-9!]*$/;
  var passwordInput=document.getElementById("pass");
  if(passwordInput.value!=''&&passwordInput.value.match(password)){
    document.getElementById("show").style.color="green";
    document.getElementById("hide").style.color="green";
    return true;
  }
  else {
    document.getElementById("show").style.color="red";
    document.getElementById("hide").style.color="red";
    return false;
  }
}
function onValidateConfirmPassword(){
  var password = document.getElementById("pass");
  var passwordInput=document.getElementById("confirmpass");
  if(passwordInput.value!=''&&passwordInput.value==password.value){
    document.getElementById("showconfirm").style.color="green";
    document.getElementById("hideconfirm").style.color="green";
    return true;
  }
  else {
    document.getElementById("showconfirm").style.color="red";
    document.getElementById("hideconfirm").style.color="red";
    return false;
  }
}
function change(){
  if(validated==true){
    var informationdiv=document.getElementsByClassName(pagesTitles[crtpage])[0];
    var crtdiv=document.getElementsByClassName(pagesForms[crtpage])[0];
    informationdiv.style.display="none";
  
    crtdiv.style.display="none";
    crtpage++;
    if(crtpage>1){
      document.getElementById("nextButton").style.display="none";
      document.getElementById("createButton").style.display="block";
    }
    document.getElementsByClassName(pagesTitles[crtpage])[0].style.display="flex";
    var crtform=document.getElementsByClassName(pagesForms[crtpage])[0];
    crtform.style.display="flex";
    nonvalidation();
}
}
function create(){
  if(validated==true){
    location.href="confirmationSignup.html";
  }
}
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