<?php 
  function isLetter(string $ch) {
    return ctype_alpha($ch);
  }
  function isDigit(string $ch) {
    return ctype_digit($ch);
  }
  function getIdentifierError(string $ch, int $index) {
    if ( isLetter($ch) || isDigit($ch) ) {
      if ( ($index === 0) && (isDigit($ch)) ) {
        return 'Error: first symbol - digit';
      }
      return false;
    }
    return 'Error: ' . $ch . ' is not a letter and not a digit';
  }
  function checkIdentifier(?string $identifier) {
    if ($identifier) {
      $identifierArray = str_split($identifier);
      $identifierLength = strlen($identifier);
      $identifierError = '';
      for($i = $identifierLength - 1; $i >= 0; $i--){
        $identifierError = getIdentifierError($identifierArray[$i], $i); 
        if ($identifierError) {
          return $identifierError;
        }
      }
      return 'yes';
    } else {
      return 'Identifier was not entered';
    }
  }