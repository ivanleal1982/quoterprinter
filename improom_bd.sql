-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2024 a las 06:15:39
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `improom_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculo_cotizacion`
--

CREATE TABLE `calculo_cotizacion` (
  `id_calculo_cotizacion` int(11) NOT NULL,
  `id_cotizacion` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT '0',
  `material` decimal(10,2) DEFAULT '0.00',
  `ds_material` varchar(255) DEFAULT NULL,
  `productos` decimal(10,2) DEFAULT '0.00',
  `ds_productos` varchar(255) DEFAULT NULL,
  `laminado` decimal(10,2) DEFAULT '0.00',
  `ds_laminado` varchar(255) DEFAULT NULL,
  `acabado` decimal(10,2) DEFAULT '0.00',
  `ds_acabado` varchar(255) DEFAULT NULL,
  `otro` decimal(10,2) DEFAULT '0.00',
  `ds_otro` varchar(255) DEFAULT NULL,
  `cantotro` int(11) DEFAULT NULL,
  `plotter` decimal(10,2) DEFAULT '0.00',
  `ds_plotter` varchar(255) DEFAULT NULL,
  `alto` decimal(10,2) DEFAULT '0.00',
  `ancho` decimal(10,2) DEFAULT '0.00',
  `metros` decimal(10,2) DEFAULT '0.00',
  `estatus` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calculo_cotizacion`
--

INSERT INTO `calculo_cotizacion` (`id_calculo_cotizacion`, `id_cotizacion`, `id_cliente`, `cantidad`, `material`, `ds_material`, `productos`, `ds_productos`, `laminado`, `ds_laminado`, `acabado`, `ds_acabado`, `otro`, `ds_otro`, `cantotro`, `plotter`, `ds_plotter`, `alto`, `ancho`, `metros`, `estatus`) VALUES
(1, 37, 2, 1, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(2, 38, 2, 1, '2.59', 'Vinil blackout brillante', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(4, 40, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(5, 41, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(6, 42, 1, 1, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(7, 43, 1, 1, '2.59', 'Vinil blackout brillante', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(8, 44, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(9, 45, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(10, 46, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(11, 47, 1, 1, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(12, 47, 1, 2, '4.47', 'Vinil Microperforado', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '4.00', '8.00', '32.00', 0),
(13, 47, 1, 6, '5.29', 'Vinil Esmerilado', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '8.00', '16.00', 0),
(14, 47, 1, 1, '2.59', 'Vinil blackout brillante', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '5.00', '2.00', '10.00', 0),
(15, 48, 2, 1, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 1),
(16, 48, 2, 5, '4.47', 'Vinil Microperforado', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '8.00', '5.00', '40.00', 1),
(17, 49, 1, 2, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '4.00', '4.00', '10.00', 0),
(18, 49, 1, 3, '5.29', 'Vinil Esmerilado', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '4.00', '5.00', '6.00', 0),
(19, 50, 1, 2, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '5.00', '4.00', '20.00', 0),
(20, 51, 1, 3, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '5.00', '3.00', '15.00', 0),
(21, 52, 1, 4, '5.29', 'Vinil Esmerilado', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '5.00', '3.00', '15.00', 0),
(22, 53, 2, 1, '4.47', 'Vinil Microperforado', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '5.00', '10.00', '20.00', 0),
(23, 54, 2, 1, '2.59', 'Vinil blackout brillante', '0.00', '', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(24, 55, 1, 2, '2.59', 'Vinil blanco mate', '0.00', '', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '3.00', '2.00', '6.00', 0),
(25, 56, 2, 1, '4.47', 'Vinil Microperforado', '0.00', '', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(27, 64, 1, 1, '2.59', 'Vinil blanco mate', '6.18', 'Vinil Negro Transfer', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 0),
(28, 63, 2, 1, '2.59', 'Vinil blanco mate', '6.50', 'PVC Espumoso', '0.00', '', '0.00', '', '0.00', '', 0, '0.00', '', '2.00', '3.00', '6.00', 1);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `calculo_materiales`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `calculo_materiales` (
`id_material` int(11)
,`tipo` int(11)
,`material` varchar(255)
,`costo_unitario` decimal(18,6)
,`sobrante` decimal(22,8)
,`utilidad` decimal(25,10)
,`subtotal` decimal(26,10)
,`islr` decimal(28,12)
,`total` decimal(29,12)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `rif_cliente` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono1` int(11) DEFAULT NULL,
  `telefono2` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `vendedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `rif_cliente`, `nombre`, `direccion`, `telefono1`, `telefono2`, `email`, `vendedor`) VALUES
(1, 'J000001', 'Empresa 1', 'Avenida', 2129500000, NULL, NULL, 7),
(2, 'J000002', 'Empresa 2', 'Calle', 2125000000, NULL, NULL, 8),
(3, 'J0000003', 'Empresa 3', 'Caracas', 212200000, 2147483647, 'prueba@prueba.com', 7),
(5, 'J0000003122', 'Empresa 41', '', 212200000, 0, '', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

CREATE TABLE `cotizacion` (
  `id_cotizacion` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `hora_entrega` time DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `unitario` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones`
--

CREATE TABLE `cotizaciones` (
  `id_cotizacion` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `estatus` int(1) NOT NULL DEFAULT '0',
  `fecha` date NOT NULL,
  `fecha_produccion` datetime DEFAULT NULL,
  `fecha_entrega` datetime DEFAULT NULL,
  `fecha_instalacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cotizaciones`
--

INSERT INTO `cotizaciones` (`id_cotizacion`, `id_cliente`, `estatus`, `fecha`, `fecha_produccion`, `fecha_entrega`, `fecha_instalacion`) VALUES
(4, 5, 0, '0000-00-00', NULL, NULL, NULL),
(37, 2, 0, '0000-00-00', NULL, NULL, NULL),
(38, 2, 0, '0000-00-00', NULL, NULL, NULL),
(40, 1, 0, '0000-00-00', NULL, NULL, NULL),
(41, 1, 0, '0000-00-00', NULL, NULL, NULL),
(42, 1, 0, '0000-00-00', NULL, NULL, NULL),
(43, 1, 0, '0000-00-00', NULL, NULL, NULL),
(44, 1, 0, '0000-00-00', NULL, NULL, NULL),
(45, 1, 0, '0000-00-00', NULL, NULL, NULL),
(46, 1, 0, '0000-00-00', NULL, NULL, NULL),
(47, 1, 0, '0000-00-00', NULL, NULL, NULL),
(48, 2, 1, '0000-00-00', '2024-08-08 14:56:32', NULL, NULL),
(49, 1, 0, '0000-00-00', NULL, NULL, NULL),
(50, 1, 0, '0000-00-00', NULL, NULL, NULL),
(51, 1, 0, '0000-00-00', NULL, NULL, NULL),
(52, 1, 0, '0000-00-00', NULL, NULL, NULL),
(53, 2, 0, '0000-00-00', NULL, NULL, NULL),
(54, 2, 0, '0000-00-00', NULL, NULL, NULL),
(55, 1, 0, '0000-00-00', NULL, NULL, NULL),
(56, 2, 0, '0000-00-00', NULL, NULL, NULL),
(63, 2, 1, '2024-07-25', '2024-08-06 17:20:32', NULL, NULL),
(64, 1, 0, '2024-07-25', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales`
--

CREATE TABLE `materiales` (
  `id_material` int(11) NOT NULL,
  `tipo` int(11) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `ancho` decimal(10,2) DEFAULT NULL,
  `largo` decimal(10,2) DEFAULT NULL,
  `costo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materiales`
--

INSERT INTO `materiales` (`id_material`, `tipo`, `material`, `ancho`, `largo`, `costo`) VALUES
(1, 1, 'Vinil blanco mate', '1.36', '50.00', '110.00'),
(2, 1, 'Vinil blackout brillante', '1.37', '50.00', '110.00'),
(3, 1, 'Vinil Microperforado', '1.37', '50.00', '190.00'),
(4, 1, 'Vinil Esmerilado', '1.22', '50.00', '200.00'),
(5, 2, 'Vinil Negro Transfer', '0.60', '50.00', '115.00'),
(6, 2, 'PVC Espumoso', '1.22', '2.44', '12.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produccion`
--

CREATE TABLE `produccion` (
  `id_produccion` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `unitario` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(255) DEFAULT NULL,
  `tipo_rol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre_rol`, `tipo_rol`) VALUES
(1, 'Super Administrador', '1'),
(2, 'Administrador', '2'),
(3, 'Produccion', '3'),
(4, 'Entrega', '4'),
(5, 'Instalacion', '5'),
(6, 'Cotizador', '6'),
(7, 'Vendedor', '7');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_material`
--

CREATE TABLE `tipo_material` (
  `id_tipo_material` int(11) NOT NULL,
  `tipo_material` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_material`
--

INSERT INTO `tipo_material` (`id_tipo_material`, `tipo_material`) VALUES
(1, 'Material'),
(2, 'Productos'),
(3, 'Laminado'),
(4, 'Acabado'),
(5, 'Otro'),
(6, 'Plotter');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `clave` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `rol_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `email`, `clave`, `cargo`, `rol_usuario`) VALUES
(1, 'Ivan Leal', 'ivanleal1982@gmail.com', '$2y$10$MXmdz/aOpHYbD28QUFK4QuJzF.Xk8kjlgEIRFzPAF1miCbOSzGnyK', 'Administrador', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `id_vendedor` int(11) NOT NULL,
  `nombre_vendedor` varchar(255) DEFAULT NULL,
  `telefono` bigint(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`id_vendedor`, `nombre_vendedor`, `telefono`, `email`) VALUES
(7, 'Victor Valderrama', 4141000000, NULL),
(8, 'Catherine Sequera ', 4142000002, '');

-- --------------------------------------------------------

--
-- Estructura para la vista `calculo_materiales`
--
DROP TABLE IF EXISTS `calculo_materiales`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `calculo_materiales`  AS  select `materiales`.`id_material` AS `id_material`,`materiales`.`tipo` AS `tipo`,`materiales`.`material` AS `material`,(`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) AS `costo_unitario`,(((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) AS `sobrante`,((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) * 0.30) AS `utilidad`,((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) + ((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) * 0.30)) AS `subtotal`,(((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) * 0.30) * 0.34) AS `islr`,(((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) + ((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) * 0.30)) + (((((`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`)) * 0.15) + (`materiales`.`costo` / (`materiales`.`ancho` * `materiales`.`largo`))) * 0.30) * 0.34)) AS `total` from `materiales` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calculo_cotizacion`
--
ALTER TABLE `calculo_cotizacion`
  ADD PRIMARY KEY (`id_calculo_cotizacion`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD PRIMARY KEY (`id_cotizacion`);

--
-- Indices de la tabla `materiales`
--
ALTER TABLE `materiales`
  ADD PRIMARY KEY (`id_material`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `tipo_material`
--
ALTER TABLE `tipo_material`
  ADD PRIMARY KEY (`id_tipo_material`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id_vendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calculo_cotizacion`
--
ALTER TABLE `calculo_cotizacion`
  MODIFY `id_calculo_cotizacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  MODIFY `id_cotizacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `materiales`
--
ALTER TABLE `materiales`
  MODIFY `id_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tipo_material`
--
ALTER TABLE `tipo_material`
  MODIFY `id_tipo_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id_vendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
