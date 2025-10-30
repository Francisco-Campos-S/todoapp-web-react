import { Card, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import '../../../shared/styles/component-templates.scss';
import './Archived.scss';

const { Title, Text } = Typography;

export function Archived() {
  const { isDarkMode } = useTheme();

  return (
    <div className="archived-container">
      {/* Header using templates */}
      <Card className="archived-header">
        <div className="header-content">
          <div className="header-left">
            <Title level={2} className="header-title">
              <InboxOutlined className="title-icon" />
              Archived
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
