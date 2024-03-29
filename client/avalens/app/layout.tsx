'use client'

import type { Metadata } from "next";
{/* import React, { useEffect, useState } from 'react'; */}
import { Inter } from "next/font/google";
import "./globals.css";
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
