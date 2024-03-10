import React from "react";
import { Menu } from "antd";

type MenuMode = 'horizontal' | 'vertical' | 'inline';

const LeftMenu = ({ mode }:{mode:MenuMode}) => {
  return (
    <Menu className="w-full flex justify-center" mode={mode}>
      <Menu.Item key="explore"><a href="/explore">Explore</a></Menu.Item>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;