"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-background border-b border-border px-6 py-4 flex justify-between">
      <Link href={"/"} className="text-4xl font-extrabold text-foreground">Mitte</Link>
      <WalletMultiButton />
    </nav>
  );
};

export default Navbar;