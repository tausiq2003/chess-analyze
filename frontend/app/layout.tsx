import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Analyze your chess game",
    description:
        "This is a website where you can analyze your chess game for free.",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
