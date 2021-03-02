CREATE TABLE `tbl_users` (
  `id_users` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `created_at` date
);

CREATE TABLE `tbl_tasks` (
  `id_tasks` int PRIMARY KEY AUTO_INCREMENT,
  `users_id` int,
  `Description` varchar(100),
  `tasks_status` varchar(100),
  `created_at` date
);

ALTER TABLE `tbl_tasks` ADD FOREIGN KEY (`users_id`) REFERENCES `tbl_users` (`id_users`);
