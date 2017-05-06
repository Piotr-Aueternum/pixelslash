
var serialized_user_data;

function sound_play(x){
	var sound = document.createElement("AUDIO");
	sound.setAttribute("src","sounds/"+x+".mp3");
	sound.autoplay = true;
	document.body.appendChild(sound);
}

function display(x){
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onload = document.getElementById("game").innerHTML += "<p class='auto' style='text-align: center'>Loading...</p>";
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("game").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST", "engine.php?command="+x, true);
	xmlhttp.send();
}

function post_data(url, data, where_to_show){
	var post = $.post(url, data);
  	post.done(function(received_data) {
    	$("#"+where_to_show).html(received_data);
 	});	
}

function login(){
	serialized_user_data = $("#login_form").serialize();
 	post_data('game/login.php', serialized_user_data, 'game');
}

function register(){
	serialized_user_data = $("#register_form").serialize();
 	post_data('game/register.php', serialized_user_data, 'game');
}

function logout(){
	post_data('game/logout.php', null, 'game');
}

function show_attack_gui(monster_id,type){
	post_data('game/attack_gui.php', 'monster_id='+monster_id+'&type='+type, 'game');
}

function shop_show_items(which){
	post_data('game/shop.php', 'which_items_to_show='+which, 'game');
}

function item_action(item_id,action){
	post_data('game/item_functions.php', 'item_index='+item_id+'&action='+action, 'game');
}

function open_chest(item_id){
	post_data('game/open_chest.php', 'item_index='+item_id, 'game');
}

function communicat(type, text){
	var data = "type="+type+"&text="+text;
	post_data('game/communicat.php', data, 'game');
}



window.setInterval(function(){
  var seconds_left = parseInt($("#energy_seconds_left").text());
  if(seconds_left<1){
	  $("#energy_seconds_left").html(0);
  }else{
	seconds_left--;
	$("#energy_seconds_left").html(seconds_left);
  }
}, 1000);
