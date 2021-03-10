<?php
  function printRemoveExtraBlanks(?string $text) {
    if (isset($text)) {
      echo removeExtraBlanks($text);
    } else {
      echo 'Нет GET параметра text';
    }
  }
  
  function removeExtraBlanks(string $text) {
    $outText = '';
    $w1 = ' ';
    $w2 = ' ';
    $isStarted = false;
    $textArray = str_split($text);
    foreach($textArray as $ch) {
      $w1 = $w2;
      $w2 = $ch;
      if ( ($w1 === ' ') && 
           ($w2 !== ' ') && 
           ($isStarted)
         ) 
      {
        $outText = $outText . $w1;
      }
      if ($w2 !== ' ') {
        $outText = $outText . $w2;
      }
      if ( ($w1 === ' ') && 
           ($w2 !== ' ') && 
           (!$isStarted) 
         ) 
      {
        $isStarted = true;
      }
    }
    return $outText;
  }