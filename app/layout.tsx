import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = GeistSans;

export const metadata: Metadata = {
  title: "HomeShare | Connect Hearts, Share Homes",
  description: "Connect with compassionate home providers or offer your space to someone in need. HomeShare brings communities together for mutual support and life-changing opportunities.",
  keywords: "homelessness, housing solutions, community support, shared housing, volunteer, companionship",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${fontSans.className} antialiased min-h-screen bg-background flex flex-col`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}