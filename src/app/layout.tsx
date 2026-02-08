import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Replace the standard ClerkProvider import with your custom provider
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider"; 
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Talkncode",
  description: "Online video and coding interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Use your custom provider here instead of <ClerkProvider>
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
            <div className="min-h-screen">
              <Navbar />
              <main className="px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ThemeProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}