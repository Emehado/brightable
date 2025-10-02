"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();

  const invokeMutation = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background Job started Successfully!");
      },
    })
  );

  return (
    <div className="mx-auto container py-24">
      <Button
        disabled={invokeMutation.isPending}
        onClick={() => invokeMutation.mutate({ text: "Bright" })}
      >
        Invoke Background job
      </Button>
    </div>
  );
}
