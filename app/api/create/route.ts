import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await db.createEntity.create({
      data: {
        name: body.name,
        email: body.email,
        wallet: body.wallet,
        amount: body.amount,
        details: body.details,
      },
    });

    return Response.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json("catch error", { status: 400 });
  }
}