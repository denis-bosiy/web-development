<?php
  function addSymbolsCount(string $password, int &$passwordStrength, int $passwordLength) {
    $passwordStrength = $passwordStrength + 4 * $passwordLength;
  }

  function addDigitsCount(string $password, int &$passwordStrength, int $passwordLength) {
    $digitsCount = 0;
    for($i = 0; $i < $passwordLength; $i++) {
      if (isDigit($password[$i])) {
        $digitsCount++;
      }
    }
    $passwordStrength = $passwordStrength + 4 * $digitsCount;
  }

  function addUppercaseSymbolsCount(string $password, int &$passwordStrength, int $passwordLength) {
    $uppercaseSymbolsCount = 0;
    for($i = 0; $i < $passwordLength; $i++) {
      if (isUppercaseSymbol($password[$i])) {
        $uppercaseSymbolsCount++;
      }
    }
    $passwordStrength = $passwordStrength + ($passwordLength-$uppercaseSymbolsCount)*2;
  }

  function addLowercaseSymbolsCount(string $password, int &$passwordStrength, int $passwordLength) {
    $lowercaseSymbolsCount = 0;
    for($i = 0; $i < $passwordLength; $i++) {
      if (isLowercaseSymbol($password[$i])) {
        $lowercaseSymbolsCount++;
      }
    }
    $passwordStrength = $passwordStrength + ($passwordLength-$lowercaseSymbolsCount)*2;
  }

  function subtractLettersRule(string $password, int &$passwordStrength, int $passwordLength) {
    if (isTextConsistsOfLetters($password)) {
      $passwordStrength = $passwordStrength - $passwordLength;
    }
  }

  function subtractDigitsRule(string $password, int &$passwordStrength, int $passwordLength) {
    if (isTextConsistsOfDigits($password)) {
      $passwordStrength = $passwordStrength - $passwordLength;
    }
  }
  
  function subtractRepeatedSymbolsRule(string $password, int &$passwordStrength, int $passwordLength) {
    $ch = '';
    $repeatedSymbolsCount = 0;
    for($i = 0; $i < $passwordLength; $i++) {
      $ch = $password[$i];
      if (substr_count($password, $ch) > 1) {
        $repeatedSymbolsCount++;
      }
    }
    if ($repeatedSymbolsCount) {
      $passwordStrength = $passwordStrength - $repeatedSymbolsCount * ($repeatedSymbolsCount - 1);
    }
  }
  
  function getPasswordStrength(string $password) {
    $passwordLength = strlen($password);
    $passwordStrength = 0;
    addSymbolsCount($password, $passwordStrength, $passwordLength);
    addDigitsCount($password, $passwordStrength, $passwordLength);
    addUppercaseSymbolsCount($password, $passwordStrength, $passwordLength);
    addLowercaseSymbolsCount($password, $passwordStrength, $passwordLength);
    subtractLettersRule($password, $passwordStrength, $passwordLength);
    subtractDigitsRule($password, $passwordStrength, $passwordLength);
    subtractRepeatedSymbolsRule($password, $passwordStrength, $passwordLength);
    return $passwordStrength;
  }

  function printPasswordStrength(?string $password) {
    if ($password) {
      echo getPasswordStrength($password);
    } else {
      echo 'Нет GET параметра password';
    }
  }