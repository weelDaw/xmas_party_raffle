<?php
session_start();
include '../DB_DAO/db_process.php';
$sender = new db_process();
if(isset($_FILES['upload_file'])){
    $csv_file = $_FILES['upload_file']['tmp_name'];
    $file_name =  $_FILES['upload_file']['name'];
    $errors =  $_FILES['upload_file']['error'];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);
    if(!is_file($csv_file) || $ext != 'csv' || $errors > 0){
        echo "<h2>Error in uploading file. Make Sure to upload CSV file only !</h2>";
    }else{
        if(($handle = fopen($csv_file, "r")) !== FALSE){
            $meter_values = "";
            while (($data = fgetcsv($handle, 90000000, ",")) !== FALSE){
                if($data[2] !=""){
                    $ck_entry = $sender->ck_entries($data[2]);
                    while($ck = $ck_entry->fetch()){
                        if($ck[0] == 0 || $ck[0] ==""){
                            $sender->save_entries($data[2]);
                        }
                    }
                }
            }
            fclose($handle);
            header("location:../views/home.php");
        }
    }
}
