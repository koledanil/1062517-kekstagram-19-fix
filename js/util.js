
'use strict';
// содержит полезные функции, к-ые используются в разных местах кода

(function () {
  // U.1 Поиск темплейта и тэга внутри него
  var getTemplate = function (tagTemplate, tagInTemplate) {
    var template = document.querySelector(tagTemplate).content.querySelector(tagInTemplate);
    var result = template.cloneNode(true);
    return result;
  };

  // U.2 Выдача случ. числоа
  var getRandom = function (min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  // U.3 Выбор окончания слова
  var chooseEndWord = function (time) {
    var endWord = '';
    if (time === 1) {
      endWord = 'у';
    } else if (time >= 2 && time <= 4) {
      endWord = 'ы';
    } else if (time >= 5 || time === 0) {
      endWord = '';
    }
    return endWord;
  };

  // U.4 Перемешивание набора массива в случайный порядок
  var shuffleRandomNumber = function (array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // U.5 Debounce

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, window.constant.GALLERY_RULES.DEBOUNCE_INTERVAL);
    };
  };

  // OUTPUT
  window.util = {
    getRandom: getRandom,
    getTemplate: getTemplate,
    chooseEndWord: chooseEndWord,
    shuffleRandomNumber: shuffleRandomNumber,
    debounce: debounce
  };
})();
