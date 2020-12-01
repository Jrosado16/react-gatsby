import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/react";

const title = css`
    text-align: center;
    font-size: 2rem;
    /* display: inline-block; */
    margin-top: 4rem;
    @media(min-width: 768px){
      font-size: 4rem;

    }

`;

const content = css`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
   

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        
    }
    p{
        line-height: 2;
    }
`;

const ContenidoInicio = () => {
    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
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
    `);
    const { contenido, titulo, imagen} = informacion.allDatoCmsPagina.nodes[0];
    return ( 
        <>
            <h2 css={title}>{titulo}</h2>
            <div css={content}>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </div>
        </>
     );
}
 
export default ContenidoInicio;