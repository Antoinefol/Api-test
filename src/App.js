import React, { useState } from "react";
import "./App.css";

function App() {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cdd8691a78msh5d052adaae14145p16b234jsnd527ec90b190",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((data) => {
      setContainer(data);
    })
    .catch((err) => console.error(err));

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
