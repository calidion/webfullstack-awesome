import "./scss/info.scss";

function Info() {
  return (
    <div className="header">
      <div className="info-bar hidden-xs">
        <a href="https://github.com/calidion/webfullstack-awesome">
          <img src="https://img.shields.io/github/stars/3gcnbeta/www.svg?style=social&label=Star" />
        </a>
        <a href="https://github.com/calidion/webfullstack-awesomefork">
          <img src="https://img.shields.io/github/forks/3gcnbeta/www.svg?style=social&label=Fork" />
        </a>
        <a href="https://github.com/calidion/webfullstack-awesome">
          <img src="https://img.shields.io/github/watchers/3gcnbeta/www.svg?style=social&label=Watch" />
        </a>
        <a
          href="https://github.com/calidion/webfullstack-awesome/issues/1"
          target="_blank"
          className="btn btn-xs btn-outline-primary"
        >
          新站提交
        </a>
        <a
          href="https://github.com/calidion/webfullstack-awesome/issues/2"
          target="_blank"
          className="btn btn-xs btn-outline-success"
        >
          功能请求
        </a>
        <a
          href="http://forum.webfullstack.me"
          target="_blank"
          className="btn btn-xs btn-outline-danger"
        >
          论坛交流
        </a>
      </div>
      <h3 className="text-muted">Web全栈开发网址导航</h3>
    </div>
  );
}

export default Info;
