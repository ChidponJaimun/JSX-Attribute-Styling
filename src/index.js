import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="foodPic" src={img + "?grayscale"} alt="Random" />
    </div>
  </div>,
  document.getElementById("root")
);
