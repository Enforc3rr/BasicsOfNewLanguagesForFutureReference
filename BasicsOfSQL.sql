-- Based Upon Fireship's Youtube Video.
CREATE DATABASE airbnb;
USE airbnb;

CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE, -- value is often set to 255 bcuz that's the max amount of character that that be counted by 8 bit number.
    bio TEXT ,
    country VARCHAR(2)
);
INSERT INTO Users(email , bio , country) 
VALUES 
('learning@sql.com','Learning SQL from Fireship','91'),
('learning@AWS.com','Learning AWS from Freecodecamp','91'),
('learning@Others.com','Learning Ohters from Youtube','1');

SELECT * FROM Users;
SELECT email , id , country FROM Users
WHERE country = "91"
AND id > 1 -- We can use OR as well
ORDER BY id DESC  -- For Ascending it's ASC 
LIMIT 2; -- TO Limit the number of Values returned.

SELECT email , id FROM Users
WHERE email LIKE "l%" -- it will look up for emails starting with "l"
ORDER BY id DESC  -- For Ascending it's ASC 
LIMIT 2; -- TO Limit the number of Values returned.

-- LIKE becomes slower as our data size increases , so we need something like INDEX which will allow us to look up data quickly.
-- but it makes data writing slower and consumes extra memory

CREATE INDEX email_index ON Users(email);

CREATE TABLE Rooms(
id INT AUTO_INCREMENT ,
street VARCHAR(255),
owner_id INT NOT NULL ,
PRIMARY KEY (id) ,
FOREIGN KEY(owner_id) REFERENCES Users(id) -- when we setup a reference like it , it tells database not to del anything that holds relation like this
);

INSERT INTO Rooms ( owner_id , street) 
VALUES 
(1,"San Diego"),
(1,"New York"),
(1,"Chicago"),
(1,"Eguene");

-- Relational Query Using JOIN
-- There are four different Types of Joins 1) Inner ( union ) 2) Left 3) Right 4) Outer

SELECT * FROM Users -- Here we are making Users Table LEFT
LEFT JOIN Rooms  -- We are making it as Right.
ON Rooms.owner_id = Users.id;

CREATE TABLE Bookings(
id INT AUTO_INCREMENT,
guest_id INT NOT NULL ,
room_id INT NOT NULL,
check_in DATETIME,
PRIMARY KEY(id),
FOREIGN KEY (guest_id) REFERENCES Users(id),
FOREIGN KEY (room_id) REFERENCES Rooms(id)
);

SELECT 
room_id ,
guest_id ,
email , 
bio 
FROM Bookings 
INNER JOIN Users ON Users.id = guest_id 
WHERE guest_id = 2 ;





