CREATE TABLE University.Groups 
(
  group_id INT AUTO_INCREMENT NOT NULL,
  faculty_id INT NOT NULL,
  PRIMARY KEY (group_id)
)
  DEFAULT CHARACTER SET utf8mb4
  ENGINE = InnoDB
;