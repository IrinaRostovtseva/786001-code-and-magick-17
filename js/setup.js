'use strict';

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardBlock = document.querySelector('.setup-similar');
var similarWizardList = document.querySelector('.setup-similar-list');
var wizardName = wizardTemplate.querySelector('.setup-similar-label');
var wizardCoat = wizardTemplate.querySelector('.wizard-coat');
var wizardEyes = wizardTemplate.querySelector('.wizard-eyes');

var USER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var USER_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizards = [];

var getRandomArrayElement = function (arr) {
  var randomElemIndex = Math.floor(Math.random() * arr.length);
  return arr[randomElemIndex];
};
var getWizardsList = function (arr) {
  for (var i = 0; i < 4; i++) {
    var player = {
      name: getRandomArrayElement(USER_NAMES) + ' ' + getRandomArrayElement(USER_LAST_NAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS)
    }
    arr[i] = player;
  }
  return arr;
}
console.log(getWizardsList(similarWizards));
setup.classList.remove('hidden');
similarWizardBlock.classList.remove('hidden');
