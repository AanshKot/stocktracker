"use client"

import React, { useEffect, useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(!visible);
    };
  
    // If you do not want to auto-close the mobile drawer when a path is selected
    // Delete or comment out the code block below
    // From here
    // let location = useLocation();
    // useEffect(() => {
    //   setVisible(false);
    // }, [location]);
    // Upto here
  
    return (
      <nav className="navbar">
        <Layout>
        
           
            <div className="navbar-menu">
              <div className="leftMenu flex justify-center w-full">
                <LeftMenu mode={"horizontal"} />
              </div>
            </div>
         
        </Layout>
      </nav>
    );
  };
  
  export default Navbar;