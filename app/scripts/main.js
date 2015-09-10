'use strict';
var sites = [
{
  name: '搜索引擎',
  items: [
  {
    url: 'http://www.google.com',
    favicon: 'images/google.ico',
    name: '谷歌'
  },
  {
    url: 'http://www.bing.com',
    favicon: 'http://www.bing.com/s/a/bing_p.ico',
    name: '必应'
  },
  {
    url: 'http://www.baidu.com',
    favicon: 'http://www.baidu.com/favicon.ico',
    name: '百度'
  }]
},
{
  name: '常用IDE',
  items: [
  {
    url: 'http://vim.org',
    favicon: 'http://www.vim.org/images/vim_shortcut.ico',
    name: 'Vim'
  },
  {
    url: 'http://www.gnu.org/software/emacs/',
    favicon: 'http://www.gnu.org/graphics/gnu-head-mini.png',
    name: 'Emacs'
  },
  {
    url: 'https://www.jetbrains.com/webstorm/',
    favicon: 'https://www.jetbrains.com/webstorm/favicon.ico',
    name: 'Web Storm'
  },
  {
    url: 'https://atom.io/',
    favicon: 'https://atom.io/favicon.ico',
    name: 'Atom'
  },
  {
    url: 'https://code.visualstudio.com/',
    favicon: 'https://code.visualstudio.com/Content/images/favicon.ico',
    name: 'VS Code'
  }]
},
{
  name: '代码托管',
  items: [
  {
    url: 'https://github.com',
    favicon: 'http://www.github.com/favicon.ico',
    name: 'GitHub'
  },
  {
    url: 'http://www.bitbucket.org',
    favicon: 'http://www.bitbucket.org/favicon.ico',
    name: 'BitBucket'
  },
  {
    url: 'http://gitlab.com',
    favicon: 'https://gitlab.com/assets/favicon-5738a6efe01f3282080df5f467da72a9.ico',
    name: 'GitLab'
  }]
},
{
  name: '常用UI框架',
  items: [
  {
    url: 'http://getbootstrap.com',
    favicon: 'http://getbootstrap.com/favicon.ico',
    name: 'Bootstrap'
  },
  {
    url: 'http://metroui.org.ua/',
    favicon: 'http://metroui.org.ua/favicon.ico',
    name: 'Metro UI'
  },
  {
    url: 'http://material.angularjs.org',
    favicon: 'images/angular2.ico',
    name: 'Material Design'
  },
  {
    url: 'http://purecss.io/',
    favicon: 'http://purecss.io/favicon.ico',
    name: 'Pure CSS'
  },
  {
    url: 'http://ionicframework.com',
    favicon: 'http://ionicframework.com/img/ionic-logo-blog.png',
    name: 'Ionic'
  },
  {
    url: 'http://jquerymobile.com/',
    favicon: 'http://jquerymobile.com/favicon.ico',
    name: 'Ionic'
  },
  {
    url: 'http://app-framework-software.intel.com/',
    favicon: 'images/intel.jpg',
    name: 'APPFramework'
  }]
},
{
  name: 'HTML+CSS',
  items: [
  {
    url: 'http://getbootstrap.com',
    favicon: 'http://www.getbootstrap.com/favicon.ico',
    name: 'Bootstrap'
  },
  {
    url: 'http://css-tricks.com/',
    favicon: 'http://www.css-tricks.com/favicon.ico',
    name: 'css-tricks'
  },
  {
    url: 'http://sass-lang.com/',
    favicon: 'http://www.sass-lang.com/favicon.ico',
    name: 'Sass'
  },
  {
    url: 'http://lesscss.org/',
    favicon: 'http://lesscss.org/public/ico/favicon.ico',
    name: 'Less'
  },
  {
    url: 'http://learnboost.github.io/stylus/',
    favicon: 'http://learnboost.github.io/stylus/docs/graphics/Logos/stylus.png',
    name: 'Less'
  },
  {
    url: 'http://quirksmode.org/',
    favicon: 'http://quirksmode.org/favicon.ico',
    name: 'Quicks Mode'
  }, ]
},
{
  name: 'JS前端框架、模板类库等',
  items: [
  {
    url: 'http://jquery.com/',
    favicon: 'http://jquery.com/favicon.ico',
    name: 'JQuery Mobile'
  },
  {
    url: 'http://angularjs.org',
    favicon: 'images/angular1.ico',
    name: 'Angular V1.X'
  },
  {
    url: 'http://angular.io/',
    favicon: 'images/angular2.ico',
    name: 'Angular V2.X'
  },
  {
    url: 'http://emberjs.com/',
    favicon: 'images/emberjs.jpg',
    name: 'EmberJS'
  },
  {
    url: 'http://facebook.github.io/react/',
    favicon: 'http://facebook.github.io/react/img/logo.svg',
    name: 'ReactJS'
  },
  {
    url: 'http://handlebarsjs.com/',
    favicon: 'http://handlebarsjs.com/images/favicon.png',
    name: 'handlebars'
  },
  {
    url: 'http://backbonejs.org/',
    favicon: 'http://backbonejs.org/favicon.ico',
    name: 'Backbone'
  }]
},
{
  name: 'JS后端或全栈框架',
  items: [
  {
    url: 'http://expressjs.com/',
    favicon: 'http://expressjs.com/images/strongloop-logo.png',
    name: 'Express JS'
  },
  {
    url: 'http://sailsjs.org/',
    favicon: 'http://sailsjs.org/favicon.ico',
    name: 'Sails JS'
  },
  {
    url: 'http://www.meteor.com',
    favicon: 'https://www.meteor.com/favicon.png',
    name: 'Meteor'
  },{
      url: 'http://koajs.com/',
      favicon: 'favicon.ico',
      name: 'koajs'
    }]
},
{
  name: 'nodejs/iojs',
  items: [
  {
    url: 'http://nodejs.org',
    favicon: 'http://nodejs.org/favicon.ico',
    name: 'Node.js'
  },
  {
    url: 'https://iojs.org/',
    favicon: 'https://iojs.org/images/1.0.0.png',
    name: 'io.js'
  }]
},
{
  name: 'ES6+',
  items: [
  {
    url: 'https://babeljs.io/',
    favicon: 'images/babel.ico',
    name: 'babeljs'
  },
  {
    url: 'https://github.com/google/traceur-compiler',
    favicon: 'images/google.ico',
    name: 'traceur'
  }]
},
{
  name: '在线开发/设计网站',
  items: [
  {
    url: 'http://jsfiddle.net/',
    favicon: 'http://jsfiddle.net/favicon.ico',
    name: 'JS Fiddle'
  },
  {
    url: 'https://codepen.io/',
    favicon: 'https://codepen.io/favicon.ico',
    name: 'Code Pen'
  }]
},
{
  name: 'JS引擎',
  items: [
  {
    url: 'http://asmjs.org/',
    favicon: 'http://asmjs.org/favicon.ico',
    name: 'ASM.JS'
  },
  {
    url: 'https://code.google.com/p/v8/',
    favicon: 'images/v8.png',
    name: 'V8'
  }]
},
{
  name: '短信平台',
  items: [
  {
    url: 'https://www.twilio.com/',
    favicon: 'https://www.twilio.com/marketing/bundles/marketing/img/favicons/favicon.ico',
    name: 'twilio'
  },
  {
    url: 'http://www.yuntongxun.com/',
    favicon: 'http://www.yuntongxun.com/favicon.ico',
    name: '云通讯'
  }]
},
{
  name: '云计算',
  items: [
  {
    url: 'http://aws.amazon.com/',
    favicon: 'https://a0.awsstatic.com/main/images/site/favicon.ico',
    name: 'Amazon'
  },
  {
    url: 'http://azure.microsoft.com/',
    favicon: 'http://www.microsoft.com/favicon.ico',
    name: 'Azure'
  }]
},{
    name: '网络调试工具',
    items: [
      {
        url: 'https://ngrok.com/',
        favicon: 'http://www.github.com/favicon.ico',
        name: 'ngrok',
        title: '用于将本地服务器转化成网络服务器的工具'
      },
      {
        url: 'http://blog.qqbrowser.cc/',
        favicon: 'http://blog.qqbrowser.cc/assets/images/favicon.ico',
        name: '微信调试'
      }
    ]
  }];
$(document).ready(function ()
{
  var source = $('#section').html();
  var template = window.Handlebars.compile(source);
  for(var i = 0; i < sites.length; i++)
  {
    var item = sites[i];
    $('.links').append(template(item));
  }
});
