<?php

$recepient = "andriasbartlettpb@gmail.com";
$sitename = "https://blackcatmusicstudio.com/";

$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Почта: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>