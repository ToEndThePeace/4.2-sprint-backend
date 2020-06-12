-- Get all info for a project
SELECT * FROM projects AS P
  JOIN tasks AS T on T.project_id = P.id
  JOIN project_resources AS X ON X.project_id = P.id
  JOIN resources AS R ON R.id = X.resource_id
  WHERE P.id = 1

;

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