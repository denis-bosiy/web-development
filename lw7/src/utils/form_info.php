<?php
  function isUserExists(string $identifier) 
  {
    $filePath = '../data/' . $identifier . '.txt';
    return file_exists($filePath);
  }

  function getFormInfo(string $identifier) 
  {
    $filePath = '../data/' . $identifier . '.txt';
    $file = fopen($filePath, 'r');
    $line = fgets($file);
    $user_infos = array();
    while ($line) {
      array_push($user_infos, $line);
      $line = fgets($file);
    }
    fclose($file);
    return $user_infos;
  }