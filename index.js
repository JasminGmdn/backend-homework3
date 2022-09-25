import React from "react";
import ReactDOM from "react-dom";

var currentDate = new Date();
console.log(currentDate);
var year = currentDate.getFullYear();
var fname = "Jasmin";
var lname = "Gmidane";

ReactDOM.render(
  <div>
    <h1
      className="heading"
      style={{
        color: "blueviolet",
        fontSize: "500%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      Hello
    </h1>
    <ul>
      <li>World!</li>
      <li>Friends!</li>
      <li>Hamsters!</li>
    </ul>
    <div>
      <img
        className="img-cards"
        src="https://i.pinimg.com/474x/4e/95/34/4e95341a4977e6b41ecd17d7d4cd5f86.jpg"
      />
      <img
        className="img-cards"
        src="https://i.pinimg.com/736x/cd/a1/cd/cda1cd7ff7d3a8940f65827f3e31ac88--line-sticker-kitty-wallpaper.jpg"
      />
    </div>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {year} </p>
  </div>,

  document.getElementById("root")
);
