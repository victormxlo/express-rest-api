import Sequelize, { Model } from 'sequelize';

export default class Client extends Model {
  static init(sequelize) {
    super.init({
      first_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The first name must be between 1 and 255 characters long.',
          },
        },
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The last name must be between 1 and 255 characters long.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already exists.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid e-mail.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'The age must be an integer value.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The weigth must be a float value.',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The height must be a float value.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
