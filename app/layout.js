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

export const metadata = {
  title: "Big Walks | Professional Dog Walking in Huddersfield",
  description: "Dependable dog walking services by Jacob May in the West Yorkshire area. Book a big walk today!",
  keywords: "dog walking, dog walker, Huddersfield, West Yorkshire, pet care, dog care, individual, group",
  author: "Jacob May",
  openGraph: {
    title: "Big Walks | Professional Dog Walking in Huddersfield",
    description: "Dependable dog walking services by Jacob May in Huddersfield, West Yorkshire.",
    url: "https://bigwalks.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
