CREATE TABLE University.students (
  student_id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(256) NOT NULL,
  age TINYINT UNSIGNED NULL,
  group_id INT NOT NULL,
  PRIMARY KEY (student_id)
) 
  DEFAULT CHARACTER SET utf8mb4
  ENGINE = InnoDB
;

  