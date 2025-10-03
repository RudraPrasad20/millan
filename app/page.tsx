import Footer from "@/components/footer";
import { db } from "@/lib/db";


export default async function Home() {
  const res = await db.createEntity.findMany();
// transaction.serialize().length; 
  return (
    <div>
      hello dear:
      <pre>{JSON.stringify(res, null, 2)}</pre>
      <Footer/>
    </div>
  );
}
