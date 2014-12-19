<?php
include_once "../DB_DAO/db_process.php";
$sender = new db_process();
$ctr = 1;
if($result = $sender->getNames()){
    while($name = $result -> fetch()){
        echo "<tr>";
        echo "<td>".$ctr++."</td>";
        echo "<td>".utf8_encode($name[0])."</td>";
        echo "</tr>";
    };
}
