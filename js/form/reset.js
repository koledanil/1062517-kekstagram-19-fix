'use strict';
// Очищает форму закгрузки после нажатия на ESC
(function () {
  window.resetUploadForm = function () {
    window.selector.imgPreview.removeAttribute('class');
    window.selector.counterPlace.textContent = window.constant.ADD_PHOTO_RULES.UPLD_COMMENTS.DEFAULT_TXT;
    window.selector.counterPlace.classList.add('hidden');
    window.variable.counterSymbol = 0;
    window.variable.counterErrTagTitle = 0;
    window.variable.counterErrAreaTitle = 0;

    window.selector.imgPreview.style = 'transform: 0'; // сбиваем масштаб фотки
    window.selector.zoomOutButton.disabled = false; // сбиваем псевдо с увелич, чтоб кнопка стала активной
    window.selector.zoomInButton.disabled = false;// сбиваем псевдо с уменьше, чтоб кнопка стала активной

    window.selector.textArea.classList.remove('border-error'); // убираем обводку  текстового поля

    window.variable.validityTag = true; // обнуляем флаг для инпута тэгов, необходимо для S.1
    window.variable.validityTextArea = true; // обнуляем флаг для комента, необходимо для S.1
    document.title = window.constant.ADD_PHOTO_RULES.ORIGINAL_TITLE; // возвращаем исходное значение тайтла, использ в S.2
    window.selector.tagInput.classList.remove('border-error');
    window.selector.textArea.classList.remove('border-error');
    window.selector.counterPlace.classList.remove('counter-error');
    window.selector.body.classList.remove('modal-open');
    window.selector.tagErrPlaceUl.innerHTML = ''; // затираем мамку ошибок (фн.H.3)

    window.selector.zoomInButton.disabled = true; // лочим зум.

    window.selector.sliderTag.classList.add('hidden'); // скрываем ползунок эффекта
    window.selector.imgPreview.src = '';

    // удалятор слушателей
    window.scale.removeListener();
    window.comment.removeListener();
    window.effect.removeListener();
    window.hashtag.removeListener();
    window.submit.removeListener();
    window.titleError.removeListener();
    window.slider.removeListener();

    // очищаем значение поля
    window.selector.uploadBtn.reset();
  };
})();
