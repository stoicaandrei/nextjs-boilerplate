// Email template styles using react-email style objects
// Based on colors and fonts from globals.css

export const emailStyles = {
  body: {
    backgroundColor: "#f8fafc",
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    margin: 0,
    padding: 0,
  },

  container: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    margin: "40px auto",
    maxWidth: "600px",
    padding: 0,
    boxShadow: "0 1px 3px 0px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  },

  header: {
    backgroundColor: "#f8fafc",
    borderRadius: "12px 12px 0 0",
    padding: "32px 24px",
    textAlign: "center" as const,
  },

  heading: {
    color: "#0f172a",
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.2,
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
  },

  content: {
    padding: "32px 24px",
  },

  text: {
    color: "#334155",
    fontSize: "16px",
    lineHeight: 1.6,
    margin: "0 0 16px 0",
    fontFamily: "'DM Sans', sans-serif",
  },

  buttonSection: {
    padding: "0 24px 32px 24px",
    textAlign: "center" as const,
  },

  button: {
    backgroundColor: "#0f172a",
    borderRadius: "8px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1,
    padding: "12px 24px",
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif",
  },

  hr: {
    border: "none",
    borderTop: "1px solid #e2e8f0",
    margin: 0,
  },

  footer: {
    padding: "24px",
    textAlign: "center" as const,
  },

  footerText: {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: 1.5,
    margin: "0 0 8px 0",
    fontFamily: "'DM Sans', sans-serif",
  },

  // Dark mode styles (for future use)
  dark: {
    body: {
      backgroundColor: "#0f172a",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      margin: 0,
      padding: 0,
    },
    container: {
      backgroundColor: "#1e293b",
      borderRadius: "12px",
      margin: "40px auto",
      maxWidth: "600px",
      padding: 0,
      boxShadow: "0 1px 3px 0px rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)",
    },
    header: {
      backgroundColor: "#334155",
      borderRadius: "12px 12px 0 0",
      padding: "32px 24px",
      textAlign: "center" as const,
    },
    heading: {
      color: "#f1f5f9",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.2,
      margin: 0,
      fontFamily: "'DM Sans', sans-serif",
    },
    text: {
      color: "#cbd5e1",
      fontSize: "16px",
      lineHeight: 1.6,
      margin: "0 0 16px 0",
      fontFamily: "'DM Sans', sans-serif",
    },
    button: {
      backgroundColor: "#f1f5f9",
      borderRadius: "8px",
      color: "#0f172a",
      display: "inline-block",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "12px 24px",
      textDecoration: "none",
      fontFamily: "'DM Sans', sans-serif",
    },
    hr: {
      border: "none",
      borderTop: "1px solid #475569",
      margin: 0,
    },
    footerText: {
      color: "#94a3b8",
      fontSize: "14px",
      lineHeight: 1.5,
      margin: "0 0 8px 0",
      fontFamily: "'DM Sans', sans-serif",
    },
  },
};
