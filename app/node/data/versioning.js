module.exports = {
  name: '代码保存与维护',
  order: 1,
  items: [{
    name: '代码托管',
    items: [{
      url: 'https://github.com',
      favicon: '/images/github.png',
      name: 'GitHub'
    }, {
      url: 'http://www.bitbucket.org',
      favicon: '/images/bitbucket.ico',
      name: 'BitBucket'
    }, {
      url: 'http://gitlab.com',
      favicon: '/images/gitlab.png',
      name: 'GitLab'
    }, {
      url: 'https://coding.net',
      favicon: '/images/coding.png',
      name: 'Coding'
    }]
  }, {
    name: '代码版本管理',
    items: [{
      url: 'http://git-scm.com/',
      favicon: '/images/git.png',
      name: 'git'
    }, {
      url: 'https://www.mercurial-scm.org/',
      favicon: '/images/mercurial.jpg',
      name: 'Mercurial(hg)'
    }, {
      url: 'http://subversion.apache.org/',
      favicon: '/images/svn.png',
      name: 'subversion(svn)'
    }]
  }]
};
