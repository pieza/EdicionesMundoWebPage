<?php
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	

$to = 'jandres258@hotmail.com'; 
$to2 = 'ronix05@hotmail.com'; 
$email_subject = "Mensaje de contacto de:  $name";
$email_body = "Has recibido un mensaje a travez del sitio web de Ediciones Mundo.\n\n"."Aqui estan los detalles:\n\nNombre: $name\n\nCorreo: $email_address\n\nMensaje:\n$message";
$headers = "From: noreply@edicionesmundo.com\n"; 
$headers .= "Responder a: $email_address";	
mail($to,$email_subject,$email_body,$headers);
mail($to2,$email_subject,$email_body,$headers);
return true;			
?>