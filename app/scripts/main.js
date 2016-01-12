'use strict';

/*global $:true*/
/*eslint no-undef: 2*/

window.onload = function() {
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  var itemSource = $('#item').html();
  var itemTemplate = window.Handlebars.compile(itemSource);
  $('.links').html('');

  function sort(a, b) {
    var left = a.order || 10000;
    var right = b.order || 10000;
    if (left > right) {
      return 1;
    }
    if (left < right) {
      return -1;
    }
    return 0;
  }

  function getItem(item) {
    console.log(item);

    var sub = [];
    if (!item) {
      return '';
    }
    if (item.items && item.items.length) {
      console.log(item.items);
      var items = item.items.sort(sort);
      console.log(items);
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
