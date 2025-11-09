import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { Resend } from "resend";
import { EmailTemplate } from "@daveyplate/better-auth-ui/server";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    // requireEmailVerification: true,
  },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const name = user.name || user.email.split("@")[0];
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Verify your email address",
        react: EmailTemplate({
          action: "Verify Email",
          content: (
            <>
              <p>{`Hello ${name},`}</p>
              <p>Click the button below to verify your email address.</p>
            </>
          ),
          heading: "Verify Email",
          siteName: "NEXTJS BOILERPLATE",
          baseUrl: "https://nextjs-boilerplate.dev",
          url,
        }),
      });
      if (error) {
        console.log(error);
      }
      console.log(data);
    },
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
  },
});
