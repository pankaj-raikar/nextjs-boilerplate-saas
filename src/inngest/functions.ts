import { inngest } from "./client";
import db from "@/lib/db";
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "4s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const demoGetCurrentUser = inngest.createFunction(
  { id: "demo-get-current-user" },
  { event: "test/demo.get-current-user" },
  async ({ event, step }) => {
    await step.run("fetching current user", async () => {
      const user = await db.user.findUnique({
        where: {
          id: event.data.id,
        },
      });
      return user;
    });
  }
);
