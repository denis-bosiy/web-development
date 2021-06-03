function drawCartman() {
	const canvas = document.getElementById('cartman');
	const context = canvas.getContext('2d');

	// Голова

	context.fillStyle = '#ffeec4';
	context.beginPath();
	context.ellipse(150, 148, 75, 60, 0, 0, 2 * Math.PI, false);
	context.fill();

	// Шапка

	// Фасон шапки
	context.beginPath();
	context.fillStyle = '#00b9c6';
	context.bezierCurveTo(75, 140, 85, 89, 140, 85);
	context.bezierCurveTo(140, 85, 190, 69, 225, 130);
	context.bezierCurveTo(225, 130, 150, 92, 75, 140);
	context.fill();
	// Резинка на шапке
	context.beginPath();
	context.strokeStyle = '#ffe01d';
	context.lineWidth = '5';
	context.bezierCurveTo(225, 130, 150, 95, 75, 140);
	context.stroke();
	context.fillStyle = '#ffe01d';
	// Звёзда на шапке
	context.beginPath();
	context.ellipse(145, 85, 5, 20, -1.2 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.ellipse(150, 85, 5, 20, -1.1 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.ellipse(150, 85, 5, 20, 1 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.ellipse(150, 85, 5, 15, 1.3 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();

	context.lineWidth = '1';

	// Глаза
	context.beginPath();
	context.fillStyle = '#fff';
	context.ellipse(136, 143, 22, 17, 1.35 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.strokeStyle = '#c2c1c1';
	context.ellipse(136, 143, 22, 17, 1.35 / 2 * Math.PI, 1 / 2 * Math.PI, -1.5 / 2 * Math.PI, false);
	context.stroke();
	context.beginPath();
	context.fillStyle = '#fff';
	context.ellipse(173, 144, 22, 17, -1.2 / 2 * Math.PI, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.strokeStyle = '#c2c1c1';
	context.ellipse(173, 144, 22, 17, -1.2 / 2 * Math.PI, 1 / 2 * Math.PI, -0.5 / 2 * Math.PI, true);
	context.stroke();
	context.beginPath();
	context.fillStyle = '#000';
	context.arc(164, 143, 2, 0, 2 * Math.PI, false);
	context.fill();
	context.beginPath();
	context.fillStyle = '#000';
	context.arc(142, 143, 2, 0, 2 * Math.PI, false);
	context.fill();

	// Рот

	context.beginPath();
	context.fillStyle = '#000';
	context.moveTo(140, 180);
	context.lineTo(165, 180);
	context.lineTo(160, 191);
	context.lineTo(147, 189);
	context.fill();

	// Зубы

	context.beginPath();
	context.fillStyle = '#fff';
	context.rect(145, 181, 5, 3);
	context.fill();

	context.beginPath();
	context.fillStyle = '#fff';
	context.rect(151, 181, 5, 3);
	context.fill();

	context.beginPath();
	context.fillStyle = '#fff';
	context.rect(157, 181, 5, 3);
	context.fill();

	// Жировые складки

	context.beginPath();
	context.strokeStyle = '#000';
	context.lineWidth = '0.5';
	context.bezierCurveTo(141, 192, 158, 197, 171, 192);
	context.stroke();

	context.beginPath();
	context.strokeStyle = '#000';
	context.lineWidth = '0.5';
	context.bezierCurveTo(96, 182, 150, 226, 210, 177);
	context.stroke();

	// Тело

	context.beginPath();
	context.bezierCurveTo(79, 169, 58, 175, 50, 210);
	context.bezierCurveTo(50, 210, 69, 225, 66, 237);
	context.bezierCurveTo(66, 237, 110, 273, 190, 245);
	context.bezierCurveTo(190, 245, 210, 245, 230, 242);
	context.bezierCurveTo(230, 242, 240, 245, 246, 212);
	context.bezierCurveTo(246, 212, 249, 190, 238, 183);
	context.bezierCurveTo(238, 183, 232, 170, 220, 169);
	context.bezierCurveTo(220, 169, 160, 257, 79, 169);
	context.fillStyle = '#ff1c3c';
	context.fill();

	context.fillStyle = '#ffe01d';

	// Рука левая

	context.beginPath();
	context.bezierCurveTo(51, 215, 40, 180, 75, 200);
	context.bezierCurveTo(75, 200, 113, 220, 60, 220);
	context.bezierCurveTo(60, 220, 56, 217, 52, 215);
	context.fill();

	// Рука правая

	context.beginPath();
	context.bezierCurveTo(220, 204, 210, 217, 225, 213);
	context.bezierCurveTo(225, 213, 232, 218, 240, 218);
	context.bezierCurveTo(240, 218, 250, 212, 253, 212);
	context.bezierCurveTo(253, 212, 251, 204, 250, 190);
	context.bezierCurveTo(250, 190, 247, 189, 243, 188);
	context.bezierCurveTo(243, 188, 237, 189, 228, 190);
	context.bezierCurveTo(228, 190, 224, 196, 220, 204);
	context.fill();

	// Застёжка кофты

	context.beginPath();
	context.moveTo(160, 208);
	context.lineWidth = '0.2';
	context.lineTo(160, 253);
	context.stroke();

	context.fillStyle = '#000';

	// Пуговицы

	context.beginPath();
	context.arc(155, 210, 1.5, 0, 2 * Math.PI, false);
	context.fill();

	context.beginPath();
	context.arc(157, 228, 1.5, 0, 2 * Math.PI, false);
	context.fill();

	context.beginPath();
	context.arc(155, 245, 1.5, 0, 2 * Math.PI, false);
	context.fill();

	// Штаны

	context.beginPath();
	context.bezierCurveTo(70, 240, 115, 265, 190, 245);
	context.bezierCurveTo(190, 245, 197, 245, 232, 242);
	context.bezierCurveTo(232, 242, 230, 245, 223, 261);
	context.bezierCurveTo(223, 261, 180, 250, 150, 261);
	context.bezierCurveTo(150, 261, 110, 250, 77, 260);
	context.bezierCurveTo(77, 260, 72, 250, 70, 240);
	context.fillStyle = '#804429';
	context.fill();

	// Обувь

	context.beginPath();
	context.bezierCurveTo(70, 262, 100, 248, 150, 261);
	context.bezierCurveTo(150, 261, 190, 245, 230, 261);
	context.lineTo(70, 262);
	context.fillStyle = '#000';
	context.fill();
	context.stroke();
}

function drawKenny() {
	const canvas = document.getElementById('kenny');
	const context = canvas.getContext('2d');

	// Голова

	// Капюшон
	context.fillStyle = '#fa6800';
	context.beginPath();
	context.ellipse(150, 148, 85, 86, 0, 0, 2 * Math.PI, false);
	context.fill();

	// Резинка круглая капюшона
	context.lineWidth = '1';
	context.beginPath();
	context.ellipse(149, 153, 61, 53, 0, 0, 2 * Math.PI, false);
	context.stroke();

	// Прокладки капюшона

	context.fillStyle = '#81481d';
	context.strokeStyle = '#81481d';

	context.beginPath();
	context.bezierCurveTo(147, 193, 65, 145, 150, 100);
	context.bezierCurveTo(150, 100, 90, 105, 95, 147);
	context.bezierCurveTo(95, 147, 90, 190, 147, 193);
	context.fill();
	context.stroke();

	context.beginPath();
	context.bezierCurveTo(147, 193, 227, 155, 150, 100);
	context.bezierCurveTo(150, 100, 200, 105, 201, 147);
	context.bezierCurveTo(201, 147, 198, 201, 147, 193);
	context.fill();
	context.stroke();

	// Резинки капюшона

	context.strokeStyle = '#000';

	context.beginPath();
	context.bezierCurveTo(147, 193, 141, 207, 136, 220);
	context.moveTo(147, 193);
	context.bezierCurveTo(147, 193, 146, 210, 150, 225);
	context.stroke();

	// Лицо

	context.fillStyle = '#ffdfb2';

	context.beginPath();
	context.bezierCurveTo(147, 193, 66, 145, 150, 100);
	context.moveTo(147, 193);
	context.bezierCurveTo(147, 193, 226, 155, 150, 100);
	context.fill();

	// Глаза

	context.fillStyle = '#fff';
	context.lineWidth = '0.5';

	context.beginPath();
	context.ellipse(127, 143, 20, 24, 0.15 * Math.PI, 1.23 * Math.PI, 0.46 * Math.PI, false);
	context.bezierCurveTo(105, 150, 110, 130, 122, 122);
	context.fill();
	context.beginPath();
	context.ellipse(127, 143, 20, 24, 0.15 * Math.PI, 1.25 * Math.PI, 1.9 * Math.PI, false);
	context.stroke();

	context.beginPath();
	context.ellipse(169, 146, 20, 24, -0.15 * Math.PI, 0.57 * Math.PI, 1.8 * Math.PI, false);
	context.moveTo(176, 169);
	context.bezierCurveTo(176, 169, 191, 155, 177, 126);
	context.fill();
	context.beginPath();
	context.ellipse(169, 146, 20, 24, -0.15 * Math.PI, 1.2 * Math.PI, 1.8 * Math.PI, false);
	context.stroke();

	context.beginPath();
	context.moveTo(177, 129);
	context.strokeStyle = '#fff';
	context.lineWidth = '3';
	context.lineTo(176, 166);
	context.stroke();

	// Зрачки

	context.fillStyle = '#000';

	context.beginPath();
	context.arc(133, 143, 3, 0, 2 * Math.PI, false);
	context.fill();
	context.arc(165, 144, 3, 0, 2 * Math.PI, false);
	context.fill();

	// Тело

	context.fillStyle = '#f76a01';

	context.beginPath();
	context.bezierCurveTo(93, 210, 76, 229, 77, 256);
	context.bezierCurveTo(77, 256, 83, 266, 100, 270);
	context.lineTo(100, 288);
	context.lineTo(200, 288);
	context.lineTo(200, 273);
	context.bezierCurveTo(200, 273, 210, 273, 220, 253);
	context.bezierCurveTo(220, 253, 225, 235, 207, 211);
	context.bezierCurveTo(207, 211, 150, 260, 93, 210);
	context.fill();

	// Застёжка на кофте

	context.lineWidth = '1';
	context.strokeStyle = '#000';

	context.beginPath();
	context.moveTo(150, 233);
	context.lineTo(150, 278);
	context.stroke();

	// Левая рука

	context.lineWidth = '0.5';
	context.fillStyle = '#804817';

	context.beginPath();
	context.moveTo(98, 240);
	context.lineTo(94, 255);
	context.stroke();

	context.lineWidth = '0.2';

	context.beginPath();
	context.arc(81, 259, 12, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	context.beginPath();
	context.arc(90, 255, 5, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	// Правая рука

	context.lineWidth = '0.5';

	context.beginPath();
	context.moveTo(201, 242);
	context.lineTo(201, 260);
	context.stroke();

	context.lineWidth = '0.2';

	context.beginPath();
	context.arc(216, 261, 12, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	context.beginPath();
	context.arc(207, 255, 5, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();

	// Обувь

	context.fillStyle = '#000';

	context.beginPath();
	context.rect(95, 288, 110, 5);
	context.fill();
}

function run() {
	drawCartman();
	drawKenny();
}

window.onload = run;
