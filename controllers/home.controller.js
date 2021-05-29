const Vacante = require('../models/vacantes');

exports.mostrarTrabajos = async (req, res,next) => {
    
    const vacantes = await Vacante.find().lean();

    if(!vacantes) return next();

    res.render('home', {
        nombrePagina: 'CodeJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores de todos los tipos',
        barra:true,
        boton:true,
        vacantes:vacantes
    })

 
}
