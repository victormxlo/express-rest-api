import Client from '../models/Client';

class HomeController {
  async index(req, res) {
    const newClient = await Client.create({
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'janedoe@email.com',
      age: 19,
      weight: 60.5,
      height: 1.65,
    });
    res.json(newClient);
  }
}

export default new HomeController();
