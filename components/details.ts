import { db } from "@/lib/db";

export type Details = {
  id: string;
  name: string;
  email: string;
  wallet: string;
  amount: string;
  details: string | null;
  date: Date;
};

export const GetData = async (): Promise<Details[]> => {
  const rows = await db.createEntity.findMany();
  return rows.map(r => ({
    id: r.id,
    name: r.name,
    email: r.email,
    wallet: r.wallet,
    amount: r.amount.toString(),
    details: r.details,
    date: r.createdAt,
  }));
};
