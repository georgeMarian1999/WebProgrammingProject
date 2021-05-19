<?php

require_once "dbconn.php";

$sql="SELECT R.name,R.cook_time,U.firstname,R.category,R.link FROM recipe R INNER JOIN user U on R.chef_id=U.id";
$result = mysqli_query($link,$sql);


echo '<thead>
<tr>
   <th>Recipe</th>
   <th><button class="sortButton">Cook time(minutes)</button></th>
   <th><button class="sortButton">Chef</button></th>
   <th><button class="sortButton">Category</button></th>
   <th>Link</th>
</tr>
</thead>
<tbody>';
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo '<td><p class="p3">' . $row['name'] . "</p></td>";
  echo "<td>" . $row['cook_time'] . "</td>";
  echo "<td>" . $row['firstname'] . "</td>";
  echo "<td>" . $row['category'] . "</td>";
  echo '<td><a target="_blank" href="'.$row['link'] .'"><i class="fas fa-link"></i></a></td>';
  echo "</tr>";
}
echo "</tbody>";

mysqli_close($link);
?>
