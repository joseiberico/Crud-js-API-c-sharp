window.onload = function() {
    Obtener();
};

function IrFormularioCrear(){
    window.location = "Registro.html";
}

function Obtener(){

    $(".table tbody").html("");

    $.get("https://localhost:44337/api/usuario")
    .done(function( response ) {
         console.log(response);
        $.each( response, function( id, fila ) {
            $("<tr>").append(
                $("<td>").text(fila.IdUsuario),
                $("<td>").text(fila.DocumentoIdentidad),
                $("<td>").text(fila.Nombres),
                $("<td>").text(fila.Telefono),
                $("<td>").text(fila.Correo),
                $("<td>").text(fila.Cargo),
                $("<td>").text(fila.Descripcion),
                $("<td>").append(
                    $("<button>").data("id",fila.IdUsuario).addClass("btn btn-success btn-sm mr-1 editar").text("Editar").attr({"type":"button"}),
                    $("<button>").data("id",fila.IdUsuario).addClass("btn btn-danger btn-sm eliminar").text("Eliminar").attr({"type":"button"})
                )
            ).appendTo(".table");
        });
    });
}

$(document).on('click', '.editar', function () {
    console.log($(this).data("id"));
    window.location = "Registro.html?id=" + $(this).data("id");
    
});

$(document).on('click', '.eliminar', function () {
    console.log($(this).data("id"));

    $.ajax({
    method: "DELETE",
    url: "https://localhost:44337/api/usuario/" + $(this).data("id")
    })
    .done(function( response ) {
        console.log(response);
        if(response){
            Obtener();
        }else{
            alert("Error al eliminar")
        }
    });
    
});