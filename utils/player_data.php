<?php
  function sumEquipment($array) {
    $arr = explode(";", $array);
    $eq_atk = 0;
    $eq_def = 0;
    $eq_hp = 0;
    for($i = 0; $i < count($arr); $i += 1) {	
      $query = mysqli_query($a,"SELECT * FROM `items` WHERE `id`='$arr[$i]' ");
      $item_data = mysqli_fetch_array($query);
      $eq_atk += $item_data['atk'];
      $eq_def += $item_data['def'];
      $eq_hp += $item_data['hp'];
    }
    return array('atk' => $eq_atk, 'def' => $eq_def, 'hp' => $eq_hp);
  }
  
  function sumStats($arr1, $arr2, $stats) {
    $arr = null;
    foreach ($stats as $stat) {
      if($arr2) {
        $arr[$stat] = $arr1[$stat] + $arr2[$stat];
      } else {
        $arr[$stat] = $arr1[$stat];
      }
    }
    return $arr;
  }
  function randStats($arr, $stats, $min_ratio = 0.8, $max_ratio = 1.2) {
    foreach ($stats as $stat) {
      $arr[$stat.'_rand'] = $arr[$stat] * rand($min_ratio, $max_ratio);
    }
    return $arr;
  }
?>