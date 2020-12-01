import React from 'react';
import { Link } from 'gatsby';

import { css } from  '@emotion/react';

const Nav = css`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media(min-width: 768px){
        padding-bottom: 0;
    }
`
const NavLink = css`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &::last-of-type{
        margin-right: 0;
    }

    &.pagina-actual{
        border-bottom: 2px solid #fff;
    }
`;

const Navegacion = () => {
    return ( 
        <nav css={Nav}>
            <Link 
                css={NavLink} to={'/'}
                activeClassName="pagina-actual"
            >Inicio</Link>
            <Link
                css={NavLink} 
                activeClassName="pagina-actual"
                to={'/nosotros'}
            >Nosotros</Link>
        </nav>
     );
}
 
export default Navegacion;