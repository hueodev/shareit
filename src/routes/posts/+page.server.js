import { prisma } from "$lib/server/db";

export async function load() {
  const posts = await prisma.confessions.findMany({
    select: {
      user: true,
      title: true,
      text: true
    },
  })

  return { posts }
}