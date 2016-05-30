module.exports = {
  name: '常用IDE',
  order: 3,
  items: [{
    url: 'https://www.jetbrains.com/webstorm/',
    favicon: '/images/webstorm.png',
    name: 'Web Storm'
  }, {
    url: 'https://atom.io/',
    favicon: '/images/atom.ico',
    name: 'Atom',
    children: [{
      url: 'https://nuclide.io/',
      favicon: '/images/nuclide.png',
      name: 'Nuclide'
    }]
  }, {
    url: 'https://code.visualstudio.com/',
    favicon: 'images/vscode.ico',
    name: 'VS Code'
  }, {
    url: 'https://netbeans.org/',
    name: 'Netbeans',
    favicon: '/images/netbeans.png',
  }, {
    url: 'https://www.jetbrains.com/idea/',
    favicon: '/images/idea.png',
    name: 'IntelliJ IDEA'
  }, {
    url: 'http://brackets.io/',
    favicon: '/images/brackets.svg',
    name: 'Adobe Brackets'
  }, {
    url: 'https://eclipse.org/',
    favicon: '/images/eclipse.png',
    name: 'Eclipse'
  }, {
    url: 'http://developer.android.com/sdk/index.html',
    favicon: '/images/android-studio.svg',
    name: 'Android Studio'
  }, {
    url: 'https://developer.apple.com/xcode/ide/',
    favicon: '/images/xcode.png',
    name: 'XCode'
  }]
};
