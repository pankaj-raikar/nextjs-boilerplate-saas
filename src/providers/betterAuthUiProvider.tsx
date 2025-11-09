"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { authClient } from "@/lib/auth-client";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthUIProvider
        authClient={authClient}
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          // Clear router cache (protected routes)
          router.refresh();
        }}
        Link={Link}
        social={{
          providers: ["github", "google"],
        }}
        magicLink
        // API Keys Configuration
        apiKey={{
          prefix: "app_",
          metadata: {
            environment: "production",
            version: "v1",
          },
        }}
        emailVerification={true}
        // Sign up configuration with additional fields
        signUp={{
          fields: [],
        }}
        // Localization
        localization={{
          SIGN_IN: "Log in",
          SIGN_IN_DESCRIPTION: "Use your email and password to log in.",
          SIGN_UP: "Create Account",
          FORGOT_PASSWORD: "Reset Password",
          EMAIL_PLACEHOLDER: "your-email@example.com",
          PASSWORD_PLACEHOLDER: "Secret password",
          MAGIC_LINK_EMAIL: "Check your inbox for your login link!",
          FORGOT_PASSWORD_EMAIL:
            "Check your inbox for the password reset link.",
          RESET_PASSWORD_SUCCESS: "You can now sign in with your new password!",
          CHANGE_PASSWORD_SUCCESS:
            "Your password has been successfully updated.",
          DELETE_ACCOUNT_SUCCESS: "Your account has been permanently deleted.",
        }}
      >
        {children}
      </AuthUIProvider>
    </ThemeProvider>
  );
}
