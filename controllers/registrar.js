const sql = require("../db/db.js");

const registrar = {
  registrarPersona: async (req, res) => {
    try {
      const {
        nombre,
        apellido,
        dni,
        direccion,
        fechaNacimiento,
        correoElectronico,
      } = req.body;
      console.log(
        "Datos de la persona:",
        nombre,
        apellido,
        dni,
        direccion,
        fechaNacimiento,
        correoElectronico
      );

      await sql`INSERT INTO Persona (Nombre, Apellido, DNI, Direccion, FechaNacimiento, CorreoElectronico) 
                   VALUES (${nombre}, ${apellido}, ${dni}, ${direccion}, ${fechaNacimiento}, ${correoElectronico})`;

      console.log("Persona registrada exitosamente");
      res.redirect("/telefono");
    } catch (error) {
      console.error("Error al registrar la persona:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarTelefono: async (req, res) => {
    try {
      const { numeroTelefono, personaId } = req.body;
      console.log("Datos del teléfono:", numeroTelefono, personaId);

      await sql`INSERT INTO Telefono (numerotelefono, personaid) VALUES (${numeroTelefono}, ${personaId})`;

      console.log("Teléfono registrado exitosamente");
      res.redirect("/telefono");
    } catch (error) {
      console.error("Error al registrar el teléfono:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarMedico: async (req, res) => {
    try {
      const { personaId } = req.body;
      console.log("Datos del medico:", personaId);
      await sql`INSERT INTO medicos (personaid) VALUES (${personaId})`;
      console.log("Medico registrado exitosamente");
      res.redirect("/citas");
    } catch (error) {
      console.error("Error al registrar el medico:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarPaciente: async (req, res) => {
    try {
      const { personaId } = req.body;
      console.log("Datos del paciente:", personaId);
      await sql`INSERT INTO pacientes (personaid) VALUES (${personaId})`;
      console.log("Paciente registrado exitosamente");
      res.redirect("/citas");
    } catch (error) {
      console.error("Error al registrar el paciente:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarHistorialClinico: async (req, res) => {
    try {
      const {
        pacienteId,
        fechaRegistro,
        enfermedadesPrevias,
        alergias,
        otrosDetalles,
      } = req.body;
      console.log(
        "Datos del historial clínico:",
        pacienteId,
        fechaRegistro,
        enfermedadesPrevias,
        alergias,
        otrosDetalles
      );

      // Insertar el nuevo historial clínico en la tabla HistorialesMedicos
      await sql`INSERT INTO HistorialesMedicos (pacienteid, fecharegistro, enfermedadesprevias, alergias, otrosdetalles) 
                   VALUES (${pacienteId}, ${fechaRegistro}, ${enfermedadesPrevias}, ${alergias}, ${otrosDetalles})`;

      console.log("Historial clínico registrado exitosamente");
      res.redirect("/");
    } catch (error) {
      console.error("Error al registrar el historial clínico:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarCita: async (req, res) => {
    try {
      const { paciente_id, medico_id, fecha_cita, motivo } = req.body;
      console.log(
        "Datos de la cita:",
        paciente_id,
        medico_id,
        fecha_cita,
        motivo
      );

      // Insertar la nueva cita en la tabla Citas
      await sql`INSERT INTO citas (pacienteid, medicoid, fechacita, motivo) 
                   VALUES (${paciente_id}, ${medico_id}, ${fecha_cita}, ${motivo})`;

      console.log("Cita registrada exitosamente");
      res.redirect("/");
    } catch (error) {
      console.error("Error al registrar la cita:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
};
module.exports = registrar;
