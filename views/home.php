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
  <div id="start_draw">
      <?php
      include_once '../templates/modal.php';
      include_once '../templates/navigation.php';
      ?>
      <a class="btn btn-warning" id="start">START</a>
       &nbsp;&nbsp;&nbsp;
       <input type="button" name="draw" class="btn btn-warning" id="draw" value="DRAW">
      <a id="logout" class="btn btn-danger">Logout</a>
   </div>
  <br/>
  <br/>
  <div id="winner"><label id="winner_start">WINNER !</label><label id="winner_draw"></label></div>
  </body>
 </html>
<?php
}else{
    header("Location:../");
}
?>