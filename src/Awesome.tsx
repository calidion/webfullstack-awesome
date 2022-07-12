import { useEffect, useState } from "react";
import "./scss/awesome.scss";
import Sites from "./Sites";

function Awesome() {
  let [percentage, setPercentage] = useState(0);
  let [isFetched, setIsFetched] = useState(false);
  let [sites, setSites] = useState(null);
  let [error, setError] = useState(null);

  console.log("awesome", percentage);

  const fetchSites = () => {
    fetch("./data/sites.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("sites", json);
        setSites(json);
        setIsFetched(true);
      })
      .catch((e) => {
        setError(error);
      });
  };

  useEffect(() => {
    console.log("useEffect");
    let timer = setInterval(() => {
      if (percentage >= 100 || isFetched) {
        setPercentage(100);
        clearInterval(timer);
      } else {
        setPercentage(percentage + 1);
      }
    }, 50);

    if (!isFetched) {
      fetchSites();
    }

    return () => clearInterval(timer);
  });

  return (
    <div className="row">
      <div className="col-12 links">
        {!isFetched && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-success progress-bar-striped active"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        )}
        {!isFetched && (
          <p className="alert alert-info text-center">
            正在加载中...如果长时间没有关闭此进度条，可能是你的浏览器不支持当前的网页
          </p>
        )}
        {
          isFetched && <ul className="root" ><Sites item={sites}/> </ul>
        }
      </div>
    </div>
  );
}

export default Awesome;
