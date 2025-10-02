import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("upload all documents", "10s");
    await step.sleep("Translate documents to user language", "25s");
    await step.sleep("Extract Product information", "10s");
    await step.sleep("Extract BOM information", "10s");
    await step.sleep("Extract size specs", "10s");
    await step.sleep("Extract product images", "20s");
    await step.sleep(
      "Group extracted images into Tech Diagram & Style Sketch",
      "5s"
    );
    return { message: `Hello ${event.data.email}!` };
  }
);
