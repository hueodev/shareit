import { prisma } from '$lib/server/db';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const user = formData.get("user");
    const title = formData.get("title");
    const text = formData.get("text");

    if ( typeof title !== 'string' ||typeof text !== 'string' || !title || !text ) {
      return fail(400, { invalid: true })
    }
  
    await prisma.confessions.create({
      data: {
        user: user || "Anonymous User",
        title,
        text,
      }, 
    });

    return { success: true };
    // throw redirect(303, "/posts")
  },
}