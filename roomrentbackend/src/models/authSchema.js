


import db from "../config/db.js"
export const CreateAuthTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mobile INT UNIQUE NOT NULL ,
    address varchar(100),
    password VARCHAR(100) NOT NULL,
    userType Enum('owner','tenant'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.log("table creation error:", err);
        }
        else {
            console.log("users table are ready");
        }
    });
};


/*


//find user for login
export const findUserByEmail = ((email, callback) => {

    db.query(query, [email], callback);
});
*/

export default CreateAuthTable;
