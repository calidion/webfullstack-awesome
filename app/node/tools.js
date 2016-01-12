module.exports = {
  name: '网络基础服务',
  order: 1,
  items: [{
    name: '搜索引擎服务',
    order: 1,
    items: [{
      url: 'http://www.google.com',
      favicon: 'images/google.ico',
      name: '谷歌'
    }, {
      url: 'http://www.bing.com',
      favicon: 'http://www.bing.com/s/a/bing_p.ico',
      name: '必应'
    }, {
      url: 'http://www.baidu.com',
      name: '百度'
    }]
  }, {
    name: '翻墙工具/免费VPN',
    order: 2,
    items: [{
      url: 'https://github.com/XX-net/XX-Net',
      favicon: 'https://avatars3.githubusercontent.com/u/10395542?v=3&s=200',
      name: 'XX-Net'
    }, {
      url: 'https://www.torproject.org/',
      favicon: 'images/tor.ico',
      name: 'Tor',
      title: '匿名安全访问'
    }, {
      url: 'https://github.com/getlantern/lantern',
      favicon: 'images/lantern.png',
      name: 'Lantern'
    }, {
      url: 'https://www.softether.org/',
      name: 'SoftEther'
    }, {
      url: 'https://www.psiphon3.com',
      favicon: 'https://www.psiphon3.com/images/icons/favicon.ico',
      name: '赛风'
    }, {
      url: 'https://shadowsocks.org',
      favicon: 'https://shadowsocks.org/assets/img/favicon/favicon.ico',
      name: 'shadowsocks'
    }]
  }]
};
