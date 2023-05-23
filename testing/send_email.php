<?php
$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$ticket_type = $_POST['ticket_type'];

$to = 'justjan.zakelijk@hotmail.com'; // jouw e-mailadres
$subject = 'Nieuwe ticketverkoop!';
$message = "Naam: $name\nE-mail: $email\nDatum: $date\nTicket type: $ticket_type";
$headers = "From: $email\r\nReply-To: $email\r\n";

mail($to, $subject, $message, $headers);
?>
