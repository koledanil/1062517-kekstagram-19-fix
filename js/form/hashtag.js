'use strict';
// валидация хэш-тэгов
(function () {
  window.variable.validityTag = true;

  // H.1 Поиск дубликатов внутри массива и возвращение False или true, знак
  var findDuplicate = function (arr) {
    var lowerCaseArr = [];
    arr.forEach(function (element) {
      lowerCaseArr.push(element.toLowerCase());
    });
    var temp = {};
    var isDuplicate;
    temp = arr.filter(function (item) {
      return temp[item] || !(temp[item] = !0);
    });

    isDuplicate = (temp.length > 0) ? isDuplicate = true : isDuplicate = false;
    return isDuplicate;
  };

  // H.2 Функция проверяет каждый тег на ошибки характ. для 1 тэга. Проверка к-ва тэгов и дубликатов идет отдельно
  var checkTag = function (tagStorage) {
    var checkedTag = {};
    checkedTag.isSharp = tagStorage[0] === window.constant.ADD_PHOTO_RULES.UPLD_TAGS.DIVIDER_SYMBOL;
    checkedTag.maxLength = tagStorage.length < window.constant.ADD_PHOTO_RULES.UPLD_TAGS.MAX_LENGTH;
    checkedTag.onlySharp = tagStorage === window.constant.ADD_PHOTO_RULES.UPLD_TAGS.DIVIDER_SYMBOL;
    checkedTag.regExp = window.constant.ADD_PHOTO_RULES.UPLD_TAGS.REG_EXP.test(tagStorage.slice(1, (tagStorage.length)));
    return checkedTag;
  };

  // H.3 Функция првоеряет каждый тэг на ошибки согласно H.2
  // ==== H.3.1 Функция обнуляет эффекты ошибок, затирает разметку и меняет флаг валидности
  var resetTags = function () {
    window.selector.tagErrPlaceUl.innerHTML = '';
    window.variable.counterErrTagTitle = 0;
    window.selector.tagInput.classList.remove('border-error');
    window.variable.validityTag = true;
  };

  // H.4 Подбираем окончание слова
  var chooseEndWord = function (errLength) {
    var endWord = '';
    if (errLength >= 2) {
      endWord = 'а';
    }

    if (errLength >= 5) {
      endWord = 'ов';
    }
    return endWord;
  };

  // H.5 Проверяем все тэги
  var checkAllTags = function () {
    resetTags();
    var tagErrTemplate = document.querySelector('#error-item').content.querySelector('li');
    var errArray = []; // массив с перечнем дошибок для каждого тэга

    var enteredTags = window.selector.tagInput.value.toLowerCase().split(' ').filter(function (item) {
      return item !== '';
    });

    checkDublicate(enteredTags, errArray); // повтор тэгов
    checkAmountTags(enteredTags, errArray); // макс кол-во тэгов
    checkErrors(enteredTags, errArray); // считывание ошибок и запсись месседжей в массив
    showError(errArray, tagErrTemplate); // вывод ошибок наружу
  }; // end check all tags

  // H.6 выводим ошибки в разметку
  var showError = function (errArray, tagErrTemplate) {
    errArray.forEach(function (item) {
      var clonedElement = tagErrTemplate.cloneNode(true);
      clonedElement.textContent = item;
      clonedElement.classList.add('error-list__item');
      window.selector.tagErrPlaceUl.appendChild(clonedElement);
      window.selector.tagInput.classList.add('border-error');
    });
  };

  // H.7 запускаем проверку дубликатов и записываем ошиюку если есть
  var checkDublicate = function (enteredTags, errArray) {
    if (findDuplicate(enteredTags)) { // проверяем на дубликаты и записываем значение в массив.
    // проверка идет первой, чтобы юзер сразу видел есть дубликаты.
      window.variable.validityTag = false;
      errArray.push(window.constant.ADD_PHOTO_RULES.MSG.ERR_DUBLICATE);
    } else {
      window.variable.validityTag = true;
    }
  };

  // H.8 Проверка на макс кол тэгов
  var checkAmountTags = function (enteredTags, errArray) {
    if (enteredTags.length > window.constant.ADD_PHOTO_RULES.UPLD_TAGS.MAX_AMOUNT_TAG) {
      errArray.push(window.constant.ADD_PHOTO_RULES.MSG.ERR_AMOUNT + (enteredTags.length - window.constant.ADD_PHOTO_RULES.UPLD_TAGS.MAX_AMOUNT_TAG) + ' тэг' + chooseEndWord(enteredTags.length - window.constant.ADD_PHOTO_RULES.UPLD_TAGS.MAX_AMOUNT_TAG));
    }
  };

  // H.9 Проверка в цикле
  var checkErrors = function (enteredTags, errArray) {
    // H.9.1 Сопоставление и запись ошибок в массив
    var pushErr = function (item) {
      var checkedTag = checkTag(item); // вот и стартанула фукнция H.2
      if (item.trim().length > 0 && checkedTag.isSharp !== true || checkedTag.maxLength !== true
                                            || checkedTag.onlySharp !== false
                                            || checkedTag.regExp !== false) {
        window.selector.tagErrPlaceUl.innerHTML = ''; // затирает мамку ошибок
        window.variable.validityTag = false; // ставит флаг о том что невалид и форма не отправится

        if (checkedTag.isSharp !== true && checkedTag !== '') {
          (errArray.push(item + ' ' + window.constant.ADD_PHOTO_RULES.MSG.ERR_SHARP));
        } // если нет решетки записываем ошибку и имя тэга

        if (checkedTag.maxLength !== true) {
          errArray.push(item + ' ' + window.constant.ADD_PHOTO_RULES.MSG.ERR_LENGTH);
        } // если тэг длиннее нормы

        if (checkedTag.regExp !== false) {
          errArray.push(item + ' ' + window.constant.ADD_PHOTO_RULES.MSG.ERR_REGEXP);
        } // если регулярка пролетела

        if (checkedTag.onlySharp !== false) {
          errArray.push(item + ' ' + window.constant.ADD_PHOTO_RULES.MSG.ERR_VERY_SHORT);
        } // если только решетка и все

        window.variable.counterErrTagTitle = errArray.length; // вносим длинну тэга в значение в объекте, чтобы отобр. в тайтле S.2
      }
    };
    // H.9.2 Запуск функции H.9.1 для введеных тегов
    enteredTags.forEach(pushErr);
  };
  // H.5 Добавляем листенере
  var addEvtListener = function () {
    window.selector.tagInput.addEventListener('change', checkAllTags);
  };

  // H.6 Удаляем листенера
  var removeListener = function () {
    window.selector.tagInput.removeEventListener('change', checkAllTags);
  };

  // OUTPUT
  window.hashtag = {
    removeListener: removeListener,
    addEvtListener: addEvtListener
  };

})(); // finished IIFE
