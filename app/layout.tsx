import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/app/page";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AZ Fashion Hub",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </head>
      <body className={inter.className + ' overflow-hidden'}>
        <App>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </App>
      </body>
    </html>
  );
}
