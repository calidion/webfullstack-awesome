module.exports = {
  name: '网络基础服务',
  order: 1,
  items: [{
    name: '搜索引擎服务',
    order: 1,
    items: [{
      url: 'http://www.google.com',
      favicon: 'images/google.png',
      name: 'Google'
    }, {
      url: 'http://www.bing.com',
      favicon: 'images/bing.svg',
      name: 'Bing'
    }, {
      url: 'http://www.baidu.com',
      favicon: 'images/baidu.png',
      name: 'Baidu'
    }]
  }, {
    name: '翻墙工具/免费VPN',
    order: 2,
    items: [{
      url: 'https://github.com/XX-net/XX-Net',
      favicon: 'images/xx-net.png',
      name: 'XX-Net'
    }, {
      url: 'https://www.torproject.org/',
      favicon: 'images/tor-logo.jpg',
      name: 'Tor',
      title: '匿名安全访问'
    }, {
      url: 'https://github.com/getlantern/lantern',
      // favicon: 'images/lantern.svg',
      favicon: 'images/lantern.png',
      name: 'Lantern'
    }, {
      url: 'https://www.softether.org/',
      name: 'SoftEther'
    }, {
      url: 'https://shadowsocks.org',
      favicon: 'images/shadowsocks.png',
      name: 'shadowsocks'
    }]
  }]
};
