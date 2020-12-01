import React from 'react';
import { css } from "@emotion/core";
import Navegacion from './nav';
import { Link } from "gatsby";

const Header = () => {
  return ( 
    <header
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
        <Link to={'/'}
          css={css`
            text-decoration: none;
            color: #fff;
            text-align: center;
          `}
        >
          <h1>Hotel Gatsby</h1>
        </Link>
        <Navegacion />
      </div>
    </header>
   );
}
 
export default Header;