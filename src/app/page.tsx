import Image from "next/image";

import db from "@/lib/db";

export default async function Home() {
  const users = await db.user.findMany();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
