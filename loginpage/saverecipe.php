<?php
session_start();
require_once "dbconn.php";

$name=$_POST['name'];
$cooktime=$_POST['cooktime'];
$category=$_POST['category'];
$recipelink=$_POST['link'];
$cooktime=(int)$cooktime;

$chef_id=$_SESSION["id"];
echo $chef_id;
$sql = "INSERT INTO `recipe`( `name`, `cook_time`,`chef_id`, `category`, `link`) 
VALUES ('$name','$cooktime','$chef_id','$category','$recipelink')";
if (mysqli_query($link, $sql)) {
  echo json_encode(array("statusCode"=>200));
} 
else {
  echo json_encode(array("statusCode"=>201));
}
mysqli_close($link);
?>