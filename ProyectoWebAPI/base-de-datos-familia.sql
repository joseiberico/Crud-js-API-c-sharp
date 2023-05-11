create database familia;
use familia;

create table MiFamilia(
IdUsuario int primary key identity(1,1),
DocumentoIdentidad varchar(60),
Nombres varchar(60),
Telefono varchar(60),
Correo varchar(60),
Cargo varchar(60),
Descripcion varchar(120),
FechaRegistro datetime default getdate()
)
go

drop table MiFamilia

select * from MiFamilia;


insert into MiFamilia values('72576578','Jose Iberico','583584193','josesito.x_x@hotmail.com','Analista programador frontend','soy el mejor','2023-05-10 14:38:00')
insert into MiFamilia values('72573347','Carlos Iberico','768936471','carlitos.x_x@hotmail.com','Analista programador backend','es suerte !!!','2023-05-10 14:38:00')
insert into MiFamilia values('72573349','Ana Iberico','463459245','anita.x_x@hotmail.com','Emprendedora','tengo hambre mama','2023-05-10 14:38:00')


go
use familia
go
--************************ VALIDAMOS SI EXISTE EL PROCEDIMIENTO ************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_registrar')
DROP PROCEDURE usp_registrar

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_modificar')
DROP PROCEDURE usp_modificar

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_obtener')
DROP PROCEDURE usp_obtener

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_listar')
DROP PROCEDURE usp_obtener

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_eliminar')
DROP PROCEDURE usp_eliminar

go

--************************ PROCEDIMIENTOS PARA CREAR ************************--
create procedure usp_registrar(
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@cargo varchar(60),
@descripcion varchar(120)
)
as
begin

insert into MiFamilia (DocumentoIdentidad,Nombres,Telefono,Correo,Cargo,Descripcion)
values
(
@documentoidentidad,
@nombres,
@telefono,
@correo,
@cargo,
@descripcion
)

end


go

create procedure usp_modificar(
@idusuario int,
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@cargo varchar(60),
@descripcion varchar(120)
)
as
begin

update Mifamilia set 
DocumentoIdentidad = @documentoidentidad,
Nombres = @nombres,
Telefono = @telefono,
Correo = @correo,
Cargo = @cargo,
descripcion = @descripcion
where IdUsuario = @idusuario

end

go

create procedure usp_obtener(@idusuario int)
as
begin

select * from MiFamilia where IdUsuario = @idusuario
end

go
create procedure usp_listar
as
begin

select * from MiFamilia
end


go

go

create procedure usp_eliminar(
@idusuario int
)
as
begin

delete from MiFamilia where IdUsuario = @idusuario

end

go
