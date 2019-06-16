'use strict';

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardBlock = document.querySelector('.setup-similar');
var similarWizardList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
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
similarWizardBlock.classList.remove('hidden');

//  Открытие(закрытие) окна настроек волшебника
var setupOpen = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
};
var setupClose = function () {
  setupUserName.removeEventListener('focus', focusUserName);
  setup.classList.add('hidden');
};

var onSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setupClose();
  }
};

var onSetupEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.remove('hidden');
  }
  document.addEventListener('keydown', onSetupEscPress);
};

var focusUserName = function () {
  setupClose = null;
};
setupUserName.addEventListener('focus', focusUserName);
setupOpenButton.addEventListener('click', setupOpen);
setupOpenButton.addEventListener('keydown', onSetupEnterPress);
setupCloseButton.addEventListener('click', setupClose);
