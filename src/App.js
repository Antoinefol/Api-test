import React, { useState, useEffect } from "react";
import "./App.css";
import ItemCard from "./ItemCard";

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
      <div className="card-wrap">
        {container.map((item, index) => {
          return (
            <div key={index}>
              <ItemCard
                frontContent={
                  <div>
                    <img src={item.i.imageUrl} alt="" />
                  </div>
                }
                backContent={
                  <div>
                    <p>{item.l}</p>
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
