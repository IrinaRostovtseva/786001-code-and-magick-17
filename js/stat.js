'use strict';
// Алгоритм
// 1. Нарисовать окно сообщения
// 2. Текст сообщения
// 3. Найти максимальное время в массиве times
// 4. Найти высоту коллонки в статистике
// 5. Нарисовать коллонки
// 6. Добавить подписи коллонкам
var DIALOG_WIDTH = 420;
var DIALOG_HEIGHT = 270;
var DIALOG_X = 100;
var DIALOG_Y = 10;
var GAP = 50;

var renderDialog = function (ctx, x0, y0, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x0, y0, DIALOG_WIDTH, DIALOG_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderDialog(ctx, DIALOG_X + 10, DIALOG_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderDialog(ctx, DIALOG_X, DIALOG_Y, 'white');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', DIALOG_X + GAP, DIALOG_Y + GAP);
  ctx.fillText('Список результатов:', DIALOG_X + GAP, DIALOG_Y + GAP * 1.5);
};
