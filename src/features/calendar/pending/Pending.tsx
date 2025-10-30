import { Card, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Pending.scss';

const { Title, Text } = Typography;

export function Pending() {
  const { isDarkMode } = useTheme();

  return (
    <div className="pending-container">
      {/* Header using templates */}
      <Card className="pending-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <ClockCircleOutlined className="title-icon" />
              Pending
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
