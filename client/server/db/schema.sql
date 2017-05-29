CREATE TABLE userlogin (
    id serial primary key,
    username varchar(50) not null,
    password varchar(50) not null
);

CREATE TABLE users (
    id serial primary key,
    user_id integer references userlogin(id),
    first varchar(50),
    last varchar(50),
    bio varchar(250) default 'I love pinterest.',
    pincount integer,
    boardcount integer,
    img varchar(100) default  'https://www.westdean.org.uk/images/profile-placeholder.jpg',
    boards JSON default '[]'
);

CREATE TABLE boards (
    id serial primary key,
    user_id int references userlogin(id),
    name varchar(50),
    description varchar(100),
    pins JSON,
    pincount integer
);

CREATE TABLE pins (
    id serial primary key,
    user_id int,
    creator JSON,
    image JSON,
    original_link text,
    note text,
    board JSON,
    metadata JSON
);

INSERT INTO userlogin (username, password)
VALUES ('kaleigh', 'password');

INSERT INTO pins (link, pinterest_id, metadata, counts, imageurl)
VALUES ('http://www.wifemamafoodie.com/berry-brownie-pizza/', 12345, 'asdasjdklf;alskdjfl', 1, 'https://i1.wp.com/www.wifemamafoodie.com/wp-content/uploads/2016/06/brownie-pizza-with-fruit-and-flowers-1.jpg?resize=683%2C1024');

INSERT INTO users (user_id, first, last, pincount, boardcount)
VALUES (1, 'Kaleigh', 'Niemela', 1, 1);

INSERT INTO boards (user_id, name, description, pincount)
VALUES (1, 'Food', 'Food I want to make', 1);
