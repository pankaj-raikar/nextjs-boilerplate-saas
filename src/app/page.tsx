import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./Client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUser.queryOptions());
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HydrationBoundary state={dehydrate(getQueryClient())}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
