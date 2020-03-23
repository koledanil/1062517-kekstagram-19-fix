'use strict';
// здесь содержатся флаги и каунтеры, которые связывают модули.
// например здесь содержится счетчик ошибок в тэгах и коменте для отображения в заголовке страницы

(function () {
  window.variable = {
    validityTag: true, // значение присваивается во время валидации тэгов hashtag.js ++++
    validityTextArea: true, // значение присваивается на базе валидации комента comment.js ++++
    counterErrAreaTitle: 0, // для title-error.js
    counterErrTagTitle: 0, // для title-error.js
    counterSymbol: 0 // для comment.js
  };
})();
