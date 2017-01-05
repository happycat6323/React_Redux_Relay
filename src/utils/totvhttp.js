import 'isomorphic-fetch';
var SERVER_URL = "http://localhost:3000";

var ToTvHttp = {

  get: function (url, params, callback) {
    var paramValues = [];
    for (var key in params) {
      paramValues.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
    var paramString = paramValues.join("&");
    url = paramString ? url + "?" + paramString : url;
    this.fetch(url, {method: 'GET'}, callback);
  },
  post: function (url, params, callback) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    this.fetch(url, options, callback);
  },
  patch: function (url, params, callback) {
    var options = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    this.fetch(url, options, callback);
  },
  delete: function (url, callback) {
    var options = {
      method: 'DELETE'
    };
    this.fetch(url, options, callback);
  },
  fetch: function(url, options, callback) {
    fetch(SERVER_URL + url, options)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.error('Status code is not 200');
          console.info('Response status : ' + response.status);
          return;
        }

        response.json().then(function(data) {
          if (typeof callback === "function") {
            callback(data);
          }
        });
      }
    )
    .catch(function(error) {
      console.error('Fetch Error : ', error);
    });
  }
};

exports.ToTvHttp = ToTvHttp;
