'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "12345678",
        phone: "549503"
      },
      {
        name: "adam",
        email: "adam@admin.com",
        password: "87654321",
        phone: "923098776"
      },
      {
        name: "user",
        email: "user@yahoo.com",
        password: "18273645",
        phone: "4938702"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
