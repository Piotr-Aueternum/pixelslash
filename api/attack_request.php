<?php
	session_start();
	include("../config.php");

	$user = $_SESSION['user'];
	include '../config.php';

	$user = $_SESSION['user'];
	$opponent_name = $_GET['opponent_name'];
	$is_monster = $_GET['is_monster'];

	$query = mysqli_query($a, "select * from users where user='$user'");
	$user_data = mysqli_fetch_array($query);

	if($is_monster){
		$query = mysqli_query($a, "select * from `monsters` where user='$opponent_name'");
	}else{
		$query = mysqli_query($a, "select * from `users` where user='$opponent_name'");
	}

	$opponent_data = mysqli_fetch_array($query);	
	if($user_data["energy"] < 1) {
		$message = "You don't have enough energy to attack!";
		$status = 'error';
	}
	else {
		$message = "Attack request accepted";
		$status = 'success';		
		$_SESSION["oponnent_name"] = $opponent_name;
		$_SESSION["isMonster"] = $isMonster;
		$_SESSION['attack_end'] = false; // See attack.php
	}

	echo json_encode(array("message" => $message, "status" => $status));
	exit();
?>

