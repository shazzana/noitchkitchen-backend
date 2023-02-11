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
}

module.exports = new UserDAO();