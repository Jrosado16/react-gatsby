exports.createPages = async({actions, graphql, reporter }) => {

    const resultado = await graphql(`
        query{
            allDatoCmsHabitacion{
                nodes{
                    slug
                }
            }
        }
    `);


    if(resultado.errors){
        reporter.panic('No Hubo resultados', resultado.errors);
    }

    //si hay paginas

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(hb => {
        actions.createPage({
            path: hb.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: hb.slug
            }
        })
    })
}