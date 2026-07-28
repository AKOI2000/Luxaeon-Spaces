import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./index.css";
import { clashGrotesk, clashDisplay } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxaeon Spaces",
  description: "you want it, We think it, we build it.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clashGrotesk.variable} ${clashDisplay.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
