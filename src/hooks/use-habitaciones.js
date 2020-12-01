import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                titulo
                contenido
                imagen{
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
                    }   
                }
                slug
                }
            }
       }
    `);

    // console.log(data);

    // return (
    //     <h1>desde hooks</h1>
    // );
    return data.allDatoCmsHabitacion.nodes.map(hab =>({
        id: hab.id,
        titulo: hab.titulo,
        contenido: hab.contenido,
        imagen: hab.imagen,
        slug: hab.slug
    }));
}
 
export default useHabitaciones;