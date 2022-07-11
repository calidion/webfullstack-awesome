import "./scss/Fork.scss";

function Fork() {
  return (
    <p className="hidden-xs">
      <a href="https://github.com/calidion/webfullstack-awesome">
        <img
          style={{ position: "absolute", top: 0, right: 0, border: 0 }}
          src="./images/fork.png"
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
        />
      </a>
    </p>
  );
}

export default Fork;
