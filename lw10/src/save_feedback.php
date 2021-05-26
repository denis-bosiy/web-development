<?php
  require_once('../src/utils/form.php');

  $emailPattern = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';
  $nameLengthPattern = '/^.{2,256}$/';
  $namePossibleCharactersPattern = '/^[a-zA-Z0-9]{0,}$/';
  $subjectLengthPattern = '/^.{1,256}$/';
  $messageLengthPattern = '/^.{1,256}$/';
  $args = array();

  $form_data = json_decode($_POST['form_data'], true);
  
  $name = $form_data['name'];
  $email = $form_data['email'];
  $subject = $form_data['subject'];
  $message = $form_data['message'];
  $isError = false;

  $args['name'] = $name;
  $args['email'] = $email;
  $args['subject'] = $subject;
  $args['message'] = $message;
  $args['errors'] = array();
  
  if (!preg_match($nameLengthPattern, $name)) {
    $args['errors']['name_msg'] = "Login's length must be from 2 to 256 letters"; 
    $isError = true;
  }
  if (!preg_match($namePossibleCharactersPattern, $name)) {
    $args['errors']['name_msg'] = "Login can contain only english letters and digits"; 
    $isError = true;
  }
  if (!preg_match($emailPattern, $email)) {
    $args['errors']['email_msg'] = "Email is not correct";
    $isError = true;
  }
  if (strlen($subject) === 0) {
    $args['errors']['subject_msg'] = "Subject is empty";
    $isError = true;
  }
  if (!preg_match($subjectLengthPattern, $subject)) {
    $args['errors']['subject_msg'] = "Subject is too long";
    $isError = true;
  }
  if (strlen($message) === 0) {
    $args['errors']['message_msg'] = "Message is empty";
    $isError = true;
  }
  if (!preg_match($messageLengthPattern, $message)) {
    $args['errors']['message_msg'] = "Message is too long";
    $isError = true;
  }

  if (!$isError)
  {
    saveForm($args);
    $args['is_success'] = true;
  }
  
  echo json_encode($args);