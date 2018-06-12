drop DATABASE if EXISTS devour;
create DATABASE devour;
USE devour;

CREATE TABLE tacos (

	ID int auto_increment NOT NULL,
    taco_name varchar(100) NOT NULL,
    devoured boolean NOT NULL,
    PRIMARY KEY (ID)
)
