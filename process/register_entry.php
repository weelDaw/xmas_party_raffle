<?php

include_once "../DB_DAO/db_process.php";
$sender = new db_process();
$selected = $_POST['selected'];

$sender->save_entry($selected);