import React, { useState, useEffect } from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import InlineSVG from "react-inlinesvg";

function App() {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState("");

  useEffect(() => {
    fetchMe();
  }, [finalPoint]);

  const fetchMe = () => {
    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5f3623b66emsh872c4819f304da1p19d0aajsnff372b91b9f1",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((err) => console.error(err));
  };
  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}></input>
        <button type="submit">submit</button>
      </form>
      <InlineSVG src="./src/img/titre.svg" alt="My SVG Image" />
      <div className="flex-Wrap">
        {container.map((item, index) => {
          return (
            <div key={index} className="card-wrap">
              <ItemCard
                frontContent={
                  <img
                    src={
                      item.i && item.i.imageUrl
                        ? item.i.imageUrl
                        : "src/image-not-found.png"
                    }
                    alt="film cover"
                  />
                }
                backContent={
                  <div className="back-wrap">
                    <p className="title">{item.l}</p>
                    <p>Type: {item.qid}</p>
                    <p>Release year: {item.y}</p>
                    <p>
                      <span>Actors:</span> {item.s}
                    </p>
                    <p>Imdb rank: {item.rank}</p>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
