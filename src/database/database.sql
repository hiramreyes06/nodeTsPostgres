CREATE DATABASE pracica;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name,email)
VALUES('pendejo','asdasd@asdasd.com'),
('idiota', 'xcvxcvxvc@xcv.com');

