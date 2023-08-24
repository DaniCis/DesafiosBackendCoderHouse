import dotenv from 'dotenv';

dotenv.config({
  path: `./.env`
});

export default {
  PORT: process.env.PORT,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASS: process.env.MONGO_PASS,
  MONGO_DBNAME: process.env.MONGO_DBNAME,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  ADMIN_PASS: process.env.ADMIN_PASS,
  GIT_CLIENT_ID: process.env.GIT_CLIENT_ID,
  GIT_CLIENT_SECRET:process.env.GIT_CLIENT_SECRET
}