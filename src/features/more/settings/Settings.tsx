import { Card, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Settings.scss';

const { Title, Text } = Typography;

export function Settings() {
  const { isDarkMode } = useTheme();

  return (
    <div className="settings-container">
      {/* Header using templates */}
      <Card className="settings-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <SettingOutlined className="title-icon" />
              Settings
            </Title>
            <Text className="header-subtitle">
              Template example using theme system
            </Text>
          </div>
          <div className="header-right">
            <Text className="header-info">
              Current theme: {isDarkMode ? 'Dark' : 'Light'}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
