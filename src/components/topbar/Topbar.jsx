import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            My Portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <a href="https://api.whatsapp.com/send?phone=082117414374">082117414374</a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a class="mailto" href="mailto:fredianriko@gmail.como">
                fredianriko@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* set menuOpen state to be an opposite of current menuOpen state */}
        <div
          className="right"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
