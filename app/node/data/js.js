module.exports = {
  name: 'Javascript技术',
  items: [
    {
      name: 'JS引擎',
      order: 2,
      items: [{
        url: 'https://code.google.com/p/v8/',
        favicon: 'images/V8.png',
        name: 'V8',
        title: 'Chrome的js引擎'
      }, {
        url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey',
        favicon: 'images/spidermonkey.png',
        name: 'SpiderMonkey',
        title: 'FireFox的js引擎'
      }, {
        url: 'https://github.com/Microsoft/ChakraCore',
        favicon: 'images/wn8.png',
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
            favicon: '/images/handlebars.png',
            name: 'handlebars'
          }, {
            url: 'http://facebook.github.io/react/',
            favicon: '/images/reactjs.svg',
            name: 'React JS'
          }]
        },
        {
          name: '浏览器功能增强/兼容性框架',
          items: [
            {
              url: 'http://jquery.com/',
              favicon: '/images/jquery.png',
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
              favicon: '/images/underscore.png',
              name: 'UnderScore JS',
            }
          ]
        }, {
          name: 'mv/mvc/mvvm框架',
          items: [
            {
              url: 'http://angularjs.org',
              favicon: 'images/angular.png',
              name: 'Angular V1.X'
            }, {
              url: 'http://angular.io/',
              favicon: 'images/angular.svg',
              name: 'Angular V2.X'
            }, {
              url: 'http://emberjs.com/',
              favicon: 'images/ember.png',
              name: 'EmberJS'
            },
            {
              url: 'http://backbonejs.org/',
              favicon: '/images/backbone.png',
              name: 'Backbone'
            }, {
              url: 'http://vuejs.org/',
              favicon: '/images/vue.png',
              name: 'Vue.js'
            }, {
              url: 'http://avalonjs.github.io/',
              name: 'Avalon.JS',
              favicon: '/images/avalon.png'
            }, {
            //   url: 'http://novajs.com/',
            //   name: 'NovaJS',
            //   favicon: 'http://novajs.com/static/img/logo.png'
            // }, {
              url: 'http://knockoutjs.com/',
              favicon: '/images/knockout.jpg',
              name: 'KnockoutJS'
            }
          ]
        }
      ]
    }]
};
