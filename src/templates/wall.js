import * as React from "react";
// import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function Wall({ data }) {
  const wallName = data.markdownRemark.frontmatter.wallName;
  // const area = data.markdownRemark.frontmatter.area;
  const climbs = data.markdownRemark.frontmatter.climbs;
  const wallImages = data.markdownRemark.frontmatter.wallImages;
  return (
    <>
      <h1>{wallName}</h1>
      {!wallImages ? (
        <></>
      ) : (
        wallImages.map((image) => (
          <>
            <GatsbyImage
              image={getImage(image.wallImage.childImageSharp)}
              alt={image.wallImagedescription}
            />
            <p>{image.wallImagedescription}</p>
          </>
        ))
      )}

      {climbs.map((climb) => (
        <>
          <h3>
            {climb.name} {climb.grade}
          </h3>
          <p>{climb.description}</p>
          <p>{}</p>
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
        wallImages {
          wallImagedescription
          wallImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
