<?php

    $childName = trim(stripslashes($_POST['child-name']));
    $childLastName = trim(stripslashes($_POST['child-last-name']));
    $childDob = trim(stripslashes($_POST['child-dob']));
    $gender = trim(stripslashes($_POST['gender']));
    $class = trim(stripslashes($_POST['class-name']));
    $parentFirstName = trim(stripslashes($_POST['parent-first-name']));
    $parentLastName = trim(stripslashes($_POST['parent-last-name']));
    $yourEmail = trim(stripslashes($_POST['your-email']));
    $homeAddress = trim(stripslashes($_POST['home-address']));
    $mobilePhone = trim(stripslashes($_POST['mobile-phone']));
    $homePhone = isset($_POST['home-phone']) ? trim(stripslashes($_POST['home-phone'])) : '';
    $yourMessage = isset($_POST['your-message']) ? trim(stripslashes($_POST['your-message'])) : '';

	$email_from = $yourEmail;
	$email_to = 'ksenia.pedaksoo@gmail.com';
    $subject = 'New inquiry from ' . $email_from;
	$body = 'Child name: ' . $childName . "\n\n" . 'Child last name: ' . $childLastName . "\n\n"  . 'Child date of birth: ' . $childDob . "\n\n" . 'Gender: ' . $gender . "\n\n" . 'Class name: ' . $class . "\n\n"  . 'Parent first name: ' . $parentFirstName  . "\n\n" . 'Parent last name: ' . $parentLastName . "\n\n" . 'Email address: ' . $yourEmail . "\n\n"  . 'Home address: ' . $homeAddress . "\n\n" . 'Mobile phone: ' . $mobilePhone . "\n\n" . 'Home phone: ' . $homePhone . "\n\n"  . 'Message: ' . $yourMessage;

	$success = @mail($email_to, $subject, $body);

    header('Content-Type: application/json');
    if ($success) {
        echo json_encode(array("is_email_sent" => true));
    } else {
        echo json_encode(array("is_email_sent" => false));
    }
