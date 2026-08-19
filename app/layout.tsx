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
    "SuperRide Partner helps taxi, bike, auto, cab, parcel delivery, hotel and homestay partners connect with customers and grow their business.",

  keywords: [
    "SuperRide Partner",
    "SuperRidePartner",
    "Super Ride Partner",
    "SuperRide",
    "taxi partner",
    "bike taxi partner",
    "auto driver partner",
    "cab driver partner",
    "parcel delivery partner",
    "hotel partner",
    "homestay partner",
  ],

  applicationName: "SuperRide Partner",

  authors: [
    {
      name: "SuperRide Partner",
    },
  ],

  creator: "SuperRide Partner",

  publisher: "SuperRide Partner",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://superridepartner.vercel.app/",
    siteName: "SuperRide Partner",
    title: "SuperRide Partner | Taxi, Parcel & Hotel Partners",
    description:
      "Join SuperRide Partner for taxi rides, parcel delivery, parcel services and hotel partnerships.",
  },

  twitter: {
    card: "summary_large_image",
    title: "SuperRide Partner | Taxi, Parcel & Hotel Partners",
    description:
      "Join SuperRide Partner for taxi, parcel delivery and hotel partnership services.",
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