import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
      </head>
      <body className="min-h-screen bg-[#1a1d1c] ">
        <div className="w-full text-center text-white">{children}</div>
      </body>
    </html>
  );
}
