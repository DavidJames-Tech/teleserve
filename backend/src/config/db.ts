import { createPool } from "mysql2";

export default createPool({
    host: "localhost",
    database: "teleserve",
    user: "teleserve",
    password: "@teleserve",
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 5
});