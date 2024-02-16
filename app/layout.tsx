import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/comps/Navbar/Navbar";
import Footer from "@/components/comps/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rsala",
  description: "Rsala home",
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="ar">
        <body className={inter.className}>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
