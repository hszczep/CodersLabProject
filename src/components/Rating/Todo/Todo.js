import React, { Component } from "react";
import "./Todo.css";
import { useState } from "react";


function Todo(props) {


    return(
      <div className="Rating-todo-component">
        <h4>Todo</h4>
        <tabe>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>

          {props.todo ?
            props.todo.map((e, index) => (

              <tr>
                <td>{e.title}</td>
                <td style={{color: e.completed ? "green" : "red"}}>{e.completed ? "tak" : "Nie"}</td>
              </tr>
            )):""  
        }
        </tabe>
      </div>
    )
  };
   export default Todo;