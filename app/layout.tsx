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
    default: "SuperRide Partner | Taxi, Parcel & Hotel Partners",
    template: "%s | SuperRide Partner",
  },

  description:
    "Join SuperRide Partner for taxi rides, parcel delivery and hotel services. Connect with customers, manage bookings and grow your local business.",

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

  applicationName: "SuperRide Partner",

  authors: [
    {
      name: "SuperRide Partner",
    },
  ],

  creator: "SuperRide Partner",

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
    siteName: "SuperRide Partner",
    title: "SuperRide Partner | Taxi, Parcel & Hotel Partners",
    description:
      "Join SuperRide Partner for taxi rides, parcel delivery and hotel services. Connect with customers and grow your local business.",
  },

  twitter: {
    card: "summary_large_image",
    title: "SuperRide Partner | Taxi, Parcel & Hotel Partners",
    description:
      "Join SuperRide Partner for taxi rides, parcel delivery and hotel services.",
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