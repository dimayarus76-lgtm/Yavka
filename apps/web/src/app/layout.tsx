import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Явка — Ярославль",
  description: "Собирайся с людьми рядом прямо сейчас",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
