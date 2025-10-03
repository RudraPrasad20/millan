// lib/bulkPayer.ts
import { Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export async function sendBulkSOL(
  connection: any,
  publicKey: PublicKey,
  sendTransaction: any
) {
  const res = await fetch("/api/recipients");
  const recipients: { wallet: string; amount: number }[] = await res.json();

  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  const tx = new Transaction({ feePayer: publicKey, blockhash, lastValidBlockHeight });

  recipients.forEach((r) =>
    tx.add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(r.wallet),
        lamports: Math.round(r.amount * LAMPORTS_PER_SOL),
      })
    )
  );

  const sig = await sendTransaction(tx, connection);
  await connection.confirmTransaction({ signature: sig, blockhash, lastValidBlockHeight });
  return sig;
}
