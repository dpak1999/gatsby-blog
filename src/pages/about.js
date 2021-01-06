/** @format */

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>
      This is where I occasionally scramble things
      <span role="img" aria-label="laugh">
        😛😛😛
      </span>
      ...
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
