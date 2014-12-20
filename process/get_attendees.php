<?php
include_once "../DB_DAO/db_process.php";
$sender = new db_process();
$names = array();
if($result = $sender->show_minor()){
    while($name = $result -> fetch()){
        array_push($names, utf8_encode($name[0]));
    }
}
echo json_encode($names);