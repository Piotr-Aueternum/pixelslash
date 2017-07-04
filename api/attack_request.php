<?php
	session_start();
	include("../config.php");

	$user = $_SESSION['user'];
	if($user) {
		$query = mysqli_query($a, "SELECT * FROM users WHERE user='$user'");
		$user_data = mysqli_fetch_array($query);

		if($user_data["energy"] > 0) {

			$is_monster = json_decode($_GET['is_monster']);
			$opponent_name = $_GET['opponent_name'];
			if($is_monster) {
				$query = mysqli_query($a, "SELECT * FROM `monsters` WHERE user='$opponent_name'");
			} else {
				$query = mysqli_query($a, "SELECT * FROM `users` WHERE user='$opponent_name'");
			}
			if(mysqli_num_rows($query) > 0) {
				$_SESSION["is_monster"] = $is_monster;
				$_SESSION["opponent_name"] = $opponent_name;
				$status = 'success';		
				$message = "Attack request accepted";
			} else {
				$status = 'error';
				$message = 'Oponnent does not exists.';
			}
		}	else {
			$message = "You don't have enough energy to attack!";
			$status = 'error';
		}
	} else {
		$message = "You aren't logged in.";
		$status = 'success';
	}

	echo json_encode(array("message" => $message, "status" => $status));
	exit();
?>

