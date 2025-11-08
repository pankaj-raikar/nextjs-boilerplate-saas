import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
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
    getUser:protectedProcedure.query(({ctx})=>{
        return db.user.findUnique({
            where:{
                id:ctx.auth.user.id
            }
        })
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;