        var editar = false;
        window.onload = function() {
           var id = $.urlParam('id');
           console.log(id);
           if(id != null){
               editar = true;
               $("#txtidusuario").val(id);
               PintarUsuario(id);
           }
        };

        $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null) {
            return null;
            }
            return decodeURI(results[1]) || 0;
        }

        function PintarUsuario(idUsuario){

            $.get("https://localhost:44337/api/usuario/" + idUsuario)
            .done(function( response ) {
                console.log(response);
                $("#txtdocumento").val(response.DocumentoIdentidad),
                $("#txtnombres").val(response.Nombres),
                $("#txttelefono").val(response.Telefono),
                $("#txtcorreo").val(response.Correo),
                $("#txtcargo").val(response.Cargo),
                $("#txtdescripcion").val(response.Descripcion)
            });
        }

        function GuardarUsuario(){
            if(editar){
                var data = {
                    IdUsuario : $("#txtidusuario").val(),
                    DocumentoIdentidad : $("#txtdocumento").val(),
                    Nombres : $("#txtnombres").val(),
                    Telefono : $("#txttelefono").val(),
                    Correo : $("#txtcorreo").val(),
                    Cargo : $("#txtcargo").val(),
                    Descripcion : $("#txtdescripcion").val()
                }

                $.ajax({
                method: "PUT",
                url: "https://localhost:44337/api/usuario/",
                contentType: 'application/json',
                data: JSON.stringify(data), // access in body
                })
                .done(function( response ) {
                    console.log(response);
                    if(response){
                        alert("Se guardaron los cambios");
                        window.location = "Index.html";
                    }else{
                        alert("Error al Modificar")
                    }
                });

            } else {
            var data = {
                DocumentoIdentidad : $("#txtdocumento").val(),
                Nombres : $("#txtnombres").val(),
                Telefono : $("#txttelefono").val(),
                Correo : $("#txtcorreo").val(),
                Cargo : $("#txtcargo").val(),
                Descripcion : $("#txtdescripcion").val()
            }

            $.post("https://localhost:44337/api/usuario/", data)
            .done(function(response) {
                console.log(response);
                if(response){
                    alert("Usuario Creado");
                    window.location = "Index.html";
                }else{
                    alert("Error al crear");
                }
            });
            
        }
}

function IrFormularioInicio(){
    window.location = "Index.html";
}

