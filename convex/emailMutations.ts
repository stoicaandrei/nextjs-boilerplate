import { internalMutation } from "./_generated/server";
import { components, internal } from "./_generated/api";
import { Resend } from "@convex-dev/resend";
import { v } from "convex/values";
import { generateWelcomeEmailHTML } from "./email_templates/welcome_email";

// Initialize Resend component
export const resend: Resend = new Resend(components.resend, {
  testMode: false, // Set to true for development with test emails
});

// Send test email mutation
export const sendTestEmail = internalMutation({
  args: {
    to: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { to, name }) => {
    // Generate HTML template using the new welcome email template
    const html = generateWelcomeEmailHTML({ name, email: to });
    
    // Send email using Resend component
    const emailId = await resend.sendEmail(ctx, {
      from: "Andrei <andrei@restilizat.ro>", // Replace with your domain
      to,
      subject: `Welcome ${name}! Test Email from Your Dashboard`,
      html,
    });

    // Store email record in database
    await ctx.db.insert("emails", {
      to,
      name,
      subject: `Welcome ${name}! Test Email from Your Dashboard`,
      sentAt: Date.now(),
      status: "sent",
    });

    return emailId;
  },
});
