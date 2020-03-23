'use strict';
// Отображает сообзение об успешной загрузке фотографии
(function () {
  // D.1 Отображает окно с сообщением про успех
  var show = function () {
    window.selector.donePlace.appendChild(window.selector.doneMsg);
    window.selector.doneBtn.addEventListener('click', removeMsgHandler);
    window.addEventListener('keydown', removeMsgEscHandler);
    window.addEventListener('click', clickOutHandler);
    document.title = '[Загружено фото!] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    startTime();
  };

  // D.2 Закрывает при клике вне формы
  var clickOutHandler = function (evt) {
    var errContainer = evt.target.closest('.success__inner');
    if (!errContainer) {
      closeMsg();
    }
  };

  // D.3 Функция удаляет окно из разметки
  var closeMsg = function () {
    window.selector.doneMsg.remove();
    removeEvtListener();
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
  };

  // D.4 Закрытие по таймеру
  var startTime = function () {
    var second = window.constant.ADD_PHOTO_RULES.TIME_CLOSE_MSG;
    window.selector.doneCounter.textContent = 'Окно закроется через ' + second + ' секунд' + window.util.chooseEndWord(second);

    var countSecond = function () {
      if (second === 0) {
        clearInterval(setID);
        closeMsg();
        return;
      }
      second--;

      window.selector.doneCounter.textContent = 'Окно закроется через ' + second + ' секунд' + window.util.chooseEndWord(second);
    };
    var setID = setInterval(countSecond, 1000);
  };

  // D.5 Слушатель закрытия по ESC
  var removeMsgHandler = function () {
    closeMsg();
  };

  // D.5.1 Удалятор слушателея
  var removeEvtListener = function () {
    window.selector.doneBtn.removeEventListener('click', removeMsgHandler);
    window.removeEventListener('keydown', removeMsgHandler);
    window.removeEventListener('click', clickOutHandler);
  };

  // D.5.2 Закрытие по ESC
  var removeMsgEscHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMsg();
    }
  };

  // OUTPUT
  window.done = {
    show: show
  };
})();

