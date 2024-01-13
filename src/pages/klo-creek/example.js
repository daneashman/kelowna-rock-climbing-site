// import * as React from "react";
// import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { kebabCase } from "lodash";

// function KloCreek({
//   data: {
//     allMarkdownRemark: { group },
//   },
// }) {
//   return (
//     <Layout>
//       <h1>Welcome to KLO Creek!</h1>
//       <h2>Areas: </h2>
//       <ul>
//         {group.map((wall) => (
//           <li key={wall.fieldValue}>
//             <Link to={`/klo-creek/${kebabCase(wall.fieldValue)}/`}>
//               {wall.fieldValue}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// }

// export const kloCreekQuery = graphql`
//   query {
//     allMarkdownRemark {
//       group(field: frontmatter___wall) {
//         fieldValue
//       }
//     }
//   }
// `;

// export default KloCreek;
