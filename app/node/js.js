module.exports = {
  name: 'Javascript技术',
  items: [
    {
      name: 'JS引擎',
      order: 2,
      items: [{
        url: 'https://code.google.com/p/v8/',
        favicon: 'images/v8.png',
        name: 'V8',
        title: 'Chrome的js引擎'
      }, {
        url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey',
        favicon: 'images/spidermonkey.png',
        name: 'SpiderMonkey',
        title: 'FireFox的js引擎'
      }, {
        url: 'https://github.com/Microsoft/ChakraCore',
        favicon: 'images/windows.ico',
        name: 'ChakraCore',
        title: '微软的浏览引擎Chakra'
      }]
    },
    {
      name: 'JS框架',
      order: 1,
      items: [
        {
          name: '前端模板框架',
          items: [{
            url: 'http://handlebarsjs.com/',
            favicon: 'http://handlebarsjs.com/images/favicon.png',
            name: 'handlebars'
          }, {
            url: 'http://facebook.github.io/react/',
            favicon: 'http://facebook.github.io/react/img/logo.svg',
            name: 'ReactJS'
          }]
        },
        {
          name: '浏览器功能增强/兼容性框架',
          items: [
            {
              url: 'http://jquery.com/',
              name: 'JQuery'
            }
          ]
        }, {
          name: '功能扩展框架',
          items: [
            {
              url: 'http://prototypejs.org/',
              name: 'PrototypeJS',
              favicon: 'http://prototypejs.org/images/header-logo.png'
            },
            {
              url: 'http://underscorejs.org/',
              name: 'UnderScore',
            }
          ]
        }, {
          name: 'mv/mvc/mvvm框架',
          items: [
            {
              url: 'http://angularjs.org',
              favicon: 'images/angular1.ico',
              name: 'Angular V1.X'
            }, {
              url: 'http://angular.io/',
              favicon: 'images/angular2.ico',
              name: 'Angular V2.X'
            }, {
              url: 'http://emberjs.com/',
              favicon: 'images/emberjs.jpg',
              name: 'EmberJS'
            },
            {
              url: 'http://backbonejs.org/',
              name: 'Backbone'
            }, {
              url: 'http://vuejs.org/',
              favicon: 'http://vuejs.org/images/logo.png',
              name: 'Vuejs'
            }, {
              url: 'http://avalonjs.github.io/',
              name: 'AvalonJS',
              favicon: 'http://www.avalon.org.cn/static/img/avalon.png'
            }, {
              url: 'http://novajs.com/',
              name: 'NovaJS',
              favicon: 'http://novajs.com/static/img/logo.png'
            }, {
              url: 'http://knockoutjs.com/',
              favicon: 'http://knockoutjs.com/img/favicon.ico',
              name: 'KnockoutJS'
            }
          ]
        }
      ]
    }]
};
