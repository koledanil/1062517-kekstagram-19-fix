'use strict';
// Функция ввыодит изображения на главной странице
(function () {

  var filterHandler = function (resultResponse, readyState) {
    window.filter.show(readyState);
    var copyArr = resultResponse.slice();
    window.filter.photosToShow = resultResponse;
    window.filter.renderPhoto(resultResponse);

    var swithcFiltersHandler = function (evt) {
      if (evt.target.className === 'img-filters__button') {
        var target = evt.target.id;
        window.filter.change(target, copyArr, resultResponse);
      }
    };

    window.addEventListener('click', swithcFiltersHandler);
  };

  var debouncedFn = window.util.debounce(filterHandler);
  window.selector.filterContainer.classList.remove('img-filters--inactive');
  window.backend.load(window.constant.ADD_PHOTO_RULES.URL_LOAD, debouncedFn);
})();
