import { inngest } from "./client";
import db from "@/lib/db";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

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

export const summarizeContents = inngest.createFunction(
  { id: "summarize-contents" },
  { event: "app/ticket.created" },
  async ({ event, step }) => {
    // This calls `generateText` with the given arguments, adding AI observability,
    // metrics, datasets, and monitoring to your calls.
    const { text } = await step.ai.wrap("using-vercel-ai", generateText, {
      model: google("gemini-2.5-flash-lite"),
      prompt: "What is love?",
    });

    return text;
  }
);
