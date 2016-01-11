'use strict';

/*global $:true*/
/*eslint no-undef: 2*/

window.onload = function() {
  var sites = window.sites.sort(function(a, b) {
    a.order = a.order || 10000;
    b.order = b.order || 10000;
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  for (var i = 0; i < sites.length; i++) {
    var item = sites[i];

    for (var j = 0; j < item.items.length; j++) {
      item.items[j].favicon = item.items[j].favicon || item.items[j].url + '/favicon.ico';
    }
    $('.links').append(template(item));
  }

  $('img').each(function() {
    this.setAttribute('src', this.getAttribute('ng-src'));
  });
  $('img').on('error', function() {
    this.src = 'https://assets-cdn.github.com/favicon.ico';
  });
};
