<?php
	session_start();
	include "./header.php";
	include "../config.php";

	function get_max_exp($_user_lvl){ // Calculating maximum exp per lvl
		return floor(pow(1.5,$_user_lvl)*400);
	}

	$user = $_SESSION['user'];
	$query = mysqli_query($a, "SELECT * FROM `users` WHERE user='$user'");
	$user_data = mysqli_fetch_array($query);
	$user_lvl = $user_data['lvl'];
	$max_exp = get_max_exp($user_lvl);

	$time = time();
	$user = $_SESSION['user'];

	for($i = 1; $i < 30; $i++) {
		if($time > $user_data['last_time_energy_point_used'] + 60 * $energy_renew_time_in_minutes * $i && $user_data['last_time_energy_point_used'] != 0){ // 1 ENERGY EVERY $energy_renew_time_in_minutes MINUTES
			if($user_data['energy']<$user_data['maxenergy']){
				mysqli_query($a, "UPDATE `p505207_db`.`users` SET `energy`=`energy`+1,`last_time_energy_point_used`='$time' WHERE `users`.`user`='$user'"); 
				$user_data['energy']++;
			}
		}
	}

	if($user_data['exp'] > $max_exp){
		$won_sc = ($user_lvl+1)*500;
		$won_gc = 5;
		mysqli_query($a, "UPDATE `p505207_db`.`users` SET `lvl`=`lvl`+1,`exp`=0,`silver_coins`=`silver_coins`+'$won_sc',`golden_coins`=`golden_coins`+'$won_gc' WHERE `users`.`user`='$user'"); 
		echo mysqli_error($mysqli);
	}

	$query = mysqli_query($a, "SELECT * FROM `users` WHERE user='$user'");
	$user_data = mysqli_fetch_array($query);
	$max_exp = get_max_exp($user_lvl);

	$player_weared_equipment = explode(";", $user_data["eq_weared"]);

	for($i=0;$i<count($player_weared_equipment);$i++){	
		$query = mysqli_query($a,"SELECT * FROM `items` WHERE `id`='$player_weared_equipment[$i]' ");
		$item_data = mysqli_fetch_array($query);

		$eq_atk += $item_data['atk'];
		$eq_def += $item_data['def'];
		$eq_hp += $item_data['hp'];
	}
	$user_lvl = $user_data['lvl'];

	$user_atk = ($user_data['atk']+$eq_atk);
	$user_def = ($user_data['def']+$eq_def);
	$user_hp = ($user_data['hp']+$eq_hp);
	$user_exp = $user_data['exp'];
	$user_test = $user_data['lvl'];
	$user_maxexp = $max_exp;
	$user_energy = $user_data['energy'];
	$user_maxenergy = $user_data['maxenergy'];

	$user_silver_coins = $user_data['silver_coins'];
	$user_golden_coins = $user_data['golden_coins'];
	$arr = array('lvl' => $user_lvl, 'atk' => $user_atk, 'def' => $user_def, 'hp' => $user_hp, 'exp' => $user_exp,
		'maxexp' => $user_maxexp, 'energy' => $user_energy,'maxenergy' => $user_maxenergy, 'silver_coins' => $user_silver_coins, 'golden_coins' => $user_golden_coins);
	echo json_encode($arr);
	exit();
?>


