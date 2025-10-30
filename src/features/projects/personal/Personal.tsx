import { Card, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import './Personal.scss';

const { Title, Text } = Typography;

export function Personal() {
  const { isDarkMode } = useTheme();

  return (
    <div className="personal-container">
      {/* Header using templates */}
      <Card className="personal-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <UserOutlined className="title-icon" />
              Personal
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
