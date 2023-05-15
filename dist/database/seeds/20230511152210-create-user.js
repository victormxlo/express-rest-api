"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ena',
          email: 'ena@email.com',
          password_hash: await bcryptjs.hash('111111', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Duo',
          email: 'duo@email.com',
          password_hash: await bcryptjs.hash('222222', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tria',
          email: 'tria@email.com',
          password_hash: await bcryptjs.hash('333333', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
