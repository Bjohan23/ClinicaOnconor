$(document).ready(function () {
  $(".delete-tarea").click(function () {
    var id = $(this).data("id");
    // Preguntar al usuario si está seguro de eliminar la tarea
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la tarea permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, enviar la solicitud AJAX
        $.ajax({
          url: "/eliminarTarea/" + id,
          type: "DELETE",
          success: function (result) {
            Swal.fire({
              title: "Tarea eliminada",
              text: "La tarea ha sido eliminada correctamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          },
          error: function (xhr, status, error) {
            // Mostrar un mensaje de error con detalles sobre el error
            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar la tarea. Error: " + error,
              icon: "error",
            });
          },
        });
      }
    });
  });
});

// eliminar cursos
$(document).ready(function () {
  $(".delete-curso").click(function () {
    var id = $(this).data("id");
    // Preguntar al usuario si está seguro de eliminar el curso
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el curso permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, enviar la solicitud AJAX
        $.ajax({
          url: "/eliminarCurso/" + id,
          type: "DELETE",
          success: function (result) {
            Swal.fire({
              title: "Curso eliminado",
              text: "El curso ha sido eliminado correctamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          },
          error: function (xhr, status, error) {
            // Mostrar un mensaje de error con detalles sobre el error
            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar el curso. Error: " + error,
              icon: "error",
            });
          },
        });
      }
    });
  });
});
