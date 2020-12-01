import React from 'react';
import { graphql, useStaticQuery} from 'gatsby'
import ImageBackground from 'gatsby-background-image';
import { css } from '@emotion/react';

const imageBackground = css`
    height: 500px;
`;

const textImage = css`
    background-image: linear-gradient(to top, rgba(34,49,63,.85), rgba(34,49,63,.85));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: white;
    h1{
        font-size: 2.8rem;
        margin: 0%;
    }
    @media(min-width: 768px){
        h1{
            font-size: 4rem;
        }
    }
    p{
        font-size: 2rem;
        margin: 3rem;
    }

`;

const ImagenHotel = () => {
    const { image } = useStaticQuery(graphql`
        query{
            image: file(relativePath: {eq: "8.jpg"}){
                sharp:childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    // console.log(image.sharp.fluid);
    return ( 
        <ImageBackground 
            css={imageBackground} 
            tag="section"
            fluid={image.sharp.fluid}
        >
            <div css={textImage}>
                <h1>Bienvenido a Hotel Gatsby</h1>
                {/* <h3>Bienvenido a Hotel Gatsby</h3> */}
                <p>Tu mejor opcion para vacacionar</p>
            </div>
        </ImageBackground>
     );
}
 
export default ImagenHotel;