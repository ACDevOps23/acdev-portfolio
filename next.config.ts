import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' data: https:;
  font-src 'self' data: https:;
  connect-src 'self' https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        // Prevent MIME sniffing
        { key: "X-Content-Type-Options", value: "nosniff" },

        // Clickjacking protection
        { key: "X-Frame-Options", value: "DENY" },

        // Force HTTPS (only use if HTTPS is fully enforced)
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },

        // Referrer control
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },

        // Modern cross-origin protections
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        {
          key: "Cross-Origin-Resource-Policy",
          value: "same-origin",
        },

        // Disable dangerous browser features
        {
          key: "Permissions-Policy",
          value: "geolocation=(), microphone=(), camera=()",
        },

        // CSP (compressed to single line) - allows React/Next.js inline scripts
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy.replace(/\n/g, ""),
        },
      ],
    },
  ],
};

export default nextConfig;
