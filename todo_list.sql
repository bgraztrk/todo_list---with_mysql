-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 24 Ağu 2021, 10:30:41
-- Sunucu sürümü: 10.4.19-MariaDB
-- PHP Sürümü: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `todo_list`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `adress` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `register`
--

INSERT INTO `register` (`id`, `user_name`, `password`, `email`, `adress`) VALUES
(16, 'bugra', 'bugra123', 'bugra@gmail', 'istanbull'),
(18, 'reha', '321', 'reha@gmail.com', 'tokyo'),
(20, 'ömer', '12345', 'ömer@gmail.com', 'ispanya'),
(21, 'kemal', '2121', 'kemal@gmail.com', 'ankara');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `todo_list`
--

CREATE TABLE `todo_list` (
  `title` text NOT NULL,
  `category` text NOT NULL,
  `isComplated` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '0',
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `todo_list`
--

INSERT INTO `todo_list` (`title`, `category`, `isComplated`, `id`, `user_id`) VALUES
('dsdsd', 'Food', '0', 456, 20),
('gggg', 'Food', '0', 457, 20),
('vcvcvc', 'Food', '0', 474, 16);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `todo_list`
--
ALTER TABLE `todo_list`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Tablo için AUTO_INCREMENT değeri `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=476;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
