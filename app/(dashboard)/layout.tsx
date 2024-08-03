import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LuxeLoom - Admin Dashboard",
    description: "Admin dashboard to manage LuxeLoom's data",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="flex max-lg:flex-col">
                        <LeftSideBar />
                        <TopBar />
                        <div className="flex-1">{children}</div>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}