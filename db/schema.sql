USE devour;

CREATE TABLE tacos (

	ID int auto_increment NOT NULL,
    taco_name varchar(100) NOT NULL,
    devoured boolean,
    PRIMARY KEY (ID)
)
select * from tacos