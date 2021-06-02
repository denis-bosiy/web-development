function drawCartman() {
  const canvas = document.getElementById('cartman');
  const context = canvas.getContext('2d');

  // Голова

  context.fillStyle = '#ffeec4';
  context.beginPath();
  context.ellipse(150, 150, 75, 60, 0, 0, 2 * Math.PI, false);
  context.fill();

  // Шапка

  // Фасон шапки
  context.beginPath();
  context.fillStyle = '#00b9c6';
  context.bezierCurveTo(75, 130, 150, 30, 225, 130);
  context.bezierCurveTo(225, 130, 150, 105, 75, 130);
  context.fill();
  // Резинка на шапке
  context.beginPath();
  context.strokeStyle = '#ffe01d';
  context.lineWidth = "5";
  context.bezierCurveTo(225, 130, 150, 105, 75, 130);
  context.stroke();
  context.fillStyle = '#ffe01d';
  // Звёзда на шапке
  context.beginPath();
  context.ellipse(145, 85, 7, 20, (-1.3 / 2) * Math.PI, 0, 2 * Math.PI, false);
  context.fill();
  context.beginPath();
  context.ellipse(150, 85, 7, 20, (-1 / 2) * Math.PI, 0, 2 * Math.PI, false);
  context.fill();
  context.beginPath();
  context.ellipse(150, 85, 7, 20, (1.3 / 2) * Math.PI, 0, 2 * Math.PI, false);
  context.fill();
  context.beginPath();
  context.ellipse(150, 82, 7, 20, (1.1 / 2) * Math.PI, 0, 2 * Math.PI, false);
  context.fill();

  context.lineWidth = "1";

  // Глаза
  context.beginPath();
  context.fillStyle = '#fff';
  context.ellipse(127, 152, 22, 17, (1.6 / 2) * Math.PI, 0, 2 * Math.PI, false);
  context.fill();
  context.beginPath();
  context.strokeStyle = '#c2c1c1';
  context.ellipse(
    127,
    152,
    22,
    17,
    (1.6 / 2) * Math.PI,
    (1 / 2) * Math.PI,
    (-1.5 / 2) * Math.PI,
    false
  );
  context.stroke();
  context.beginPath();
  context.fillStyle = '#fff';
  context.ellipse(
    170,
    152,
    22,
    17,
    (-1.6 / 2) * Math.PI,
    0,
    2 * Math.PI,
    false
  );
  context.fill();
  context.beginPath();
  context.strokeStyle = '#c2c1c1';
  context.ellipse(
    170,
    152,
    22,
    17,
    (-1.6 / 2) * Math.PI,
    (1 / 2) * Math.PI,
    (-0.5 / 2) * Math.PI,
    true
  );
  context.stroke();
  context.beginPath();
  context.fillStyle = '#000';
  context.arc(161, 148, 2, 0, 2 * Math.PI, false);
  context.fill();
  context.beginPath();
  context.fillStyle = '#000';
  context.arc(137, 148, 2, 0, 2 * Math.PI, false);
  context.fill();

  // Рот

  context.beginPath();
  context.fillStyle = '#000';
  context.moveTo(135, 177);
  context.lineTo(170, 177);
  context.lineTo(163, 187);
  context.fill();

  // Зубы

  context.beginPath();
  context.fillStyle = '#fff';
  context.rect(148, 177, 5, 3);
  context.fill();

  context.beginPath();
  context.fillStyle = '#fff';
  context.rect(154, 177, 5, 3);
  context.fill();

  context.beginPath();
  context.fillStyle = '#fff';
  context.rect(160, 177, 5, 3);
  context.fill();

  // Жировые складки

  context.beginPath();
  context.strokeStyle = '#000';
  context.lineWidth = '0.2';
  context.bezierCurveTo(136, 187, 158, 202, 180, 187);
  context.stroke();

  context.beginPath();
  context.strokeStyle = '#000';
  context.lineWidth = '0.2';
  context.bezierCurveTo(96, 182, 158, 232, 210, 177);
  context.stroke();

  // Тело

  context.beginPath();
  context.bezierCurveTo(84, 177, 40, 205, 66, 245);
  context.bezierCurveTo(66, 245, 90, 280, 160, 260);
  context.moveTo(160, 260);
  context.lineTo(186, 255);
  context.lineTo(186, 255);
  context.lineTo(226, 252);
  context.bezierCurveTo(226, 252, 280, 215, 217, 177);
  context.bezierCurveTo(217, 177, 150, 253, 84, 177);
  context.fillStyle = '#ff1c3c';
  context.fill();

  context.fillStyle = '#ffe01d';

  // Рука левая

  context.beginPath();
  context.bezierCurveTo(55, 220, 35, 180, 85, 208);
  context.bezierCurveTo(85, 208, 115, 240, 55, 220);
  context.fill();

  // Рука правая

  context.beginPath();
  context.moveTo(220, 210);
  context.lineTo(228, 201);
  context.lineTo(245, 201);
  context.lineTo(248, 203);
  context.lineTo(251, 223);
  context.lineTo(239, 229);
  context.lineTo(235, 219);
  context.bezierCurveTo(235, 219, 215, 215, 220, 210);
  context.fill();

  // Застёжка кофты

  context.beginPath();
  context.moveTo(150, 211);
  context.lineWidth = '2';
  context.lineTo(150, 262);
  context.stroke();

  context.fillStyle = '#000';

  // Пуговицы

  context.beginPath();
  context.arc(142, 217, 1.5, 0, 2 * Math.PI, false);
  context.fill();

  context.beginPath();
  context.arc(144, 235, 1.5, 0, 2 * Math.PI, false);
  context.fill();

  context.beginPath();
  context.arc(142, 252, 1.5, 0, 2 * Math.PI, false);
  context.fill();

  // Штаны

  context.beginPath();
  context.bezierCurveTo(66, 245, 90, 280, 175, 255);
  context.lineTo(230, 250);
  context.lineTo(228, 269);
  context.bezierCurveTo(228, 269, 200, 260, 140, 270);
  context.bezierCurveTo(140, 270, 100, 265, 75, 272);
  context.lineTo(66, 245);
  context.fillStyle = '#804429';
  context.fill();

  // Обувь

  context.beginPath();
  context.bezierCurveTo(75, 272, 125, 264, 140, 270);
  context.bezierCurveTo(140, 272, 180, 260, 228, 268);
  context.lineTo(75, 272);
  context.fillStyle = '#000';
  context.fill();
  context.stroke();
}

function drawKenny() {
    
}
function run() {
  drawCartman();
  drawKenny();
}

window.onload = run;
