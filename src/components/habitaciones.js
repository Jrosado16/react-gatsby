import React from 'react';
import { graphql } from "gatsby";
import Layout from "./layout";
import Image from "gatsby-image";
import { css } from "@emotion/react";

export const query = graphql`
    query($slug: String!){
        allDatoCmsHabitacion(filter: { slug: {eq: $slug}}){
            nodes{
                titulo
                contenido
                imagen{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
                slug
            }
        }
    }
` 
const HabitacionTemplate = ({data: {allDatoCmsHabitacion: {nodes}}}) => {
    const { titulo, contenido, imagen} = nodes[0];
    return ( 
        <Layout>
            <main
                css={css`
                    max-width: 1000px;
                    margin: 0 auto;
                    width: 95%;
                    padding: 4rem;
                `}
            >
                <h1 css={css`text-align: center; margin-top: 4rem;`}>{titulo}</h1>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </main>
        </Layout>
     );
}
 
export default HabitacionTemplate;