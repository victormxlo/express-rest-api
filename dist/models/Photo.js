"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The field cannot be empty.',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The field cannot be empty.',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `http://35.198.22.40:81/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
  }
} exports.default = Photo;
