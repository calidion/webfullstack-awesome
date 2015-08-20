'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function () {
  $('.links > p.lists > a > img').each(function () {
    if ($(this).attr('data')) {
      $(this).attr('src', $(this).attr('data'));
    }
  });
  $('.links > p.lists > a').click(function () {
    if ($(this).attr('data')) {
      $(this).attr('src', $(this).attr('data'));
    }
  });
});
