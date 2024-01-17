import * as React from "react";
// import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function climb({ data }) {
  const wallName = data.markdownRemark.frontmatter.wallName;
  const climbs = data.markdownRemark.frontmatter.climbs;
  console.log(climbs);
  return (
    <>
      <h1>Welcome to {wallName}</h1>
      {climbs.map((climb) => (
        <>
          <h3>
            [{climb.grade}] {climb.name}
          </h3>

          {/* <p>{climb.description}</p> */}
        </>
      ))}
    </>
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { wallSlug: { eq: "pipeline-left" } }) {
      frontmatter {
        area
        wallName
        climbs {
          name
          grade
          description
        }
        description
      }
    }
  }
`;
