import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./header.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <h1>Wook</h1>
      <div className="search">
        <input className="input" />
        <button className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <ul>
        <li>
          <a>Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
