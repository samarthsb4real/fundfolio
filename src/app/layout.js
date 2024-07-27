import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FundFolio",
  description: "AI-Powered Expense Manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey="pk_test_aW50ZXJuYWwtbW9zcXVpdG8tMS5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
