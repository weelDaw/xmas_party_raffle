<?php

class sql{
    private $db_host = "mysql:host=127.0.0.1;";
    private $db_name = "dbname=xmas_raffle";
    private $db_user = 'root';
    private $db_pass = '1223445';
//    private $db_pass = '';
    protected $db_con;
    protected function open_con(){
        $this->db_con = new PDO($this->db_host.$this->db_name,$this->db_user, $this->db_pass);
    }
    protected function close_con(){
        $this->db_con = null;
    }
}