import { db } from "@/lib/prisma";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  try {
    const { slug } = req.query;
    console.log(slug);

    if (slug && typeof slug === "string") {
      const { views } = await db.views.upsert({
        where: { slug: slug },
        update: { views: { increment: 1 } },
        create: { slug, views: 1 },
        select: { views: true },
      });
      return new Response(JSON.stringify({ views }), { status: 200 });
    }
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
