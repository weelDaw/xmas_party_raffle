<?php
include_once "../DB_DAO/db_process.php";
$sender = new db_process();

$names = array();
if($result = $sender->all_entries()){
    while($name = $result -> fetch()){
        array_push($names, $name[1]);
    };
}
echo json_encode($names);