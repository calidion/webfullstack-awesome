import { useState } from "react";
import "./scss/search-bar.scss";

import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faWindows } from "@fortawesome/free-brands-svg-icons";

import fontawesome from "@fortawesome/fontawesome";

fontawesome.library.add([faWindows, faGoogle, faPaw]);


function SearchBar() {
  let engines = [
    {
      id: "google",
      name: "Google",
      icon: "fab fa-google",
      url: "https://www.google.com/search?q=",
    },
    {
      id: "bing",
      name: "Bing",
      icon: "fab fa-windows",
      url: "https://global.bing.com/search?q=",
    },
    {
      id: "baidu",
      name: "Baidu",
      icon: "fa fa-paw",
      url: "https://www.baidu.com/s?wd=",
    },
  ];

  let [engine, setEngine] = useState(engines[0]);
  let [url, setURL] = useState(engine.url);

  function onSearchInput(event: any) {
    setURL(engine.url + encodeURIComponent(event.target.value));
  }

  return (
    <form className="row align-items-center search-engine">
      <div className="col-2">&nbsp;</div>
      <div className="col-2">
        <div className="dropdown">
        
          <button
            className="btn btn-default dropdown-toggle title-clear"
            type="button"
            id="searches"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {engine.id ==='google' ? <span><i className='fab fa-google'></i></span>: ""}
            {engine.id ==='bing' ? <span><i className='fab fa-windows'></i></span>: ""}
            {engine.id ==='baidu' ? <span><i className='fa fa-paw'></i></span>: ""}
            &nbsp;{engine.name}
          </button>
          <ul className="dropdown-menu" aria-labelledby="searches">
            <li
              onClick={() => {
                setEngine(engines[0]);
              }}
            >
              <a className="dropdown-item">
                <i className="fab fa-google"></i> Google
              </a>
            </li>
            <li
              onClick={() => {
                setEngine(engines[1]);
              }}
            >
              <a className="dropdown-item">
                <i className="fab fa-windows"></i> Bing
              </a>
            </li>
            <li
              onClick={() => {
                setEngine(engines[2]);
              }}
            >
              <a className="dropdown-item">
                <i className="fa fa-paw"></i> Baidu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-4">
        <label className="sr-only" htmlFor="q"></label>
        <input
          type="text"
          className="form-control"
          id="q"
          placeholder="请输入搜索词"
          onKeyUp={onSearchInput}
        />
      </div>
      <div className="col-2">
        <a target="_blank" className="btn btn-primary btn-query" href={url}>
          搜索
        </a>
      </div>
      <div className="col-2"></div>
    </form>
  );
}

export default SearchBar;
