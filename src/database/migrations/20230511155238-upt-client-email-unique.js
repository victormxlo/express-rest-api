module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'clients',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() {},
};
