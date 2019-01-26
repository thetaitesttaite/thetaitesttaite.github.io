<?php
	if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$emailFrom = $_POST['email'];
		$phone = $_POST['phone'];
		$about = $_POST['about'];
		
		$mailTo = "taite93@live.com";
		$headers = "From: " .$emailFrom;
		$txt = "You have received an email form ".$name.".\n\n".$about;
		mail();
		
	}

?>