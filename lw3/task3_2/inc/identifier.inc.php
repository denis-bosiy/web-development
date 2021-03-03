<?php 
  function isLetter($ch) {
    return ctype_alpha($ch);
  }
  function isDigit($ch) {
    return ctype_digit($ch);
  }
  function getIsIdentifierError($ch) {
    if ( isLetter($ch) || isDigit($ch) ) {
      if ( ($i === 0) && (isDigit($ch)) ) {
        return true;
      }
      return false;
    }
    return true;
  }
  function checkIdentifier(?string $identifier) {
    if ($identifier) {
      $identifierArray = str_split($identifier);
      $identifierLength = strlen($identifier);
      $isIdentifierError = false;
      for($i = $identifierLength - 1; $i >= 0; $i--){
        $isIdentifierError = getIsIdentifierError($identifierArray[$i]); 
        if ($isIdentifierError) {
          return 'no';
        }
      }
      return 'yes';
    } else {
      return 'no';
    }
  }