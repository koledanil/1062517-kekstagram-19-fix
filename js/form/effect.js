'use strict';
// переключение между эффектами фотки
(function () {
  var effectList = document.querySelector('.effects__list');

  // E.1 Применение эффекта
  var applyEffectsHandler = function (evt) {
    window.selector.imgPreview.removeAttribute('class');
    window.selector.imgPreview.style.filter = '';
    window.selector.pin.style.left = window.constant.ADD_PHOTO_RULES.SLIDER_START_POSITION + 'px';
    window.selector.depth.style.width = window.constant.ADD_PHOTO_RULES.SLIDER_START_POSITION + 'px';
    var eventTarget = evt.target;
    if (eventTarget.value !== 'none') {
      window.selector.imgPreview.classList.add('effects__preview--' + eventTarget.value);
      if (window.selector.sliderTag.classList.contains !== 'hidden') {
        window.selector.sliderTag.classList.remove('hidden');
        chooseMaxLvl(eventTarget.value); // run E.2
      }
    } else {
      window.selector.sliderTag.classList.add('hidden');
      window.selector.effectLevelForm.value = 0;
    }
  };

  // E.2 записываем макс значение эффекта для выбора
  // Обраб. кейс, когда пользователь просто вкл. эффект и не двинул ползунок и нажал отправить. В этом. сл. эт. Фн отпавит эти значения
  var chooseMaxLvl = function (effectName) {
    switch (effectName) {
      case 'chrome':
        window.selector.effectLevelForm.value = window.constant.EFFECT_DEFAULT_VALUE.CHROME;
        return;

      case 'sepia':
        window.selector.effectLevelForm.value = window.constant.EFFECT_DEFAULT_VALUE.SEPIA;
        return;

      case 'marvin':
        window.selector.effectLevelForm.value = window.constant.EFFECT_DEFAULT_VALUE.MARVIN;
        return;

      case 'phobos':
        window.selector.effectLevelForm.value = window.constant.EFFECT_DEFAULT_VALUE.PHOBOS;
        return;

      case 'heat':
        window.selector.effectLevelForm.value = window.constant.EFFECT_DEFAULT_VALUE.HEAT;
        return;
    }
  };


  // E.1 Добавляем листенер
  var addEvtListener = function () {
    effectList.addEventListener('change', applyEffectsHandler);
  };


  // E.2 Удаляем листенер
  var removeListener = function () {
    effectList.removeEventListener('change', applyEffectsHandler);
  };

  // OUTPUT
  window.effect = {
    addEvtListener: addEvtListener,
    removeListener: removeListener
  };
})();
