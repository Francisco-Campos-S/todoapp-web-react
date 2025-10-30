import { Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Completed.scss';

const { Title, Text } = Typography;

export function Completed() {
  const { isDarkMode } = useTheme();

  return (
    <div className="completed-container">
      {/* Header using templates */}
      <Card className="completed-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <CheckCircleOutlined className="title-icon" />
              Completed
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
