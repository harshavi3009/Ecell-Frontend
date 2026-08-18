import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecell-rbu.org"),
  title: {
    default: "E-Cell RBU | Entrepreneurship & Innovation",
    template: "%s | E-Cell RBU",
  },
  description:
    "E-Cell RBU is the entrepreneurship cell of Ramdeobaba University, Nagpur. Building founders, funding startups, and driving innovation since 2018.",
  keywords: [
    "E-Cell RBU",
    "Ramdeobaba University",
    "entrepreneurship",
    "startup",
    "incubation",
    "Nagpur",
    "student entrepreneurship",
  ],
  authors: [{ name: "E-Cell RBU" }],
  creator: "E-Cell RBU",
  publisher: "E-Cell RBU",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecell-rbu.org",
    siteName: "E-Cell RBU",
    title: "E-Cell RBU | Entrepreneurship & Innovation",
    description:
      "E-Cell RBU is the entrepreneurship cell of Ramdeobaba University, Nagpur. Building founders, funding startups, and driving innovation since 2018.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Cell RBU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Cell RBU | Entrepreneurship & Innovation",
    description:
      "E-Cell RBU is the entrepreneurship cell of Ramdeobaba University, Nagpur. Building founders, funding startups, and driving innovation since 2018.",
    images: ["/og-image.jpg"],
    creator: "@ecell_rbu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}