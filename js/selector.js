'use strict';
// селекторы, к-ые встречаются в коде несколько раз
(function () {
  window.selector = {
    imgPlace: document.querySelector('.pictures'),
    imgPreview: document.querySelector('.img-upload__preview').querySelector('img'),
    counterPlace: document.querySelector('#symbol_counter'),
    body: document.querySelector('body'),

    bigPicture: document.querySelector('.big-picture'),

    zoomOutButton: document.querySelector('.scale__control--smaller'),
    zoomInButton: document.querySelector('.scale__control--bigger'),
    tagInput: document.querySelector('.text__hashtags'),
    tagErrPlaceUl: document.querySelector('#tag-error'),
    sliderTag: document.querySelector('.img-upload__effect-level'),
    uploadBtn: document.querySelector('#upload-select-image'),

    submitBtn: document.querySelector('#upload-submit'),
    effectRadio: document.querySelectorAll('.rd'),
    effectPrw: document.querySelectorAll('.effects__label'),

    zoomButtons: document.querySelector('.img-upload__scale'),

    crossButtonUpld: document.querySelector('.img-upload__cancel'),

    pin: document.querySelector('.effect-level__pin'),
    depth: document.querySelector('.effect-level__depth'),
    effectLevelForm: document.querySelector('.effect-level__value'),
    textArea: document.querySelector('.text__description'),

    doneMsg: document.querySelector('#success').content.querySelector('.success'),
    donePlace: document.querySelector('.img-upload__form'),
    doneBtn: document.querySelector('#success').content.querySelector('.success__button'),
    doneCounter: document.querySelector('#success').content.querySelector('.timer-msg'),

    errFileMsg: document.querySelector('#error').content.querySelector('.error'),
    errFilePlace: document.querySelector('.img-upload__form'),
    errFileBtn: document.querySelector('#error').content.querySelector('.error__button'),

    timeoutPlace: document.querySelector('.img-upload__overlay'),
    tiemoutBtn: document.querySelector('#nonModalErr').content.querySelector('.non-modal-err__btn-retry'),

    nonModalwBtn: document.querySelector('#nonModalErr').content.querySelector('.non-modal-err'),
    nonModalwBtnTxt: document.querySelector('#nonModalErr').content.querySelector('.non-modal-err').querySelector('.banner-err__text'),

    nonModalwoBtn: document.querySelector('#nonModalErr--wBTN').content.querySelector('.non-modal-err'),
    nonModalwoBtnTxt: document.querySelector('#nonModalErr--wBTN').content.querySelector('.non-modal-err').querySelector('.banner-err__text'),
    nonModalwoBtnBg: document.querySelector('#nonModalErr--wBTN').content.querySelector('.non-modal-err').querySelector('.banner-err'),

    imgContainer: document.querySelector('#imgContainer-img'),
    scaleContainer: document.querySelector('.img-upload__scale'),

    showMorePhoto: document.querySelector('.social__comments-loader'),
    showedAmountComments: document.querySelector('.showed-comments'),
    noCommentsAvaiable: document.querySelector('.no-comments'),
    defaultBtn: document.querySelector('.default-btn__text'),
    lockedBtn: document.querySelector('.locked-btn__text'),


    filterContainer: document.querySelector('.img-filters'),
    defaultFilter: document.querySelector('#filter-default'),
    randomFilter: document.querySelector('#filter-random'),
    discFilter: document.querySelector('#filter-discussed'),
    filterArray: document.querySelector('.img-filters__form'),
  };

})();
