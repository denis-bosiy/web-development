<?php
  function printRemoveExtraBlanks(?string $text) {
    if (isset($text)) {
      echo removeExtraBlanks($text);
    } else {
      echo 'Нет GET параметра text';
    }
  }
  
  function removeExtraBlanks(string $text) {
    $textLength = strlen($text);
    $outText = '';
    $w1 = ' ';
    $w2 = ' ';
    $isStarted = false;
    $textArray = str_split($text);
    for($i = 0; $i < $textLength; $i++) {
      $w1 = $w2;
      $w2 = $textArray[$i];
      if ( ($w1 === ' ') && 
           ($w2 !== ' ') && 
           ($isStarted === true)
         ) 
      {
        $outText = $outText . $w1;
      }
      if ($w2 !== ' ') {
        $outText = $outText . $w2;
      }
      if ( ($w1 === ' ') && 
           ($w2 !== ' ') && 
           ($isStarted === false) 
         ) 
      {
        $isStarted = true;
      }
    }
    return $outText;
  }