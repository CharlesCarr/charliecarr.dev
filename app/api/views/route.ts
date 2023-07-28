import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const views = await db.views.findMany();
    return new Response(JSON.stringify(views));
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
}
