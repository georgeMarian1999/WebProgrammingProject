<?php
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: home.php");
    exit;
}
 
require_once "dbconn.php";
 
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
                   
                    mysqli_stmt_bind_result($stmt, $id, $email,$type ,$hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            
                            session_start();
                            
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["email"] = $email; 
                            $_SESSION["type"] = $type;                      
                            
                            header("location: home.php");
                          
                      
                        } else{

                          $login_err = "Invalid email or password.";
                        }
                    }
                } else{
                  $login_err = "Invalid email or password.";
                }
            } else{
              
                echo "Oops! Something went wrong. Please try again later.";
            }

            
            mysqli_stmt_close($stmt);
        }
    }
    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="login.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script type="text/javascript" src="loginscript.js"></script>
    <title>
        Welcome
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <div class="background">
      <img src="../images/loginback.jpg">
    </div>
    <header class="toppage">
      <div class="logo"> 
       <img src="../images/foodInc.png">
      </div>
    </header>
    <div class="LoginForm">
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <h3><p> Please sign in</p></h3>
        <div class="inputField">
          <label for="email">Email:</label> 
          <input type="text" id="email" placeholder="Your email..." name="email" maxlength=40>
        </div>
        <div class="inputField">
          <label for="pass">Password:</label>

          <input type="password" id="pass" placeholder="Your password..." name="pass" maxlength=40>
        </div>
        <?php 
          if(!empty($login_err)){
              echo '<div class="alert alert-danger">' . $login_err . '</div>';
          }        
          ?>
        <div class="buttonWrapper">
          <label for="remember"><strong>Remember username and password</strong></label>
          <input type="checkbox" id="remember" name="remember"><br>

          <input type="submit" value="Login">
        </div>
      </form>
      <hr class="solid">
            <div class="buttonWrapper">
              <h3>You don't have an account? Use the button below</h3>
              <button onclick="signUp()">Sign up</button>
            </div>
          
    </div>

    
      <footer>
      
      </footer>
  </body>
</html>
