<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$to = 'kaze@berkeley.com';

	$body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message:\n $message"

	if ($_POST['submit']) {
		if (mail ($to, $subject, $body, $email)) { 
        	echo '<p>Your message has been sent!</p>';
    	} else { 
        	echo '<p>Something went wrong, go back and try again!</p>'; 
    	}
	}
?>