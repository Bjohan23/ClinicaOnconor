const sql = require("../db/db.js");

const mostrar = {
  vistaPrincipal: async (req, res) => {
    res.render("persona");
  },
  vistaTelefono: async (req, res) => {
    try {
      // Obtener la última ID de la persona registrada en la tabla Persona
      const idPersona =
        await sql`SELECT MAX(PersonaID) AS personaid FROM Persona`;

      // Verificar si se encontró alguna persona
      if (
        idPersona &&
        idPersona.length > 0 &&
        idPersona[0].personaid !== null
      ) {
        console.log("ID de la persona:", idPersona[0].personaid);
        res.render("telefono", { idPersona: idPersona[0].personaid });
      } else {
        console.log("No se encontró ninguna persona registrada");
        res.render("telefono", { idPersona: null }); // Puedes enviar null o algún valor por defecto si no se encuentra ninguna persona
      }
    } catch (error) {
      console.error("Error al obtener la última ID de persona:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  vistaMedico: async (req, res) => {
    try {
      // Obtener la última ID de la persona registrada en la tabla Persona
      const idPersona =
        await sql`SELECT MAX(PersonaID) AS personaid FROM Persona`;

      // Verificar si se encontró alguna persona
      if (
        idPersona &&
        idPersona.length > 0 &&
        idPersona[0].personaid !== null
      ) {
        console.log("ID de la persona:", idPersona[0].personaid);
        res.render("medico", { idPersona: idPersona[0].personaid });
      } else {
        console.log("No se encontró ninguna persona registrada");
        res.render("medico", { idPersona: null }); // Puedes enviar null o algún valor por defecto si no se encuentra ninguna persona
      }
    } catch (error) {
      console.error("Error al obtener la última ID de persona:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  vistaPaciente: async (req, res) => {
    try {
      // Obtener la última ID de la persona registrada en la tabla Persona
      const idPersona =
        await sql`SELECT MAX(PersonaID) AS personaid FROM Persona`;

      // Verificar si se encontró alguna persona
      if (
        idPersona &&
        idPersona.length > 0 &&
        idPersona[0].personaid !== null
      ) {
        console.log("ID de la persona:", idPersona[0].personaid);
        res.render("paciente", { idPersona: idPersona[0].personaid });
      } else {
        console.log("No se encontró ninguna persona registrada");
        res.render("paciente", { idPersona: null }); // Puedes enviar null o algún valor por defecto si no se encuentra ninguna persona
      }
    } catch (error) {
      console.error("Error al obtener la última ID de persona:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  vistaCitas: async (req, res) => {
    try {
      // Obtener todos los doctores
      const doctores =
        await sql`SELECT * FROM Medicos INNER JOIN Persona ON Medicos.PersonaID = Persona.PersonaID`;

      // Obtener todos los pacientes
      const pacientes =
        await sql`SELECT * FROM Pacientes INNER JOIN Persona ON Pacientes.PersonaID = Persona.PersonaID`;

      // Renderizar la vista de citas y pasar los datos de doctores y pacientes
      console.log("Doctores:", doctores && doctores.length);
      console.log("Pacientes:", pacientes && pacientes.length);
      res.render("citas", { doctores, pacientes });
    } catch (error) {
      console.error("Error al obtener doctores y pacientes:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  // vistaHistorialMedico: async (req, res) => {
  //   try {
  //     // Obtener todos los pacientes
  //     const pacientes =
  //       await sql`SELECT * FROM Pacientes INNER JOIN Persona ON Pacientes.PersonaID = Persona.PersonaID`;

  //     // Obtener todos los doctores
  //     const doctores =
  //       await sql`SELECT * FROM Medicos INNER JOIN Persona ON Medicos.PersonaID = Persona.PersonaID`;

  //     // Obtener todas las citas
  //     const citas =
  //       await sql`SELECT * FROM Citas`;

  //     // Renderizar la vista de historial médico y pasar los datos de pacientes, doctores y citas
  //     console.log("Pacientes:", pacientes && pacientes.length);
  //     console.log("Doctores:", doctores && doctores.length);
  //     console.log("Citas:", citas && citas.length);
  //     res.render("hMedico", { pacientes, doctores, citas });
  //   } catch (error) {
  //     console.error("Error al obtener pacientes, doctores y citas:", error);
  //     res.status(500).send("Error interno del servidor");
  //   }
  // },
  vistaHistorialMedicoSimple: async (req, res) => {
    // mostrar todos los pacientes
    try {
      const pacientes =
        await sql`SELECT * FROM Pacientes INNER JOIN Persona ON Pacientes.PersonaID = Persona.PersonaID`;
      console.log("Pacientes:", pacientes && pacientes.length);
      res.render("hMedico", { pacientes });
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  vistaDoctoresYpacientes: async (req, res) => {
    // mostrar todos los pacientes y doctores
    try {
      const pacientes =
        await sql`SELECT * FROM Pacientes INNER JOIN Persona ON Pacientes.PersonaID = Persona.PersonaID`;
      const doctores =
        await sql`SELECT * FROM Medicos INNER JOIN Persona ON Medicos.PersonaID = Persona.PersonaID`;

      console.log("Pacientes:", pacientes && pacientes.length);
      console.log("Doctores:", doctores && doctores.length);
      res.render("general", { pacientes, doctores });
    } catch (error) {
      console.error("Error al obtener pacientes y doctores:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  vistaError: (req, res) => {
    res.status(404).render("404");
  },
};

module.exports = mostrar;
