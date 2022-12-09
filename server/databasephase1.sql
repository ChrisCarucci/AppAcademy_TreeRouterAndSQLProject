
CREATE TABLE trees (
    id integer primary key autoincrement,
    tree varchar(32),
    location varchar(64),
    height_ft decimal(3,1),
    ground_circumference_ft decimal(3,1)
);

insert into trees (tree, location, height_ft, ground_circumference_ft)
values
('General Sherman', 'Sequoia National Park', 274.9, 102.6),
('General Gran', 'Kings Canyon National Park', 268.1, 107.5),
('President', 'Sequoia National Park', 240.9, 93.0),
('Lincoln', 'Sequoia National Park', 255.8, 98.3),
('Stagg', 'Private Land', 243.0, 109.0);
