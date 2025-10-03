import { inngest } from "./client";
import { createAgent, grok, openai } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("analyzing request", "2s");

    const summarizer = createAgent({
      name: "summarizer",
      system:
        "You are a senior Nextjs developer, who writes elegant, simple and well maintainable code. You have expertise in ReactJs and its ecosystem and have a good eye for design and user experience.",
      model: grok({ model: "grok-code-fast-1" }),
    });

    const { output } = await summarizer.run(`${event.data.value}`);
    return { output };
  }
);
