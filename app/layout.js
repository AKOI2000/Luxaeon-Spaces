import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./index.css";
import { clashGrotesk, clashDisplay } from "./fonts";
export const metadata = {
  title: "Luxaeon Spaces",
  description: "you want it, We think it, we build it.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${clashGrotesk.variable} ${clashDisplay.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
