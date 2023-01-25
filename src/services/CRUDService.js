const connection = require("../config/database")

const getAllUsers = async () => {
    const [results, fields] = await connection.execute(`SELECT * FROM Users`);
    return results;
}

const getUserById = async (userId) => {
    const [results, fields] = await connection.execute(`
    SELECT * FROM Users WHERE id = ?;`, [userId]);

    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const updateUserById = async (name, email, city, id) => {
    const [results, fields] = await connection.execute(`
    UPDATE Users
    SET name = ?, email= ?, city = ?
    WHERE id = ?;`, [name, email, city, id]);
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}