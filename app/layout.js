import { Sora } from "next/font/google";
import "./globals.css";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Notarium",
  description: "Notarium web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${soraSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
