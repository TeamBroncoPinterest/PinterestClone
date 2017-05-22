create table userlogin (
    id serial,
    username varchar(50) primary key not null,
    password varchar(50) not null

);


create table users (
    id serial primary key, 
    username varchar(50),
    foreign key (username) references userlogin(username), 
    first varchar(50), 
    last varchar(50), 
    bio varchar(250), 
    pincount integer, 
    boardcount integer,
    img varchar(100) default './pics/blank-profile.png'
);

create table boards (
    id serial primary key,
    user_id integer,
    foreign key (user_id) references users(id),
    name varchar(50),
    desc varchar(100),
    pincount integer
);

create table pins (
    id serial primary key,
    link varchar(100),
    pinterest_id varchar (50),
    metadata varchar(3000),
    note varchar(100),
    counts varchar(100),
    imageurl varchar(250)
);

create table boards_pins (
    id serial primary key,
    pin_id integer,
    foreign key (pin_id) references pins(id),
    board_id integer,
    foreign key (board_id) references boards(id)
);





