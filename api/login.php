<?php
	session_start();
	include("../config.php");
	$user = mysqli_real_escape_string($a, $_GET['user']);
	
	$status = 'error';
	$message = 'No data was received. Please ensure you fill all inputs correctly.';

	$query_user = mysqli_query($a, "select * from users where user='$user'");
	if(mysqli_num_rows($query_user) > 0) {
		$password = mysqli_real_escape_string($a, $_GET['password']);
		$password = md5($password);
		$query = mysqli_query($a, "select * from users where user='$user' AND password='$password'");
		if(mysqli_num_rows($query) > 0) {
			$token = substr(md5(uniqid(mt_rand(), true)) , 0, 64);
			mysqli_query($a, "update users set token='$token' WHERE user='$user'");

			$_SESSION['user_logged'] = true;
			$_SESSION['login'] = $_POST['user'];
			$_SESSION['token'] = $token;
	
			$status = 'success';
			$message = 'Logged successful.';
		} else {
			$status = 'error';
			$message = 'Login or password is invalid.';
		}
	} else {
		$status = 'error';
		$message = "User with login $user does not exists.";
	}
	echo json_encode(array('status' => $status, 'message' => $message));
?>
