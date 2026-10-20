import type { Metadata } from "next";
import { Caveat, Host_Grotesk, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pocket Puddings | Serious nutrition. Squeezably delicious.",
  description:
    "A protein-packed, caffeinated pudding pouch made for people with places to be. Toss it in your bag. Squeeze whenever. Conquer whatever.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${hostGrotesk.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
