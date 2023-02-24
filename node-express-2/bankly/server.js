/** Server for bank.ly. */
const { Port } = require( './config' )


const app = require("./app");

app.listen( Port || 3000, () =>
{
  console.log(`Server starting on port 3000`);
});
