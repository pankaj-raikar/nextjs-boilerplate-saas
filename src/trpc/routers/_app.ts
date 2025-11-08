import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import db from '@/lib/db';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
    getUser:baseProcedure.query(async()=>{
        return await db.user.findFirst()
    })
});
// export type definition of API
export type AppRouter = typeof appRouter;