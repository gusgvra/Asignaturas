<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$marca = (isset($_POST['Asignatura'])) ? $_POST['Asignatura'] : '';
$modelo = (isset($_POST['Nota'])) ? $_POST['Nota'] : '';
$stock = (isset($_POST['semestre'])) ? $_POST['semestre'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO Asignaturas (Asignatura, Nota, semestre) VALUES('$Asignatura', '$Nota', '$semestre') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE Asignaturas SET Asignaturas='$Asignaturas', Nota='$Nota', semestre='$semestre' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM Asignaturas WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, Asignaturas, Nota, semestre FROM Asignaturas";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;