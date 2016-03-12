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
      name: 'HTML技术',
      items: [{}]
    }, {
      name: 'CSS技术',
      items: [
        {
          name: 'CSS可编程化',
          items: [{
            url: 'http://sass-lang.com/',
            name: 'Sass'
          }, {
            url: 'http://lesscss.org/',
            favicon: 'http://lesscss.org/public/ico/favicon.ico',
            name: 'Less'
          }, {
            url: 'http://stylus-lang.com/',
            favicon: 'http://stylus-lang.com/favicon.ico',
            name: 'Stylus'
          }]
        }, {
          name: '常用UI框架',
          items: [{
            url: 'http://getbootstrap.com',
            name: 'Bootstrap'
          }, {
            url: 'http://metroui.org.ua/',
            name: 'Metro UI'
          }, {
            url: 'http://material.angularjs.org',
            favicon: 'images/angular2.ico',
            name: 'Material Design'
          }, {
            url: 'http://purecss.io/',
            name: 'Pure CSS'
          }, {
            url: 'http://ionicframework.com',
            favicon: 'http://ionicframework.com/img/ionic-logo-blog.png',
            name: 'Ionic'
          }, {
            url: 'http://jquerymobile.com/',
            name: 'JQuery Mobile'
          }, {
            url: 'http://app-framework-software.intel.com/',
            favicon: 'images/intel.jpg',
            name: 'APP Framework'
          }, {
            url: 'http://www.polymer-project.org/',
            name: 'PolymerJS',
            favicon: 'http://docs.polymerchina.org/images/logos/p-logo-32.png'
          }]
        }
      ]
    }, require('./js'),
    {
      name: '前端综合技术',
      items: [
        {
          url: 'http://quirksmode.org/',
          name: 'Quicks Mode'
        }, {
          url: 'http://css-tricks.com/',
          name: 'css-tricks'
        }
      ]
    },
    {
      name: '在线开发/设计网站',
      items: [{
        url: 'http://jsfiddle.net/',
        name: 'JS Fiddle'
      }, {
        url: 'https://codepen.io/',
        name: 'Code Pen'
      }, {
        url: 'http://plnkr.co/',
        name: 'Plunker'
      }]
    }
  ]
};
