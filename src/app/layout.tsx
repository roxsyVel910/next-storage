import { Inter } from "next/font/google";
import { Footer } from "./components/Shared/Footer";
import { Header } from "./components/Shared/Header";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     
      <body className={inter.className}> 
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
