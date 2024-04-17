const sql = require("../db/db.js");

const editar = {
  vistaEditarTarea: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("ID de la tarea:", id);

      const tareas = await sql`SELECT * FROM tarea WHERE id = ${id}`;
      const curso = await sql`SELECT * FROM curso`;
      let fecha = tareas[0].fecha_limite.toISOString().split("T")[0];
      console.log("tareas:", tareas[0], "fehca", fecha);
      res.render("editar_tarea", {
        curso: curso,
        tareas: tareas[0],
        fecha: fecha,
      });
    } catch (error) {
      console.error("Error al editar la tarea:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  actualizarTarea: async (req, res) => {
    try {
      const { titulo, fecha_limite, descripcion, curso_id, id } = req.body;
      console.log("Datos de la tarea:", titulo, fecha_limite, descripcion, id);

      await sql`UPDATE tarea SET titulo = ${titulo}, curso_id = ${curso_id}, fecha_limite = ${fecha_limite}, descripcion = ${descripcion} WHERE id = ${id}`;

      console.log("Tarea actualizada exitosamente");
      res.redirect("/");
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  vistaEditarCurso: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("ID del curso:", id);

      const cursos = await sql`SELECT * FROM curso WHERE id = ${id}`;
      res.render("editar_curso", { cursos: cursos[0] });
    } catch (error) {
      console.error("Error al editar el curso:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  actualizarCurso: async (req, res) => {
    try {
      const { nombre, id } = req.body;
      console.log("Datos del nombre:", nombre, id);

      await sql`UPDATE curso SET nombre = ${nombre} WHERE id = ${id}`;

      console.log("nombre actualizado exitosamente");
      res.redirect("cursos");
    } catch (error) {
      console.error("Error al actualizar el nombre:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
};

module.exports = editar;
