<?php
session_start();
$user = $_POST['un'];
$pwd = $_POST['pwd'];
if($user == "weel" && $pwd == "daw"){
    $_SESSION['authorized'] = "yes";
    echo 1;
}else{
    $_SESSION['authorized'] = "no";
}