/** @format */
import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

const BackgroundImage = styled("div")`
  background-image: url("/images/bg.jpg");
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 3.25rem;
  }

  p,
  a {
    font-size: 1.5rem;
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <BackgroundImage>
      <TextBox>
        <h1>Gatsby blog App &hearts;</h1>
        <p>
          Hello there 👋👋{" "}
          <Link to="/about/">Learn more about me...&rarr;</Link>
        </p>
      </TextBox>
    </BackgroundImage>
  );
};

export default Hero;
