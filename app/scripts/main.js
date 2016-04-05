'use strict';

/*global $:true*/
/*eslint no-undef: 2*/

window.onload = function() {
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  var itemSource = $('#item').html();
  var itemTemplate = window.Handlebars.compile(itemSource);
  $('.links').html('');
  var iframe = $('<iframe frameborder="0" width=100% name=nav id=nav src="https://www.baidu.com"/>');
  iframe.on('load', function() {
    document.getElementById('nav').height = $('.root').height();
  });

  $('.content').html(iframe);

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
      $('.title > h3').on('mouseover', function() {
        // this.style.display = 'block';
      });
      $('.title > h3').on('mouseout', function() {
        // this.style.display = 'none';
      });
    }
  });

  var url;
  url = 'https://www.google.com.hk/?q=';

  window.select = function(node) {
    switch (node) {
      case 'google':
        url = 'https://www.google.com.hk/?q=';
        $('#searches').html('Google <span class="caret"></span>');
        iframe.attr('src', 'https://www.google.com');
        break;
      case 'baidu':
        url = 'https://www.baidu.com/s?wd=';
        $('#searches').html('Baidu <span class="caret"></span>');
        iframe.attr('src', 'https://www.baidu.com');
        break;
      case 'bing':
        url = 'https://global.bing.com/search?q=';
        $('#searches').html('Bing <span class="caret"></span>');
        iframe.attr('src', 'https://www.bing.com');
        break;
    }
    $('.btn-query').attr('href', url + $('#q').val());
  };

  $('#q').keyup(function() {
    $('.btn-query').attr('href', url + $('#q').val());
  });
};
