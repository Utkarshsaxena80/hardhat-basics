require("dotenv").config();

async function main() {
  const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

  console.log("SEPOLIA_RPC_URL:", SEPOLIA_RPC_URL);
  
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
