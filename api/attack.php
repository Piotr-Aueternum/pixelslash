<?php
	session_start();
	include '../config.php'; // $a
	include'../utils/player_data.php'; // sumEquipment(), sumStats(), randStats()
	
	$user = $_SESSION['user'];
	if($user) {
		// if($_SESSION['attack_continue']) {
		// } else {
		// 	$status = "error";
		// 	$message = "You aren't allowed to attack";
		// }
		$query = mysqli_query($a,"SELECT * FROM users WHERE user='$user'");
		$user_data = mysqli_fetch_array($query);
		if($user_data['energy'] > 0) {

			$opponent_name = $_SESSION["opponent_name"];
			if($opponent_name) {

				$sumStats = sumEquipment($user_data['eq_weared']);

				$stats_type = array('atk', 'def', 'hp');
				$user_stats = sumStats($sumStats, $user_data, $stats_type);
				$rand_stats = array('atk', 'def');
				$user_stats = randStats($user_stats, $rand_stats);
				$is_monster = $_SESSION["is_monster"];
				if($is_monster) {
					$query = mysqli_query($a, "SELECT * FROM monsters WHERE name='$opponent_name'");
					$opponent_data = mysqli_fetch_array($query);
					$stats_type = array('atk', 'def', 'hp');
					$opponent_stats = sumStats($opponent_data, null, $stats_type);
				} else {
					$query = mysqli_query($a, "SELECT * FROM users WHERE user='$opponent_name'");
					$opponent_data = mysqli_fetch_array($query);
					$sumStats = sumEquipment($opponent_data['eq_weared']);


					$stats_type = array('atk', 'def', 'hp');
					$opponent_stats = sumStats($sumStats, $opponent_data, $stats_type);
					$rand_stats = array('atk', 'def');
					$opponent_stats = randStats($opponent_stats, $rand_stats);
				}

				$rand_stats = array('atk', 'def');
				$opponent_stats = randStats($opponent_stats, $rand_stats);
				$opponent_lvl = $opponent_data['lvl'];

				if($_SESSION['opponent_hp'] && $_SESSION['user_hp']){
					$_SESSION['opponent_hp'] = $opponent_hp;
					$_SESSION['user_hp'] = $user_hp;
				} else {
					$opponent_hp = $_SESSION['opponent_hp'];
					$user_hp = $_SESSION['user_hp'];
				}

				if($user_attack_power > 0) {
					$_SESSION['opponent_hp'] -= $user_stats['atk_rand'];
				}
				if($opponent_attack_power > 0){
					$_SESSION['user_hp'] -= $opponent_stats['atk_rand'];
				}

				if($_SESSION['user_hp'] < 1) {
					$status = "success";
					$message = "Lose.";
					// $_SESSION['user_hp'] = null;
					// $_SESSION['opponent_hp'] = null;
					// $_SESSION['attack_continue'] = null;
				}

				if($_SESSION['opponent_hp'] < 1) {
					$reward = 10 * pow($opponent_lvl * 0.2);
					$exp_reward = pow(2, $opponent_lvl + $opponent_atk / 10);
					include 'chest_win.php';
					mysqli_query($a, "UPDATE `p505207_db`.`users` SET `silver_coins`=`silver_coins`+'$reward',`exp`=`exp`+'$exp_reward' WHERE `users`.`user`='$user'"); // SAVE REWARD
					$status = "success";	
					$message = 'Win.';
					$chest = $won_chest_rarity;
					// $_SESSION['user_hp'] = null;
					// $_SESSION['opponent_hp'] = null;
					// $_SESSION['attack_continue'] = null;
				}

				if($chest === null){
					$chest = "none";
				}

			} else {
				$status = "error";
				$message = "Select your opponent on arena.";	
				$_SESSION['attack_continue'] = null;			
			}
		} else {
			$status = "error";
			$message = "You don't have enough energy to attack";	
			$_SESSION['attack_continue'] = null;		
		}
	}

	$arr = array(
		'status' => $status,
		'message' => $message,
		'user_hp' => $_SESSION['user_hp'],
		'opponent_hp' => $_SESSION['opponent_hp'], 
		'won_silver_coins' => $reward, 
		'chest' => $chest
	);

	echo json_encode($arr);
	exit();
	/*

		{
		"user_hp": int,
		"user_max_hp": int,
		"opponent_hp": int,
		"status": WIN/LOST string,
		"won_silver_coins": int,
		"chest": none/rarity string
		}

	*/
?>

