import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

function KloCreek({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>Welcome to KLO Creek!</h1>
      {data.allMarkdownRemark.group.map((i) => (
        <li key={i.group[0].nodes[0].fields.slug}>
          {i.group[0].nodes[0].frontmatter.name}
        </li>
      ))}
    </Layout>
  );
}

export const kloCreekQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { crag: { eq: "klo-creek" } } }) {
      group(field: frontmatter___wall) {
        group(field: id) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              name
              wall
            }
          }
        }
      }
    }
  }
`;

export default KloCreek;
