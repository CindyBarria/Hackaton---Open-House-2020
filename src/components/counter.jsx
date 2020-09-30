import React, { Fragment, useState, useEffect } from "react";
import "../styles/App.css";
import Like from "../assets/like.png";
import Unlike from "../assets/Corazon.png";
import fondoLike from "../assets/ventanaLike.png";
import "../styles/Counter.css";

function Counter() {
  const [likes, setLikes] = useState(300);
  console.log(likes);

  const addLike = () => {
    let like = likes + 1;
    setLikes(like);
  };

  useEffect(() => {
    addLike();
  }, []);

  return (
    <div className="counterContainer">
      {likes.lenght === 300 ? (
        <Fragment>
          <div>
            <img src={fondoLike} alt="" />
            <h1 className="likes"> {likes}</h1>
          </div>
          <div className="counter">
            <button className="button-counter" onClick={() => addLike()}>
              <img src={Unlike} alt=""></img>
            </button>
          </div>
        </Fragment>
      ) : likes === 301 ? (
        <Fragment>
          <div>
            <img src={fondoLike} alt="" />
            <h1 className="likes"> {likes}</h1>
          </div>
          <div className="counter">
            <button className="button-counter" onClick={() => addLike()}>
              <img src={Unlike} alt=""></img>
            </button>
          </div>
        </Fragment>
      ) : likes > 300 ? (
        <Fragment>
          <div>
            <img src={fondoLike} alt="" />
            <h1 className="likes"> {likes}</h1>
          </div>
          <div className="counter">
            <button className="button-counter" onClick={() => addLike()}>
              <img src={Like} alt=""></img>
            </button>
          </div>
        </Fragment>
      ) : undefined}
    </div>
  );
}
export default Counter;
