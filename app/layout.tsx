import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superridepartner.vercel.app"),

  title: {
    default: "Super Ride Partner | Become a Ride Partner",
    template: "%s | Super Ride Partner",
  },

  description:
    "Super Ride Partner helps Bike, Auto and Cab drivers find rides, earn more and manage their driving work with flexible hours.",

  keywords: [
    "Super Ride Partner",
    "SuperRide Partner",
    "ride partner",
    "bike taxi driver",
    "auto driver",
    "cab driver",
    "driver partner",
    "ride booking driver",
    "Super RideX",
  ],

  applicationName: "Super Ride Partner",

  authors: [
    {
      name: "Super Ride Partner",
    },
  ],

  creator: "Super Ride Partner",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://superridepartner.vercel.app",
    siteName: "Super Ride Partner",
    title: "Super Ride Partner | Become a Ride Partner",
    description:
      "Join Super Ride Partner and get ride opportunities for Bike, Auto and Cab services.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Super Ride Partner | Become a Ride Partner",
    description:
      "Join Super Ride Partner and start accepting rides with flexible working options.",
  },

  alternates: {
    canonical: "https://superridepartner.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}