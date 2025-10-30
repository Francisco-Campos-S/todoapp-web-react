import { Layout, Badge, Avatar, Dropdown, Button } from "antd";
import { UserOutlined, DownOutlined, BellOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { generateUserMenuItems } from "./userMenuData";
import { generateNotificationItems } from "./notificationData";
import { useTheme } from "../../../../contexts/ThemeContext";
import "../styles/Header.scss";

const { Header } = Layout;

export function AppHeader() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Header className="header">
      <div className="header-greeting">Hello! Genesis</div>
      <div className="header-actions">
        <Button
          type="text"
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
          className="theme-toggle"
        />
        <Dropdown 
          menu={{ items: generateNotificationItems() }} 
          placement="bottomRight"
          trigger={['click']}
        >
          <Badge count={3} size="small">
            <BellOutlined className="notification-bell" />
          </Badge>
        </Dropdown>
        <Dropdown menu={{ items: generateUserMenuItems() }} placement="bottomRight">
          <div className="user-avatar-container">
            <Avatar size="large" icon={<UserOutlined />} />
            <DownOutlined className="dropdown-arrow" />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}
