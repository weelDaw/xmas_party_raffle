<?php
session_start();
if($_SESSION['authorized'] != "yes"){
    echo "not";
}else{
    echo "yes";
}
