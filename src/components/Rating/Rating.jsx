import React, { Component } from "react";
import "./scss/Rating.css";
import Search from "./Search/Search";
import Todo from "./Todo/Todo";
import axios from "axios";
import { useState } from "react";
import Card from "./Card/Card";
function Rating() {
  const [todo, setTodo] = useState([]);
  const [average, setAverage] = useState(0);
  const [listStars, setListStars] = useState([0, 0, 0, 0, 0, 0]);
  const getTodosByUserId = (userID) => {
    axios({
      url: "https://jsonplaceholder.typicode.com/todos?userId=" + userID,
      method: "GET",
    }).then((response) => {
      setTodo((prev) => [...prev, response.data]);
    });
  };

  return (
    <div className="body-Rating">
      <div className="row1">
        <Search getTodosByUserId={getTodosByUserId} setAverage={setAverage} setListStars={setListStars} />
        <Card average={average / 20} listStars={listStars} />
      </div>
    </div>
  );
}
export default Rating;