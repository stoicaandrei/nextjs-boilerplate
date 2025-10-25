import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { emailStyles } from "./styles";
import { USER_NAME, USER_EMAIL } from "./defaults";

export interface WelcomeEmailProps {
  name: string;
  email: string;
}

export default function WelcomeEmail({ name = USER_NAME, email = USER_EMAIL }: WelcomeEmailProps) {
  return (
    <Html>
      <Head>
        <title>Welcome to Your Dashboard!</title>
      </Head>
      <Preview>Welcome to your Next.js boilerplate with Convex and Resend integration!</Preview>
      <Body style={emailStyles.body}>
        <Container style={emailStyles.container}>
          
          {/* Header */}
          <Section style={emailStyles.header}>
            <Heading style={emailStyles.heading}>
              Welcome to Your Dashboard!
            </Heading>
          </Section>
          
          {/* Content */}
          <Section style={emailStyles.content}>
            <Text style={emailStyles.text}>
              Hi {name},
            </Text>
            <Text style={emailStyles.text}>
              Thank you for testing our email service! This is a demo email sent from your Next.js boilerplate with Convex and Resend integration.
            </Text>
            <Text style={emailStyles.text}>
              Your email ({email}) has been successfully configured and you're now ready to send transactional emails to your users.
            </Text>
          </Section>

          {/* Button */}
          <Section style={emailStyles.buttonSection}>
            <Button href="https://convex.dev" style={emailStyles.button}>
              Explore Convex
            </Button>
          </Section>

          {/* Footer */}
          <Hr style={emailStyles.hr} />
          <Section style={emailStyles.footer}>
            <Text style={emailStyles.footerText}>
              This email was sent from your Next.js boilerplate with Resend integration.
            </Text>
            <Text style={emailStyles.footerText}>
              Built with ❤️ using Convex, Next.js, and Resend
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
