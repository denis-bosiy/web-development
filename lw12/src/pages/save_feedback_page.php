<?php

function saveFeedbackPage(): void 
{
  $emailPattern = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';
  $nameLengthPattern = '/^.{2,256}$/';
  $namePossibleCharactersPattern = '/^[a-zA-Z0-9]{0,}$/';
  $subjectLengthPattern = '/^.{1,256}$/';
  $messageLengthPattern = '/^.{1,256}$/';
  $args = array();
  
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $isError = false;

  $args['name'] = $name;
  $args['email'] = $email;
  $args['subject'] = $subject;
  $args['message'] = $message;
  
  if (!preg_match($nameLengthPattern, $name)) {
    $args['name_error_msg'] = "Login's length must be from 2 to 256 letters"; 
    $isError = true;
  }
  if (!preg_match($namePossibleCharactersPattern, $name)) {
    $args['name_error_msg'] = "Login can contain only english alphabet and digits"; 
    $isError = true;
  }
  if (!preg_match($emailPattern, $email)) {
    $args['email_error_msg'] = "Email is not correct";
    $isError = true;
  }
  if (strlen($subject) === 0) {
    $args['subject_error_msg'] = "Subject is empty";
    $isError = true;
  }
  if (strlen($message) === 0) {
    $args['message_error_msg'] = "Message is empty";
    $isError = true;
  }
  if (!preg_match($subjectLengthPattern, $subject)) {
    $args['subject_error_msg'] = "Subject is too long";
    $isError = true;
  }
  if (!preg_match($messageLengthPattern, $message)) {
    $args['message_error_msg'] = "Message is too long";
    $isError = true;
  }

  if (!$isError)
  {
    saveFeedback($args);
    $args['is_success'] = true;
  }
  
  renderTemplate('main.tpl.php', $args);
}