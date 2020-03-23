'use strict';

(function () {
// U.4 Disable btm TRUE +++
  var disabledBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = true;
    document.title = '[Загрузка...] ' + window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    window.selector.submitBtn.textContent = 'Загрузка...';
    // делаем контролы неактивными на время загрухки
    window.selector.zoomButtons.disabled = true;
    window.selector.tagInput.disabled = true;
    window.selector.textArea.disabled = true;
    window.selector.submitBtn.classList.add('pulse-btn');
  };

  // U.4.1 Делаем все првеьюшки эффектов неактив на время загрузки фото
  var disabledEffectPreview = function () {
    // отключаем хувер на превьшках эффектов
    window.selector.effectPrw.forEach(function (item) {
      item.classList.remove('effects__label--hover');
      item.classList.add('effects--disabled');
    });

    // делаем неактивными все раидо эффектов
    window.selector.effectRadio.forEach(function () {
      window.selector.effectRadio.disabled = true;
    });
  };

  // U.4.2 Делаем все прочие КОНТРОЛЫ ПАСИВ
  var disabledOtherControlls = function () {
    var containerEffects = document.querySelector('.img-upload__effects');
    containerEffects.classList.add('effects--disabled');
    window.selector.crossButtonUpld.disabled = true;
    window.selector.crossButtonUpld.classList.remove('cancel--active');
    window.selector.crossButtonUpld.classList.add('cancel--disabled');

    window.selector.zoomOutButton.classList.add('cursor--progress');
    window.selector.zoomOutButton.classList.add('cursor--progress');

    window.selector.body.classList.add('img-upload__overlay---mouse-loading');
    window.selector.imgContainer.classList.add('img-opacity');
    window.selector.scaleContainer.classList.add('img-upload__scale--opacity');
  };

  // U.5 Disable btn FALSE
  var activedBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = false;
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE;
    window.selector.submitBtn.textContent = 'Опубликовать';
    window.selector.submitBtn.classList.remove('pulse-btn');
    window.selector.zoomButtons.disabled = false;
    window.selector.tagInput.disabled = false;
    window.selector.textArea.disabled = false;
  };

  // U.5.1 Делаем все првеьюшки эффектов АКТИВ
  var activedEffectPreview = function () {
    // ВКЛЮЧАЕМ хувер на превьшках эффектов
    window.selector.effectPrw.forEach(function (item) {
      item.classList.remove('effects__label--hover');
      item.classList.add('effects--disabled');
    });
    // делаем АКТИВНЫМИ все раидо эффектов
    window.selector.effectRadio.forEach(function () {
      window.selector.effectRadio.disabled = false;
    });
  };

  // U.5.2 Делаем все прочие КОНТРОЛЫ АКТИВ
  var acitvedOtherControls = function () {
    var containerEffects = document.querySelector('.img-upload__effects');
    containerEffects.classList.remove('effects--disabled');
    window.selector.crossButtonUpld.disabled = false;
    window.selector.crossButtonUpld.classList.add('cancel--active');
    window.selector.crossButtonUpld.classList.remove('cancel--disabled');

    window.selector.zoomOutButton.classList.remove('cursor--progress');
    window.selector.zoomOutButton.classList.remove('cursor--progress');

    window.selector.body.classList.remove('img-upload__overlay---mouse-loading');
    window.selector.imgContainer.classList.remove('img-opacity');
    window.selector.scaleContainer.classList.remove('img-upload__scale--opacity');
  };

  // U.6 Делаем только кнопку неактивной
  var disabledOnlyBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = true;
  };

  var activatedOnlyBtnSendXhr = function (btn) {
    var button = btn;
    button.disabled = false;
  };

  // OUTPUT
  window.setstate = {
    disabledBtnSendXhr: disabledBtnSendXhr,
    disabledEffectPreview: disabledEffectPreview,
    disabledOtherControlls: disabledOtherControlls,

    activedBtnSendXhr: activedBtnSendXhr,
    activedEffectPreview: activedEffectPreview,
    acitvedOtherControls: acitvedOtherControls,

    disabledOnlyBtnSendXhr: disabledOnlyBtnSendXhr,
    activatedOnlyBtnSendXhr: activatedOnlyBtnSendXhr
  };
})();
