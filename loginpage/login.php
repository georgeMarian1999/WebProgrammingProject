<?php
session_start();
 
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: home.html");
    exit;
}
 
require_once "dbconn.php";
 
echo "Something";
$email = $password = $type = "";
$email_err = $password_err = $login_err = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    
    if(empty(trim($_POST["email"]))){
        $email_err = "Please enter email.";
    } else{
        $email = trim($_POST["email"]);
    }
    
    
    if(empty(trim($_POST["pass"]))){
        $password_err = "Please enter your password.";
    } else{
        $password = trim($_POST["pass"]);
    }
    
    
    if(empty($email_err) && empty($password_err)){
        
        $sql = "SELECT id, email, type, password FROM user WHERE email = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
           
            mysqli_stmt_bind_param($stmt, "s", $param_email);
            
          
            $param_email = $email;
            
            
            if(mysqli_stmt_execute($stmt)){
                
                mysqli_stmt_store_result($stmt);
                
                
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                   
                    mysqli_stmt_bind_result($stmt, $id, $email, $hashed_password,$type);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            
                            session_start();
                            
                          
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["email"] = $email; 
                            $_SESSION["type"] = $type;                      
                            
                            if(trim($type)==="user"){
                              header("location: home.html");
                            }
                           
                          
                        } else{
                          header("location: loginpage.php");
                          $login_err = "Invalid email or password.";
                        }
                    }
                } else{
                  header("location: loginpage.php");
                  $login_err = "Invalid email or password.";
                }
            } else{
              header("location: loginpage.php");
                echo "Oops! Something went wrong. Please try again later.";
            }

            
            mysqli_stmt_close($stmt);
        }
    }
    
    
    mysqli_close($link);
}
?>