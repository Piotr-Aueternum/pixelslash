<?php
  include '../config.php';
  $_SESSION['user_logged'] = false;
  $_SESSION['login'] = null;
  $_SESSION['token'] = null;
  echo json_encode(array('logged' => false));
?>