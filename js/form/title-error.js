'use strict';
// Данная функция предназначена для отображения к-ва ошибок в поле теги и комент в ЗАГОЛОВКЕ СТРАНИЦЫ
(function () {

  var formUpldImg = document.querySelector('.img-upload__text');
  var sumErr;
  var pageTitle;
  var intervalId;

  // TR.1 Выводит количество ошибок в заголовок окна
  var showErrCounterTitleHandler = function () {
    if (window.variable.counterErrTagTitle > 0 || window.variable.counterErrAreaTitle > 0) { // если значение не нулевое (то есть есть ошибки), выполняется выввод в заголовк
      sumErr = window.variable.counterErrTagTitle + window.variable.counterErrAreaTitle;
      pageTitle = '[' + sumErr + ' ошиб' + chooseEndWord(sumErr) + ']' + ' ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
      document.title = '[' + sumErr + ' ошиб' + chooseEndWord(sumErr) + ']' + ' ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
      document.addEventListener('visibilitychange', checkTabHandler);
    } else {
      document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE; // обнуляем заголовок если ошибок нет.
      document.removeEventListener('visibilitychange', checkTabHandler);
    }
  };

  // TR.2 Определяем окончание слова
  var chooseEndWord = function () {
    var endWord = '';
    if (sumErr === 1) {
      endWord = 'ка';
    } else if (sumErr >= 2 && sumErr <= 4) {
      endWord = 'ки';
    } else if (sumErr >= 5) {
      endWord = 'ок';
    }
    return endWord;
  };

  // TR.3 Если пользователь в другой вкладке и есть ошибки, то название будет мерцать
  //  ДЕМКА https://drive.google.com/file/d/1rMQHR-7RD8oB0VsQtkCJfoSLok65MDsk/view
  var checkTabHandler = function () {
    if (document.hidden) {
      showErrIfHidden(document.title);
    } else {
      clearInterval(intervalId);
      document.title = pageTitle;
    }
  };

  // TR.4 заставляет мигать текст в заголовке
  var showErrIfHidden = function () {
    var firstTxt = '(!) ' + pageTitle;
    var secondTxt = pageTitle;
    var switchTitle = function () {
      var result = (document.title === secondTxt) ? document.title = firstTxt : document.title = secondTxt;
      return result;
    };
    intervalId = setInterval(switchTitle, window.constant.ADD_PHOTO_RULES.INTERVAL_ERR_TITLE);
    return intervalId;
  };

  // TR.2 Добавляем листенере
  var addEvtListener = function () {
    formUpldImg.addEventListener('change', showErrCounterTitleHandler);
  };

  // TR.2 Удаляем листенере
  var removeListener = function () {
    formUpldImg.removeEventListener('change', showErrCounterTitleHandler);
    document.removeEventListener('visibilitychange', checkTabHandler);
  };

  // / OUTPUT
  window.titleError = {
    removeListener: removeListener,
    addEvtListener: addEvtListener
  };
})();
