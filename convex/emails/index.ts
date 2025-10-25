"use node";
import { internalAction } from "../_generated/server";
import { components } from "../_generated/api";
import { Resend } from "@convex-dev/resend";
import { v } from "convex/values";
import { pretty, render } from "@react-email/components";

import { WelcomeEmail } from "./components";

export const resend: Resend = new Resend(components.resend, {
  testMode: false,
});

export const sendWelcomeEmail = internalAction({
  args: {
    to: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { to, name }) => {
    const html = await pretty(await render(WelcomeEmail({ name, email: to })));
    
    const emailId = await resend.sendEmail(ctx, {
      from: "Andrei <andrei@restilizat.ro>",
      to,
      subject: `Welcome ${name}! Test Email from Your Dashboard`,
      html,
    });

    return emailId;
  },
});
