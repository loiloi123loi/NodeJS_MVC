
<h1 align="center">
  Jobify NodeJS + ExpressJS MVC with MySQL
  <br>
  <br>
</h1>

<h4 align="center">
  Job management system with 
  <a href="https://nodejs.org/" target="_blank">NodeJS</a> + 
  <a href="https://expressjs.com/" target="_blank">ExpressJS</a> with 
  <a href="https://www.mysql.com/" target="_blank">MySQL</a>.
</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">Tech and packages</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

## Key Features

* Job Manager - CRUD
  - Add job
  - View all jobs info
  - View single job info
  - Edit single job
  - Delete job
  - View stats info
  - View profile
  - Update profile
    
* Admin
  - View total users and total jobs

## Tech and packages

* Language
  - [TypeScript](https://www.typescriptlang.org/)
  - [HTML](https://www.google.com/search?q=html)
  - [CSS](https://www.google.com/search?q=css)

* Template language + view engine
  - [Ejs](https://ejs.co/)

* Cores
  - [Express](https://expressjs.com/)
  - [Dot Env](https://www.npmjs.com/package/dotenv)
  - [Express Validator](https://express-validator.github.io/docs/)
  - [Mysql2](https://www.npmjs.com/package/mysql2)
  - [Express Session](https://www.npmjs.com/package/express-session)
  - [Multer](https://www.npmjs.com/package/multer)
  - [Connect Flash](https://www.npmjs.com/package/connect-flash)
  - [Method Override](https://www.npmjs.com/package/method-override)
    
* Encrypt
  - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 
* Support
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [TS Node](https://www.npmjs.com/package/ts-node)
  - [Prettier](https://www.npmjs.com/package/prettier)
  - [Eslint](https://www.npmjs.com/package/eslint)
    
## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Xampp](https://www.apachefriends.org/download.html) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

1. Creat database (Xampp - Mysql)

```bash
#copy this sql

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 22, 2024 lúc 06:38 AM
-- Phiên bản máy phục vụ: 5.7.17-log
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `jobify`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `jobLocation` varchar(255) NOT NULL,
  `status` enum('pending','interview','declined') NOT NULL,
  `jobType` enum('full-time','part-time','internship') NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `jobs`
--

INSERT INTO `jobs` (`id`, `position`, `company`, `jobLocation`, `status`, `jobType`, `created_by`, `created_at`, `updated_at`) VALUES
(471, 'IT Support Specialist', 'Vietjet Air', 'Huế', 'interview', 'internship', 9, '2024-07-16 09:37:54', '2024-07-16 09:37:54'),
(472, 'Database Administrator', 'Masan Group', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-11-24 08:04:48', '2024-11-24 08:04:48'),
(473, 'Frontend Developer', 'DHL Vietnam', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-11-03 15:55:05', '2024-11-03 15:55:05'),
(474, 'IT Support Specialist', 'Grab Vietnam', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-08-17 17:22:23', '2024-08-17 17:22:23'),
(475, 'System Administrator', 'Vietcombank', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-10-18 17:08:04', '2024-10-18 17:08:04'),
(476, 'Scrum Master', 'VNG Corporation', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-09-19 05:17:07', '2024-09-19 05:17:07'),
(477, 'Scrum Master', 'BIDV', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-11-15 01:06:52', '2024-11-15 01:06:52'),
(478, 'Cloud Architect', 'BIDV', 'Huế', 'declined', 'full-time', 9, '2024-04-19 18:39:06', '2024-04-19 18:39:06'),
(479, 'System Administrator', 'VinGroup', 'Huế', 'interview', 'full-time', 9, '2024-12-12 18:22:54', '2024-12-12 18:22:54'),
(480, 'Machine Learning Engineer', 'BIDV', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-11-29 14:37:04', '2024-11-29 14:37:04'),
(481, 'Cybersecurity Analyst', 'Vietcombank', 'Huế', 'declined', 'part-time', 9, '2024-09-12 09:50:01', '2024-09-12 09:50:01'),
(483, 'Machine Learning Engineer', 'VinGroup', 'Huế', 'pending', 'part-time', 9, '2024-04-07 19:45:26', '2024-04-07 19:45:26'),
(484, 'Data Scientist', 'FPT Software', 'Quy Nhơn', 'interview', 'internship', 9, '2024-05-26 21:58:48', '2024-05-26 21:58:48'),
(485, 'IT Project Manager', 'BIDV', 'Huế', 'declined', 'part-time', 9, '2024-03-22 11:42:48', '2024-03-22 11:42:48'),
(486, 'System Administrator', 'Vietcombank', 'Hà Nội', 'declined', 'full-time', 9, '2024-02-22 09:54:13', '2024-02-22 09:54:13'),
(487, 'DevOps Engineer', 'Unilever Vietnam', 'Hà Nội', 'interview', 'internship', 9, '2024-01-29 14:15:01', '2024-01-29 14:15:01'),
(488, 'Mobile App Developer', 'Unilever Vietnam', 'Quy Nhơn', 'interview', 'internship', 9, '2024-01-11 08:45:36', '2024-01-11 08:45:36'),
(489, 'Software Engineer', 'Tiki', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-02-01 00:48:19', '2024-02-01 00:48:19'),
(490, 'Data Scientist', 'DHL Vietnam', 'Đà Nẵng', 'interview', 'internship', 9, '2024-07-20 06:00:55', '2024-07-20 06:00:55'),
(491, 'Data Scientist', 'Samsung Vietnam', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-10-15 00:27:24', '2024-10-15 00:27:24'),
(492, 'Database Administrator', 'Tiki', 'Quy Nhơn', 'interview', 'internship', 9, '2024-08-03 15:51:06', '2024-08-03 15:51:06'),
(493, 'QA Engineer', 'VinGroup', 'Đà Nẵng', 'interview', 'internship', 9, '2024-04-16 16:48:35', '2024-04-16 16:48:35'),
(494, 'Software Engineer', 'Hoa Phat Group', 'Quy Nhơn', 'interview', 'full-time', 9, '2024-05-31 07:48:02', '2024-05-31 07:48:02'),
(495, 'DevOps Engineer', 'Vietcombank', 'Huế', 'declined', 'full-time', 9, '2024-08-04 14:31:29', '2024-08-04 14:31:29'),
(496, 'AI Specialist', 'Shopee Vietnam', 'Đà Nẵng', 'declined', 'part-time', 9, '2024-10-16 07:55:30', '2024-10-16 07:55:30'),
(497, 'Mobile App Developer', 'Techcombank', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-08-20 16:43:10', '2024-08-20 16:43:10'),
(498, 'Network Engineer', 'Masan Group', 'Hà Nội', 'interview', 'internship', 9, '2024-11-08 17:34:25', '2024-11-08 17:34:25'),
(499, 'Software Engineer', 'Masan Group', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-02-19 06:56:04', '2024-02-19 06:56:04'),
(500, 'Business Analyst', 'Tiki', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-02-28 05:24:44', '2024-02-28 05:24:44'),
(501, 'Mobile App Developer', 'Tiki', 'Đà Nẵng', 'declined', 'part-time', 9, '2024-04-13 17:15:00', '2024-04-13 17:15:00'),
(502, 'DevOps Engineer', 'Unilever Vietnam', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-10-31 15:19:56', '2024-10-31 15:19:56'),
(503, 'QA Engineer', 'BIDV', 'Huế', 'declined', 'full-time', 9, '2024-07-12 08:50:40', '2024-07-12 08:50:40'),
(504, 'Software Engineer', 'VNG Corporation', 'Hà Nội', 'declined', 'part-time', 9, '2024-01-03 15:31:48', '2024-01-03 15:31:48'),
(505, 'IT Support Specialist', 'Vinamilk', 'Hà Nội', 'declined', 'part-time', 9, '2024-04-06 02:50:17', '2024-04-06 02:50:17'),
(506, 'Scrum Master', 'Unilever Vietnam', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-04-26 07:56:27', '2024-04-26 07:56:27'),
(507, 'Mobile App Developer', 'Vietcombank', 'Đà Nẵng', 'declined', 'full-time', 9, '2024-05-27 02:36:28', '2024-05-27 02:36:28'),
(508, 'Scrum Master', 'Vietjet Air', 'Huế', 'interview', 'internship', 9, '2024-05-31 07:20:31', '2024-05-31 07:20:31'),
(509, 'AI Specialist', 'BIDV', 'Hà Nội', 'pending', 'part-time', 9, '2024-11-02 04:25:00', '2024-11-02 04:25:00'),
(510, 'Database Administrator', 'Vietjet Air', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-02-23 13:12:25', '2024-02-23 13:12:25'),
(511, 'DevOps Engineer', 'VNPT', 'Đà Nẵng', 'interview', 'internship', 9, '2024-03-23 11:39:32', '2024-03-23 11:39:32'),
(512, 'Full Stack Developer', 'Unilever Vietnam', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-02-01 22:00:38', '2024-02-01 22:00:38'),
(513, 'Scrum Master', 'Tiki', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-10-28 07:10:33', '2024-10-28 07:10:33'),
(514, 'IT Support Specialist', 'Shopee Vietnam', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-01-11 08:42:39', '2024-01-11 08:42:39'),
(515, 'Database Administrator', 'Hoa Phat Group', 'Huế', 'pending', 'part-time', 9, '2024-11-17 17:43:01', '2024-11-17 17:43:01'),
(516, 'System Administrator', 'Vinamilk', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-07-31 13:18:44', '2024-07-31 13:18:44'),
(517, 'Data Scientist', 'Viettel', 'Quy Nhơn', 'declined', 'full-time', 9, '2024-08-29 15:27:16', '2024-08-29 15:27:16'),
(518, 'Full Stack Developer', 'Samsung Vietnam', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-11-09 14:07:57', '2024-11-09 14:07:57'),
(519, 'Network Engineer', 'Samsung Vietnam', 'Hà Nội', 'interview', 'internship', 9, '2024-01-05 19:49:14', '2024-01-05 19:49:14'),
(520, 'System Administrator', 'Shopee Vietnam', 'Huế', 'declined', 'full-time', 9, '2024-05-08 13:18:55', '2024-05-08 13:18:55'),
(521, 'Cloud Architect', 'Tiki', 'Hà Nội', 'pending', 'part-time', 9, '2024-12-16 23:18:33', '2024-12-16 23:18:33'),
(522, 'Database Administrator', 'Novaland', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-02-14 12:48:28', '2024-02-14 12:48:28'),
(523, 'UX/UI Designer', 'DHL Vietnam', 'Quy Nhơn', 'interview', 'internship', 9, '2024-08-29 08:38:03', '2024-08-29 08:38:03'),
(524, 'Data Scientist', 'Unilever Vietnam', 'Hà Nội', 'pending', 'part-time', 9, '2024-03-29 18:55:09', '2024-03-29 18:55:09'),
(525, 'AI Specialist', 'Masan Group', 'Hà Nội', 'declined', 'full-time', 9, '2024-03-10 22:41:19', '2024-03-10 22:41:19'),
(526, 'IT Project Manager', 'Tiki', 'Hà Nội', 'interview', 'full-time', 9, '2024-05-19 07:58:29', '2024-05-19 07:58:29'),
(527, 'System Administrator', 'Techcombank', 'Huế', 'pending', 'part-time', 9, '2024-03-05 14:23:49', '2024-03-05 14:23:49'),
(528, 'Cloud Architect', 'Grab Vietnam', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-06-23 14:08:21', '2024-06-23 14:08:21'),
(529, 'UX/UI Designer', 'Viettel', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-04-07 09:58:18', '2024-04-07 09:58:18'),
(530, 'Scrum Master', 'THACO (Trường Hải Auto)', 'Huế', 'interview', 'internship', 9, '2024-10-29 12:23:28', '2024-10-29 12:23:28'),
(531, 'AI Specialist', 'VNPT', 'Quy Nhơn', 'interview', 'internship', 9, '2024-04-23 10:55:15', '2024-04-23 10:55:15'),
(532, 'Cloud Architect', 'FPT Software', 'Hà Nội', 'interview', 'internship', 9, '2024-01-31 17:22:25', '2024-01-31 17:22:25'),
(533, 'QA Engineer', 'FPT Software', 'Hà Nội', 'interview', 'internship', 9, '2024-12-15 21:49:24', '2024-12-15 21:49:24'),
(534, 'Cybersecurity Analyst', 'Grab Vietnam', 'Đà Nẵng', 'interview', 'internship', 9, '2024-01-02 15:33:30', '2024-01-02 15:33:30'),
(535, 'Database Administrator', 'Grab Vietnam', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-04-23 12:22:24', '2024-04-23 12:22:24'),
(536, 'IT Project Manager', 'Novaland', 'Hà Nội', 'pending', 'full-time', 9, '2024-03-18 23:30:31', '2024-03-18 23:30:31'),
(537, 'Mobile App Developer', 'Masan Group', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-11-27 18:36:10', '2024-11-27 18:36:10'),
(538, 'Full Stack Developer', 'BIDV', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-02-12 16:38:24', '2024-02-12 16:38:24'),
(539, 'DevOps Engineer', 'Grab Vietnam', 'Huế', 'declined', 'part-time', 9, '2024-01-06 15:47:22', '2024-01-06 15:47:22'),
(540, 'Database Administrator', 'Samsung Vietnam', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-05-29 01:40:58', '2024-05-29 01:40:58'),
(541, 'Backend Developer', 'DHL Vietnam', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-10-30 02:46:48', '2024-10-30 02:46:48'),
(542, 'Scrum Master', 'FPT Software', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-02-15 14:37:39', '2024-02-15 14:37:39'),
(543, 'IT Project Manager', 'Samsung Vietnam', 'Đà Nẵng', 'declined', 'full-time', 9, '2024-03-29 18:56:02', '2024-03-29 18:56:02'),
(544, 'QA Engineer', 'THACO (Trường Hải Auto)', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-10-28 03:08:51', '2024-10-28 03:08:51'),
(545, 'System Administrator', 'VinGroup', 'Hà Nội', 'interview', 'full-time', 9, '2024-07-21 08:44:16', '2024-07-21 08:44:16'),
(546, 'UX/UI Designer', 'Samsung Vietnam', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-05-21 05:39:40', '2024-05-21 05:39:40'),
(547, 'Network Engineer', 'DHL Vietnam', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-11-10 11:08:52', '2024-11-10 11:08:52'),
(548, 'Machine Learning Engineer', 'VNPT', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-01-07 20:47:19', '2024-01-07 20:47:19'),
(549, 'AI Specialist', 'VinGroup', 'Huế', 'declined', 'part-time', 9, '2024-02-17 09:42:07', '2024-02-17 09:42:07'),
(550, 'Business Analyst', 'Vietcombank', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-07-19 10:20:21', '2024-07-19 10:20:21'),
(551, 'QA Engineer', 'Tiki', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-02-05 17:40:34', '2024-02-05 17:40:34'),
(552, 'Frontend Developer', 'DHL Vietnam', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-10-19 15:59:18', '2024-10-19 15:59:18'),
(553, 'UX/UI Designer', 'Vinamilk', 'Hà Nội', 'pending', 'part-time', 9, '2024-05-02 05:22:16', '2024-05-02 05:22:16'),
(554, 'Scrum Master', 'BIDV', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-07-13 18:00:12', '2024-07-13 18:00:12'),
(555, 'Backend Developer', 'Techcombank', 'Hà Nội', 'interview', 'full-time', 9, '2024-12-26 13:59:27', '2024-12-26 13:59:27'),
(556, 'Cloud Architect', 'Masan Group', 'Quy Nhơn', 'interview', 'internship', 9, '2024-01-17 21:30:15', '2024-01-17 21:30:15'),
(557, 'Software Engineer', 'Masan Group', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-09-11 08:56:14', '2024-09-11 08:56:14'),
(558, 'Machine Learning Engineer', 'VNG Corporation', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-06-06 01:52:11', '2024-06-06 01:52:11'),
(559, 'Network Engineer', 'VinGroup', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-05-16 19:03:59', '2024-05-16 19:03:59'),
(560, 'Cloud Architect', 'FPT Software', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-06-08 11:37:12', '2024-06-08 11:37:12'),
(561, 'IT Project Manager', 'Masan Group', 'Huế', 'declined', 'part-time', 9, '2024-01-05 03:54:36', '2024-01-05 03:54:36'),
(562, 'AI Specialist', 'Shopee Vietnam', 'Quy Nhơn', 'interview', 'internship', 9, '2024-02-03 00:00:33', '2024-02-03 00:00:33'),
(563, 'Software Engineer', 'Samsung Vietnam', 'Quy Nhơn', 'interview', 'internship', 9, '2024-02-16 01:32:36', '2024-02-16 01:32:36'),
(564, 'IT Project Manager', 'DHL Vietnam', 'Hồ Chí Minh', 'declined', 'full-time', 9, '2024-09-01 05:48:35', '2024-09-01 05:48:35'),
(565, 'Backend Developer', 'Masan Group', 'Huế', 'pending', 'full-time', 9, '2024-06-12 17:55:11', '2024-06-12 17:55:11'),
(566, 'UX/UI Designer', 'DHL Vietnam', 'Huế', 'interview', 'internship', 9, '2024-03-26 06:49:02', '2024-03-26 06:49:02'),
(567, 'Database Administrator', 'Vinamilk', 'Quy Nhơn', 'declined', 'full-time', 9, '2024-07-28 11:47:52', '2024-07-28 11:47:52'),
(568, 'Mobile App Developer', 'Vietcombank', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-04-11 00:30:51', '2024-04-11 00:30:51'),
(569, 'IT Support Specialist', 'VNG Corporation', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-09-24 12:02:15', '2024-09-24 12:02:15'),
(570, 'Frontend Developer', 'VinGroup', 'Đà Nẵng', 'interview', 'internship', 9, '2024-06-06 21:02:09', '2024-06-06 21:02:09'),
(571, 'Cybersecurity Analyst', 'Shopee Vietnam', 'Hà Nội', 'pending', 'part-time', 9, '2024-11-27 13:22:08', '2024-11-27 13:22:08'),
(572, 'System Administrator', 'Novaland', 'Hà Nội', 'declined', 'full-time', 9, '2024-09-19 16:54:16', '2024-09-19 16:54:16'),
(573, 'QA Engineer', 'Novaland', 'Hà Nội', 'pending', 'part-time', 9, '2024-07-26 09:36:56', '2024-07-26 09:36:56'),
(574, 'Data Scientist', 'Samsung Vietnam', 'Hồ Chí Minh', 'pending', 'part-time', 9, '2024-06-06 20:42:16', '2024-06-06 20:42:16'),
(575, 'UX/UI Designer', 'BIDV', 'Quy Nhơn', 'interview', 'full-time', 9, '2024-05-13 07:49:56', '2024-05-13 07:49:56'),
(576, 'System Administrator', 'THACO (Trường Hải Auto)', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-01-11 10:35:07', '2024-01-11 10:35:07'),
(577, 'Frontend Developer', 'Novaland', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-04-23 00:16:16', '2024-04-23 00:16:16'),
(578, 'IT Support Specialist', 'THACO (Trường Hải Auto)', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-08-19 16:28:21', '2024-08-19 16:28:21'),
(579, 'AI Specialist', 'Tiki', 'Huế', 'declined', 'part-time', 9, '2024-02-11 22:11:36', '2024-02-11 22:11:36'),
(580, 'Cloud Architect', 'Techcombank', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-05-13 11:18:51', '2024-05-13 11:18:51'),
(581, 'Database Administrator', 'Tiki', 'Hà Nội', 'declined', 'part-time', 9, '2024-08-28 12:32:07', '2024-08-28 12:32:07'),
(582, 'Data Scientist', 'Hoa Phat Group', 'Hà Nội', 'interview', 'full-time', 9, '2024-01-22 02:36:17', '2024-01-22 02:36:17'),
(583, 'Network Engineer', 'Novaland', 'Hồ Chí Minh', 'declined', 'full-time', 9, '2024-06-06 02:19:57', '2024-06-06 02:19:57'),
(584, 'Mobile App Developer', 'VNPT', 'Huế', 'declined', 'full-time', 9, '2024-04-16 03:13:49', '2024-04-16 03:13:49'),
(585, 'DevOps Engineer', 'Vietcombank', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-10-04 21:13:11', '2024-10-04 21:13:11'),
(586, 'IT Support Specialist', 'Viettel', 'Đà Nẵng', 'interview', 'internship', 9, '2024-03-20 02:52:36', '2024-03-20 02:52:36'),
(587, 'Cloud Architect', 'VNG Corporation', 'Huế', 'interview', 'full-time', 9, '2024-09-30 06:24:23', '2024-09-30 06:24:23'),
(588, 'Frontend Developer', 'DHL Vietnam', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-07-26 15:27:51', '2024-07-26 15:27:51'),
(589, 'IT Project Manager', 'Unilever Vietnam', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-05-25 00:11:50', '2024-05-25 00:11:50'),
(590, 'Database Administrator', 'Techcombank', 'Hà Nội', 'interview', 'internship', 9, '2024-05-02 11:47:03', '2024-05-02 11:47:03'),
(591, 'Network Engineer', 'Vietcombank', 'Quy Nhơn', 'declined', 'full-time', 9, '2024-11-24 13:50:21', '2024-11-24 13:50:21'),
(592, 'Scrum Master', 'FPT Software', 'Quy Nhơn', 'interview', 'internship', 9, '2024-09-14 15:39:37', '2024-09-14 15:39:37'),
(593, 'Software Engineer', 'Vietcombank', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-06-19 20:32:46', '2024-06-19 20:32:46'),
(594, 'Business Analyst', 'Techcombank', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-11-14 11:27:29', '2024-11-14 11:27:29'),
(595, 'Network Engineer', 'Masan Group', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-01-22 21:29:39', '2024-01-22 21:29:39'),
(596, 'IT Project Manager', 'VinGroup', 'Hà Nội', 'interview', 'internship', 9, '2024-12-19 09:14:36', '2024-12-19 09:14:36'),
(597, 'Backend Developer', 'VNG Corporation', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-08-24 15:35:43', '2024-08-24 15:35:43'),
(598, 'Software Engineer', 'VinGroup', 'Huế', 'declined', 'part-time', 9, '2024-10-20 12:44:55', '2024-10-20 12:44:55'),
(599, 'Full Stack Developer', 'Vietcombank', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-04-22 19:39:16', '2024-04-22 19:39:16'),
(600, 'QA Engineer', 'Samsung Vietnam', 'Hà Nội', 'pending', 'part-time', 9, '2024-08-20 13:46:30', '2024-08-20 13:46:30'),
(601, 'QA Engineer', 'Vietcombank', 'Quy Nhơn', 'declined', 'full-time', 9, '2024-03-26 03:47:29', '2024-03-26 03:47:29'),
(602, 'Database Administrator', 'THACO (Trường Hải Auto)', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-06-26 13:08:26', '2024-06-26 13:08:26'),
(603, 'IT Support Specialist', 'Tiki', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-12-24 07:59:27', '2024-12-24 07:59:27'),
(604, 'IT Support Specialist', 'THACO (Trường Hải Auto)', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-06-28 09:20:14', '2024-06-28 09:20:14'),
(605, 'Machine Learning Engineer', 'Tiki', 'Hà Nội', 'pending', 'part-time', 9, '2024-08-28 21:44:57', '2024-08-28 21:44:57'),
(606, 'Scrum Master', 'Techcombank', 'Huế', 'declined', 'full-time', 9, '2024-02-27 21:54:17', '2024-02-27 21:54:17'),
(607, 'Cloud Architect', 'THACO (Trường Hải Auto)', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-03-10 15:46:07', '2024-03-10 15:46:07'),
(608, 'AI Specialist', 'VNPT', 'Đà Nẵng', 'interview', 'internship', 9, '2024-01-23 23:32:19', '2024-01-23 23:32:19'),
(609, 'System Administrator', 'THACO (Trường Hải Auto)', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-07-10 14:24:12', '2024-07-10 14:24:12'),
(610, 'IT Project Manager', 'THACO (Trường Hải Auto)', 'Huế', 'interview', 'full-time', 9, '2024-08-30 13:39:06', '2024-08-30 13:39:06'),
(611, 'Data Scientist', 'Vinamilk', 'Huế', 'declined', 'part-time', 9, '2024-06-27 19:36:13', '2024-06-27 19:36:13'),
(612, 'Database Administrator', 'Samsung Vietnam', 'Hà Nội', 'declined', 'part-time', 9, '2024-03-17 02:49:17', '2024-03-17 02:49:17'),
(613, 'Scrum Master', 'Shopee Vietnam', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-07-13 23:35:39', '2024-07-13 23:35:39'),
(614, 'Business Analyst', 'Novaland', 'Huế', 'interview', 'internship', 9, '2024-12-11 10:11:13', '2024-12-11 10:11:13'),
(615, 'Machine Learning Engineer', 'Unilever Vietnam', 'Hà Nội', 'pending', 'full-time', 9, '2024-02-23 08:31:50', '2024-02-23 08:31:50'),
(616, 'System Administrator', 'Techcombank', 'Hà Nội', 'declined', 'part-time', 9, '2024-05-13 10:32:01', '2024-05-13 10:32:01'),
(617, 'Frontend Developer', 'Unilever Vietnam', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-12-05 14:10:14', '2024-12-05 14:10:14'),
(618, 'Database Administrator', 'Techcombank', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-10-15 05:12:37', '2024-10-15 05:12:37'),
(619, 'Machine Learning Engineer', 'VNG Corporation', 'Hà Nội', 'pending', 'full-time', 9, '2024-03-06 20:01:44', '2024-03-06 20:01:44'),
(620, 'Full Stack Developer', 'Viettel', 'Quy Nhơn', 'interview', 'internship', 9, '2024-03-29 08:10:29', '2024-03-29 08:10:29'),
(621, 'Business Analyst', 'Tiki', 'Huế', 'declined', 'part-time', 9, '2024-08-18 06:42:11', '2024-08-18 06:42:11'),
(622, 'UX/UI Designer', 'DHL Vietnam', 'Huế', 'declined', 'part-time', 9, '2024-08-29 18:22:09', '2024-08-29 18:22:09'),
(623, 'Backend Developer', 'Unilever Vietnam', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-11-24 12:24:42', '2024-11-24 12:24:42'),
(624, 'Backend Developer', 'DHL Vietnam', 'Quy Nhơn', 'pending', 'full-time', 9, '2024-11-16 07:19:58', '2024-11-16 07:19:58'),
(625, 'IT Project Manager', 'Shopee Vietnam', 'Đà Nẵng', 'interview', 'internship', 9, '2024-09-07 22:06:40', '2024-09-07 22:06:40'),
(626, 'System Administrator', 'VinGroup', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-03-09 15:46:41', '2024-03-09 15:46:41'),
(627, 'Cybersecurity Analyst', 'Viettel', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-10-08 03:42:27', '2024-10-08 03:42:27'),
(628, 'DevOps Engineer', 'Unilever Vietnam', 'Hà Nội', 'pending', 'full-time', 9, '2024-04-03 18:40:33', '2024-04-03 18:40:33'),
(629, 'Backend Developer', 'VNG Corporation', 'Hà Nội', 'pending', 'part-time', 9, '2024-12-04 14:14:03', '2024-12-04 14:14:03'),
(630, 'Business Analyst', 'Novaland', 'Hồ Chí Minh', 'pending', 'full-time', 9, '2024-09-07 17:16:28', '2024-09-07 17:16:28'),
(631, 'Database Administrator', 'Unilever Vietnam', 'Hồ Chí Minh', 'declined', 'full-time', 9, '2024-08-07 07:32:02', '2024-08-07 07:32:02'),
(632, 'System Administrator', 'Viettel', 'Quy Nhơn', 'interview', 'full-time', 9, '2024-11-06 02:04:38', '2024-11-06 02:04:38'),
(633, 'System Administrator', 'Samsung Vietnam', 'Huế', 'declined', 'full-time', 9, '2024-12-01 02:06:02', '2024-12-01 02:06:02'),
(634, 'IT Project Manager', 'Viettel', 'Huế', 'interview', 'full-time', 9, '2024-02-07 03:18:42', '2024-02-07 03:18:42'),
(635, 'AI Specialist', 'BIDV', 'Hà Nội', 'declined', 'part-time', 9, '2024-08-27 15:21:52', '2024-08-27 15:21:52'),
(636, 'Frontend Developer', 'Vinamilk', 'Huế', 'interview', 'full-time', 9, '2024-05-19 10:21:07', '2024-05-19 10:21:07'),
(637, 'Business Analyst', 'VNG Corporation', 'Huế', 'interview', 'full-time', 9, '2024-02-09 03:04:53', '2024-02-09 03:04:53'),
(638, 'AI Specialist', 'Unilever Vietnam', 'Huế', 'interview', 'full-time', 9, '2024-08-04 23:53:07', '2024-08-04 23:53:07'),
(639, 'Machine Learning Engineer', 'Samsung Vietnam', 'Đà Nẵng', 'pending', 'part-time', 9, '2024-08-09 00:38:58', '2024-08-09 00:38:58'),
(640, 'UX/UI Designer', 'Vinamilk', 'Đà Nẵng', 'interview', 'internship', 9, '2024-11-16 21:13:46', '2024-11-16 21:13:46'),
(641, 'IT Project Manager', 'Unilever Vietnam', 'Hà Nội', 'pending', 'part-time', 9, '2024-07-13 04:52:53', '2024-07-13 04:52:53'),
(642, 'Full Stack Developer', 'Hoa Phat Group', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-02-18 17:17:42', '2024-02-18 17:17:42'),
(643, 'IT Support Specialist', 'Grab Vietnam', 'Đà Nẵng', 'interview', 'internship', 9, '2024-08-09 18:14:26', '2024-08-09 18:14:26'),
(644, 'Data Scientist', 'Samsung Vietnam', 'Quy Nhơn', 'pending', 'part-time', 9, '2024-03-06 08:39:43', '2024-03-06 08:39:43'),
(645, 'Backend Developer', 'Grab Vietnam', 'Đà Nẵng', 'pending', 'full-time', 9, '2024-09-19 10:22:15', '2024-09-19 10:22:15'),
(646, 'Machine Learning Engineer', 'Techcombank', 'Hồ Chí Minh', 'declined', 'full-time', 9, '2024-12-10 10:12:57', '2024-12-10 10:12:57'),
(647, 'Database Administrator', 'VNG Corporation', 'Hà Nội', 'interview', 'full-time', 9, '2024-08-25 01:16:32', '2024-08-25 01:16:32'),
(648, 'Database Administrator', 'Grab Vietnam', 'Hà Nội', 'declined', 'full-time', 9, '2024-04-13 23:22:41', '2024-04-13 23:22:41'),
(649, 'Backend Developer', 'Novaland', 'Hà Nội', 'declined', 'part-time', 9, '2024-08-01 11:17:00', '2024-08-01 11:17:00'),
(650, 'UX/UI Designer', 'Hoa Phat Group', 'Đà Nẵng', 'declined', 'part-time', 9, '2024-04-03 21:37:57', '2024-04-03 21:37:57'),
(651, 'Network Engineer', 'BIDV', 'Đà Nẵng', 'interview', 'internship', 9, '2024-09-10 13:32:51', '2024-09-10 13:32:51'),
(652, 'IT Support Specialist', 'VNPT', 'Huế', 'pending', 'part-time', 9, '2024-12-05 12:27:45', '2024-12-05 12:27:45'),
(653, 'AI Specialist', 'Shopee Vietnam', 'Hà Nội', 'pending', 'part-time', 9, '2024-09-18 18:44:00', '2024-09-18 18:44:00'),
(654, 'Cybersecurity Analyst', 'BIDV', 'Hà Nội', 'pending', 'part-time', 9, '2024-06-11 02:51:56', '2024-06-11 02:51:56'),
(655, 'Data Scientist', 'FPT Software', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-09-27 13:20:02', '2024-09-27 13:20:02'),
(656, 'Network Engineer', 'Hoa Phat Group', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-07-21 18:40:42', '2024-07-21 18:40:42'),
(657, 'IT Project Manager', 'Novaland', 'Hà Nội', 'pending', 'full-time', 9, '2024-01-18 05:14:26', '2024-01-18 05:14:26'),
(658, 'Cloud Architect', 'Viettel', 'Hồ Chí Minh', 'declined', 'part-time', 9, '2024-09-07 02:31:52', '2024-09-07 02:31:52'),
(659, 'Cloud Architect', 'Samsung Vietnam', 'Hồ Chí Minh', 'interview', 'full-time', 9, '2024-06-22 02:23:15', '2024-06-22 02:23:15'),
(660, 'Software Engineer', 'DHL Vietnam', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-05-12 07:57:50', '2024-05-12 07:57:50'),
(661, 'Cybersecurity Analyst', 'Masan Group', 'Hồ Chí Minh', 'interview', 'internship', 9, '2024-12-06 23:10:57', '2024-12-06 23:10:57'),
(662, 'System Administrator', 'Viettel', 'Hà Nội', 'declined', 'part-time', 9, '2024-01-24 23:43:34', '2024-01-24 23:43:34'),
(663, 'IT Support Specialist', 'Viettel', 'Quy Nhơn', 'interview', 'internship', 9, '2024-05-20 09:40:12', '2024-05-20 09:40:12'),
(664, 'UX/UI Designer', 'Viettel', 'Quy Nhơn', 'declined', 'part-time', 9, '2024-03-08 06:12:52', '2024-03-08 06:12:52'),
(665, 'Cybersecurity Analyst', 'Vietjet Air', 'Hà Nội', 'pending', 'full-time', 9, '2024-07-09 22:23:42', '2024-07-09 22:23:42'),
(666, 'Mobile App Developer', 'Samsung Vietnam', 'Đà Nẵng', 'interview', 'full-time', 9, '2024-04-08 16:43:58', '2024-04-08 16:43:58'),
(667, 'Cybersecurity Analyst', 'BIDV', 'Quy Nhơn', 'interview', 'internship', 9, '2024-04-04 07:06:53', '2024-04-04 07:06:53'),
(668, 'Data Scientist', 'Unilever Vietnam', 'Huế', 'interview', 'internship', 9, '2024-01-24 16:28:17', '2024-01-24 16:28:17'),
(669, 'UX/UI Designer', 'VNG Corporation', 'Hà Nội', 'declined', 'full-time', 9, '2024-01-14 07:25:59', '2024-01-14 07:25:59'),
(670, 'Database Administrator', 'Vinamilk', 'Hà Nội', 'pending', 'full-time', 9, '2024-05-14 23:12:06', '2024-05-14 23:12:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verified` bit(1) NOT NULL,
  `provider` tinyint(4) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `activeToken` varchar(255) DEFAULT NULL,
  `activeTokenExp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `forgotPasswordToken` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `location`, `email`, `password`, `verified`, `provider`, `avatar`, `activeToken`, `activeTokenExp`, `forgotPasswordToken`, `updated_at`, `created_at`) VALUES
(1, 'Loi Tran Van', 'Da Nang', 'test1@gmail.com', '$2a$10$lzGcOQtbimUQXVKtcH88/OGuzYho5LGbVrVMCvtQM0HGjTSOmu.xK', b'1', 0, NULL, 'BSTWTuGgrPjsAO11NLVxSHPeX6NZsuuBTcUCE4lFb9zhkfG1F0', '2024-07-25 22:00:31', NULL, '2024-07-06 17:00:00', '2024-07-06 17:00:00'),
(2, 'Loi Tran Van', 'Da Nang', 'test2@gmail.com', '$2a$10$gofIh.fmvudlX8bWzYVHcOnXiM1CRblKUeh3NYjo7.jZ2/L7AjmTe', b'1', 0, NULL, 'pO2Ch1f7QIL9LF1RZQh1GxDhf38fhWtjy1WN9cdainquOjtYEV', '2024-07-25 22:00:31', NULL, '2024-07-07 13:10:44', '2024-07-07 13:10:44'),
(3, 'Loi Tran Van', 'Da Nang', 'test3@gmail.com', '$2a$10$kZFZM1juiY.6ib.6mM4IguO1HjY7WimB/sPQi6N0hAr33uRV/4Ek.', b'0', 0, NULL, 'ouRERTz0xisQhOmaeC9ZIX5HDZ9w4WXqj9noCXJ4EP0qmqA6Bm', '2024-07-25 22:00:31', NULL, '2024-07-07 13:28:14', '2024-07-07 13:28:14'),
(9, 'Loi Tran Van', 'Da Nang', '123123@gmail.com', '$2b$10$wta5jdtxtXNxz82EkYzTDeAUxfpCzoEJNdfh4ySG4RLFQ0v7cXWke', b'1', 0, '9_1723127582059.png', '84c00e456f591df6043faaa8f6938da298101ff3e6463b5d2e30e1de2aa9b395bd025a5df27c37e5b5127ae0b80e453d70cccd029cd83d5d03c2881612ecb55b9a72ceddb700', '2024-07-29 00:26:37', '', '2024-07-28 16:26:37', '2024-07-28 16:26:37'),
(10, 'asdasd', 'asdasd', 'asdasd@gmail.com', '$2b$10$AiVq/e8Ij2I1RpZALCnlV.ZtlvxLsrlyr7CGD8kNZMGS3/tZ90Pam', b'0', 0, NULL, 'd1ea2180a4180827c43a32b8199a91c3f66b4506acc2a37fdbe339bd09439d450cbcfe6140c7d3665d81ef769a77ef8889962204129fc88c9aabeb54da0df73003a12a0940bb', '2024-08-04 18:06:32', '', '2024-08-04 10:06:32', '2024-08-04 10:06:32'),
(11, '123123', '123123', '1231231@gmail.com', '$2b$10$wta5jdtxtXNxz82EkYzTDeAUxfpCzoEJNdfh4ySG4RLFQ0v7cXWke', b'0', 0, '', '841f7a7ae7f3c8f7f18fdad826b35e7d3a6dea291f77fedcc1d2ed02983e2a9a7eae20b368d8bd962c2ccd1a04c635d37a3151132cee8c5de8f9a9b8b7953256a82c3b50987d', '2024-08-20 23:00:45', '', '2024-08-20 15:00:45', '2024-08-20 15:00:45');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `roles` enum('ADMIN','USER') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `roles`) VALUES
(1, 'USER'),
(1, 'ADMIN'),
(2, 'USER'),
(3, 'USER'),
(9, 'ADMIN'),
(9, 'USER'),
(10, 'USER'),
(11, 'USER');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `FKhfh9dx7w3ubf1co1vdev94g3f` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=673;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


```

2. Setup and run project

```bash
# Clone this repository
$ git clone https://github.com/loiloi123loi/NodeJS_MVC.git

# Go into the repository
$ cd NodeJS_MVC

# Install dependencies
$ npm install    # or use: npm i

# Run the app in development
$ npm run dev

# Build the app
$ npm run build

# Run the app (required built)
$ npm start
```

## License

MIT

---

> Email [loivantran10012002@gmail.com]() &nbsp;&middot;&nbsp;
> GitHub [@loiloi123loi](https://github.com/loiloi123loi) &nbsp;&middot;&nbsp;

