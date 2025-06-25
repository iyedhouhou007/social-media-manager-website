import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Suzi | Social Media Strategist",
  description:
    "Helping brands shine online with authentic and effective social media strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-pink-100 via-white to-purple-200 dark:from-gray-900 dark:via-neutral-800 dark:to-gray-900 flex flex-col min-h-screen">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
