'use client'

import type { Metadata } from "next";
import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Provider } from '../providers/web3provider';
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "AvaLens",
  description: "On-chain camera sharing and voting app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);
  return (
    <html lang="en">
      {isClient ? (
        <Web3Provider>
          <body className={inter.className}>{children}</body>
        </Web3Provider>
      ) : (
        <body className={inter.className}>{children}</body>
      )}
    </html>
  );
}
