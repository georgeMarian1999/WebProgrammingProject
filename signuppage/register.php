<?php
// Include config file
require_once "dbconnUsers.php";
 

$email = $password = $confirm_password = "";
$email_err ="";
$password=$_POST["pass"];
$first_name=$_POST["fname"];
$last_name=$_POST["lname"];
$phone=$_POST["phone"];
$date=$_POST["date"];
$city=$_POST["orasSelect"];
$county=$_POST["judetSelect"];
$type=$_POST["accType"];

 
if($_SERVER["REQUEST_METHOD"] == "POST"){
        
        $sql = "SELECT id FROM user WHERE email = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            
            mysqli_stmt_bind_param($stmt, "s", $param_email);
          
            $param_email = trim($_POST["email"]);
            
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $email_err = "This username is already taken.";
                } else{
                    $email = trim($_POST["email"]);
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            mysqli_stmt_close($stmt);
        }
    }

    if(empty($username_err) && empty($password_err) && empty($confirm_password_err)){
        
        $sql = "INSERT INTO user (email,password,firstname,lastname,phone,date_of_birth,city,county,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            
            mysqli_stmt_bind_param($stmt, "sssssssss", $param_email, $param_password,$param_firstname,$param_lastname,$param_phone,$param_date_of_birth,$param_city,$param_county,$param_type);
            
            
            $param_email = $email;
            $param_password = password_hash($password, PASSWORD_DEFAULT); 
            $param_firstname=$first_name;
            $param_lastname=$last_name;
            $param_phone=$phone;
            $param_date_of_birth=$date;
            $param_city=$city;
            $param_county=$county;
            $param_type=$type;
            
            if(mysqli_stmt_execute($stmt)){
                
                header("location: confirmationSignup.html");
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            mysqli_stmt_close($stmt);
        }
    }
    
    mysqli_close($link);
?>