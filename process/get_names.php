<?php
include_once "../DB_DAO/db_process.php";
$sender = new db_process();

echo '<select id="selected_name"><option>Select Entries</option>';

$names = array();
if($result = $sender->getNames()){
    while($name = $result -> fetch()){
        echo '<option value="'.$name[1].'">'.utf8_encode($name[0]).'</option>';
    };
}
echo "</select>";
