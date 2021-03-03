<?php  
  function saveValue(string$valueName, ?string $value, string &$fileContent) {
    $fileContent = $fileContent . $valueName . ': ' . $value . "\n";
  }

  function saveIdentifier(string $identifierName, string $identifier, string &$fileContent) {
    $fileContent = $fileContent . $identifierName . ': ' . $identifier . "\n";
  }

  function saveSurvey() {
    $fileContent = '';
    $identifier = $_GET['email'];
    saveValue('First Name', $_GET['first_name'], $fileContent);
    saveValue('Last Name', $_GET['last_name'], $fileContent);
    saveIdentifier('Email', $identifier, $fileContent);
    saveValue('Age', $_GET['age'], $fileContent);
    $filePath = './data/' . $identifier . '.txt';
    $file = fopen($filePath, 'w');
    fwrite($file, $fileContent);
    fclose($file);
  }