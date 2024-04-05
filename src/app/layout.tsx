import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FC } from "react";
import '../styles/global.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({children})  => {

  return (
    <html lang="en">
      <body>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
