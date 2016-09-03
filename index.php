<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$to = 'kaze@berkeley.com';

	$body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message:\n $message";

	function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }

	if ($_POST['submit']) {
		if (@mail($to, $subject, $body, $email)) { 
        	echo '<p>Your message has been sent!</p>';
    	} else { 
        	echo '<p>Something went wrong, go back and try again!</p>'; 
    	}
	}

?>