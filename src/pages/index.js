/** @format */

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/usePosts";
import PostPreview from "../components/postPreview";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>
        Hello there
        <span role="img" aria-label="hand">
          👋👋
        </span>
      </p>
      <Link to="/about/">Learn more about me &rarr;</Link>

      <h2>Read my blogs</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
