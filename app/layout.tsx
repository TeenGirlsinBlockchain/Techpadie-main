import { ReactNode } from "react";
import Navigation from "./components/Navigation";

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <html lang="en">
    <body>
      <Navigation />
      <main>
        {children}
      </main>
    </body>
  </html>
}