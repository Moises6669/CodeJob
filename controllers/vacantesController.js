const Vacantes = require("../models/vacantes");

exports.formularioNuevaVacante = (req, res) => {
  res.render("nueva-vacante", {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  });
};

exports.agregarVacante = async (req, res) => {
  const vacante = new Vacantes(req.body);
  
  // crear arreglo de habilidades (skills)
  vacante.skills = req.body.skills.split(",");

  // almacenarlo en la base de datos
  const nuevaVacante = await vacante.save();

  // redireccionar
  res.redirect(`/vacantes/${nuevaVacante}`);
};
