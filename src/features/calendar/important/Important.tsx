import { Card, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Important.scss';

const { Title, Text } = Typography;

export function Important() {
  const { isDarkMode } = useTheme();

  return (
    <div className="important-container">
      {/* Header using templates */}
      <Card className="important-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <ExclamationCircleOutlined className="title-icon" />
              Important
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
