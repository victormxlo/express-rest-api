import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Client from '../models/Client';
import User from '../models/User';

const models = [Client, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
