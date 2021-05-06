<?php  
  function saveValue(string $valueName, ?string $value, string &$fileContent) {
    $fileContent = $fileContent . $valueName . ': ' . $value . "\n";
  }

  function saveIdentifier(string $identifierName, string $identifier, string &$fileContent) {
    $fileContent = $fileContent . $identifierName . ': ' . $identifier . "\n";
  }

  function saveForm($args) {
    $fileContent = '';
    $identifier = $args['email'];

    if(!is_dir('../data/')) {
      mkdir('../data/', 0777, true);
    }
    
    $filePath = '../data/' . $identifier . '.txt';
    saveValue('Name', $args['name'], $fileContent);
    saveValue('Email', $args['email'], $fileContent);
    saveIdentifier('Subject', $args['subject'], $fileContent);
    saveValue('Message', $args['message'], $fileContent);
    $file = fopen($filePath, 'w');
    fwrite($file, $fileContent);
    fclose($file);
  }