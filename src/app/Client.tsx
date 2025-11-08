"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();

  const { data: user } = useSuspenseQuery(trpc.getUser.queryOptions());

  return (
    <div>this is client and their data {JSON.stringify(user, null, 2)}</div>
  );
};
