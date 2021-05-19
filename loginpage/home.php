<?php
require_once "checkSession.php"
?>
<!DOCTYPE html>
<script src="https://kit.fontawesome.com/97b9573b54.js" crossorigin="anonymous"></script>
<html lang="en">
   <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" href="../style.css?v=1">
      <link rel="stylesheet" href="home.css?v=1">
      <script type="text/javascript" src="homescript.js?v=1"></script>
      <script type="text/javascript" src="../script.js?v=1"></script>
      <title>
         Home
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   </head>
   <nav id="navigation">
      <a class="closeButton" href="javascript:void(0)"  onclick="closeMenu()"><i  class="fas fa-times"></i></a>
      <a class="crtpage" href="home.php"><i class="fas fa-home"><p class="p3"> Home</p></i> </a>
      <a href="chefs.php"><i class="fas fa-utensils"> <p class="p3">Our chefs</p></i> </a>
      <?php 
          if($_SESSION['type']==="Chef"){
              echo '<a style="text-decoration: none;" href="addrecipe.php"><i class="fas fa-cookie-bite"></i><p class="p3">Add new recipe</p></i></a>';
          }        
          ?>
      <a href="logout.php"><i class="fas fa-sign-out-alt"><p class="p3">Logout</p> </i></a>
   </nav>
   <a class="menuButton" href="javascript:void()" onclick="openMenu()"><i class="fas fa-bars"></i></a>
   <body class="homepage">
   <main class="Content">
    <article class="introduction">
      <header><h1><p class="p3" >Recipes for you</p></h1></header>
      <div class="intro">
      <p class="p3" style="color: white;">
         <strong>
         Welcome to our cooking site! Here you can find all kind of food from Italian, American or Greek!
      </p>
      </strong>
      </div>
    </article>
    <article class="homecontent">
      <header><h1><p class="p3" >Easy and delicious recipes</p></h1></header>
      <div class="gallerywrapper">
      <div class="nextButton"><a href="javascript:void(0)" onclick="nextSlide()"><i class="fas fa-forward"></i></a></div>
      <div class="previousButton"><a href="javascript:void(0)" onclick="previousSlide()"><i class="fas fa-backward"></i></a></div>
      <ul class="recipeslider">
         <li class="listItem">
            <div class="recipecontent">
               <h3>Vegan Lasagna</h3>
               <p class="p3">Easy vegan lasagna recipe.I used to be skeptical of vegan lasagna—could it really be that good? This recipe is proof that yes, it really can. This vegan lasagna tastes as good as it looks. </p>
               <a href="https://cookieandkate.com/best-vegan-lasagna-recipe/"><i><p class="p3">Full recipe</p></i></a>
            </div>
         </li>
         <li class="listItem">
            <div class="recipecontent">
               <h3>Homemade Nutella</h3>
               <p class="p3">
                  A generous layer of homemade chocolate hazelnut spread on a warm bagel. Doesn’t that sound like a good breakfast? It sure does to me. I’ve wanted to make Homemade Nutella since I made the peanut butter. Because once you try making your own nut butter,
                   it’s hard to stop! It is so easy! No more run-outs in the middle of the night! Oh wait, that’s probably just me. 
                   </p>
               <a href="https://www.crunchycreamysweet.com/homemade-nutella-chocolate-hazelnut-spread/"><i><p class="p3">Full recipe</p></i></a>
            </div>
         </li>
         <li class="listItem">
            <div class="recipecontent">
               <h3>No bake strawberry chessecake</h3>
               <p class="p3">This no bake Strawberry Cheesecake is light, fluffy and loaded with fresh strawberry puree! Made with fresh or frozen strawberries and don’t forget the whipped cream! </p>
               <a href="https://www.thereciperebel.com/no-bake-strawberry-cheesecake/"><i><p class="p3">Full recipe</p></i></a>
            </div>
         </li>
      </ul>
      </div>
      </article>
      <article class="homecontent">
         <header><h1><p class="p3" >Must try desserts</p></h1></header>
         <div class="gallerywrapperJQ">
         <div class="nextButtonJQ"><a href="javascript:void(0)"><i class="fas fa-forward"></i></a></div>
         <div class="previousButtonJQ"><a href="javascript:void(0)"><i class="fas fa-backward"></i></a></div>
         <ul class="recipesliderJQ">
            <li class="listItemJQ">
               <div class="recipecontentJQ">
                  <h3>Giant Salted Espresso Hot Fudge Cookies</h3>
                  <p class="p3">Easy homemade chocolate fudge sauce stuffed into the best buttery cookies.Each cookie dough ball is hand stuffed with a ball of frozen fudge and sprinkled with espresso salt before baking them to perfection</p>
                  <a href="https://www.halfbakedharvest.com/hot-fudge-cookies/" target="_blank"><i><p class="p3">Full recipe</p></i></a>
               </div>
            </li>
            <li class="listItemJQ">
               <div class="recipecontentJQ">
                  <h3>Mint Oreo Cake</h3>
                  <p class="p3">
                     Two layers of devil's food cake sandwiched together with minty cream cheese frosting and crushed mint Oreos, smothered in more mint frosting and covered in cake balls and mint Oreos. 
                      </p>
                  <a href="https://www.yammiesnoshery.com/2012/06/mint-oreo-cake.html#" target="_blank"><i><p class="p3">Full recipe</p></i></a>
               </div>
            </li>
            <li class="listItemJQ">
               <div class="recipecontentJQ">
                  <h3>Ultimate Gooey Brownies</h3>
                  <p class="p3">Ultimate Gooey Brownies are ridiculously tall, chocolaty, ooey, and gooey with a thick layer of sweetened condensed milk and chocolate in the middle!</p>
                  <a href="https://handletheheat.com/ultimate-gooey-brownies/" target="_blank"><i><p class="p3">Full recipe</p></i></a>
               </div>
            </li>
         </ul>
         </div>
    </article>
   <article class="homecontent">
         <header>
            <h1><p class="p3" style="color: black;">New recipes</p></h3>
         </header>
         <table class="recipetable" id="recTable">
         </table>
         <br>
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