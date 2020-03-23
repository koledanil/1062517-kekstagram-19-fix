'use strict';
// открыти и закрытие окна
(function () {
  var dialogBox = document.querySelector('.img-upload__overlay');
  var effectPreview = document.querySelectorAll('.effects__radio');

  var showDialog = function () {
    dialogBox.classList.remove('hidden');
    window.selector.body.classList.add('modal-open');
    startListener();

    // запускаем слушателей
    window.effect.addEvtListener();
    window.comment.addEvtListener();
    window.titleError.addEvtListener();
    window.hashtag.addEvtListener();
    window.scale.addEvtListener();
    window.slider.addEvtListener();
    window.submit.addEvtListener();
  };

  // D.1 Функция открывает диалоговое окно по изменению поля файл.
  var showDialogBoxHandler = function () {
    var fileChooser = document.querySelector('#upload-file');
    var preview = window.selector.imgPreview;
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();
    var matches = window.constant.ADD_PHOTO_RULES.FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
    if (matches) {
      var reader = new FileReader();
      showDialog();
      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
    } else {
      hide();
      window.errorFile.show();
    }
  };


  // D.1.1 Запускает закрытие окна
  var hide = function () {
    dialogBox.classList.add('hidden');
    window.selector.body.classList.remove('modal-open');
    window.resetUploadForm();
    removeListener();
    window.setstate.activedBtnSendXhr(window.selector.submitBtn);
    window.setstate.activedEffectPreview();
    window.setstate.acitvedOtherControls();
    window.selector.nonModalwBtn.remove();
  };

  // D.1.2 Хэндлер для закртыия по ESC
  // также в нем пропис. функционал первый ESC потеря фокуса с поля тэги или комент, второе наж. закрыт. форму
  var closeEscHandler = function (evt) {
    if (evt.key === 'Escape' && evt.target.type === 'radio') {
      effectPreview.forEach(function (item) {
        if (item.checked) {
          item.blur();
        }
      });
    } else if (evt.key === 'Escape' && evt.target.type === 'text') {
      window.selector.tagInput.blur();
    } else if (evt.key === 'Escape' && evt.target.type === 'textarea') {
      window.selector.textArea.blur();
    } else if (evt.key === 'Escape') {
      hide();
    }
  };
  // D.1.3 Хэндлер для закртыия по клику
  var closeClickHandler = function () {
    hide();
  };
  window.selector.uploadBtn.addEventListener('change', showDialogBoxHandler);
  var startListener = function () {
    document.addEventListener('keydown', closeEscHandler);
    window.selector.crossButtonUpld.addEventListener('click', closeClickHandler);
  };

  var removeListener = function () {
    document.removeEventListener('keydown', closeEscHandler);
    window.selector.crossButtonUpld.removeEventListener('click', closeClickHandler);
  };

  // OUTPUT DATA
  window.dialog = {
    hide: hide
  };
})();
