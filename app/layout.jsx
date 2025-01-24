import { Sora } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const soraSans = Sora({ subsets: ["latin"] });

export const metadata = { title: "Notarium", description: "Notarium web app" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body
          className={`${soraSans.className} antialiased`}
        >
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}