import { caller, getQueryClient, trpc } from "@/trpc/server";
import Client from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Bright Nanevie" })
  );
  // const data = await caller.createAI({ text: "Bright Nanevie" });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Suspense fallback={<p>loading...</p>}>
          <Client />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
