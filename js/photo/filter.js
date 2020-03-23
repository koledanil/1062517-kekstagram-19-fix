'use strict';
(function () {
// F.1 Отображение фоток
// F.1.1 Очищение фоток при переключюении в F.1.3
  var deletePictures = function () {
    var pictures = document.querySelectorAll('a.picture');
    pictures.forEach(function (picture) {
      picture.remove();
    });
  };

  // F.1.2 Запись данных о фотке в F.1.3
  var writeInfoPhoto = function (element, index) {
    var foundTemplate = window.util.getTemplate('#picture', '.picture');
    var infoContainer = foundTemplate.querySelector('.picture__info'); // контейнер для коментов и лайков
    var pathPicture = foundTemplate.querySelector('.picture__img');

    foundTemplate.setAttribute('data-id', index);
    infoContainer.querySelector('.picture__likes').textContent = element.likes;
    infoContainer.querySelector('.picture__comments').textContent = element.comments.length;
    pathPicture.src = element.url;
    return foundTemplate;
  };

  // F.1.3 Рендеринг фотки
  var renderPhoto = function (arr) {
    var fragment = document.createDocumentFragment();
    deletePictures();
    arr.forEach(function (item, index) {
      fragment.appendChild(writeInfoPhoto(item, index));
    });
    window.selector.imgPlace.appendChild(fragment);
  };

  // F.2 Переключает кнопки фильтров
  var uncheckOtherFilter = function () {
    var arrConverted = Array.from(window.selector.filterArray.children);
    arrConverted.forEach(function (item) {
      if (item.classList.contains('img-filters__button--active')) {
        item.classList.remove('img-filters__button--active');
      }
    });
  };

  // F.3 Сортируем по количеству комментариев
  var sortMax = function (arr) {
    arr.sort(function (a, b) {
      var result = (b.comments > a.comments) ? 1 : -1;
      return result;
    });
  };

  // F.4 функция переклчает и фильтры
  var change = function (target, arr, resultResponse) {
    switch (target) {
      case 'filter-default':
        deletePictures();
        uncheckOtherFilter();
        window.selector.defaultFilter.classList.add('img-filters__button--active');
        renderPhoto(resultResponse);
        window.filter.photosToShow = resultResponse;
        return;

      case 'filter-random':
        uncheckOtherFilter();
        deletePictures();
        window.selector.randomFilter.classList.add('img-filters__button--active');
        var randomArr = resultResponse.slice();
        window.util.shuffleRandomNumber(randomArr);
        var randomArrShort = randomArr.slice(0, 10);
        renderPhoto(randomArrShort);
        window.filter.photosToShow = randomArrShort;
        return;

      case 'filter-discussed':
        uncheckOtherFilter();
        deletePictures();
        window.selector.discFilter.classList.add('img-filters__button--active');
        var discArr = arr.slice();
        sortMax(discArr);
        renderPhoto(discArr);
        window.filter.photosToShow = discArr;

        return;
    }
  };

  // F.5 Функция показывает фильтры при статусе запроса 4
  var show = function (readyState) {
    var result = (readyState === window.constant.GALLERY_RULES.XHR_STATE_TO_SHOW_FILTER) ?
      window.selector.filterContainer.classList.remove('img-filters--inactive') :
      window.selector.filterContainer.classList.add('img-filters--inactive');
    return result;
  };

  // OUTPUT
  window.filter = {
    show: show,
    change: change,
    renderPhoto: renderPhoto,
  };
})();
