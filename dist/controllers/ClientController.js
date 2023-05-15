"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Client = require('../models/Client'); var _Client2 = _interopRequireDefault(_Client);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class ClientController {
  async index(req, res) {
    const clients = await _Client2.default.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
      include: {
        model: _Photo2.default,
        attributes: ['url', 'filename'],
      },
    });
    return res.send(clients);
  }

  async store(req, res) {
    try {
      const newClient = await _Client2.default.create(req.body);
      return res.json(newClient);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is required for the request.'],
        });
      }

      const client = await _Client2.default.findByPk(id, {
        attributes: ['id', 'first_name', 'last_name', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!client) {
        return res.status(400).json({
          errors: ['Client does not exist.'],
        });
      }

      return res.json(client);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is required for the request.'],
        });
      }

      const client = await _Client2.default.findByPk(id);

      if (!client) {
        return res.status(400).json({
          errors: ['Client does not exist.'],
        });
      }

      const updatedClient = await client.update(req.body);
      return res.json(updatedClient);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is required for the request.'],
        });
      }

      const client = await _Client2.default.findByPk(id);

      if (!client) {
        return res.status(400).json({
          errors: ['Client does not exist.'],
        });
      }

      await client.destroy();
      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ClientController();
