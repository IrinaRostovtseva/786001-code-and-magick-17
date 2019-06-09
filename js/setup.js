'use strict';

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardBlock = document.querySelector('.setup-similar');
var similarWizardList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var USER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var USER_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizards = [];

var getRandomArrayElement = function (arr) {
  var randomElemIndex = Math.floor(Math.random() * arr.length);
  return arr[randomElemIndex];
};
var getWizardsList = function () {
  for (var i = 0; i < 4; i++) {
    var player = {
      name: getRandomArrayElement(USER_NAMES) + ' ' + getRandomArrayElement(USER_LAST_NAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS)
    };
    similarWizards[i] = player;
  }
  return similarWizards;
};

getWizardsList();

var createWizard = function (wizard) {
  var wizardItem = wizardTemplate.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardItem;
};

for (var i = 0; i < similarWizards.length; i++) {
  var wizard = createWizard(similarWizards[i]);
  fragment.appendChild(wizard);
}

similarWizardList.appendChild(fragment);
setup.classList.remove('hidden');
similarWizardBlock.classList.remove('hidden');
