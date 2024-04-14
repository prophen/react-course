import React from "react";
import Gradient from "/noun-gradient.png";
function Logo({ width = "50px" }) {
  return <img src={Gradient} style={{ width }} alt="Logo" />;
}

export default Logo;
