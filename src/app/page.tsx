"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [value, setValue] = useState("");
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
      <Input
        className="mb-4"
        placeholder="write something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        disabled={invokeMutation.isPending}
        onClick={() => invokeMutation.mutate({ value })}
      >
        Invoke Background job
      </Button>
    </div>
  );
}
