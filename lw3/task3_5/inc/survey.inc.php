<?php
  function surveyInfo(string $identifier) {
    $filePath = './../3_4/data/' . $identifier . '.txt';
    if (file_exists($filePath)) {
      $file = fopen($filePath, 'r');
      $fileContent = fread($file, filesize($filePath));
      echo nl2br($fileContent);
      fclose($file);
    } else {
      echo 'Email is not exists';
    }
  }

  function printSurveyInfo(?string $identifier) {
    if ($identifier) {
      echo surveyInfo($identifier);
    } else {
      echo 'Email was not entered';
    }
  }