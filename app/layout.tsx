import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/comps/Navbar/Navbar";
import Footer from "@/components/comps/Footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "Rsala.co",
    template: "%s | Rsala.co",
  },
  description: "Rsala home",

  generator: "hasub.net",
  applicationName: "Rsala.co",
  referrer: "origin-when-cross-origin",
  keywords: [
    "صراحة",
    "resala",
    "ask",
    "اسألني",
    "تحدث معي",
    "رساله",
    "رسالة",
    "صراحة",
    "مجهول",
    "اسأل",
    "مصر",
    "مواقع سوشيال ميديا",
    "أسألني",
    "المملكة العربية السعودية",
    "تواصل",
    "medium",
    "twassul",
    "برامج",
    "تواصل معي",
    "افاتار",
    "Avatar",
    "profile",
    "rsala.co",
    "rsala",
    "أسئلة",
    "JavaScript",
    "JavaScript",
    "JavaScript",
  ],
  authors: [
    { name: "mu7ammad" },
    { name: "Josh", url: "https://rsala.co/mu7ammad" },
  ],
  creator: "muhammad osama | hasub.net",
  publisher: "hasub.net/rsala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://rsala.co"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/ar-EG",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Rsala.co",
    description:
      "رساله يساعدك في الحصول على نقد بناء مع المحافظة على سرية هوية الناقد - ارسل رسالة بشكل مجهول",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Hasub.net", "Rsala.co"],

    url: "https://rsala.co",
    siteName: "RSALA",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "ar_EG",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "rsala.co",
    description:
      "رساله يساعدك في الحصول على نقد بناء مع المحافظة على سرية هوية الناقد - ارسل رسالة بشكل مجهول",
    siteId: "1467726470533754880",
    creator: "@rsala",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

const font = Rubik({
  subsets: ["arabic"],
  weight: ["500"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="apple-mobile-web-app-title" content="Rsala" />
        <meta name="application-name" content="Rsala" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <html lang="ar">
        <body className={font.className}>
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
