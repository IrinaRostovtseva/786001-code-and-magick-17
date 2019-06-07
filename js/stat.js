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
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderDialog = function (ctx, x0, y0, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x0, y0, DIALOG_WIDTH, DIALOG_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderDialog(ctx, DIALOG_X + 10, DIALOG_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderDialog(ctx, DIALOG_X, DIALOG_Y, 'white');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', DIALOG_X + GAP, DIALOG_Y + GAP * 0.5);
  ctx.fillText('Список результатов:', DIALOG_X + GAP, DIALOG_Y + GAP);
  var getMaxTime = function () {
    var maxTime = Math.round(times[0]);
    for (var i = 1; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = Math.round(times[i]);
      }
    }
    return maxTime;
  };
  var getYouIndex = function () {
    var youIndex = 0;
    for (var i = 1; i < names.length; i++) {
      if (names[i] === 'Вы') {
        youIndex = i;
      }
    }
    return youIndex;
  };
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('' + Math.round(times[i]), DIALOG_X + GAP + (BAR_WIDTH + GAP) * i, DIALOG_HEIGHT - GAP * 0.5 - 10 - (BAR_MAX_HEIGHT * times[i] / getMaxTime()));
    var blueSaturate = Math.random() * 100;
    console.log(blueSaturate);
    ctx.fillStyle = 'hsl(240,' + blueSaturate + '%' + ', 50%)';
    if (i === getYouIndex()) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(DIALOG_X + GAP + (BAR_WIDTH + GAP) * i, DIALOG_HEIGHT - GAP * 0.5 - (BAR_MAX_HEIGHT * times[i] / getMaxTime()), BAR_WIDTH, BAR_MAX_HEIGHT * times[i] / getMaxTime());
  }
  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[j], DIALOG_X + GAP + (BAR_WIDTH + GAP) * j, DIALOG_HEIGHT - 10);
  }
};
