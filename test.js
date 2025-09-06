require("dotenv").config(); // loads .env file
const { checkEnv } = require("./dist/index");

// Run validation
try {
  checkEnv(["DB_HOST", "DB_USER", "DB_PASS"]);
  console.log("✅ Environment check passed. All required vars are set.");
} catch (err) {
  console.error(err.message);
}
