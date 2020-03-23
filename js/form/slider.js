'use strict';

// Полузнок эффектов
(function () {
// SL.1 Выбор нужной формулы расчета и присвоение значения эффекта (записываем в value inputa) в html для отправки на сервер
  var getEffectValue = function (level) {
    var effectType = window.selector.imgPreview.getAttribute('class');

    var effectValue;
    switch (effectType) {
      case 'effects__preview--none':
        window.selector.imgPreview.style.filter = 'none';
        window.selector.effectLevelForm.value = 0;
        return;

      case 'effects__preview--chrome':
        effectValue = level / 100;
        window.selector.imgPreview.style.filter = 'grayscale(' + effectValue + ')';
        window.selector.effectLevelForm.value = effectValue;

        return;

      case 'effects__preview--sepia':
        effectValue = level / 100;
        window.selector.imgPreview.style.filter = 'sepia(' + effectValue + ')';
        window.selector.effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--marvin':
        window.selector.imgPreview.style.filter = 'invert(' + level + '%)';
        window.selector.effectLevelForm.value = level;
        return;

      case 'effects__preview--phobos':
        effectValue = (level / 10) / 3;
        window.selector.imgPreview.style.filter = 'blur(' + effectValue + 'px)';
        window.selector.effectLevelForm.value = effectValue;
        return;

      case 'effects__preview--heat':
        if (level < 1) { // условие ограничивает минимальное значение 1 (а не 0, как стандартно выдает ползунок). Эффект не прнимает 0
          effectValue = 1;
        }
        effectValue = (level / 100 * 2) + 1;
        window.selector.imgPreview.style.filter = 'brightness(' + effectValue + ')';
        window.selector.effectLevelForm.value = effectValue;
        return;
    }
  };

  // SL.2 Двжиение слайдера туда сюда и вызвов функции SL.1 (строка 73)
  var movePinHandler = function (evt) {
    var lineEmpty = document.querySelector('.effect-level__line');
    var limitMovementX;
    var pinCoord;
    var slideOutput;
    limitMovementX = {
      min: 0,
      max: lineEmpty.offsetLeft + lineEmpty.offsetWidth - window.selector.pin.offsetWidth
    };
    pinCoord = window.selector.pin.offsetLeft + evt.movementX;
    if (pinCoord < limitMovementX.min) {
      pinCoord = limitMovementX.min;
    }
    if (pinCoord >= limitMovementX.max) {
      pinCoord = limitMovementX.max;
    }
    slideOutput = pinCoord * 100 / limitMovementX.max;
    if (slideOutput < 0) {
      slideOutput = 0;
    }
    window.selector.pin.style.left = pinCoord + 'px'; // меняем положение ползунка
    window.selector.depth.style.width = pinCoord + 'px'; // меняем положение акцента
    getEffectValue(slideOutput);
  };

  var pinMouseUpHandler = function () {
    document.removeEventListener('mousemove', movePinHandler);
    document.removeEventListener('mouseup', pinMouseUpHandler);
  };

  var preventActionHandler = function (evt) {
    evt.preventDefault();
  };

  var startListHandler = function () {
    window.selector.pin.addEventListener('dragstart', preventActionHandler);
    document.addEventListener('mousemove', movePinHandler);
    document.addEventListener('mouseup', pinMouseUpHandler);
  };

  // SL.1 Добавляем листенер
  var addEvtListener = function () {
    window.selector.pin.addEventListener('mousedown', startListHandler);
  };

  // SL.2 Удаляем листенере
  var removeListener = function () {
    window.selector.pin.addEventListener('mousedown', startListHandler);
  };

  // / OUTPUT
  window.slider = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
