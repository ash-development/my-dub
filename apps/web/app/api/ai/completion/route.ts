import { anthropic } from "@/lib/anthropic";
import { DubApiError, handleAndReturnErrorResponse } from "@/lib/api/errors";
import { withWorkspaceEdge } from "@/lib/auth/workspace-edge";
import { prismaEdge } from "@/lib/prisma/edge";
import z from "@/lib/zod";
import { waitUntil } from "@vercel/functions";
import { AnthropicStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const completionSchema = z.object({
  prompt: z.string(),
  model: z
    .enum(["claude-3-haiku-20240307", "claude-3-sonnet-20240229"])
    .optional()
    .default("claude-3-sonnet-20240229"),
});

// POST /api/ai/completion – Generate AI completion
export const POST = withWorkspaceEdge(
  async ({ req, workspace }) => {
    return
  },
  { needNotExceededAI: true },
);
