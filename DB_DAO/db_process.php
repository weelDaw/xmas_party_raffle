<?php

include "db_con.php";

class db_process extends sql{
    public function __construct(){
        $this -> open_con();
    }
    public function close_connection(){
        $this -> close_con();
    }
    public function save_entries($name, $man_no){
        $stmt = $this->db_con->prepare("INSERT INTO employee_rec(e_name, man_no)
                                               VALUES (?, ?)");
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $man_no);
        $stmt->execute();
        return $stmt;
    }
    public function ck_entries($man_no){
        $stmt = $this->db_con->prepare("SELECT COUNT(man_no) FROM employee_rec WHERE man_no = ?");
        $stmt->bindParam(1, $man_no);
        $stmt->execute();
        return $stmt;
    }
}