INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'mcoder@lavishweb.com', 'Vandreh', 'Coder');

INSERT INTO blog_categories (label, description)
VALUES
('JavaScript', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('React', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Vue', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Tech Culture', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Tech News', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Brain Health', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Cloud Services', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!');

INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES 
(1, 'Can anyone code?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'anyone_can_code.webp', 1,'Programming', 'Everyone', 'anyone_can_code.webp','Image'),
(1, 'Using AWS S3 for storing blog images', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'cloud_storage.webp', 1, 'Functional Programming', 'ES6', 'cloud_storage.webp','Image'),
(1, 'Popular Programming Languages in 2020', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'programming_languages.webp', 1, 'Functional Programming', 'ES6', 'programming_languages.webp','Image'),
(1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'neuron.webp', 1, 'Functional Programming', 'ES6', 'neuron.webp','Image'),
(1, 'Software Engineer Salary in 2020', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'money.webp', 1, 'Functional Programming', 'ES6', 'money.webp','Image'),
(1, 'GraphQL vs REST', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'apollo_graphql.webp', 1, 'Functional Programming', 'ES6', 'apollo_graphql.webp','Image'),
(1, 'A Day in the Life of a Programmer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'puzzled_programmer.webp', 1, 'Functional Programming', 'ES6', 'puzzled_programmer.webp','Image'),
(1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'neuron.webp', 1, 'Functional Programming', 'ES6', 'neuron.webp','Image'),
(1, 'React Vs Vue', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'logo.webp', 1, 'Functional Programming', 'ES6', 'logo.webp','Image');

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Totally broooo!'),
(1, 1, 'Friggin owrsome');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
(1,4),
(1,5),
(2,7),
(3,4),
(3,5),
(4,6),
(5,4),
(6,1),
(6,2),
(7,4),
(8,6),
(9,2),
(9,3);