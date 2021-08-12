import React from "react";
import $ from "jquery";

import imgg from './assets/images/img2.jpg';

const App = () => {
  React.useEffect(() => {
    $("<h1 />")
      .text("Hello world from JQuery")
      .css({
        textAlign: "center",
        color: "green",
        fontFamily: "Arial",
      })
      .appendTo($("header"));
  });

  return (
    <React.Fragment>
      <header> </header> <hr />
      <div className="box">
        <h2 className="box-title"> Title </h2>
        <p className="box-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat
          cumque ratione, voluptatem inventore nemo labore repudiandae neque
          obcaecati corporis aliquam ?
        </p>
      </div>
      <img src={imgg} alt=".." />
    </React.Fragment>
  );
};

export default App;
