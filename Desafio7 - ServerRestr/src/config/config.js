import dotenv from 'dotenv';

dotenv.config({
  path: `./.env`
});

export default {
    PORT: process.env.PORT,
    MONGO_USERNAME: process.env.MONGO_URL,
    MONGO_PASS: process.env.MONGO_PASS,
    MONGO_DBNAME: process.env.MONGO_DBNAME,
}