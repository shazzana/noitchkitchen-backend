const db = require('../db/db');

class UserDAO {
    async createUser(firstName, lastName, email, password) {
        const [id] = await db('users')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email,
                password
            })
            .returning('id');
        
        return id;
    }

    async findAllUsers() {
        return db('users');
    }

    async findOneUserById(id) {
        return db('users')
        .where({ id })
    }

    // async deleteOneUser() {
        
    // }
}

module.exports = new UserDAO();