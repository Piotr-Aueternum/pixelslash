<?php
	session_start();
	include("../config.php");
	$user = mysqli_real_escape_string($a, $_GET['user']);
	$password = mysqli_real_escape_string($a, $_GET['password']);
	$password_confirm = $_GET['password_2'];
	$status = 'error';
	$message = 'No data was received. Please ensure you fill all inputs correctly.';
	$passlength = strlen($password);
	$userlength = strlen($user);
	$query = mysqli_query($a, "select * from users where user='$user'");
	if (strlen($user) >= 3) {
		if (mysqli_num_rows($query) > 0){
			$status = 'error';
			$message = 'Login with this name exists.';
		} else {
			if(strlen($password) >= 4) {
				if($password === $password_confirm) {
					$password = md5($password);
					mysqli_query($a,"insert into users (user,password) values ('$user','$password')");
					
					$_SESSION['user_logged'] = true;
					$_SESSION['user'] = $_POST['user'];

					$status = 'success';
					$message = 'Account created correctly.';
				} else {
					$status = 'error';
					$message = 'Passwords do not match.';
				}
			} else {
				$status = 'error';
				$message = "Password length($passlength) is too short, it should be greater than 4.";
			}
		}
	} else {
		$status = 'error';
		$message = "Login name length($userlength) is too short, it should be greater than 2.";
	}
	echo json_encode(array('status' => $status, 'message' => $message));
	exit();
?>