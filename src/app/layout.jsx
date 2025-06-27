import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Suzi | Social Media Manager",
  description:
    "Helping brands shine online ✨ Let's build your social media presence.",
  verification: {
    google: "JbyLxuRyUU8tBfqCCJFjOF49591ZdlqXKz9l5ky8Bhk",
  },
  openGraph: {
    title: "Suzi | Social Media Manager",
    description: "Helping brands shine online ✨",
    images: [
      {
        url: "/suzi-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Suzi Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzi | Social Media Manager",
    description: "Helping brands shine online ✨",
    images: ["/suzi-preview.jpg"],
  },
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
