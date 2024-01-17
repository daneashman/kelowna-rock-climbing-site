import * as React from "react";
// import Layout from "../components/Layout";
// import { graphql } from "gatsby";

export default function climb({ data }) {
  console.log(data);
  return <h1>I am a Wall</h1>;
}

// export const query = graphql`
//   {
//     allMarkdownRemark(filter: { frontmatter: { title: $title } }) {
//       group(field: frontmatter___title) {
//         fieldValue
//         nodes {
//           frontmatter {
//             climbs {
//               name
//               grade
//               description
//             }
//           }
//         }
//       }
//     }
//   }
// `;
