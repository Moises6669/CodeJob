exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina: 'CodeJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores de todos los tipos',
        barra:true,
        boton:true
    })
}