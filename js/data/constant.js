'use strict';
// Данный файл содержит набор констант, переменных, которые
// задают правила работы.

(function () {
  window.constant = {
    GALLERY_RULES: {
      DEBOUNCE_INTERVAL: 300,
      XHR_STATE_TO_SHOW_FILTER: 4,
      MSG_HIDE_TIMEOUT: 7000
    }, // end photo-rules

    ADD_PHOTO_RULES: {
      UPLD_COMMENTS: {// опис. правила валидации коментов
        MIN_LENGTH: 0,
        MAX_LENGTH: 140,
        DEFAULT_TXT: 'Введено 0 из 140 символов'
      },

      UPLD_TAGS: {// опис. правила валидации тэгов.
        DIVIDER_SYMBOL: '#',
        REG_EXP: /[^a-zA-Z0-9]/,
        MIN_LENGTH: 3,
        MAX_LENGTH: 20,
        MAX_AMOUNT_TAG: 5
      },

      ZOOM: {// правила зума
        MIN: 25,
        MAX: 100,
        STEP: 25
      },

      MSG: {
        ERR_SHARP: 'должен начинаться с символа #.',
        ERR_REGEXP: 'должен быть без специальных символов.',
        ERR_LENGTH: 'должен содержать не более 20 символов, включая #.',
        ERR_AMOUNT: 'Больше 5 штук нельзя. Лимит превышен на ',
        ERR_DUBLICATE: 'Встречаются одинаковые тэги.',
        ERR_VERY_SHORT: 'тэг не может содержать только #.',
        ERR_MAX_CHARACTER: 'Достигли лимит в 140 символов. 😶',
        ERR_NETWORK: 'Нет интернета. Проверьте подключение к интернету. ☝🏻',
        OK_NETWORK: 'Интернет есть. Теперь все работает. 🚀',
        ERR_TIME_OUT: 'Не удалось загрузить изобаржение, так как сервер не отвечает.'
      },

      ORIGINAL_TITLE: document.title,
      URL_UPLOAD: 'https://js.dump.academy/kekstagram',
      URL_LOAD: 'https://js.dump.academy/kekstagram/data',
      TIME_CLOSE_MSG: 12,
      XHR_TIMEOUT: 12000,
      SHOW_AMOUNT_CMNT: 5,
      PLUS_AMOUNT_CMNT: 5,
      SLIDER_START_POSITION: 453,
      INTERVAL_ERR_TITLE: 1000,
      FILE_TYPES: ['gif', 'jpg', 'jpeg', 'png'],
    }, // end ADD_PHOTO_RULES

    EFFECT_DEFAULT_VALUE: {
      CHROME: 1,
      SEPIA: 1,
      MARVIN: 100,
      PHOBOS: 3,
      HEAT: 3
    }
  };// end window.constant

})(); // end iief
