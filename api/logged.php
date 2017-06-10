<?php
  include '../config.php';
  if($_SESSION["user_logged"]){
    $logged = true;
  } else {
    $logged = false;
  }
  echo json_encode(array('logged' => $logged));
?>