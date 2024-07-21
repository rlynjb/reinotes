import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Aid app",
  description: "Built with Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="container mx-auto mt-12">
        {children}
      </body>
    </html>
  );
}
