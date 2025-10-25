import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const sendWelcomeEmailAction = action({
  args: {
    to: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { to, name }): Promise<string> => {
    return await ctx.runAction(internal.emails.index.sendWelcomeEmail, {
      to,
      name,
    });
  },
});
