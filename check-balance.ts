/** check new wallet n added some sol  
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("T8o9rBFPYBaxfvW6SpB8kvr63DvCcx3MXoVNwfaKNGq");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
); **/


/** 
 * checked random wallet balance on devnet
 * 
 * import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);**/


/** checked balance for mainnet, checkecked if the code would recongnize a wrong sol address and a devnet with sol balance showed zero */

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

async function checkBalance(publicKeyString) {
  try {
    const publicKey = new PublicKey(publicKeyString);
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
      `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
    );
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

checkBalance(suppliedPublicKey);
