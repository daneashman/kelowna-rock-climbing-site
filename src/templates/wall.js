import * as React from "react";
// import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Wall({ data }) {
  const wallName = data.markdownRemark.frontmatter.wallName;
  const climbs = data.markdownRemark.frontmatter.climbs;
  console.log(climbs);
  return (
    <>
      <h1>Welcome to {wallName}</h1>
      {climbs.map((climb) => (
        <>
          <h3>
            {climb.name} {climb.grade}
          </h3>

          {/* <p>{climb.description}</p> */}
        </>
      ))}
    </>
  );
}

// export const query = graphql`
//   {
//     markdownRemark(frontmatter: { wallSlug: { eq: "pipeline-left" } }) {
//       frontmatter {
//         area
//         wallName
//         climbs {
//           name
//           grade
//           description
//         }
//         description
//       }
//     }
//   }
// `;

export const query = graphql`
  query Wall($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
