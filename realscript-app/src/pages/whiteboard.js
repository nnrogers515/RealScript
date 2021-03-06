import React, { Component } from "react";
import ButtonRow from "../modules/buttonRow";
import "../assets/main.css";
import "../pages/login.js";
import { Redirect } from "react-router-dom";
import Board from "../modules/board";
import "../assets/board.css";

export default class Whiteboard extends Component {
  render() {
    return (
      <html>
        <div className="Home">
          {global.name === "null" ? (
            <Redirect to={"/"}></Redirect>
          ) : (
            console.log("user logged in sucessfully")
          )}
          <div className="navbar">
            <ButtonRow user={global.name} />
          </div>
        </div>
        <iframe src="./Writing" className="whiteboardDiv">
          <Board />
        </iframe>
      </html>
    );
  }
}
