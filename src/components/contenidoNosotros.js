import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Imagen from "gatsby-image";
import { css } from "@emotion/react";

const title = css`
  text-align: center;
  padding-top: 4rem;
  font-size: 4rem;
`;

const img = css`
    width: 85%;
    height: 85%;
`;

const content = css`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  text-align: justify;
  padding-bottom: 12rem;
  
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  p{
      margin-top: 2rem;
      line-height: 2;
  }
`;


const IndexPage = () => {

  const infomacion = useStaticQuery(graphql`
    query{
      allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}){
        nodes{
          titulo
          contenido
          imagen{
            fluid{
              ...GatsbyDatoCmsFluid
            }
          }
          slug
        }
      }
    }
  `)

  const {titulo, contenido, imagen} = infomacion.allDatoCmsPagina.nodes[0];
  return (  
    <>
      <h2 css={title}>{titulo}</h2>

      <div css={content}>
        <p>{contenido}</p>
        <Imagen css={img} fluid={imagen.fluid} /> 
      </div>

  </>
  );
}
 
export default IndexPage;
