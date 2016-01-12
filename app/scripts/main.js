'use strict';

/*global $:true*/
/*eslint no-undef: 2*/

window.onload = function() {
  function sort(a, b) {
    a.order = a.order || 10000;
    b.order = b.order || 10000;
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  }
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  var itemSource = $('#item').html();
  var itemTemplate = window.Handlebars.compile(itemSource);
  $('.links').html('');

  function getItem(item) {
    var sub = [];
    if (!item) {
      return '';
    }
    if (item.items && item.items.length) {
      var items = item.items.sort(sort);
      for (var j = 0; j < items.length; j++) {
        if (items[j]) {
          sub.push(getItem(items[j]));
        }
      }
      return template({
        name: item.name,
        sub: sub.join('')
      });
    } else {
      if (!item.url) {
        return '';
      }
      item.favicon = item.favicon || item.url + '/favicon.ico';
      return itemTemplate(item);
    }
  }


  $.ajax({
    url: 'data/sites.json',
    method: 'get',
    dataType: 'JSON',
    success: function(json) {
      console.log(json);

      var data = $('<ul class="root">').append(getItem(json));

      $('.links').append(data);

      $('img').each(function() {
        this.setAttribute('src', this.getAttribute('ng-src'));
      });
      $('img').on('error', function() {
        this.src = 'https://assets-cdn.github.com/favicon.ico';
      });
    }
  });

};
