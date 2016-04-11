module.exports = {
  name: '前端技术',
  items: [
    {
      name: '浏览器',
      items: [{
        url: 'https://www.google.com/chrome/',
        favicon: '/images/chrome.ico',
        name: 'Chrome'
      }, {
        url: 'https://www.mozilla.org/en-US/firefox/products/',
        favicon: 'images/firefox.png',
        name: 'firefox'
      }, {
        url: 'http://www.apple.com/safari/',
        favicon: 'images/safari.png',
        name: 'safari'
      }, {
        url: 'http://www.opera.com/',
        favicon: 'images/opera.png',
        name: 'Opera'
      }, {
        url: 'https://www.microsoft.com/zh-cn/windows/microsoft-edge',
        favicon: 'images/edge.png',
        name: 'Edge'
      }]
    }, {
      name: 'HTML、模板化等技术',
      items: [{
        url: 'http://emmet.io/',
        favicon: 'images/emmet.png',
        name: 'emmet'
      },
      {
        url: 'http://haml.info/',
        favicon: 'images/haml.svg',
        name: 'haml'
      }]
    }, {
      name: 'CSS技术',
      items: [
        {
          name: 'CSS可编程化',
          items: [{
            url: 'http://sass-lang.com/',
            favicon: '/images/sass.svg',
            name: 'Sass'
          }, {
            url: 'http://lesscss.org/',
            favicon: '/images/less.png',
            name: 'Less'
          }, {
            url: 'http://stylus-lang.com/',
            favicon: '/images/stylus.svg',
            name: 'Stylus'
          }]
        }, {
          name: '常用UI框架',
          items: [{
            url: 'http://getbootstrap.com',
            favicon: '/images/bootstrap.png',
            name: 'Bootstrap'
          }, {
            url: 'http://metroui.org.ua/',
            favicon: '/images/wn8.png',
            name: 'Metro UI'
          }, {
            url: 'http://material.angularjs.org',
            favicon: 'images/angular.svg',
            name: 'Material Design'
          }, {
            url: 'http://purecss.io/',
            favicon: 'images/purecss.ico',
            name: 'Pure CSS'
          }, {
            url: 'http://ionicframework.com',
            favicon: 'images/ionic.png',
            name: 'Ionic'
          }, {
            url: 'http://jquerymobile.com/',
            favicon: 'images/jquerymobile.png',
            name: 'JQuery Mobile'
          }, {
            url: 'http://app-framework-software.intel.com/',
            favicon: 'images/intel.png',
            name: 'APP Framework'
          }, {
            url: 'http://www.polymer-project.org/',
            favicon: 'images/polymer.png',
            name: 'Polymer',
          }]
        }
      ]
    }, require('./js'),
    // {
    //   name: '前端综合技术',
    //   items: [
    //     {
    //       url: 'http://quirksmode.org/',
    //       name: 'Quicks Mode'
    //     }, {
    //       url: 'http://css-tricks.com/',
    //       name: 'css-tricks'
    //     }
    //   ]
    // },
    {
      name: '在线开发/调试/设计网站',
      items: [{
        url: 'http://jsfiddle.net/',
        favicon: 'images/jsfiddle.png',
        name: 'JS Fiddle'
      }, {
        url: 'https://codepen.io/',
        favicon: 'images/codepen.png',
        name: 'Code Pen'
      }, {
        url: 'http://plnkr.co/',
        favicon: 'images/plunker.jpg',
        name: 'Plunker'
      }]
    }
  ]
};
