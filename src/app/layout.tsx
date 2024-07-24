import type { Metadata } from "next";
import "./globals.css";
import { BreadcrumbsProvider } from "@/utils/breadcrumb";


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
      <body
        suppressHydrationWarning={true}
        className="container mx-auto mt-12"
      >
        <BreadcrumbsProvider>
          {children}
        </BreadcrumbsProvider>
      </body>
    </html>
  );
}
