<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Лаба 7</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="css/index.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <?php
      require_once('../src/common.inc.php');
      if (getRequestMethod() === 'post') {
        saveFeedbackPage();
      } else {
        mainPage();
      }
    ?>
  </body>
</html>