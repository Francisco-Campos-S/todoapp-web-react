import { Card, Typography } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import './University.scss';

const { Title, Text } = Typography;

export function University() {
  const { isDarkMode } = useTheme();

  return (
    <div className="university-container">
      {/* Header using templates */}
      <Card className="university-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <BookOutlined className="title-icon" />
              University
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
