'use strict';
// Отображает сообзение об неверном формате файла
(function () {
  // E.1 Отображает окно с сообщением про jib,re
  var show = function () {
    window.selector.errFilePlace.appendChild(window.selector.errFileMsg);
    window.addEventListener('keydown', removeMsgEscHandler);
    window.addEventListener('click', clickOutHandler);
    document.title = '[Неверный формат изобаржения] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
  };

  // E.2 Закрывает при клике вне формы
  var clickOutHandler = function (evt) {
    var errContainer = evt.target.closest('.error__inner');
    if (!errContainer) {
      closeMsg();
    }
  };

  // E.3 Функция удаляет окно из разметки
  var closeMsg = function () {
    window.selector.errFileMsg.remove();
    removeEvtListener();
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
  };

  // E.4 Удалятор слушателея
  var removeMsgHandler = function () {
    closeMsg();
  };

  // E.4.1 Удалятор слушателея
  var removeEvtListener = function () {
    window.removeEventListener('keydown', removeMsgHandler);
    window.removeEventListener('click', clickOutHandler);
  };

  // E.4.2 Удалятор слушателея
  var removeMsgEscHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeMsg();
    }
  };

  // OUTPUT
  window.errorFile = {
    show: show
  };
})();

