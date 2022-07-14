import "./scss/awesome.scss";
import { faLink, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { icon } from "@fortawesome/fontawesome";

library.add(faLink, faHeart, faEye);
const link = icon({ prefix: "far", iconName: "link" });
const heart = icon({ prefix: "far", iconName: "heart" });
const eye = icon({ prefix: "far", iconName: "eye" });

function Sites(props: any) {
  return (
    <li className="title">
      {props.item.url && (
        <p>
          <a
            target="_blank"
            title={props.item.name}
            href={props.item.url}
            className="item"
          >
            <img src={props.item.favicon || "images/loading.gif"} />
          </a>
          {/* <span className="likes">
            <i className="fa fa-heart"></i> {props.likes ? props.likes : 0}
          </span>
          <span className="views">
            <i className="fa fa-eye"></i> {props.views ? props.likes : 0}
          </span> */}
        </p>
      )}
      {!props.item.url && <h3>{props.item.name}</h3>}
      {props.item.items &&
        props.item.items.map((item: any) => {
          return <Sites item={item} />;
        })}
    </li>
  );
}

export default Sites;
