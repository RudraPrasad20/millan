import { db } from "@/lib/db";

export async function GET(req: Request) {
    try {
    const res = await db.createEntity.findMany({
        select:{wallet: true, amount: true}
        
    })
    return Response.json(res)
    } catch (error) {
console.log(error)
    }
    
    
}