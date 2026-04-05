


import db from "../config/db.js"
const CreateAuthTable = async (req, res) => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mobile VARCHAR(100) UNIQUE NOT NULL ,
    address varchar(100),
    password VARCHAR(100) NOT NULL,
    userType Enum('owner','tenant'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;
    try {
        await db.query(query);
    }
    catch (err) {
        console.log("Error creating users table:", err);

    }

};





//find user for login
export const findUserByEmail = ((email, callback) => {

    db.query(query, [email], callback);
});


export default CreateAuthTable;
