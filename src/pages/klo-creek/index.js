import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

function KloCreek({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>Welcome to KLO Creek!</h1>
      <h2>Areas</h2>
      <h2>Climbs</h2>
      {data.allMarkdownRemark.group.map((i) => (
        <li key={i.group[0].nodes[0].fields.slug}>
          {i.group[0].nodes[0].frontmatter.title}
        </li>
      ))}
    </Layout>
  );
}

export const kloCreekQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      group(field: frontmatter___wall) {
        group(field: id) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              wall
            }
          }
        }
      }
    }
  }
`;

export default KloCreek;
