import type { Metadata } from "next";
import "./globals.css";
import Providers from "./GlobalRedux/provider";

export const metadata: Metadata = {
  title: "PROSCOM",
  description: "Хакатон",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
