SELECT student_id, University.Groups.group_id, faculty_id FROM University.Students
  LEFT JOIN University.Groups ON University.Students.group_id = University.Groups.group_id 
  WHERE student_id = 4;