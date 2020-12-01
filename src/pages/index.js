import React from "react"
import Layout from "../components/layout"
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import useHabitaciones from "../hooks/use-habitaciones";
import { css } from "@emotion/react";
import HabitacionPreviw from "../components/habitacionPreview";

const listaHabitacion = css`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const habitaciones = useHabitaciones();

  return(
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2 
      css={css`
        text-align: center;
        margin-top: 4rem;
        font-size: 3rem;
      `}>Nuestras Habitaciones</h2>

      <ul css={listaHabitacion}>
        {habitaciones.map(hb => (
          < HabitacionPreviw 
            key={hb.slug}
            habitacion={hb}
          />
        ))}
      </ul>

    </Layout>
  );
}

export default IndexPage;
