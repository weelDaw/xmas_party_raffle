<?php
session_start();
if($_SESSION['authorized'] == "yes"){
?>
<!DOCTYPE html>
    <head>
        <link type=text/css rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
        <link type=text/css rel="stylesheet" href="../bootstrap/css/bootstrap-datepicker.css" />
        <link type=text/css rel="stylesheet" href="../css/home.css" />
        <link type=text/css rel="stylesheet" href="../css/navigation.css" />
        <script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.file-input.js"></script>
        <script type="text/javascript" src="../js/jsnow.js"></script>
        <script src="../js/textEffect.jquery.js"></script>
       <script type="text/javascript" src="../js/home.js"></script>
    </head>
  <body>
  <div  class="loading">
      <img src='../css/loading_image/35.gif' class="image_loading"/>
  </div>
  <div id="start_draw" class="sticky">
      <?php
      include_once '../templates/modal.php';
      include_once '../templates/navigation.php';
      ?>
      <input class="btn btn-warning" name="random_prizes" id="random_prizes" value="RANDOM PRIZES" onclick="random_prizes();"/>
      &nbsp;&nbsp;&nbsp;
      <input class="btn btn-warning" name="start" id="start" value="START"/>
       &nbsp;&nbsp;&nbsp;
       <input type="button" name="draw" class="btn btn-warning" id="draw" value="DRAW" onclick="draw()"/>
      <a id="logout" class="btn btn-danger">Logout</a>
   </div>
  <br/>
  <br/>
  <br/>
  <div id="list_of_winners">
      <table class="background-image">
          <tr>
              <th colspan="2" id="th_color">GRAND PRIZE</th>
          </tr>
          <tr>
              <th>PRIZE</th>
              <th>WINNER</th>
          </tr>
          <tr>
              <th>TV</th>
              <td id="tv"></td>
          </tr>
          <tr>
              <th colspan="2" id="th_color">SPECIAL PRIZE</th>
          </tr>
          <tr>
              <th>PRIZE</th>
              <th>WINNER</th>
          </tr>
          <tr>
              <th>MICROWAVE</th>
              <td id="microwave"></td>
          </tr>
          <tr>
              <th colspan="2" id="th_color">MAJOR</th>
          </tr>
          <tr>
              <th>PRIZES</th>
              <th>LIST OF WINNERS</th>
          </tr>
          <tr>
              <th>SACK OF RICE</th>
              <td id="sack_rice"></td>
          </tr>
          <tr>
              <th>TURBO BOILER</th>
              <td id="turbo_boiler"></td>
          </tr>
          <tr>
              <th>WASHING MACHINE</th>
              <td id="washing_machine"></td>
          </tr>
          <tr>
              <th colspan="2" id="th_color">MINOR</th>
          </tr>
          <tr>
              <th>PRIZES</th>
              <th>LIST OF WINNERS</th>
          </tr>
          <tr>
              <th rowspan="7">RICE</th>
          </tr>
          <tr>
              <td id="rice1">-</td>
          </tr>
          <tr>
              <td id="rice2">-</td>
          </tr>
          <tr>
              <td id="rice3">-</td>
          </tr>
          <tr>
              <td id="rice4">-</td>
          </tr>
          <tr>
              <td id="rice5">-</td>
          </tr>
          <tr>
              <td id="rice6">-</td>
          </tr>
          <tr>
              <th rowspan="3">FLAT IRON</th>
          </tr>
          <tr>
              <td id="flat_iron_1">-</td>
          </tr>
          <tr>
              <td id="flat_iron_2">-</td>
          </tr>
          <tr>
              <th rowspan="3">ELECTRIC FAN</th>
          </tr>
          <tr>
              <td id="electric_fan_1">-</td>
          </tr>
          <tr>
              <td id="electric_fan_2">-</td>
          </tr>
          <tr>
              <th rowspan="4">GROCERY</th>
          </tr>
          <tr>
              <td id="grocery_1">-</td>
          </tr>
          <tr>
              <td id="grocery_2">-</td>
          </tr>
          <tr>
              <td id="grocery_3">-</td>
          </tr>
          <tr>
              <th rowspan="3">RICE COOKER</th>
          </tr>
          <tr>
              <td id="rice_cooker_1">-</td>
          </tr>
          <tr>
              <td id="rice_cooker_2">-</td>
          </tr>
      </table>
  </div>
  <div id="winner"><label id="winner_start">AND THE WINNER IS !</label><label id="winner_draw"></label></div>
  </body>
 </html>
<?php
}else{
    header("Location:../");
}
?>