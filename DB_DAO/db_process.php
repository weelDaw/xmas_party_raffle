<?php

include "db_con.php";

class db_process extends sql{
    public function __construct(){
        $this -> open_con();
    }
    public function close_connection(){
        $this -> close_con();
    }
    public function save_entries($name){
        $stmt = $this->db_con->prepare("INSERT INTO entries(e_name)
                                               VALUES (?)");
        $stmt->bindParam(1, $name);
        $stmt->execute();
        return $stmt;
    }
    public function ck_entries($name){
        $stmt = $this->db_con->prepare("SELECT COUNT(e_name) FROM entries WHERE e_name = ?");
        $stmt->bindParam(1, $name);
        $stmt->execute();
        return $stmt;
    }
    public function getNames(){
        $stmt = $this->db_con->prepare("SELECT e_name, id FROM entries WHERE id NOT IN (SELECT entries_id FROM minor) ORDER BY e_name");
        $stmt->execute();
        return $stmt;
    }
    public function show_minor(){
        $stmt = $this->db_con->prepare("SELECT e_name, id FROM entries WHERE id IN (SELECT entries_id FROM minor) ORDER BY e_name");
        $stmt->execute();
        return $stmt;
    }
    public function show_all_entries(){
        $stmt = $this->db_con->prepare("SELECT * FROM entries ORDER BY e_name");
        $stmt->execute();
        return $stmt;
    }
    public function all_entries(){
        $stmt = $this->db_con->prepare("SELECT * FROM entries");
        $stmt->execute();
        return $stmt;
    }
    public function save_entry($id){
        $stmt = $this->db_con->prepare("INSERT INTO minor(entries_id)
                                               VALUES (?)");
        $stmt->bindParam(1, $id);
        $stmt->execute();
        return $stmt;
    }
}