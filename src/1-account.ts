import dotenv from "dotenv";
import { Hex, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { polygonMumbai } from "viem/chains";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(privateKey as Hex);

console.log(account);

console.log(account.address);

// IIFE
(async () => {
    const client = createPublicClient({
        chain: polygonMumbai,
        transport: http(process.env.API_URL)
    });

    const balance = await client.getBalance({
        address: account.address,
    });

    console.log(balance);

    const nonce = await client.getTransactionCount({
        address: account.address
    });

    console.log(nonce);

})();