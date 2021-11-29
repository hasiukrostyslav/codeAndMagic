'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_WIZARDS = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

// Return random integer number from min to max (not including max)
var getRandomRangeNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Return random element from array
var getRangomArrayEl = function (arr) {
  return arr[getRandomRangeNumber(0, arr.length)];
};

// Return random wizard name and last name
var createRandomName = function () {
  return (
    getRangomArrayEl(WIZARD_NAMES) + ' ' + getRangomArrayEl(WIZARD_LAST_NAMES)
  );
};

// Create array of objects
var createArrayOfObjects = function (numberOfObject) {
  var wizardArray = [];
  for (var i = 0; i < numberOfObject; i++) {
    var wizardObject = {
      name: createRandomName(),
      coatColor: getRangomArrayEl(COAT_COLORS),
      eyesColor: getRangomArrayEl(EYES_COLORS),
    };
    wizardArray.push(wizardObject);
  }
  return wizardArray;
};

var wizards = createArrayOfObjects(NUMBER_OF_WIZARDS);
