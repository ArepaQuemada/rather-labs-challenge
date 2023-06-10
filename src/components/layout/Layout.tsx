import { LayoutProps } from "@src/interfaces/layout.interface";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
