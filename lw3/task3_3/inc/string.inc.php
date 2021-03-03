<?php
  function isDigit(string $ch) {
    return ctype_digit($ch);
  }

  function isUppercaseSymbol(string $ch) {
    return ctype_upper($ch);
  }

  function isLowercaseSymbol(string $ch) {
    return ctype_lower($ch);
  }

  function isTextConsistsOfLetters(string $text) {
    return ctype_alpha($text);
  }
  
  function isTextConsistsOfDigits(string $text) {
    return ctype_digit($text);
  }