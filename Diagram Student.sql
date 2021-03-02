CREATE TABLE `tbl_student` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `jk` char,
  `birthday` date
);

CREATE TABLE `tbl_tasks` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `student_id` int,
  `tittle` varchar(100),
  `submit_date` date
);

ALTER TABLE `tbl_tasks` ADD FOREIGN KEY (`student_id`) REFERENCES `tbl_student` (`id`);
