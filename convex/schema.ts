import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    completed: v.boolean(),
  }),
  emails: defineTable({
    to: v.string(),
    name: v.string(),
    subject: v.string(),
    sentAt: v.number(),
    status: v.string(), // "sent", "delivered", "bounced", "failed"
  }).index("by_sentAt", ["sentAt"]),
});

