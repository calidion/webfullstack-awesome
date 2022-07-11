import { createElement } from "react";
import "./scss/share.scss";

function Share() {
  let g: any = window;
  g._bd_share_config = {
    common: {
      bdText: "Web全栈开发网址导航",
      bdDesc: "了解最新全栈开发信息，了解全栈技能尽在http://webfullstack.me.",
      bdUrl: "http://webfullstack.me",
      bdPic: "http://webfullstack.me/favicon.ico",
    },
    share: [
      {
        bdSize: 16,
      },
    ],
    slide: [
      {
        bdImg: 0,
        bdPos: "right",
        bdTop: 100,
      },
    ],
    image: [
      {
        viewType: "list",
        viewPos: "top",
        viewColor: "black",
        viewSize: "16",
        viewList: ["qzone", "tsina", "huaban", "tqq", "renren"],
      },
    ],
    selectShare: [
      {
        bdselectMiniList: ["qzone", "tqq", "kaixin001", "bdxc", "tqf"],
      },
    ],
  };

  document.body.appendChild(document.createElement("script")).src =
    "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=" +
    ~(-new Date() / 36e5);

  return (
    <div id="share" className="hidden-xs">
      <div className="bdsharebuttonbox" data-tag="share_1">
        {/* <a className="bds_mshare" data-cmd="mshare"></a> */}
        <a className="bds_qzone" data-cmd="qzone" href="#"></a>
        <a className="bds_tsina" data-cmd="tsina"></a>
        <a className="bds_baidu" data-cmd="baidu"></a>
        <a className="bds_weixin" data-cmd="weixin"></a>
        {/* <a className="bds_tqq" data-cmd="tqq"></a>
      <a className="bds_more" data-cmd="more">更多</a> */}
        <a className="bds_count" data-cmd="count"></a>
      </div>
    </div>
  );
}

export default Share;
