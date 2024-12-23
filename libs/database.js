import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
<<<<<<< HEAD
=======
    ssl: {
        rejectUnauthorized: false, // Disable strict SSL validation
    },
>>>>>>> 9c5e4f4 (test)
});

export default pool;

    