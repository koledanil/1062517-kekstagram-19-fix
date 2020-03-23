'use strict';
// Модуль необходим для изменения масштаба изображения
(function () {
  var newValaue;
  var scaleValue;
  window.selector.zoomInButton.disabled = true; // октлючаем кнопку зума при 100%
  var zoomStorage = document.querySelector('.scale__control--value');
  // SC.1 Изменяем масштаб изображения туда и сюда
  var scaleImageHandler = function (evt) {
    var condition = evt.target.className;
    switch (condition) {
      case 'scale__control scale__control--smaller':
        newValaue = parseInt(zoomStorage.value, 10) - window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) < window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = false;
        }
        return;

      case 'scale__control scale__control--bigger':
        newValaue = parseInt(zoomStorage.value, 10) + window.constant.ADD_PHOTO_RULES.ZOOM.STEP;
        zoomStorage.value = newValaue + '%';
        scaleValue = newValaue / 100;
        window.selector.imgPreview.style = 'transform: scale(' + scaleValue + ')';
        if (parseInt(zoomStorage.value, 10) === window.constant.ADD_PHOTO_RULES.ZOOM.MAX) {
          window.selector.zoomInButton.disabled = true;
        }
        if (parseInt(zoomStorage.value, 10) > window.constant.ADD_PHOTO_RULES.ZOOM.MIN) {
          window.selector.zoomOutButton.disabled = false;
        }
        return;
    } // switch
  };

  // SC.1 Добавляем листенер
  var addEvtListener = function () {
    window.selector.zoomButtons.addEventListener('click', scaleImageHandler);
  };

  // SC.2 Удаляем листенере
  var removeListener = function () {
    window.selector.zoomButtons.removeEventListener('click', scaleImageHandler);
  };

  // / OUTPUT
  window.scale = {
    removeListener: removeListener,
    addEvtListener: addEvtListener
  };

})(); // end iife s1
