-- get all tasks related to a project
SELECT T.description, 
       T.notes, 
       T.completed FROM tasks AS T
  JOIN
  projects AS P ON T.project_id = P.id
  WHERE P.id = 1
;

-- test seed
SELECT * FROM projects;