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

exports.mostrarVacantes = async (req, res, next) => {

  const vacante = await Vacantes.findOne({ url: req.params.url });

  if (!vacante) return next();

  console.log(vacante.descripcion);

  res.render('vacante', {
    // vacante,
    nombrePagina: vacante.titulo,
    view_salario: vacante.salario,
    view_empresa: vacante.empresa,
    view_ubicasion: vacante.ubicacion,
    view_contrato: vacante.contrato,
    view_descripcion: vacante.descripcion,
    view_skills:vacante.skills,
    barra: true
  });
}