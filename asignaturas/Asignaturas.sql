-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2019 a las 20:31:24
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudconvuejs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Asignaturas`
--

CREATE TABLE `Asignaturas` (
  `id` int(11) NOT NULL,
  `Asignatura` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Nota` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



INSERT INTO `Asignaturas` (`id`, `Asignatura`, `Nota`, `semestre`) VALUES
(1, 'Matematica', '2.3', 1),
(2, 'CAlculoI', '4.0', 2),



--
ALTER TABLE `Asignaturas`
  ADD PRIMARY KEY (`id`);


--
ALTER TABLE `Asignaturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
