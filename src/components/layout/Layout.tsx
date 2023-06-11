import { LayoutProps } from "@src/interfaces/layout.interface";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="grid md:grid-cols-9">
        <Navbar />
        <main className="md:col-span-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
