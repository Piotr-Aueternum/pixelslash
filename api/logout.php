<?php
  session_destroy();
  include './header.php';
  $_SESSION['user_logged'] = false;
  $_SESSION['user'] = null;
  $_SESSION['token'] = null;
  echo json_encode(array('logged' => false));
?>