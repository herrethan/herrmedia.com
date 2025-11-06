import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "herrmedia",
  description: "The developer portfolio of Ethan Herr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

