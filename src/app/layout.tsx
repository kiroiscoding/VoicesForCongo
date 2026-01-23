import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AudioProvider } from "@/context/AudioContext";
import { MiniPlayer } from "@/components/MiniPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voices for Congo | Abigail McKoy",
  description: "Global Scholar Capstone Project exploring the intersection of resource exploitation, colonial history, and human rights in the DRC.",
  icons: {
    icon: "/images/voicesForCongoFavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioProvider>
          <Navbar />
          {children}
          <MiniPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
