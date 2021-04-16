function openMenu(){
  document.getElementById("navigation").style.width="250px";
  document.getElementsByClassName("Content")[0].style.opacity="0.2";
  
}
function closeMenu(){
  document.getElementById("navigation").style.width="0px";
  document.getElementsByClassName("Content")[0].style.opacity="1";
}
function initializareRecTabel(instance){
  var table=document.getElementById(instance);
  var tableData=[];
  for(var i=1;i<table.rows.length;i++){
    var row=table.rows[i];
    tableData.push(row);
  }
  return tableData;
};
let col=0;
function compareTimeAsc (a,b){
  if(Number(a.cells[col].innerHTML)<Number(b.cells[col].innerHTML))
    return -1;
  if(Number(a.cells[col].innerHTML)>Number(b.cells[col].innerHTML))
    return 1;
  if(Number(a.cells[col].innerHTML)===Number(b.cells[col].innerHTML))
    return 0;
}
function compareAscText (a,b){
  if(a.cells[col].innerHTML<b.cells[col].innerHTML)
    return -1;
  if(a.cells[col].innerHTML>b.cells[col].innerHTML)
    return 1;
  if(a.cells[col].innerHTML===b.cells[col].innerHTML)
    return 0;
}
function compareDescText (a,b){
  if(a.cells[col].innerHTML<b.cells[col].innerHTML)
    return 1;
  if(a.cells[col].innerHTML>b.cells[col].innerHTML)
    return -1;
  if(a.cells[col].innerHTML===b.cells[col].innerHTML)
    return 0;
}
function compareTimeDesc(a,b){
  if(Number(a.cells[col].innerHTML)<Number(b.cells[col].innerHTML))
    return 1;
  if(Number(a.cells[col].innerHTML)>Number(b.cells[col].innerHTML))
    return -1;
  if(Number(a.cells[col].innerHTML)===Number(b.cells[col].innerHTML))
    return 0;
}
function arrEq(a,b){
  for(var i=0;i<a.length;i++){
    if(a[i]!=b[i])
      return false;
  }
  return true;
}
function newValTable(sortedData,instance){
  var table=document.getElementById(instance);
  var oldBody = document.getElementsByTagName('tbody')[0];
  oldBody.remove();
  var newBody=document.createElement('tbody');
  table.appendChild(newBody);
  for(var i=0;i<sortedData.length;i++){
    var newTr=document.createElement('tr');
    newTr.innerHTML=sortedData[i].innerHTML;
    newBody.appendChild(newTr);
  }
}
function sortTable(instance,column,type){
  col=column-1;
  let initialData=initializareRecTabel(instance);
  let sortedData=[...initialData];
  if(type==="number"){
      sortedData.sort(compareTimeAsc);
      if(arrEq(initialData,sortedData)==true){
        sortedData.sort(compareTimeDesc);
      }
  }
  else {
    sortedData.sort(compareAscText)
    if(arrEq(initialData,sortedData)==true){
      sortedData.sort(compareDescText);
    }
  }
  
  newValTable(sortedData,instance);
}