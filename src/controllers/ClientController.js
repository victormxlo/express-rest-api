import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new ClientController();
