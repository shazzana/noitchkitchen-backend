const userDAO = require('../dao/user-dao');

class UserService {
    createUser(userDTO) {
        const { firstName, lastName, email, password } = userDTO
        return userDAO.createUser(firstName, lastName, email, password);
    }
}

module.exports = new UserService;