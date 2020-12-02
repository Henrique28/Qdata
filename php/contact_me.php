<?php

if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   

$to = 'henrique.vieira2820@gmail.com';
$email_subject = "Formulario de contato do site:  $name";
$email_body = "Você recebeu uma nova mensagem do formulario de contato do Qdata.\n\n"."Aqui estão os contatos:\n\nNome: $name\n\nEmail: $email_address\n\nTelefone: $phone\n\nMensagem :\n$message";
$headers = "De: noreply@yourdomain.com\n"; 
$headers .= "Responder a: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>


