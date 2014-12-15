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
        <script src="../js/textEffect.jquery.js"></script>
       <script type="text/javascript" src="../js/home.js"></script>
    </head>
  <body>
  <?php
        include_once '../templates/navigation.html';
  ?>
      <a id="logout" class="btn btn-danger">Logout</a>
  <br/>
  <br/>
  <br/>
   <a class="btn btn-warning" id="start">START</a>
   &nbsp;&nbsp;&nbsp;
   <a class="btn btn-warning" id="draw">DRAW</a>
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