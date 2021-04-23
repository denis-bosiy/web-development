<?php

function saveFeedbackPage(): void 
{
  $emailPattern = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';
  $namePattern = '/^[a-zA-Z]{2,200}$/';
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
  
  if (!preg_match($namePattern, $name)) {
    $args['name_error_msg'] = "Login's length must be from 2 to 200 letters"; 
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

  if (!$isError)
  {
    saveForm($args);
    $args['is_success'] = true;
  }
  
  renderTemplate('main.tpl.php', $args);
}