/** @format */

import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import ReadLink from "../components/readLink";

const PostTemplate = () => (
  <Layout>
    <h1>Title</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      author
    </p>
    <p>the actual post</p>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
