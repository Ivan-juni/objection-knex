const User = require('../db/models/user')

class UserController {
  async getById(req, res, next) {
    try {
      const { id } = req.params
      const user = await User.query().findById(id).withGraphFetched('channel')
      res.json(user)
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Can't find an user" })
    }
  }
}
module.exports = new UserController()
