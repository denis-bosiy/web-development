SELECT student_id, name, age FROM University.Students 
  LEFT JOIN University.Groups ON University.Students.group_id = University.Groups.group_id 
  WHERE University.Groups.faculty_id = 1;
