import Client from '../models/Client';
import Photo from '../models/Photo';

class ClientController {
  async index(req, res) {
    const clients = await Client.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
    return res.send(clients);
  }

  async store(req, res) {
    try {
      const newClient = await Client.create(req.body);
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

      const client = await Client.findByPk(id, {
        attributes: ['id', 'first_name', 'last_name', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
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

      const client = await Client.findByPk(id);

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

      const client = await Client.findByPk(id);

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

export default new ClientController();
