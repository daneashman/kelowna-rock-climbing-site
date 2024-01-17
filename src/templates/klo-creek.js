import React from "react";
import { Link, graphql } from "gatsby";
// import Layout from "../components/Layout";

export default function kloCreekArea({ data }) {
  const walls = data.allMarkdownRemark.group[0].nodes[0].frontmatter.walls;
  console.log(walls);
  return (
    <>
      <h1>Welcome to KLO Creek</h1>
      <ul>
        {walls.map((wall) => (
          <li key={wall.name}>
            <Link to={"./walls" + wall.slug}>{wall.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const wallsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "klo-creek" } } }
    ) {
      group(field: frontmatter___title) {
        fieldValue
        nodes {
          frontmatter {
            area
            description
            walls {
              name
              description
              slug
            }
            templateKey
          }
        }
      }
    }
  }
`;
