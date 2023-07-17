'use strict';

const bcrypt = require('bcryptjs'); //hashing passwords

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users",[
      {
        username: 'Adefela Fakorode',
        email: 'adefakorode@gmail.com',
        password: await bcrypt.hash('password123', 10), 
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      username: 'Zendaya',
      email: 'zendaya@gmail.com',
      password: await bcrypt.hash('password123', 10), 
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ]);

  const users = await queryInterface.sequelize.query(`SELECT id FROM users`);
  const uId = users[0][0].id;

  await queryInterface.bulkInsert('posts', [
    {
      title: 'Learn React.js',
      content: 'This post teaches you React.js...', 
      userid: uId,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Learn how to ride a bike',
      content: 'This post you how to ride bike...',
      userid: uId,
      createdAt: new Date(),
      updatedAt: new Date() 
    }
  ]);

  const posts = await queryInterface.sequelize.query(`SELECT id FROM posts`);
  const pId = posts[0][0].id;

  await queryInterface.bulkInsert('comments', [
    {
      content: 'I HATE REACT!',
      userid: uId,
      postid: pId,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      body: 'Tbh bro...this sucked...',
      userid: uId,
      postid: pId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('posts', null, {});
    await queryInterface.bulkDelete('comments', null, {});
  }
};
