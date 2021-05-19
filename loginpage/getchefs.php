<?php

require_once "dbconn.php";

$sql="SELECT U.firstname,COUNT(R.id) as added,U.county,U.phone FROM recipe R INNER JOIN user U on R.chef_id=U.id where U.type='Chef' GROUP BY U.firstname";


$result = mysqli_query($link,$sql);

echo '
<tr>
<th>Name</th>
<th>Added recipes</th>
<th>County</th>
<th>Phone number</th>
</tr>';
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo '<td>
        <div class="container">
          <img src="../images/chefboy.jpeg" alt="Avatar" class="image">
          <div class="overlay">
            <div class="text">' . $row['firstname'] . "</div>
          </div>
        </div></td>";
  echo "<td>" . $row['added'] . "</td>";
  echo "<td>" . $row['county'] . "</td>";
  echo '<td>'.$row['phone'] .'</td>';
  echo "</tr>";
}

mysqli_close($link);
?>
