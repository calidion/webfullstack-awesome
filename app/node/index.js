module.exports = {
  name: 'Web全栈网址大全',
  order: 1,
  title: 'Web全栈网址大全',
  items: [
    require('./tools'),
    require('./coding'),
    require('./versioning'),
    require('./frontend'),
    require('./backend'),    {
      name: '短信平台',
      items: [{
        url: 'https://www.twilio.com/',
        favicon: 'https://www.twilio.com/marketing/bundles/marketing/img/favicons/favicon.ico',
        name: 'twilio'
      }, {
        url: 'http://www.yuntongxun.com/',
        name: '云通讯'
      }, {
        url: 'http://www.cl2009.com/',
        name: '创蓝'
      }]
    }, {
      name: '云计算',
      items: [{
        url: 'http://aws.amazon.com/',
        favicon: 'https://a0.awsstatic.com/main/images/site/favicon.ico',
        name: 'Amazon'
      }, {
        url: 'http://azure.microsoft.com/',
        favicon: 'https://azure.microsoft.com/images/icon/favicon.ico',
        name: 'Azure'
      }, {
        url: 'http://www.aliyun.com/',
        name: '阿里云'
      }, {
        url: 'https://www.openshift.com/',
        favicon: 'https://assets.openshift.net/content/subdomain/favicon32x32.png',
        name: 'openshift'
      }, {
        url: 'https://www.docker.com/',
        favicon: '/images/docker.png',
        name: 'Docker'
      }]
    }, {
      name: '网络调试工具',
      items: [{
        url: 'https://ngrok.com/',
        favicon: 'http://www.github.com/favicon.ico',
        name: 'ngrok',
        title: '用于将本地服务器转化成网络服务器的工具'
      }, {
        url: 'http://blog.qqbrowser.cc/',
        favicon: 'http://blog.qqbrowser.cc/assets/images/favicon.ico',
        name: '微信调试'
      }]
    }, {
      name: '数据库',
      items: [{
        url: 'http://www.mysql.com/',
        favicon: 'http://www.mysql.com/common/themes/sakila/favicon.ico',
        name: 'Mysql',
        title: '用于将本地服务器转化成网络服务器的工具'
      }, {
        url: 'http://www.postgresql.org/',
        name: 'PostgreSQL'
      }, {
        url: 'https://www.mongodb.org/',
        favicon: 'http://media.mongodb.org/favicon.ico',
        name: 'Mongodb'
      }, {
        url: 'https://mariadb.com/',
        favicon: 'https://mariadb.com/sites/default/files/MariaDB-Favicon-32x32.ico',
        name: 'mariadb'
      }, {
        url: 'https://google.github.io/lovefield/',
        favicon: '/images/lovefield.png',
        name: 'lovefield',
        title: '浏览器端的关系数据库'
      }]
    }, {
      name: '单元测试',
      items: [{
        url: 'http://mochajs.org/',
        name: 'mocha'
      }, {
        url: 'http://jasmine.github.io/',
        favicon: 'http://jasmine.github.io/images/jasmine_vertical.svg',
        name: 'jasmine'
      }, {
        url: 'http://karma-runner.github.io/',
        favicon: 'http://karma-runner.github.io/assets/img/favicon/favicon.ico',
        name: 'karma'
      }, {
        url: 'http://qunitjs.com/',
        favicon: 'http://qunitjs.com/jquery-wp-content/themes/qunitjs.com/i/favicon.ico',
        name: 'QUnit'
      }, {
        url: 'https://github.com/sstephenson/bats',
        favicon: 'https://github.com/favicon.ico',
        name: 'bats',
        title: 'Bash Automated Testing System'
      }]
    }, {
      name: '持续集成(Continuous Integration)',
      items: [{
        url: 'http://jenkins-ci.org/',
        favicon: 'http://jenkins-ci.org/sites/default/files/jenkins_logo.png',
        name: 'Jenkins'
      }, {
        url: 'https://travis-ci.org/',
        favicon: 'images/travis-ci.png',
        name: 'travis-ci'
      }, {
        url: 'https://saucelabs.com',
        name: 'saucelabs'
      }, {
        url: 'https://www.browserstack.com/',
        favicon: 'images/browserstack.ico',
        name: 'browserstack'
      }]
    }, {
      name: '文档化与Resful API',
      items: [{
        url: 'http://swagger.io/',
        favicon: 'images/swagger.png',
        name: 'swagger'
      }]
    }, {
      name: '网络安全',
      items: [{
        url: 'https://letsencrypt.org/',
        name: 'letsencrypt',
        title: '免费的SSL证书发放'
      }]
    }, {
      name: '开源文化与项目',
      items: [{
        url: 'https://www.gnu.org/',
        name: 'GNU',
        title: '自由软件GNU项目'
      }]
    }, {
      name: '静态博客工具或服务',
      items: [{
        url: 'http://surge.sh/',
        favicon: 'http://surge.sh/images/logos/svg/surge-logo.svg',
        name: 'surge.sh',
        title: 'surge.sh静态网站服务'
      }, {
        url: 'https://hexo.io/',
        favicon: 'https://hexo.io/icon/apple-touch-icon-152x152.png',
        name: 'hexo'
      }]
    }]
};
