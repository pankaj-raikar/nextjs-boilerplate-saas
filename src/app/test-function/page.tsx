"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";

const page = () => {
  const trpc = useTRPC();
  const testai = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess(data) {
        toast.success("Test AI action completed successfully");
      },
      onError(error) {
        toast.error("Failed to execute test AI action");
      },
    })
  );
  return (
    <div>
      Test Function
      <div>
        <Button disabled={testai.isPending} onClick={() => testai.mutate()}>
          Test Ai
        </Button>
      </div>
    </div>
  );
};

export default page;
