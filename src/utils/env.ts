import dotenv from 'dotenv';
dotenv.config();

export default {
  mailProvider: {
    host: process.env.MAIL_PROVIDER_HOST,
    port: process.env.MAIL_PROVIDER_PORT,
    user: process.env.MAIL_PROVIDER_AUTH_USER,
    pass: process.env.MAIL_PROVIDER_AUTH_PASS,
  }
}