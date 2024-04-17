// router.js
const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const mostrar = require("../controllers/mostrar");
const registrar = require("../controllers/registrar");
const eliminar = require("../controllers/eliminar");
const editar = require("../controllers/editar");

router.use(morgan("dev"));
router.use("views", express.static("views"));
// mostrar
router.get("/", mostrar.vistaPrincipal);
router.get("/telefono", mostrar.vistaTelefono);
router.get("/medico", mostrar.vistaMedico);
router.get("/paciente", mostrar.vistaPaciente);
router.get("/citas", mostrar.vistaCitas);
router.get("/hMedico", mostrar.vistaHistorialMedicoSimple);
router.get("/general", mostrar.vistaDoctoresYpacientes);

// registrar
router.post("/registrarPersona", registrar.registrarPersona);
router.post("/rTelefono", registrar.registrarTelefono);
router.post("/rMedico", registrar.registrarMedico);
router.post("/rPaciente", registrar.registrarPaciente);
router.post("/rCita", registrar.registrarCita);
router.post("/rHistorialClinico", registrar.registrarHistorialClinico);

// Middleware para manejar errores
router.use(mostrar.vistaError);
module.exports = router;
