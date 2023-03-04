/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 12;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? "postgresql://test_iser:mypassword@localhost/bankly_test"
    : "postgresql://test_iser:mypassword@localhost/bankly";

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};