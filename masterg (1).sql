-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-03-2023 a las 09:39:30
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `masterg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `descripcion` varchar(200) NOT NULL,
  `precio` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `foto` varchar(40) NOT NULL,
  `nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`descripcion`, `precio`, `cantidad`, `id`, `foto`, `nombre`) VALUES
('Dark and darker', 12, 12, 1, 'imgs/dark-and-darker.jpg', 'DarkAndDarker'),
('Hogwarts Legacy', 13, 13, 2, 'imgs/hogwarts-legacy.jpg', 'HogwartsLegacy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nick` varchar(20) NOT NULL,
  `contra` varchar(20) NOT NULL,
  `id` int(11) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `imagen` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nick`, `contra`, `id`, `correo`, `tipo`, `imagen`) VALUES
('Magnum', 'hola', 3, 'magnumretriver@gmail.com', 'usuario', 'imgs/avatar/perfil1.jpg'),
('as', 'as', 4, 'torete', 'usuario', 'imgs/avatar/logo.png'),
('PEPE', 'hola', 6, 'julen', 'usuario', 'imgs/avatar/logo.png'),
('Jorge', 'pepe', 7, 'hola', 'usuario', 'imgs/avatar/logo.png'),
('aa', 'hola', 8, 'jorge', 'usuario', 'imgs/avatar/logo.png'),
('aa', 'hola', 9, 'jorges', 'usuario', 'imgs/avatar/logo.png'),
('cosas', 'cosas', 10, 'cosas', 'usuario', 'imgs/avatar/logo.png'),
('', '', 11, '', 'usuario', 'imgs/avatar/logo.png'),
('asd', 'asd', 13, 'asd', 'usuario', 'imgs/avatar/logo.png'),
('asdd', 'ads', 15, 'asdd', 'usuario', 'imgs/avatar/logo.png'),
('asd', 'asd', 16, 'ads', 'usuario', 'imgs/avatar/logo.png'),
('asd', 'asd', 17, 'asddddd', 'usuario', 'imgs/avatar/logo.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
