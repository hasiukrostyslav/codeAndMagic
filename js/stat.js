'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GIST_GAP = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + TEXT_GAP,
    CLOUD_Y + GAP + TEXT_GAP
  );
  ctx.fillText(
    'Список результатов:',
    CLOUD_X + TEXT_GAP,
    CLOUD_Y + GAP + TEXT_GAP + FONT_GAP + GAP
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + GIST_GAP + (BAR_WIDTH + BAR_GAP) * i,
      200 - (BAR_HEIGHT * times[i]) / maxTime + TEXT_GAP + GAP
    );
    ctx.fillText(
      names[i],
      CLOUD_X + GAP + GIST_GAP + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_HEIGHT - GAP
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(
      CLOUD_X + GAP + GIST_GAP + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_HEIGHT - GIST_GAP,
      BAR_WIDTH,
      (-BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
