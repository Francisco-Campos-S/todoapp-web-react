import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React from "react";
import type { MenuProps } from "antd";

type UserMenuItemInfo = {
  label: string;
  icon?: React.ComponentType<any>;
  key: string;
  danger?: boolean;
};

export const userMenuItemsData: UserMenuItemInfo[] = [
  {
    key: "profile",
    label: "My Profile",
    icon: UserOutlined,
  },
  {
    key: "settings",
    label: "Settings",
    icon: SettingOutlined,
  },
  {
    key: "logout",
    label: "Logout",
    icon: LogoutOutlined,
    danger: true,
  },
];

export const generateUserMenuItems = (): MenuProps["items"] => {
  const menuItems: MenuProps["items"] = [];
  
  userMenuItemsData.forEach((item) => {
    if (item.key === "settings") {
      // Add divider before settings
      menuItems.push({
        type: "divider",
      });
    }
    
    menuItems.push({
      key: item.key,
      label: item.label,
      icon: item.icon ? React.createElement(item.icon) : undefined,
      danger: item.danger,
    });
  });
  
  return menuItems;
};
