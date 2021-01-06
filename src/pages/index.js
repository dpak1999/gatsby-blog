/** @format */

import React from "react";
import { Link } from "gatsby";

export default () => (
  <>
    <h1>Home</h1>
    <p>
      Hello there<span role="img">👋👋</span>
    </p>
    <Link to="/about">Learn more about me &rarr;</Link>
  </>
);
