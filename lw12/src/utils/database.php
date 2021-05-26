<?php

const DB_DSN = "mysql:host=localhost;port=3306;dbname=bino";
const DB_USER = "root";
const DB_PASSWORD = "ybfhfue567";

function database(): PDO
{
  static $connection = null;
  if ($connection === null)
  {
    $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
  }
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  return $connection;
}

function saveFeedback(array $feedback): void
{
  $sql = "INSERT INTO Feedbacks (Name, Email, Subject, Message) 
          VALUES ('" . $feedback['name'] . "', '" . $feedback['email'] . "', '" .
          $feedback['subject'] . "', '" . $feedback['message'] . "')";

  $connection = database();
  $connection->query($sql);
  $connection = null;
}

function getFeedback(string $email): array 
{
  $sql = "SELECT Name, Email, Subject, Message 
          FROM Feedbacks WHERE Email = '" . $email ."'";

  $connection = database();
  $stmt = $connection->query($sql);
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  $feedback = $stmt->fetch();

  $isUserExists = $feedback !== FALSE ? true : false;
  if ($isUserExists) {
    $feedback = [];
  }

  return $feedback;
}