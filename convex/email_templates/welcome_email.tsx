import { emailStyles } from "./styles";

interface WelcomeEmailProps {
  name: string;
  email: string;
}

/**
 * Generate HTML email template for welcome email
 */
export function generateWelcomeEmailHTML({ name, email }: WelcomeEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Your Dashboard!</title>
</head>
<body style="${emailStyles.body}">
  <div style="${emailStyles.container}">
    
    <!-- Header -->
    <div style="${emailStyles.header}">
      <h1 style="${emailStyles.heading}">
        Welcome to Your Dashboard!
      </h1>
    </div>
    
    <!-- Content -->
    <div style="${emailStyles.content}">
      <p style="${emailStyles.text}">
        Hi ${name},
      </p>
      <p style="${emailStyles.text}">
        Thank you for testing our email service! This is a demo email sent from your Next.js boilerplate with Convex and Resend integration.
      </p>
      <p style="${emailStyles.text}">
        Your email (${email}) has been successfully configured and you're now ready to send transactional emails to your users.
      </p>
    </div>

    <!-- Button -->
    <div style="${emailStyles.buttonSection}">
      <a href="https://convex.dev" style="${emailStyles.button}">
        Explore Convex
      </a>
    </div>

    <!-- Footer -->
    <hr style="${emailStyles.hr}">
    <div style="${emailStyles.footer}">
      <p style="${emailStyles.footerText}">
        This email was sent from your Next.js boilerplate with Resend integration.
      </p>
      <p style="${emailStyles.footerText}">
        Built with ❤️ using Convex, Next.js, and Resend
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
