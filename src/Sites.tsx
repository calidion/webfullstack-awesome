import "./scss/awesome.scss";

function Sites(props: any) {
  return (
    <li className="title">
      {props.item.url && (
        <a
          target="_blank"
          title={props.item.name}
          href={props.item.url}
          className="item"
        >
          <img src={props.item.favicon || "images/loading.gif"} />
        </a>
      )}
      {!props.item.url && <h3>{props.item.name}</h3>}
      {
        props.item.items && props.item.items.map((item: any) => {
          return <Sites item={item}/>
        })
      }
    </li>
  );
}

export default Sites;
