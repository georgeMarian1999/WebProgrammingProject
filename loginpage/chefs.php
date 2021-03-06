<?php
require_once "checkSession.php";
?>
<!DOCTYPE html>
<script src="https://kit.fontawesome.com/97b9573b54.js" crossorigin="anonymous"></script>
<html lang="en">
   <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" href="../style.css?v=1">
      <link rel="stylesheet" href="chefs.css?v=1">
      <script type="text/javascript" src="chef.js?v=1"></script>
      <link rel="stylesheet" href="../homepage/home.css?v=1">
      
      <script type="text/javascript" src="../script.js?v=1"></script>
      <script>

      </script>
      <title>
         Chefs
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   </head>
   <body class="chefpage">
      <header>
         <nav id="navigation">
            <a class="closeButton" href="javascript:void(0)"  onclick="closeMenu()"><i  class="fas fa-times"></i></a>
            <a  href="home.php"><i class="fas fa-home"><p class="p3"> Home</p></i> </a>
            <a class="crtpage" href="chefs.php"><i class="fas fa-utensils"> <p class="p3">Our chefs</p></i> </a>
            <?php 
          if($_SESSION['type']==="Chef"){
              echo '<a style="text-decoration: none;" href="addrecipe.php"><i class="fas fa-cookie-bite"></i><p class="p3">Add new recipe</p></i></a>';
          }        
          ?>
            <a href="logout.php"><i class="fas fa-sign-out-alt"><p class="p3">Logout</p> </i></a>
         </nav>
         <a class="menuButton" href="javascript:void()" onclick="openMenu()"><i class="fas fa-bars"></i></a>
      </header>
      <main>
         <article class="introduction">
            <header><h1><p class="p3" >Best of chefs!</p></h1></header>
            <div class="intro">
            <p class="p3" style="color: white;">
               <strong>
               Here you can find our chefs. Most professional and dedicated chefs out there!
            </p>
            </strong>
            </div>
          </article>   
          <article class="content">
            <header><h1><p class="p3">Top chefs around the world!</p></h1></header>
            <ul class="slider" id="sliderul">
              <li class="sliderimage">
               <img src="../images/mauro.jpeg" alt="mauro">
              </li>
              <li class="sliderimage">
               <img src="../images/christophe.jpeg" alt="christophe">
              </li> 
              <li class="sliderimage">
               <img src="../images/arnaud.jpeg" alt="arnaud">
              </li> 
            </ul> 
            <div class="slidercontrol">
               <button onclick="changeButton()" id="sliderbttn">Pause</button>
               <label for="repeat">Repeat slideshow?:</label>
               <input onchange="repeat()" type="checkbox" id="repeat" name="repeat">
               <label for="interval">Seconds</label>
               <input onchange="changeSeconds()" type="text" id="interval" name="interval">
            </div>    
          </article>
          <article class="content">
            <h1><p class="p3" style="color: white;">Award winning recipes</p></h1>
         <div class="containerSlide">
               <div class="slide">
                  <img src="../images/KeyLime.jpeg" alt="lime">
               </div>
               <div class="slide">
                  <img src="../images/cranberrycookies.jpeg" alt="cookies">
               </div>
               <div class="slide">
                  <img src="../images/CranberryOrangeTriffle.jpeg" alt="triffle">
               </div>
               <div class="slide">
                  <img src="../images/almondChickenSalad.jpeg" alt="salad">
               </div>
               <div class="slide">
                  <img src="../images/strawberrycrepes.jpeg" alt="crepes">
               </div>
               <div class="slide">
                  <img src="../images/OnionBeef.jpeg" alt="onion">
               </div>
               <div class="slide">
                  <video autoplay muted loop id="signupback">
                     <source src="../videos/Philippine spices.mp4" type="video/mp4">
                   </video>
               </div>
            </div>
            <div class="slidercontrol">
               <button id="slideprev">Previous</button>
               <div style="width: fit-content;">
                  <label for="intervalAwards">Seconds</label>
                  <input onchange="changeSeconds()" style="width: 40px;" type="text" id="intervalAwards" name="intervalAwards">
               </div>
               <button id="playpause">Pause</button>
               <button id="slidenext">Next</button>
            </div>
         </article>
      <article class="content">
        <h1><p class="p3" style="color: black;">Our <span title="Certified Professional Chefs">CPC</span> chefs</p></h1>
        <table class="cheftable" id="chefTable">
           <tr>
              <th>Photo</th>
              <th>Added recipes</th>
              <th>Nationality</th>
              <th>Phone number</th>
              <th>Website</th>
           </tr>
           <tr>
              <td>
               <div class="container">
                  <img src="../images/scarlatescu.jpeg" alt="Avatar" class="image">
                  <div class="overlay">
                    <div class="text">Scarlatescu</div>
                  </div>
                </div>
              </td>
              <td>14</td>
              <td>Romanian</td>
              <td>0738463825</td>
              <td><a target="_blank" href="https://www.facebook.com/CatalinScarlatescu/"><i class="fas fa-link"></i></a></td>
           </tr>
           <tr>
              <td>
                 <div class="container">
                  <img src="../images/Jamila.jpeg" alt="Avatar" class="image">
                  <div class="overlay">
                     <div class="text">Jamila</div>
                  </div>
                 </div>
            </td>
             <td>10</td>
             <td>Greek</td>
              <td>
                 0636529384
              </td>
              <td>
               <a target="_blank" href="https://jamilacuisine.ro/"><i class="fas fa-link"></i></a>
              </td>
           </tr>
           <tr>
            <td>
               <div class="container">
             <img src="../images/ratata.jpeg" alt="Avatar" class="image">
             <div class="overlay">
               <div class="text">Ratatouille</div>
             </div>
           </div></td>
           <td>20</td>
           <td>Italian</td>
            <td>
               0745674432
            </td>
            <td>
             <a target="_blank" href="https://www.rottentomatoes.com/m/ratatouille"><i class="fas fa-link"></i></a>
            </td>
         </tr>
        </table>
     </article>
   </main>
   <footer class="homepagefooter">
      <p>Author: George Marian <br>
      <p>All rigths reserved<br>
         <a href="mailto:mariangeorge99@icloud.com">mariangeorge99@icloud.com</a>
      </p>
   </footer>
   </body>
   </html>