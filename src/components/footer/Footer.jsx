import React from "react";
import ReactDOM from "react-dom";

function Footer(){
  const CURRENT_YEAR = new Date().getFullYear();
  return (<footer>
    Copyright &copy; { CURRENT_YEAR }
  </footer>);
}

export default Footer;
