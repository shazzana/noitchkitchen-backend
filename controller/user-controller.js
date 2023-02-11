const userService = require('../service/user-service');

class UserController {
    async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('Something went wrong');
        }
    }
    async findAllUsers(req, res) {
        try {
            const users = await userService.findAllUsers(req.body);
            res.status(201).json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json('Something went wrong');
        }
    }

    async findOneUserById(req, res) {
        try {
            const user = await userService.findOneUserById(req.params.id);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json('User not found');
        }
    }
}

module.exports = new UserController();