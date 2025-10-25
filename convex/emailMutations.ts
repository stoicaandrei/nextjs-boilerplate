import { internalMutation } from "./_generated/server";
import { components, internal } from "./_generated/api";
import { Resend } from "@convex-dev/resend";
import { v } from "convex/values";

// Generate HTML email template directly
function generateWelcomeEmailHTML({ name, email }: { name: string; email: string }): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Your Dashboard!</title>
</head>
<body style="background-color: #f8fafc; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0;">
  <div style="background-color: #ffffff; border-radius: 12px; margin: 40px auto; max-width: 600px; padding: 0; box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background-color: #f8fafc; border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;">
      <h1 style="color: #0f172a; font-size: 28px; font-weight: 600; line-height: 1.2; margin: 0; font-family: 'DM Sans', sans-serif;">
        Welcome to Your Dashboard!
      </h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 32px 24px;">
      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-family: 'DM Sans', sans-serif;">
        Hi ${name},
      </p>
      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-family: 'DM Sans', sans-serif;">
        Thank you for testing our email service! This is a demo email sent from your Next.js boilerplate with Convex and Resend integration.
      </p>
      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-family: 'DM Sans', sans-serif;">
        Your email (${email}) has been successfully configured and you're now ready to send transactional emails to your users.
      </p>
    </div>

    <!-- Button -->
    <div style="padding: 0 24px 32px 24px; text-align: center;">
      <a href="https://convex.dev" style="background-color: #0f172a; border-radius: 8px; color: #ffffff; display: inline-block; font-size: 16px; font-weight: 500; line-height: 1; padding: 12px 24px; text-decoration: none; font-family: 'DM Sans', sans-serif;">
        Explore Convex
      </a>
    </div>

    <!-- Footer -->
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 0;">
    <div style="padding: 24px; text-align: center;">
      <p style="color: #64748b; font-size: 14px; line-height: 1.5; margin: 0 0 8px 0; font-family: 'DM Sans', sans-serif;">
        This email was sent from your Next.js boilerplate with Resend integration.
      </p>
      <p style="color: #64748b; font-size: 14px; line-height: 1.5; margin: 0 0 8px 0; font-family: 'DM Sans', sans-serif;">
        Built with ❤️ using Convex, Next.js, and Resend
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

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
    // Generate HTML template directly (without React Email render)
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
