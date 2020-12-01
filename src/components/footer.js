import React from 'react';
import { css } from "@emotion/core";
import Navegacion from './nav';
import { Link } from "gatsby";

const Footer = ({title}) => {
    const year = new Date().getFullYear();
  return ( 
    <>
        <footer
        css={css`
            background-color: rgba(44,62,80);
            padding: 2rem;

        `}
        >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
     `}
      >
        <Navegacion />
        <Link to={'/'}
          css={css`
            text-decoration: none;
            color: #fff;
            text-align: center;
          `}
        >
          <h1>Hotel Gatsby</h1>
        </Link>
      </div>
    </footer>
      <p 
        css={css`
            text-align: center;
            margin: 0;
            padding: 1rem;
            background-color: #222;
            color: #fff;
        `}
      >
        {title} Todos lo derechos reservador {year} &copy;
      </p>
      </>
   );
}
 
export default Footer;