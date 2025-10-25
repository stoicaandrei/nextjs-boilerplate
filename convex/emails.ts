// IMPORTANT: this is a Convex Node Action
"use node";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";


// Action to send email from client
export const sendEmailAction = action({
  args: {
    to: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { to, name }): Promise<string> => {
    return await ctx.runMutation(internal.emailMutations.sendTestEmail, {
      to,
      name,
    });
  },
});
