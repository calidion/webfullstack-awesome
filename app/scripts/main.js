'use strict';
$(document).ready(function () {
  var sites = window.sites;
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  for (var i = 0; i < sites.length; i++) {
    var item = sites[i];
    for (var j = 0; j < item.items.length; j++) {
      item.items[j].favicon = item.items[j].favicon || 'favicon.ico';
    }
    $('.links').append(template(item));
  }
});
