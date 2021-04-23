<?php
  function getFeedbackPage(): void
  {
    $emailPattern = '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';
    $args = array();
    $email = $_POST['email'];
    $args['email'] = $email;

    if (!preg_match($emailPattern, $email)) {
      $args['email_error_msg'] = 'Email is not correct';
    } else {
      if (isUserExists($email)) 
      {
        $args['user_infos'] = getFormInfo($email);
      } else {
        $args['user_infos_error_msg'] = 'Email is not exist';
      }
    }

    renderTemplate('user_feedback.tpl.php', $args);
  }