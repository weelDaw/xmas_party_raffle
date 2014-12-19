<?php
include_once "../DB_DAO/db_process.php";
$sender = new db_process();

$ctr = 1;
if($result = $sender->show_all_entries()){
    while($name = $result -> fetch()){
        echo "<tr>";
        echo "<td>".$ctr++."</td>";
        echo "<td>".utf8_encode($name[1])."</td>";
        echo "</tr>";
    }
}
