import { requireAuth } from "@/lib/auth-utils";

const page = async () => {
  await requireAuth();

  return <div>dashboard</div>;
};

export default page;
