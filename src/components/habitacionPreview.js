import React from 'react';
import Imagen  from "gatsby-image";
import { Link } from 'gatsby';
import { css } from "@emotion/react";

const Button = css`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width:100%;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    text-align: center;
`;

const HabitacionPreviw = ({habitacion}) => {
    const { titulo, contenido, imagen, slug } = habitacion;
    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
                text-align: justify;
            `}
        >
            <Imagen fluid={imagen.fluid}/>
            <div
                css={css`
                    padding: 2rem;
                `}
            >
                <h3 css={css` font-size: 2rem`}>{titulo}</h3>
                <p>{contenido}</p>

                <Link css={Button} to={slug}>Ver Habitacion</Link>
            </div>
        </div>
     );
}
 
export default HabitacionPreviw;