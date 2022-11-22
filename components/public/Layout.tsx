import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import MenuBottom from "./MenuBottom";

type props = {
  children: React.ReactNode;
};
const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      {children}

      <MenuBottom />
      <Drawer/>
    </div>
  );
};

export default Layout;
