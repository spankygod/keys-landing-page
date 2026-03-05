import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEYS — One Identity for a Modern City",
  description: "KEYS is a unified KYC layer businesses use to verify customers once and reuse identity everywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
