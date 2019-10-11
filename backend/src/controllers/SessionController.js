// index = Retornar listagem de sessões
// show = Listar unica sessao
// store = Criar uma sessao
// update = Alterar uma sessao
// destroy = Remover uma sessao

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email: email });

    if (!user) {
      user = await User.create({ email });
    }
    //const user = await User.create({ email });

    return res.json(user);
  }
};