import { useEffect, useState } from "react";
import "./scss/awesome.scss";

function Awesome() {
  let [percentage, setPercentage] = useState(0);
  // let [isStarted, setStarted] = useState(false);

  console.log("awesome", percentage);

  useEffect(() => {
    console.log("useEffect");
    let timer = setInterval(() => {
      if (percentage>= 100) {
        setPercentage(100);
      } else {
        setPercentage(percentage + 1);
      }
    }, 50);

    return () => clearInterval(timer);
  });

  return (
    <div className="row">
      <div className="col-md-12 links">
        <div className="progress">
          <div
            className="progress-bar progress-bar-success progress-bar-striped active"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="alert alert-info text-center">
          正在加载中...如果长时间没有关闭此进度条，可能是你的浏览器不支持当前的网页
        </p>
      </div>
    </div>
  );
}

export default Awesome;
