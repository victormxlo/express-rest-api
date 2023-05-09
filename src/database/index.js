import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Client from '../models/Client';

const models = [Client];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
