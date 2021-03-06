import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";
import "../pages/login.js";
import { SocialBar } from "../modules/socialBar";
import { Redirect } from "react-router-dom";
import Login from "../pages/login.js";

export default class Editor extends Component {
  render() {
    return (
      <html>
        <body>
          <div className="Home">
            {global.name === "null" ? (
              <div>
                <Redirect to={"/"}></Redirect>
                <Login alert="alert"></Login>
              </div>
            ) : (
              console.log("user logged in sucessfully")
            )}
            <div className="navbar">
              <ButtonRow user={global.name} />
            </div>
            <span className="editorSplit">
              <TextEditor user={global.name} />
              <div className="chatSplit">
                <SocialBar user={global.name} input_width="325" />
              </div>
            </span>
            {/* <Footer /> */}
          </div>
        </body>
      </html>
    );
  }
}
