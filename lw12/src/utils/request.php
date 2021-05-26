<?php

function getPostParameter(string $parameter): string 
{
  return $_POST($parameter);
}

function getRequestMethod(): string 
{
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    return 'post';
  }

  if ($_SERVER["REQUEST_METHOD"] == "GET") {
    return 'get';
  }

  return 'none';
}
  