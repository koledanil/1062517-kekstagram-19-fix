'use strict';
(function () {
  // T.1 обращение для загрузки фоток
  var load = function (urlLd, onSuccess) {
    var xhr = createRequest();

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response, xhr.readyState);

    });
    xhr.open('GET', urlLd);
    xhr.send();
  };

  // Т.2 обращение для выгрузки формы загрузки фотки
  var upload = function (data, urlUpld, onSuccess, onLoad, onBadFile, onTimeOutErr) {
    var xhr = createRequest();
    xhr.timeout = window.constant.ADD_PHOTO_RULES.XHR_TIMEOUT;

    xhr.addEventListener('load', function () {

      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          return;
        case 400:
          onBadFile();
          return;
      }
    });

    xhr.open('POST', urlUpld);
    onLoad();
    xhr.ontimeout = function () {
      onTimeOutErr();
    };
    xhr.send(data);
  };

  // Т.3 созадние запроса
  var createRequest = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    return xhr;
  };

  // OUTPUT
  window.backend = {
    load: load,
    upload: upload
  };

})();

