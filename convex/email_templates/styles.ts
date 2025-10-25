// Email template styles as CSS strings matching the app's design system
// Based on colors and fonts from globals.css

export const emailStyles = {
  body: "background-color: #f8fafc; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0;",

  container: "background-color: #ffffff; border-radius: 12px; margin: 40px auto; max-width: 600px; padding: 0; box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);",

  header: "background-color: #f8fafc; border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;",

  heading: "color: #0f172a; font-size: 28px; font-weight: 600; line-height: 1.2; margin: 0; font-family: 'DM Sans', sans-serif;",

  content: "padding: 32px 24px;",

  text: "color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-family: 'DM Sans', sans-serif;",

  buttonSection: "padding: 0 24px 32px 24px; text-align: center;",

  button: "background-color: #0f172a; border-radius: 8px; color: #ffffff; display: inline-block; font-size: 16px; font-weight: 500; line-height: 1; padding: 12px 24px; text-decoration: none; font-family: 'DM Sans', sans-serif;",

  hr: "border: none; border-top: 1px solid #e2e8f0; margin: 0;",

  footer: "padding: 24px; text-align: center;",

  footerText: "color: #64748b; font-size: 14px; line-height: 1.5; margin: 0 0 8px 0; font-family: 'DM Sans', sans-serif;",

  // Dark mode styles (for future use)
  dark: {
    body: "background-color: #0f172a; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0;",
    container: "background-color: #1e293b; border-radius: 12px; margin: 40px auto; max-width: 600px; padding: 0; box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3);",
    header: "background-color: #334155; border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;",
    heading: "color: #f1f5f9; font-size: 28px; font-weight: 600; line-height: 1.2; margin: 0; font-family: 'DM Sans', sans-serif;",
    text: "color: #cbd5e1; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-family: 'DM Sans', sans-serif;",
    button: "background-color: #f1f5f9; border-radius: 8px; color: #0f172a; display: inline-block; font-size: 16px; font-weight: 500; line-height: 1; padding: 12px 24px; text-decoration: none; font-family: 'DM Sans', sans-serif;",
    hr: "border: none; border-top: 1px solid #475569; margin: 0;",
    footerText: "color: #94a3b8; font-size: 14px; line-height: 1.5; margin: 0 0 8px 0; font-family: 'DM Sans', sans-serif;",
  },
};
