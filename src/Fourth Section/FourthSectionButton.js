import React from "react";
import { Link } from "react-router-dom";
import "./FourthSectionButton.css";

function FourthSectionButton() {
  return (
    <div className="btn-large-parent">
      <Link to="/get-started" className="link get-started btn-large nav-fourth">
        Sign up with Escrow
      </Link>
    </div>
  );
}

export default FourthSectionButton;
