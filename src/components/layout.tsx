import { FC, ReactElement } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
    children: ReactElement;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    );
};

export default Layout;