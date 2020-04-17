CREATE SCHEMA usersAndRoles;
USE usersAndRoles;


CREATE TABLE IF NOT EXISTS users 
(
	id INT(10) NOT NULL UNIQUE AUTO_INCREMENT,
	username VARCHAR(64),
	email VARCHAR(255) NOT NULL UNIQUE,
	firstName VARCHAR(64),
	lastName VARCHAR(64),
    	userRole ENUM('Admin', 'Professor', 'Student') NOT NULL DEFAULT 'Student',
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS team
(
	id INT(14) NOT NULL UNIQUE AUTO_INCREMENT,
    	teamName VARCHAR(128) DEFAULT NULL,
    	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS teamMember 
(
	teamMemberID INT(14) NOT NULL UNIQUE AUTO_INCREMENT,
	userID INT(10) NOT NULL,
    	teamID INT(14) NOT NULL,
    	teamRole ENUM('Team Lead', 'Team Member') NOT NULL DEFAULT 'Team Member',
    	PRIMARY KEY(teamMemberID),
    	FOREIGN KEY(userID)
			REFERENCES users(id)
		ON DELETE CASCADE,
	FOREIGN KEY(teamID)
			REFERENCES team(id)
        	ON DELETE CASCADE
);
