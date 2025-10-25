import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Section,
  Heading,
  Hr,
  Link,
} from "@react-email/components";
import { emailStyles } from "./styles";

interface WelcomeEmailProps {
  name: string;
  email: string;
}

export const WelcomeEmail = ({ name, email }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={emailStyles.body}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.header}>
            <Heading style={emailStyles.heading}>Welcome to Your Dashboard!</Heading>
          </Section>
          
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

          <Section style={emailStyles.buttonSection}>
            <Button style={emailStyles.button} href="https://convex.dev">
              Explore Convex
            </Button>
          </Section>

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
};
