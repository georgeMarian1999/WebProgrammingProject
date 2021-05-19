<?php
error_reporting(0);
session_start();
if (! isset($_SESSION['loggedin']) || ($_SESSION['email'] == ""))
 header("Location: loginpage.php");
?>