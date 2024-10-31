-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 08:27 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `netflix_movies`
--

CREATE TABLE `netflix_movies` (
  `movies_aid` int(11) NOT NULL,
  `movies_title` varchar(150) NOT NULL,
  `movies_year` varchar(10) NOT NULL,
  `movies_genre` varchar(20) NOT NULL,
  `movies_rating` varchar(20) NOT NULL,
  `movies_duration` varchar(15) NOT NULL,
  `movies_summary` text NOT NULL,
  `movies_cast` text NOT NULL,
  `movies_image` varchar(50) NOT NULL,
  `movies_category` varchar(50) NOT NULL,
  `movies_is_active` tinyint(1) NOT NULL,
  `movies_datetime` varchar(20) NOT NULL,
  `movies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_movies`
--

INSERT INTO `netflix_movies` (`movies_aid`, `movies_title`, `movies_year`, `movies_genre`, `movies_rating`, `movies_duration`, `movies_summary`, `movies_cast`, `movies_image`, `movies_category`, `movies_is_active`, `movies_datetime`, `movies_created`) VALUES
(1, 'Kdrama 1', '123', 'qwe', 'qwe', 'qwe', 'qweqwe', 'qweqw', 'Screenshot 2024-10-08 092529.png', 'kdrama', 1, '2024-10-30 14:28:56', '2024-10-30 14:28:56'),
(2, 'Pinoy 1', 'asdfa', 'sdfas', 'dfasd', 'fasdfa', 'asdfa', 'sdfasdfas', 'Screenshot 2024-10-08 081603.png', 'pinoy', 1, '2024-10-30 14:29:21', '2024-10-30 14:29:21'),
(3, 'international', '2134', '12', '34', '2134', 'qwsda', 'sdasda', 'Screenshot 2024-10-08 081658.png', 'international', 1, '2024-10-30 14:29:47', '2024-10-30 14:29:47'),
(4, 'Kdrama 2', '123', '1234', '1234', '1234', '12341234', '12341234', 'bini-4-thumb.webp', 'kdrama', 1, '2024-10-30 14:48:34', '2024-10-30 14:48:34'),
(5, 'kdrama 3', '213', '4123', '4', '1234', '1324', '1234123', 'logo.png', 'kdrama', 1, '2024-10-30 14:49:46', '2024-10-30 14:49:28'),
(6, 'kdrama 4', 'asdfas', 'dfasdf', 'asdfa', 'dfasdf', 'aafsdfa', 'sdfasdfsa', 'New Project.png', 'kdrama', 1, '2024-10-30 14:50:17', '2024-10-30 14:50:17'),
(7, 'kdrama 5', 'dfasd', 'fasdf', 'fasdf', 'asdfasdf', 'sdfgsd', 'gsdfgsdfg', 'logo.svg', 'kdrama', 1, '2024-10-30 14:50:48', '2024-10-30 14:50:48');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_top_movies`
--

CREATE TABLE `netflix_top_movies` (
  `topmovies_aid` int(11) NOT NULL,
  `topmovies_title` varchar(100) NOT NULL,
  `topmovies_year` varchar(10) NOT NULL,
  `topmovies_genre` varchar(20) NOT NULL,
  `topmovies_rating` varchar(20) NOT NULL,
  `topmovies_duration` varchar(10) NOT NULL,
  `topmovies_summary` text NOT NULL,
  `topmovies_cast` text NOT NULL,
  `topmovies_image` varchar(30) NOT NULL,
  `topmovies_category` varchar(20) NOT NULL,
  `topmovies_is_active` tinyint(1) NOT NULL,
  `topmovies_datetime` varchar(20) NOT NULL,
  `topmovies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  ADD PRIMARY KEY (`movies_aid`);

--
-- Indexes for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  ADD PRIMARY KEY (`topmovies_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  MODIFY `movies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  MODIFY `topmovies_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
