import { query } from "./_generated/server";

// Query to get recent sent emails
export const getRecentEmails = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("emails")
      .withIndex("by_sentAt")
      .order("desc")
      .take(10);
  },
});
