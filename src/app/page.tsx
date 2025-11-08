import { caller, getQueryClient, trpc } from "@/trpc/server";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
  AuthLoading,
} from "@daveyplate/better-auth-ui";
export default async function Page() {
  // const queryClient = getQueryClient();

  // void queryClient.prefetchQuery(trpc.getUser.queryOptions());
  await requireAuth();
  // const { data } = authClient.useSession();

  const data = await caller.getUser();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4">
        <AuthLoading>
          <div className="text-center">Loading...</div>
        </AuthLoading>

        <SignedIn>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
            <UserButton />
            <p className="mt-4">
              Protected content: {JSON.stringify(data, null, 2)}
            </p>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to Better Auth UI Demo
            </h1>
            <p className="mb-4">You need to sign in to access this page.</p>
            <RedirectToSignIn />
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
