import { Card, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Today.scss';

const { Title, Text } = Typography;

export function Today() {
  const { isDarkMode } = useTheme();

  return (
    <div className="today-container">
      {/* Header using templates */}
      <Card className="today-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <CalendarOutlined className="title-icon" />
              Today
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
