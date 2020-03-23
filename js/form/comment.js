'use strict';

(function () {
  // Т.2 Контроль длины поля ввода
  window.selector.counterPlace.classList.add('text__counter'); // присваивет стиль каунтера по умолчанию
  window.variable.validityTextArea = true;

  window.variable.counterSymbol = 0;
  // ==== Т.2.1 Отображает каунтер
  var showCounterHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
  };
    // ==== Т.2.2 Убирает каунтер
  var hideCounterHandler = function () {
    if (window.variable.counterSymbol === 0) {
      window.selector.counterPlace.classList.add('hidden');
    }
  };
    // ==== Т.2.3 Считает символы в тексте
  var checkLengthTextAreaHandler = function () {
    window.selector.counterPlace.classList.remove('hidden');
    window.variable.counterSymbol = window.selector.textArea.value.length;
    window.selector.counterPlace.classList.add('counter__default');
    window.selector.counterPlace.textContent = 'Введено ' + window.variable.counterSymbol + ' из ' + window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH + ' символов';
    if (window.variable.counterSymbol === 0) {
      window.selector.textArea.classList.remove('border-error');
    }

    if (window.variable.counterSymbol >= window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.MAX_LENGTH) {
      window.selector.counterPlace.classList.add('counter-error');
      window.selector.counterPlace.textContent = window.constant.ADD_PHOTO_RULES.MSG.ERR_MAX_CHARACTER;
      window.variable.counterErrAreaTitle = 1; // используется для отображения количества ошибок в заголовке S.2
      window.selector.textArea.classList.add('border-error');
      window.variable.validityTextArea = false;

    } else {
      // counterPlace.removeAttribute('class');
      window.selector.counterPlace.classList.remove('counter-error');
      window.selector.textArea.classList.remove('border-error');
      window.variable.validityTextArea = true;
      window.variable.counterErrAreaTitle = 0; // затираем количество ощибок в заголовке
    }
  };


  // E.1 Добавляем листенер
  var addEvtListener = function () {
    window.selector.textArea.addEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
    window.selector.textArea.addEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
    window.selector.textArea.addEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса
  };

  // T.3 Удаляем листенер
  var removeListener = function () {
    window.selector.textArea.removeEventListener('focus', showCounterHandler); // Показывает счетчик символов при фокусе
    window.selector.textArea.removeEventListener('keyup', checkLengthTextAreaHandler); // Считает символы при вводе
    window.selector.textArea.removeEventListener('blur', hideCounterHandler); // Прячет счетчик при потери фокуса
  };

  // OUTPUT
  window.comment = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
