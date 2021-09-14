----- NO. 1 -----
CREATE TABLE projects (
	proj_id SERIAL,
	proj_name VARCHAR(100),
	proj_createdon DATE,
	proj_duedate DATE,
	proj_cust_name VARCHAR(100),
	CONSTRAINT proj_id_pk PRIMARY KEY (proj_id)
);

CREATE TABLE project_assignment (
	pras_proj_id INTEGER ,
	pras_employee_id INTEGER,
	pras_startdate DATE,
	pras_enddate DATE,
	pras_status VARCHAR(15),
	CONSTRAINT pras_proj_employee_pk PRIMARY KEY (pras_proj_id , pras_employee_id),
	CONSTRAINT pras_proj_id_fk FOREIGN KEY (pras_proj_id) REFERENCES projects(proj_id),
	CONSTRAINT pras_employee_id_fk FOREIGN KEY (pras_employee_id) REFERENCES employees(employee_id)
);

----- NO. 2 -----
ALTER TABLE projects
ADD COLUMN proj_description VARCHAR(255),
ADD COLUMN proj_status VARCHAR(15),
ADD COLUMN proj_amount INTEGER;

----- NO. 3 -----
ALTER TABLE projects
ADD COLUMN proj_account_mgr INTEGER;

ALTER TABLE projects
ADD CONSTRAINT proj_account_mgr_fk FOREIGN KEY (proj_account_mgr) REFERENCES employees(employee_id); 

----- NO. 4 -----
INSERT INTO projects(proj_name, proj_createdon, proj_duedate, proj_cust_name, proj_status, proj_amount, proj_account_mgr)
VALUES ('E-COMMERCE', now(), now() + interval'30 day', 'TELKOMSEL', 'INPROGRESS', 50000, 100);
INSERT INTO projects(proj_name, proj_createdon, proj_duedate, proj_cust_name, proj_status, proj_amount, proj_account_mgr)
VALUES ('TRAVELOKA', now(), now() + interval'30 day', 'XL', 'INPROGRESS', 45000, 100);
INSERT INTO projects(proj_name, proj_createdon, proj_duedate, proj_cust_name, proj_status, proj_amount, proj_account_mgr)
VALUES ('TIKET.COM', now(), now() + interval'30 day', 'INDOSAT', 'INPROGRESS', 35000, 100);

----- NO. 5 -----
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 104, now(), 'ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (1, 105, now(), now() + interval'3 day', 'COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 106, now(), 'INPROGRESS');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (2, 104, now(), 'ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 105, now(), now() + interval'3 day', 'COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 106, now(), now() + interval'3 day', 'INPROGRESS');

----- NO. 6 -----
SELECT * FROM employees 
WHERE employee_id 
IN ( 
	SELECT pras_employee_id FROM project_assignment
	WHERE pras_status = 'COMPLETED'
);

